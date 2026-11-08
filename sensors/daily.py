"""Step 6: events -> one row per cat per day (contract section 3)."""
import numpy as np
import pandas as pd

DAILY_COLUMNS = [
    "cat_id", "date", "water_ml", "food_g", "litter_visits", "litter_avg_sec",
    "litter_output_g", "weight_kg", "rest_min", "sleep_breaths", "data_ok",
]


def build_daily(events: pd.DataFrame, bed_days: pd.DataFrame, all_days: pd.DataFrame) -> pd.DataFrame:
    """
    events   : every event (contract section 2), with a `date` column
    bed_days : cat_id, date, weight_kg, rest_min, sleep_breaths
    all_days : cat_id, date for every day we have readings (so quiet days still get a row)
    """
    daily = all_days.copy()

    def total(type_, col, how="sum"):
        sub = events[events["type"] == type_]
        if sub.empty:
            return pd.DataFrame(columns=["cat_id", "date", col])
        return sub.groupby(["cat_id", "date"])[col].agg(how).reset_index()

    water = total("drink", "amount_g").rename(columns={"amount_g": "water_ml"})
    food = total("eat", "amount_g").rename(columns={"amount_g": "food_g"})
    visits = total("litter_visit", "amount_g", "count").rename(columns={"amount_g": "litter_visits"})
    output = total("litter_visit", "amount_g").rename(columns={"amount_g": "litter_output_g"})
    if "duration_sec" in events:
        length = total("litter_visit", "duration_sec", "mean").rename(
            columns={"duration_sec": "litter_avg_sec"})
    else:
        length = pd.DataFrame(columns=["cat_id", "date", "litter_avg_sec"])

    for part in (water, food, visits, output, length, bed_days):
        daily = daily.merge(part, on=["cat_id", "date"], how="left")

    # Days with nothing measured are real zeros, except the averages and weight
    for col in ("water_ml", "food_g", "litter_visits", "litter_output_g", "rest_min"):
        daily[col] = daily[col].fillna(0)
    daily["litter_visits"] = daily["litter_visits"].astype(int)

    # A knocked-over or empty bowl makes that day's eating/drinking unreliable
    bad = events[events["type"].isin(["spill", "bowl_empty"])][["cat_id", "date"]].drop_duplicates()
    bad["bad"] = True
    daily = daily.merge(bad, on=["cat_id", "date"], how="left")
    daily["data_ok"] = daily["bad"].isna()

    for col in ("water_ml", "food_g", "litter_output_g", "litter_avg_sec", "rest_min"):
        daily[col] = daily[col].astype(float).round(1)

    daily["date"] = pd.to_datetime(daily["date"]).dt.strftime("%Y-%m-%d")
    return daily[DAILY_COLUMNS].sort_values(["cat_id", "date"]).reset_index(drop=True)
