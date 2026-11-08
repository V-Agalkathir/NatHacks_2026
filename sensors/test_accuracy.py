"""Step 7: compare sensors output with the simulator's answer keys.

Run from the repo root:
    python -m sensors.test_accuracy
    python -m sensors.test_accuracy --truth-dir sensors/output/sample

This is the ONLY sensors file allowed to read the answer keys.
"""
import argparse
from pathlib import Path

import numpy as np
import pandas as pd

from .config import settings

MATCH_SEC = 120  # a found event must start within 2 minutes of the real one
CHECKED_TYPES = ["drink", "eat", "refill", "spill", "litter_visit"]
TARGET_PCT = 5.0
MIN_DAYS_OK_PCT = 95.0
# ...or this close in absolute terms (grams, ml, seconds, kg, minutes)
TARGET_ABS = {"water_ml": 5, "food_g": 5, "litter_output_g": 5, "litter_avg_sec": 5,
              "weight_kg": 0.05, "rest_min": 5, "sleep_breaths": 2}


def compare_events(found: pd.DataFrame, truth: pd.DataFrame):
    print("\nEvents (found vs real)")
    print(f"{'type':<14}{'real':>6}{'found':>7}{'matched':>9}{'missed':>8}{'extra':>7}{'avg amount err':>16}")
    for type_ in CHECKED_TYPES:
        t = truth[truth["type"] == type_].copy()
        if type_ == "spill":  # small splashes are deliberately ignored
            t = t[t["amount_g"] >= settings.spill_min_g]
        if type_ == "refill":  # small top-ups are deliberately ignored
            t = t[t["amount_g"] >= settings.refill_min_g]
        f = found[found["type"] == type_].copy()
        used = set()
        errors = []
        for _, row in t.iterrows():
            cand = f[(f["cat_id"] == row["cat_id"]) & (f["device"] == row["device"])]
            if cand.empty:
                continue
            gap = (cand["start"] - row["start"]).abs().dt.total_seconds()
            gap = gap[~gap.index.isin(used)]
            if gap.empty or gap.min() > MATCH_SEC:
                continue
            idx = gap.idxmin()
            used.add(idx)
            errors.append(abs(f.loc[idx, "amount_g"] - row["amount_g"]))
        matched = len(used)
        err = f"{np.mean(errors):.1f} g" if errors else "-"
        print(f"{type_:<14}{len(t):>6}{len(f):>7}{matched:>9}{len(t) - matched:>8}{len(f) - matched:>7}{err:>16}")


def compare_daily(found: pd.DataFrame, truth: pd.DataFrame) -> bool:
    if "data_ok" not in truth:
        truth = truth.assign(data_ok=True)
    df = truth.merge(found, on=["cat_id", "date"], suffixes=("_real", "_found"))
    # First/last day start or end mid-session (e.g. cat already on the bed at midnight)
    edge_day = df.groupby("cat_id")["date"].transform(lambda d: (d == d.min()) | (d == d.max()))
    print(f"\nDaily totals ({len(df)} cat-days compared)")
    ok = True
    for col in ("water_ml", "food_g", "litter_output_g", "litter_avg_sec", "weight_kg", "rest_min", "sleep_breaths"):
        if f"{col}_real" not in df or f"{col}_found" not in df:
            print(f"  {col:<17} not in answer key, skipped")
            continue
        real, got = df[f"{col}_real"], df[f"{col}_found"]
        both = real.notna() & got.notna() & (real > 0)
        if col == "rest_min":
            both &= ~edge_day
        if col in ("water_ml", "food_g"):
            both &= df["data_ok_real"].astype(bool)  # spill days are flagged, not scored
        if not both.any():
            print(f"  {col:<17} no data")
            continue
        diff = (got[both] - real[both]).abs()
        pct = 100 * diff / real[both]
        # A day passes if it's within 5% OR within 5 units (fair on near-zero days)
        day_ok = (pct <= TARGET_PCT) | (diff <= TARGET_ABS.get(col, 0))
        share = day_ok.mean() * 100
        # PASS if at least 95% of days are within tolerance
        status = "PASS" if share >= MIN_DAYS_OK_PCT else "check"
        if col in ("water_ml", "food_g", "litter_output_g") and share < MIN_DAYS_OK_PCT:
            ok = False
        print(f"  {col:<17} avg error {pct.mean():5.1f}%  ({diff.mean():.1f} avg diff)  "
              f"{share:3.0f}% of days OK   {status}")

    visits_exact = (df["litter_visits_real"] == df["litter_visits_found"]).mean() * 100
    flags = (df["data_ok_real"].astype(bool) == df["data_ok_found"].astype(bool)).mean() * 100
    print(f"  {'litter_visits':<17} exact on {visits_exact:.0f}% of days")
    print(f"  {'data_ok':<17} correct on {flags:.0f}% of days")
    return ok and visits_exact == 100


def main():
    parser = argparse.ArgumentParser(description="Check sensors output against the answer keys")
    parser.add_argument("--truth-dir", type=Path, help="folder with truth_events.csv and truth_daily.csv")
    parser.add_argument("--out", type=Path, default=settings.output_dir, help="sensors output folder")
    args = parser.parse_args()

    truth_events = args.truth_dir / "truth_events.csv" if args.truth_dir else settings.truth_events_path
    truth_daily = args.truth_dir / "truth_daily.csv" if args.truth_dir else settings.truth_daily_path

    found_ev = pd.read_csv(args.out / "events.csv", parse_dates=["start", "end"])
    found_day = pd.read_csv(args.out / "daily.csv")

    if truth_events.exists():
        compare_events(found_ev, pd.read_csv(truth_events, parse_dates=["start", "end"]))
    else:
        print(f"(no {truth_events}, skipping event check)")

    if truth_daily.exists():
        passed = compare_daily(found_day, pd.read_csv(truth_daily))
        print("\nOVERALL:", "PASS" if passed else "needs tuning (adjust numbers in sensors/.env)")
    else:
        print(f"(no {truth_daily}, skipping daily check)")


if __name__ == "__main__":
    main()
