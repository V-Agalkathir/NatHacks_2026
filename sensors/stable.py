"""Step 2: split one scale's readings into quiet and busy periods.

Scales send a fast burst of readings (about 1 per second) only while the weight
is changing, plus an hourly check-in when nothing is happening. A *burst* is a
run of readings close together in time. Inside a burst, the first few readings
are usually calm (before the cat touches the scale) and so are the last few
(after it settles). Comparing those two calm weights tells us what happened.
"""
from dataclasses import dataclass

import numpy as np
import pandas as pd

from .config import Settings


def to_secs(times: pd.DatetimeIndex) -> np.ndarray:
    """Timestamps as float seconds (works whatever unit pandas stored them in)."""
    return pd.DatetimeIndex(times).as_unit("ns").asi8 / 1e9


@dataclass
class Burst:
    start: pd.Timestamp        # first reading of the burst
    end: pd.Timestamp          # last reading of the burst
    busy_start: pd.Timestamp   # when the weight started moving
    busy_end: pd.Timestamp     # when it settled again
    before: float              # calm weight before
    after: float               # calm weight after
    peak: float
    trough: float
    times: pd.DatetimeIndex    # every reading in the burst
    grams: np.ndarray

    @property
    def change(self) -> float:
        return self.after - self.before

    @property
    def duration(self) -> float:
        """Seconds the weight was actually moving."""
        return (self.busy_end - self.busy_start).total_seconds()


def _calm_run(values: np.ndarray, tol: float) -> int:
    """How many readings from the start of `values` stay within `tol` of the first one."""
    first = values[0]
    n = 1
    while n < len(values) and abs(values[n] - first) <= tol:
        n += 1
    return n


def find_bursts(times: pd.DatetimeIndex, grams: np.ndarray, cfg: Settings) -> list[Burst]:
    """Find every busy period in one scale's readings (already sorted by time)."""
    if len(grams) < cfg.min_burst_readings:
        return []

    secs = to_secs(times)
    gaps = np.diff(secs)
    # A new group starts wherever the gap between readings is too big
    breaks = np.flatnonzero(gaps > cfg.burst_gap_sec) + 1
    starts = np.concatenate(([0], breaks))
    ends = np.concatenate((breaks, [len(grams)]))

    bursts = []
    tol = cfg.calm_tol_g
    for s, e in zip(starts, ends):
        if e - s < cfg.min_burst_readings:
            continue  # a lone check-in, not a burst
        w = grams[s:e]
        t = times[s:e]

        lead = _calm_run(w, tol)
        if lead == len(w):
            continue  # nothing moved: just noise
        trail = _calm_run(w[::-1], tol)

        # Calm weight before: the burst's own calm start, or the previous reading
        # Use only the first few calm readings: slow eating can look calm at first
        if lead >= 2:
            before = float(np.median(w[:min(lead, cfg.edge_readings)]))
        elif s > 0:
            before = float(grams[s - 1])
        else:
            before = float(w[0])

        # Calm weight after: the burst's own calm end, or the next reading
        if trail >= 2:
            after = float(np.median(w[-min(trail, cfg.edge_readings):]))
        elif e < len(grams):
            after = float(grams[e])
        else:
            after = float(w[-1])

        busy_from = lead if lead >= 2 else 0
        busy_to = len(w) - 1 - (trail if trail >= 2 else 0)
        busy_to = max(busy_to, busy_from)

        bursts.append(Burst(
            start=t[0], end=t[-1],
            busy_start=t[busy_from], busy_end=t[busy_to],
            before=before, after=after,
            peak=float(w.max()), trough=float(w.min()),
            times=t, grams=w,
        ))
    return bursts


def busy_mask(times: pd.DatetimeIndex, bursts: list[Burst]) -> np.ndarray:
    """True for readings taken while the scale was being disturbed."""
    mask = np.zeros(len(times), dtype=bool)
    t = to_secs(times)
    for b in bursts:
        lo, hi = to_secs([b.busy_start, b.busy_end])
        mask |= (t >= lo) & (t <= hi)
    return mask
