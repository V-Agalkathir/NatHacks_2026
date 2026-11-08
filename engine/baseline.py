"""Step 1: learn what's normal for this cat.

From the first BASELINE_DAYS of data, store each metric's average (mean)
and typical spread (std). Example: "Luna drinks 190 ml a day, usually ±20 ml."
"""
import pandas as pd

from . import config


def compute(rows: pd.DataFrame, days: int = config.BASELINE_DAYS) -> dict:
    """Return {metric: {"mean": float, "std": float}} for one cat."""
    first = rows.head(days)
    base = {}
    for m in config.METRICS:
        if m not in first.columns:
            continue
        # Empty values mean the scale was offline that day: ignore them
        vals = first[m].dropna()
        if len(vals) < max(3, days // 2):
            continue  # not enough data to trust a baseline for this metric

        mean = float(vals.mean())
        # Floor the spread so a very steady cat doesn't get flagged for tiny noise:
        # use the biggest of the real std, a per-metric minimum, or a % of the mean.
        rel = config.REL_STD_FLOOR.get(m, config.DEFAULT_REL_STD_FLOOR)
        std = max(float(vals.std(ddof=1)), config.MIN_STD.get(m, 0), rel * abs(mean))
        base[m] = {"mean": mean, "std": std}
    return base
