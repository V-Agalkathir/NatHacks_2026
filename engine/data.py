"""Loading daily.csv and cats.json (see docs/CONTRACT.md sections 1 and 3)."""
import json
from pathlib import Path

import pandas as pd

from . import config


def _first_existing(paths: list[Path]) -> Path:
    """Return the first file that exists, or explain clearly what's missing."""
    for p in paths:
        if p.exists():
            return p
    tried = "\n  ".join(str(p) for p in paths)
    raise FileNotFoundError(
        f"No data file found. Tried:\n  {tried}\n"
        "Make test data with: python -m engine.fake_daily"
    )


def data_source() -> Path:
    """Which daily file the engine is reading right now (handy for debugging)."""
    return _first_existing(config.DATA_FALLBACKS)


def _drop_incomplete_last_day(df: pd.DataFrame) -> pd.DataFrame:
    """Remove the newest date if it's only a partial day.

    The night's bed session can run past midnight, so sensors sometimes write
    one extra day with no food, water or litter yet. Scoring it would look like
    every cat suddenly stopped eating and drinking.
    """
    if df.empty:
        return df
    last = df["date"].max()
    intake = df.loc[df["date"] == last, ["water_ml", "food_g", "litter_visits"]]
    if (intake.fillna(0).sum(axis=1) == 0).all():
        return df[df["date"] < last]
    return df


def _blank_unreliable_days(df: pd.DataFrame) -> pd.DataFrame:
    """Days the sensors flagged data_ok=False (e.g. a knocked-over bowl) become
    missing values, so they're skipped instead of read as real numbers."""
    if "data_ok" not in df.columns:
        return df
    ok = df["data_ok"].astype(str).str.lower().isin(["true", "1", "yes"])
    metrics = [m for m in config.METRICS if m in df.columns]
    df.loc[~ok, metrics] = float("nan")
    return df


def load_daily() -> pd.DataFrame:
    """All cats' daily rows, cleaned and sorted by cat and date."""
    df = pd.read_csv(data_source(), parse_dates=["date"])
    df = _drop_incomplete_last_day(df)
    df = _blank_unreliable_days(df)
    return df.sort_values(["cat_id", "date"]).reset_index(drop=True)


def load_events() -> pd.DataFrame | None:
    """Individual events (sensors output), or None if none exist yet."""
    for p in config.EVENTS_FALLBACKS:
        if p.exists():
            return pd.read_csv(p, parse_dates=["start", "end"])
    return None


def load_cats() -> list[dict]:
    """List of {cat_id, name, age, sex, scenario}."""
    with open(_first_existing(config.CATS_FALLBACKS)) as f:
        return json.load(f)


def cat_rows(df: pd.DataFrame, cat_id: str) -> pd.DataFrame:
    """One cat's rows, oldest first."""
    return df[df["cat_id"] == cat_id].reset_index(drop=True)
