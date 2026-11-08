"""Run the simulator pipeline and write all generated data files."""

import os
import random
from datetime import date, timedelta
from pathlib import Path
from typing import Any

from dotenv import load_dotenv

from baseline import CAT_BASELINES, CAT_METADATA
from events import EVENT_COLUMNS, generate_events
from output import write_csv, write_json
from scale import READING_COLUMNS, ScaleSettings, generate_readings
from scenarios import SCENARIO_BY_CAT, apply_scenario, scenario_for_cat

SIMULATOR_DIR = Path(__file__).resolve().parent
DAILY_COLUMNS = (
    "cat_id",
    "date",
    "water_ml",
    "food_g",
    "litter_visits",
    "litter_avg_sec",
    "litter_output_g",
    "weight_kg",
    "rest_min",
    "sleep_breaths",
)


def _read_settings() -> tuple[int, int, date, int, Path, ScaleSettings]:
    """Load optional overrides from simulator/.env."""
    load_dotenv(SIMULATOR_DIR / ".env")

    days = int(os.getenv("DAYS", "60"))
    seed = int(os.getenv("SEED", "42"))
    start_date = date.fromisoformat(os.getenv("START_DATE", "2026-09-10"))
    onset_day = int(os.getenv("ONSET_DAY", "40"))
    output_dir = Path(os.getenv("OUTPUT_DIR", "output"))
    if not output_dir.is_absolute():
        output_dir = SIMULATOR_DIR / output_dir

    if days < 1:
        raise ValueError("DAYS must be at least 1")

    scale_settings = ScaleSettings(
        burst_sample_sec=int(os.getenv("BURST_SAMPLE_SEC", "1")),
        heartbeat_sec=int(os.getenv("HEARTBEAT_SEC", "3600")),
        noise_g=float(os.getenv("NOISE_G", "0.5")),
        evaporation_g_per_hr=float(os.getenv("EVAPORATION_G_PER_HR", "0.4")),
        food_bowl_full_g=float(os.getenv("FOOD_BOWL_FULL_G", "400")),
        water_bowl_full_g=float(os.getenv("WATER_BOWL_FULL_G", "900")),
        litter_box_base_g=float(os.getenv("LITTER_BOX_BASE_G", "6000")),
        bed_base_g=float(os.getenv("BED_BASE_G", "1500")),
        breath_amp_g=float(os.getenv("BREATH_AMP_G", "0")),
    )
    return days, seed, start_date, onset_day, output_dir, scale_settings


def _daily_variation(rng: random.Random, values: dict[str, float]) -> dict[str, float]:
    """Add seeded day-to-day variation without changing the saved baselines."""
    varied = dict(values)
    for key, percent in (
        ("water_ml_day", 0.10),
        ("food_g_day", 0.08),
        ("litter_output_g_day", 0.15),
        ("litter_avg_sec", 0.15),
        ("weight_kg", 0.005),
        ("bed_min_day", 0.15),
    ):
        varied[key] *= rng.uniform(1 - percent, 1 + percent)

    varied["litter_visits_day"] = max(
        1, round(varied["litter_visits_day"] + rng.randint(-1, 1))
    )
    return varied


def generate_daily_rows(
    days: int, seed: int, start_date: date, onset_day: int
) -> list[dict[str, Any]]:
    """Create one scenario-adjusted truth row per cat per simulated day."""
    if days < 1:
        raise ValueError("days must be at least 1")
    if set(CAT_BASELINES) != set(SCENARIO_BY_CAT) or set(CAT_BASELINES) != set(
        CAT_METADATA
    ):
        missing_scenarios = sorted(set(CAT_BASELINES) - set(SCENARIO_BY_CAT))
        unknown_cats = sorted(set(SCENARIO_BY_CAT) - set(CAT_BASELINES))
        missing_metadata = sorted(set(CAT_BASELINES) - set(CAT_METADATA))
        unknown_metadata = sorted(set(CAT_METADATA) - set(CAT_BASELINES))
        raise ValueError(
            "Baseline, scenario, and metadata cat IDs must match. "
            f"Missing scenarios: {missing_scenarios}; unknown scenarios: {unknown_cats}; "
            f"missing metadata: {missing_metadata}; unknown metadata: {unknown_metadata}"
        )

    rng = random.Random(seed)
    rows: list[dict[str, Any]] = []
    for day_number in range(1, days + 1):
        current_date = start_date + timedelta(days=day_number - 1)
        for cat_id, baseline in CAT_BASELINES.items():
            daily_values = _daily_variation(rng, baseline)
            adjusted = apply_scenario(
                daily_values,
                scenario_for_cat(cat_id),
                day_number,
                onset_day,
                days,
            )
            rows.append(
                {
                    "cat_id": cat_id,
                    "date": current_date.isoformat(),
                    "water_ml": round(adjusted["water_ml_day"], 2),
                    "food_g": round(adjusted["food_g_day"], 2),
                    "litter_visits": int(adjusted["litter_visits_day"]),
                    "litter_avg_sec": round(adjusted["litter_avg_sec"], 2),
                    "litter_output_g": round(adjusted["litter_output_g_day"], 2),
                    "weight_kg": round(adjusted["weight_kg"], 3),
                    "rest_min": round(adjusted["bed_min_day"], 2),
                    "sleep_breaths": "",
                }
            )
    return rows


def _make_cats_json() -> list[dict[str, object]]:
    return [
        {
            "cat_id": cat_id,
            **CAT_METADATA[cat_id],
            "scenario": scenario_for_cat(cat_id),
        }
        for cat_id in CAT_BASELINES
    ]


def main() -> None:
    days, seed, start_date, onset_day, output_dir, scale_settings = _read_settings()
    daily_rows = generate_daily_rows(days, seed, start_date, onset_day)
    events = generate_events(daily_rows, seed + 1)
    readings = generate_readings(events, start_date, days, seed + 2, scale_settings)

    paths = (
        write_csv(output_dir / "truth_daily.csv", daily_rows, DAILY_COLUMNS),
        write_csv(output_dir / "truth_events.csv", events, EVENT_COLUMNS),
        write_csv(output_dir / "readings.csv", readings, READING_COLUMNS),
        write_json(output_dir / "cats.json", _make_cats_json()),
    )
    for path in paths:
        print(f"Wrote {path}")
    print(
        f"Generated {len(daily_rows)} daily rows, {len(events)} true events, "
        f"and {len(readings)} raw scale readings."
    )


if __name__ == "__main__":
    main()
