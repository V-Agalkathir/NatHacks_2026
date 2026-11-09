"""Step 3: spot slow changes that are invisible day to day.

We fit a line through the last TREND_WINDOW_DAYS and turn its slope into
"% change per week" relative to the cat's normal.

We use the Theil-Sen slope (the median of the slopes between every pair of
days) instead of a normal best-fit line, because one odd day (a blip) barely
moves it. That stops a single spike from being mistaken for a trend.
"""
import numpy as np
import pandas as pd

from . import config


def theil_sen_slope(values) -> float | None:
    """Robust slope (units per day). None if there are too few points."""
    y = np.asarray(values, dtype=float)
    x = np.arange(len(y))
    keep = ~np.isnan(y)          # skip offline days
    x, y = x[keep], y[keep]
    if len(y) < 5:
        return None
    i, j = np.triu_indices(len(y), k=1)   # every pair of days (i < j)
    return float(np.median((y[j] - y[i]) / (x[j] - x[i])))


def compute(rows: pd.DataFrame, base: dict,
            window: int = config.TREND_WINDOW_DAYS) -> dict:
    """Return {metric: {"pct_per_week", "shift_z"}} for one cat.

    pct_per_week: how fast the metric is moving, as % of normal per week.
    noise_pct:    how big a slope plain day-to-day noise could fake (% per week).
    shift_z:      how far the last 3 days sit from normal (in std units).
                  A real trend must have actually moved the value, not just wiggled.
    """
    recent = rows.tail(window)
    out = {}
    for m, b in base.items():
        slope = theil_sen_slope(recent[m])
        if slope is None or b["mean"] == 0:
            continue
        pct = slope * 7 / abs(b["mean"]) * 100

        # Standard error of a slope fitted to n noisy points: std / sqrt(sum((x - mean_x)^2)).
        # Turned into % per week, this is how much slope random noise alone produces.
        n = int(recent[m].notna().sum())
        spread_x = np.sqrt(n * (n * n - 1) / 12)
        noise_pct = b["std"] / spread_x * 7 / abs(b["mean"]) * 100

        # Median of the last 3 days, so one odd day (a blip) can't fake a shift
        last3 = recent[m].tail(3).dropna()
        shift = (last3.median() - b["mean"]) / b["std"] if len(last3) else 0.0
        out[m] = {"pct_per_week": float(pct), "noise_pct": float(noise_pct),
                  "shift_z": float(shift)}
    return out


def is_trend(metric: str, t: dict, factor: float = 1.0) -> bool:
    """A real trend must pass all three checks:
    1. fast enough:   at least TREND_PCT_PER_WEEK (weight has its own lower bar)
    2. not noise:     at least 4x the slope noise alone could produce
    3. really moved:  the last 3 days sit 1+ std away from normal, in the same direction
    factor < 1 lowers the speed bar (used for senior cats).
    """
    threshold = config.TREND_PCT_OVERRIDE.get(metric, config.TREND_PCT_PER_WEEK) * factor
    direction = np.sign(t["pct_per_week"])
    speed = abs(t["pct_per_week"])
    return (speed >= threshold
            and speed >= 4 * t["noise_pct"]
            and t["shift_z"] * direction >= 1.0)
