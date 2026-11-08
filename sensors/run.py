"""Raw scale readings -> events -> daily totals.

Run from the repo root:
    python -m sensors.run
    python -m sensors.run --readings sensors/output/sample/readings.csv

Reads ONLY readings.csv (contract section 1). Writes:
    sensors/output/events.csv   (contract section 2)
    sensors/output/daily.csv    (contract section 3)
"""
import argparse
import time
from pathlib import Path

import numpy as np
import pandas as pd

from .bed import bed_events
from .bowls import bowl_events
from .config import settings
from .daily import build_daily
from .litter import litter_events

REQUIRED = ["cat_id", "device", "timestamp", "grams"]
EVENT_COLUMNS = ["cat_id", "device", "start", "end", "type", "amount_g", "cat_weight_g"]


def load_readings(path: Path) -> pd.DataFrame:
    if not path.exists():
        raise SystemExit(
            f"Can't find {path}\n"
            "Run the simulator first, or make a sample with: python -m sensors.sample_data"
        )
    df = pd.read_csv(path, skipinitialspace=True)
    missing = [c for c in REQUIRED if c not in df.columns]
    if missing:
        raise SystemExit(f"readings.csv is missing columns {missing} (see docs/CONTRACT.md section 1)")
    df["timestamp"] = pd.to_datetime(df["timestamp"], format="ISO8601")
    df["device"] = df["device"].str.strip().str.lower()
    return df.sort_values(["cat_id", "device", "timestamp"]).reset_index(drop=True)


def process(readings: pd.DataFrame):
    events, bed_days = [], []
    for (cat_id, device), grp in readings.groupby(["cat_id", "device"], sort=True):
        times = pd.DatetimeIndex(grp["timestamp"])
        grams = grp["grams"].to_numpy(dtype=float)
        if device in ("food", "water"):
            events += bowl_events(cat_id, device, times, grams, settings)
        elif device == "litter":
            events += litter_events(cat_id, times, grams, settings)
        elif device == "bed":
            bed_ev, per_day = bed_events(cat_id, times, grams, settings)
            events += bed_ev
            per_day.insert(0, "cat_id", cat_id)
            bed_days.append(per_day)
        else:
            print(f"  ! unknown device '{device}' for {cat_id}, skipped")

    events = pd.DataFrame(events)
    if events.empty:
        events = pd.DataFrame(columns=EVENT_COLUMNS + ["duration_sec"])
    events["date"] = pd.to_datetime(events["start"]).dt.date

    bed_days = (pd.concat(bed_days, ignore_index=True) if bed_days
                else pd.DataFrame(columns=["cat_id", "date", "weight_kg", "rest_min", "sleep_breaths"]))

    all_days = readings[["cat_id"]].assign(date=readings["timestamp"].dt.date).drop_duplicates()
    daily = build_daily(events, bed_days, all_days)
    return events, daily


def save(events: pd.DataFrame, daily: pd.DataFrame, out_dir: Path):
    out_dir.mkdir(parents=True, exist_ok=True)
    ev = events.sort_values(["cat_id", "start"])[EVENT_COLUMNS].copy()
    for col in ("start", "end"):
        ev[col] = pd.to_datetime(ev[col]).dt.strftime("%Y-%m-%dT%H:%M:%S")
    ev.to_csv(out_dir / "events.csv", index=False)
    daily.to_csv(out_dir / "daily.csv", index=False)


def summary(events: pd.DataFrame, daily: pd.DataFrame):
    print("\nEvents found:")
    counts = events.groupby(["cat_id", "type"]).size().unstack(fill_value=0)
    print(counts.to_string())
    print("\nLast day per cat:")
    last = daily.sort_values("date").groupby("cat_id").tail(1)
    print(last.drop(columns=["sleep_breaths"]).to_string(index=False))


def main():
    parser = argparse.ArgumentParser(description="Turn raw scale readings into events and daily totals")
    parser.add_argument("--readings", type=Path, default=settings.readings_path)
    parser.add_argument("--out", type=Path, default=settings.output_dir)
    args = parser.parse_args()

    t0 = time.time()
    readings = load_readings(args.readings)
    print(f"Loaded {len(readings):,} readings for {readings['cat_id'].nunique()} cats from {args.readings}")
    events, daily = process(readings)
    save(events, daily, args.out)
    summary(events, daily)
    print(f"\nWrote {args.out / 'events.csv'} ({len(events):,} events)")
    print(f"Wrote {args.out / 'daily.csv'} ({len(daily):,} rows) in {time.time() - t0:.1f}s")


if __name__ == "__main__":
    main()
