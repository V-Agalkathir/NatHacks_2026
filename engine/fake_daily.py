"""Fake daily.csv so the engine can be built and tested before simulator/ is ready.

Makes the 4 demo cats from simulator/README.md (60 days each):
    mochi  healthy           -> good
    luna   blip              -> blip
    tiger  slow_drinking     -> vet
    oscar  litter_emergency  -> urgent

Run from the repo root:  python -m engine.fake_daily
Writes engine/sample_data/daily.csv and engine/sample_data/cats.json.
Once simulator/output/truth_daily.csv exists, the engine uses that instead.
"""
import json
from datetime import date, timedelta

import numpy as np
import pandas as pd

from . import config

DAYS = 60
ONSET_DAY = 46   # sickness starts here (the last 14 days)

CATS = [
    {"cat_id": "mochi", "name": "Mochi", "age": 4, "sex": "female", "scenario": "healthy"},
    {"cat_id": "luna", "name": "Luna", "age": 8, "sex": "female", "scenario": "blip"},
    {"cat_id": "tiger", "name": "Tiger", "age": 11, "sex": "male", "scenario": "slow_drinking"},
    {"cat_id": "oscar", "name": "Oscar", "age": 6, "sex": "male", "scenario": "litter_emergency"},
]


def _normal(rng) -> dict:
    """Pick one cat's own healthy averages (ranges from simulator/README.md)."""
    return {
        "water_ml": rng.uniform(150, 250),
        "food_g": rng.uniform(45, 70),
        "litter_visits": round(rng.uniform(3, 5)),
        "litter_avg_sec": rng.uniform(60, 150),
        "litter_output_g": rng.uniform(80, 140),
        "weight_kg": rng.uniform(3.5, 5.5),
        "rest_min": rng.uniform(600, 900),
    }


def _day(rng, n: dict) -> dict:
    """One healthy day: the cat's normal plus small random noise."""
    def wobble(x, pct):
        return x * (1 + rng.uniform(-pct, pct))
    return {
        "water_ml": wobble(n["water_ml"], 0.10),
        "food_g": wobble(n["food_g"], 0.08),
        "litter_visits": int(n["litter_visits"] + rng.integers(-1, 2)),
        "litter_avg_sec": wobble(n["litter_avg_sec"], 0.15),
        "litter_output_g": wobble(n["litter_output_g"], 0.15),
        "weight_kg": wobble(n["weight_kg"], 0.005),
        "rest_min": wobble(n["rest_min"], 0.15),
    }


def _apply_scenario(row: dict, scenario: str, d: int) -> dict:
    """Make the cat sick according to its scenario (d = day index, 0..DAYS-1)."""
    k = d - ONSET_DAY + 1          # days since onset (<= 0 means not started)
    last = DAYS - 1
    if scenario == "blip" and d == last:
        row["water_ml"] *= 1.35                    # one day of extra drinking
    elif scenario == "slow_drinking" and k > 0:
        row["water_ml"] *= 1.03 ** k               # ~3%/day more water
        row["litter_output_g"] *= 1.03 ** k        # and more output
        row["weight_kg"] *= 1 - 0.002 * k          # slow weight drift down
    elif scenario == "weight_loss" and k > 0:
        row["weight_kg"] *= 1 - 0.003 * k
        row["food_g"] *= 1 - 0.01 * k
    elif scenario == "litter_emergency" and d >= last - 1:
        row["litter_visits"] *= 4                  # many visits...
        row["litter_avg_sec"] *= 0.3               # ...short ones...
        row["litter_output_g"] *= 0.05             # ...almost no output
    elif scenario == "not_eating" and d >= last - 1:
        row["food_g"] *= 0.3
        row["rest_min"] *= 1.3
    return row


def generate(seed: int = 42, cats: list[dict] = CATS) -> pd.DataFrame:
    """Build the daily table in the docs/CONTRACT.md section 3 format."""
    rng = np.random.default_rng(seed)
    first_day = date.today() - timedelta(days=DAYS)   # last row = yesterday
    rows = []
    for cat in cats:
        n = _normal(rng)
        for d in range(DAYS):
            row = _apply_scenario(_day(rng, n), cat["scenario"], d)
            row.update(cat_id=cat["cat_id"], date=first_day + timedelta(days=d))
            rows.append(row)
    df = pd.DataFrame(rows)
    df["date"] = pd.to_datetime(df["date"])
    cols = ["cat_id", "date", "water_ml", "food_g", "litter_visits", "litter_avg_sec",
            "litter_output_g", "weight_kg", "rest_min"]
    return df[cols].round({"water_ml": 1, "food_g": 1, "litter_avg_sec": 1,
                           "litter_output_g": 1, "weight_kg": 3, "rest_min": 1})


if __name__ == "__main__":
    out = config.ENGINE_DIR / "sample_data"
    out.mkdir(exist_ok=True)
    df = generate()
    df.to_csv(out / "daily.csv", index=False, date_format="%Y-%m-%d")
    (out / "cats.json").write_text(json.dumps(CATS, indent=2))
    print(f"Wrote {len(df)} rows to {out / 'daily.csv'}")
