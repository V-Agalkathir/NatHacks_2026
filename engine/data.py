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


def load_daily() -> pd.DataFrame:
    """All cats' daily rows, sorted by cat and date."""
    df = pd.read_csv(data_source(), parse_dates=["date"])
    return df.sort_values(["cat_id", "date"]).reset_index(drop=True)


def load_cats() -> list[dict]:
    """List of {cat_id, name, age, sex, scenario}."""
    with open(_first_existing(config.CATS_FALLBACKS)) as f:
        return json.load(f)


def cat_rows(df: pd.DataFrame, cat_id: str) -> pd.DataFrame:
    """One cat's rows, oldest first."""
    return df[df["cat_id"] == cat_id].reset_index(drop=True)
