"""Convert true simulator events into noisy raw scale readings."""

import math
import random
from collections import defaultdict
from dataclasses import dataclass
from datetime import date, datetime, time, timedelta
from typing import Any

READING_COLUMNS = ("cat_id", "device", "timestamp", "grams")
DEVICES = ("food", "water", "litter", "bed")


@dataclass(frozen=True)
class ScaleSettings:
    burst_sample_sec: int = 1
    heartbeat_sec: int = 3600
    noise_g: float = 0.5
    evaporation_g_per_hr: float = 0.4
    food_bowl_full_g: float = 400
    water_bowl_full_g: float = 900
    litter_box_base_g: float = 6000
    bed_base_g: float = 1500
    breath_amp_g: float = 0

    def __post_init__(self) -> None:
        if self.burst_sample_sec <= 0:
            raise ValueError("burst_sample_sec must be greater than zero")
        if self.heartbeat_sec <= 0:
            raise ValueError("heartbeat_sec must be greater than zero")
        if self.noise_g < 0:
            raise ValueError("noise_g cannot be negative")
        if self.evaporation_g_per_hr < 0:
            raise ValueError("evaporation_g_per_hr cannot be negative")
        if self.breath_amp_g < 0:
            raise ValueError("breath_amp_g cannot be negative")


def _parse_timestamp(value: object) -> datetime:
    if isinstance(value, datetime):
        return value
    return datetime.fromisoformat(str(value))


def _format_timestamp(value: datetime) -> str:
    timespec = "milliseconds" if value.microsecond else "seconds"
    return value.isoformat(timespec=timespec)


def _event_duration(event: dict[str, Any]) -> float:
    return max(
        1.0,
        (
            _parse_timestamp(event["end"]) - _parse_timestamp(event["start"])
        ).total_seconds(),
    )


def _add_samples(
    samples: set[datetime], start: datetime, end: datetime, interval_sec: float
) -> None:
    timestamp = start
    while timestamp <= end:
        samples.add(timestamp)
        timestamp += timedelta(seconds=interval_sec)
    samples.add(end)


def _occupancy_factor(timestamp: datetime, start: datetime, end: datetime) -> float:
    """Ramp scale load up/down over three seconds at session boundaries."""
    ramp_sec = 3.0
    elapsed = (timestamp - start).total_seconds()
    remaining = (end - timestamp).total_seconds()
    return max(0.0, min(1.0, elapsed / ramp_sec, remaining / ramp_sec))


def _simulate_device(
    cat_id: str,
    device: str,
    events: list[dict[str, Any]],
    simulation_start: datetime,
    simulation_end: datetime,
    settings: ScaleSettings,
    rng: random.Random,
) -> list[dict[str, object]]:
    device_events = sorted(
        events,
        key=lambda event: (_parse_timestamp(event["start"]), _parse_timestamp(event["end"])),
    )
    device_end = max(
        [simulation_end]
        + [_parse_timestamp(event["end"]) for event in device_events]
    )
    sample_times = {simulation_start}

    timestamp = simulation_start
    while timestamp < device_end:
        sample_times.add(timestamp)
        timestamp += timedelta(seconds=settings.heartbeat_sec)

    breath_windows: list[tuple[datetime, datetime]] = []
    for event in device_events:
        start = _parse_timestamp(event["start"])
        end = _parse_timestamp(event["end"])
        event_type = str(event["type"])

        if event_type in {"eat", "drink", "litter_visit"}:
            _add_samples(sample_times, start, end, settings.burst_sample_sec)
        elif event_type in {"refill", "spill"}:
            _add_samples(sample_times, start, end, settings.burst_sample_sec)
        elif event_type == "bed_session":
            transition_sec = min(3, max(1, int((end - start).total_seconds() // 3)))
            _add_samples(
                sample_times,
                start,
                start + timedelta(seconds=transition_sec),
                settings.burst_sample_sec,
            )
            _add_samples(
                sample_times,
                end - timedelta(seconds=transition_sec),
                end,
                settings.burst_sample_sec,
            )
            if settings.breath_amp_g > 0 and start.hour >= 20:
                breath_end = min(start + timedelta(seconds=60), end)
                _add_samples(sample_times, start + timedelta(seconds=5), breath_end, 0.1)
                breath_windows.append((start + timedelta(seconds=5), breath_end))

    actions: dict[datetime, list[tuple[str, int, dict[str, Any]]]] = defaultdict(list)
    for index, event in enumerate(device_events):
        start = _parse_timestamp(event["start"])
        end = _parse_timestamp(event["end"])
        actions[start].append(("start", index, event))
        actions[end].append(("end", index, event))
        sample_times.add(start)
        sample_times.add(end)

    scoop_times: set[datetime] = set()
    if device == "litter":
        day = simulation_start.date()
        while day <= device_end.date():
            scoop_time = datetime.combine(day, time(4))
            if simulation_start <= scoop_time <= device_end:
                scoop_times.add(scoop_time)
                sample_times.add(scoop_time)
            day += timedelta(days=1)

    active_consumption: dict[int, float] = {}
    active_visits: dict[int, dict[str, Any]] = {}
    active_bed_sessions: dict[int, dict[str, Any]] = {}
    current_weight = {
        "food": settings.food_bowl_full_g,
        "water": settings.water_bowl_full_g,
    }.get(device, 0.0)
    litter_baseline = settings.litter_box_base_g
    previous_timestamp = simulation_start
    rows: list[dict[str, object]] = []

    for timestamp in sorted(sample_times):
        elapsed_sec = (timestamp - previous_timestamp).total_seconds()
        if device in {"food", "water"} and elapsed_sec > 0:
            current_weight -= sum(active_consumption.values()) * elapsed_sec
            if device == "water":
                current_weight -= (
                    settings.evaporation_g_per_hr * elapsed_sec / 3600
                )
            current_weight = max(0.0, current_weight)

        if timestamp in scoop_times:
            litter_baseline = settings.litter_box_base_g

        timestamp_actions = actions.get(timestamp, [])
        for action, index, event in timestamp_actions:
            if action != "end":
                continue
            event_type = str(event["type"])
            if event_type in {"eat", "drink"}:
                active_consumption.pop(index, None)
            elif event_type == "litter_visit":
                litter_baseline += float(event["amount_g"] or 0)
                active_visits.pop(index, None)
            elif event_type == "bed_session":
                active_bed_sessions.pop(index, None)

        for action, index, event in timestamp_actions:
            if action != "start":
                continue
            event_type = str(event["type"])
            if event_type in {"eat", "drink"}:
                active_consumption[index] = (
                    float(event["amount_g"]) / _event_duration(event)
                )
            elif event_type == "refill":
                full_weight = (
                    settings.food_bowl_full_g
                    if device == "food"
                    else settings.water_bowl_full_g
                )
                current_weight = full_weight
            elif event_type == "spill":
                current_weight = max(0.0, current_weight - float(event["amount_g"]))
            elif event_type == "litter_visit":
                active_visits[index] = event
            elif event_type == "bed_session":
                active_bed_sessions[index] = event

        if timestamp >= simulation_start:
            if device in {"food", "water"}:
                grams = current_weight
            elif device == "litter":
                grams = litter_baseline + sum(
                    float(event["cat_weight_g"])
                    * _occupancy_factor(
                        timestamp,
                        _parse_timestamp(event["start"]),
                        _parse_timestamp(event["end"]),
                    )
                    for event in active_visits.values()
                )
            else:
                grams = settings.bed_base_g + sum(
                    float(event["cat_weight_g"])
                    * _occupancy_factor(
                        timestamp,
                        _parse_timestamp(event["start"]),
                        _parse_timestamp(event["end"]),
                    )
                    for event in active_bed_sessions.values()
                )
                for breath_start, breath_end in breath_windows:
                    if breath_start <= timestamp <= breath_end:
                        breath_elapsed = (timestamp - breath_start).total_seconds()
                        grams += settings.breath_amp_g * math.sin(
                            2 * math.pi * (20 / 60) * breath_elapsed
                        )

            measured = grams + rng.uniform(-settings.noise_g, settings.noise_g)
            rows.append(
                {
                    "cat_id": cat_id,
                    "device": device,
                    "timestamp": _format_timestamp(timestamp),
                    "grams": round(max(0.0, measured), 3),
                }
            )

        previous_timestamp = timestamp

    return rows


def generate_readings(
    events: list[dict[str, Any]],
    start_date: date,
    days: int,
    seed: int,
    settings: ScaleSettings | None = None,
) -> list[dict[str, object]]:
    """Generate readings for every cat/device, with activity bursts and heartbeats."""
    if days < 1:
        raise ValueError("days must be at least 1")
    settings = settings or ScaleSettings()
    simulation_start = datetime.combine(start_date, time())
    simulation_end = simulation_start + timedelta(days=days)

    cats = sorted({str(event["cat_id"]) for event in events})
    events_by_cat_device: dict[tuple[str, str], list[dict[str, Any]]] = defaultdict(list)
    event_devices = {
        "eat": {"food"},
        "drink": {"water"},
        "refill": {"food", "water"},
        "spill": {"food", "water"},
        "litter_visit": {"litter"},
        "bed_session": {"bed"},
    }
    for event in events:
        cat_id = str(event["cat_id"])
        device = str(event["device"])
        event_type = str(event["type"])
        if device not in DEVICES:
            raise ValueError(f"Unknown scale device {device!r}")
        allowed_devices = event_devices.get(event_type)
        if allowed_devices is None:
            raise ValueError(f"Unknown simulator event type {event_type!r}")
        if device not in allowed_devices:
            raise ValueError(
                f"Event type {event_type!r} cannot be assigned to {device!r}"
            )
        if _parse_timestamp(event["end"]) < _parse_timestamp(event["start"]):
            raise ValueError(f"Event {event_type!r} ends before it starts")
        events_by_cat_device[(cat_id, device)].append(event)

    rng = random.Random(seed)
    readings = []
    for cat_id in cats:
        for device in DEVICES:
            readings.extend(
                _simulate_device(
                    cat_id,
                    device,
                    events_by_cat_device[(cat_id, device)],
                    simulation_start,
                    simulation_end,
                    settings,
                    rng,
                )
            )
    readings.sort(
        key=lambda reading: (
            str(reading["timestamp"]),
            str(reading["cat_id"]),
            str(reading["device"]),
        )
    )
    return readings
