"""Create a seeded schedule of true daily events for simulated cats."""

import random
from datetime import date, datetime, time, timedelta
from typing import Any

EVENT_COLUMNS = (
    "cat_id",
    "device",
    "start",
    "end",
    "type",
    "amount_g",
    "cat_weight_g",
)

SECONDS_PER_DAY = 24 * 60 * 60


def _iso(timestamp: datetime) -> str:
    return timestamp.isoformat(timespec="seconds")


def _event(
    cat_id: str,
    device: str,
    start: datetime,
    duration_sec: float,
    event_type: str,
    amount_g: float | None = None,
    cat_weight_g: float | None = None,
) -> dict[str, object]:
    return {
        "cat_id": cat_id,
        "device": device,
        "start": _iso(start),
        "end": _iso(start + timedelta(seconds=max(1, round(duration_sec)))),
        "type": event_type,
        "amount_g": "" if amount_g is None else round(amount_g, 3),
        "cat_weight_g": "" if cat_weight_g is None else round(cat_weight_g, 1),
    }


def _event_times(
    rng: random.Random, day_start: datetime, count: int
) -> list[datetime]:
    """Choose one random time in each equal day segment to avoid clustering."""
    segment_sec = SECONDS_PER_DAY / count
    return [
        day_start
        + timedelta(
            seconds=round((index + rng.uniform(0.1, 0.9)) * segment_sec)
        )
        for index in range(count)
    ]


def _split_total(rng: random.Random, total: float, count: int) -> list[float]:
    weights = [rng.uniform(0.5, 1.5) for _ in range(count)]
    weight_sum = sum(weights)
    return [total * weight / weight_sum for weight in weights]


def _make_meal_or_drink_events(
    rows: list[dict[str, Any]], rng: random.Random, result: list[dict[str, object]]
) -> None:
    for row in rows:
        day_start = datetime.combine(date.fromisoformat(str(row["date"])), time())
        cat_id = str(row["cat_id"])
        for device, event_type, total_key in (
            ("food", "eat", "food_g"),
            ("water", "drink", "water_ml"),
        ):
            count = rng.randint(6, 12)
            amounts = _split_total(rng, float(row[total_key]), count)
            for start, amount in zip(_event_times(rng, day_start, count), amounts):
                result.append(
                    _event(
                        cat_id,
                        device,
                        start,
                        rng.randint(10, 60),
                        event_type,
                        amount_g=amount,
                    )
                )


def _make_litter_events(
    rows: list[dict[str, Any]], rng: random.Random, result: list[dict[str, object]]
) -> None:
    for row in rows:
        day_start = datetime.combine(date.fromisoformat(str(row["date"])), time())
        cat_id = str(row["cat_id"])
        visits = int(row["litter_visits"])
        durations = [
            float(row["litter_avg_sec"]) * rng.uniform(0.85, 1.15)
            for _ in range(visits)
        ]
        mean_duration = sum(durations) / len(durations)
        durations = [
            duration * float(row["litter_avg_sec"]) / mean_duration
            for duration in durations
        ]
        outputs = _split_total(rng, float(row["litter_output_g"]), visits)
        weight_g = float(row["weight_kg"]) * 1000
        for start, duration, output in zip(
            _event_times(rng, day_start, visits), durations, outputs
        ):
            result.append(
                _event(
                    cat_id,
                    "litter",
                    start,
                    duration,
                    "litter_visit",
                    amount_g=output,
                    cat_weight_g=weight_g,
                )
            )


def _make_bed_events(
    rows: list[dict[str, Any]], result: list[dict[str, object]]
) -> None:
    for row in rows:
        day = date.fromisoformat(str(row["date"]))
        cat_id = str(row["cat_id"])
        rest_seconds = float(row["rest_min"]) * 60
        weight_g = float(row["weight_kg"]) * 1000

        # Most rest occurs in one overnight session, with the remainder during
        # the day. The overnight session can naturally end on the next date.
        night_start = datetime.combine(day, time(21))
        day_start = datetime.combine(day, time(12))
        for start, duration in (
            (night_start, rest_seconds * 0.7),
            (day_start, rest_seconds * 0.3),
        ):
            result.append(
                _event(
                    cat_id,
                    "bed",
                    start,
                    duration,
                    "bed_session",
                    amount_g=weight_g,
                    cat_weight_g=weight_g,
                )
            )


def _make_bowl_maintenance_events(
    rows: list[dict[str, Any]], rng: random.Random, result: list[dict[str, object]]
) -> None:
    """Schedule periodic refills and occasional spills as known events."""
    by_cat: dict[str, list[dict[str, Any]]] = {}
    for row in rows:
        by_cat.setdefault(str(row["cat_id"]), []).append(row)

    for cat_id, cat_rows in by_cat.items():
        cat_rows.sort(key=lambda row: str(row["date"]))
        for device in ("food", "water"):
            next_refill_day = rng.randint(2, 3)
            for day_number, row in enumerate(cat_rows, start=1):
                day_start = datetime.combine(
                    date.fromisoformat(str(row["date"])), time()
                )
                if day_number == next_refill_day:
                    refill_at = day_start + timedelta(hours=5, minutes=30)
                    result.append(
                        _event(cat_id, device, refill_at, 1, "refill")
                    )
                    next_refill_day += rng.randint(1, 2)

                if rng.random() < 1 / 7:
                    spill_at = day_start + timedelta(
                        seconds=rng.randrange(SECONDS_PER_DAY)
                    )
                    result.append(
                        _event(
                            cat_id,
                            device,
                            spill_at,
                            1,
                            "spill",
                            amount_g=rng.uniform(5, 30),
                        )
                    )


def generate_events(
    daily_rows: list[dict[str, Any]], seed: int
) -> list[dict[str, object]]:
    """Return meals, drinks, litter/bed sessions, refills, and spills.

    Daily totals are apportioned across events, so the sums of eat, drink, and
    litter output events match their corresponding truth_daily values.
    """
    rng = random.Random(seed)
    events: list[dict[str, object]] = []
    _make_meal_or_drink_events(daily_rows, rng, events)
    _make_litter_events(daily_rows, rng, events)
    _make_bed_events(daily_rows, events)
    _make_bowl_maintenance_events(daily_rows, rng, events)
    events.sort(
        key=lambda event: (
            str(event["start"]),
            str(event["cat_id"]),
            str(event["device"]),
        )
    )
    return events
