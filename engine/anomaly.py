"""Step 2: score each day against the cat's normal (z-scores).

z = (value - mean) / std  ->  how many "typical spreads" away from normal.
Example: Luna drinks 190 ±20 ml, so 260 ml is z = (260 - 190) / 20 = 3.5.
"""
import pandas as pd


def zscores(row: pd.Series, base: dict) -> dict:
    """z-score for every metric in one day's row. Missing values are skipped."""
    out = {}
    for m, b in base.items():
        value = row.get(m)
        if value is None or pd.isna(value):
            continue  # scale offline that day: no score, never treat as 0
        out[m] = (float(value) - b["mean"]) / b["std"]
    return out


def recent(rows: pd.DataFrame, base: dict, n: int = 2) -> list[dict]:
    """z-scores for the last n days, oldest first (the last item is 'yesterday')."""
    return [zscores(row, base) for _, row in rows.tail(n).iterrows()]
