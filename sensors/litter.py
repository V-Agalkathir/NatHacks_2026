"""Step 4: litter box.

  starting weight -> jumps up by ~cat weight -> wobbles -> back to start + output

A visit is a busy period where the weight rises by at least CAT_MIN_WEIGHT_G.
  length     = how long the cat was on the box
  cat weight = typical weight while on, minus the starting weight
  output     = weight after - weight before (near 0 = Oscar's emergency signal)

A drop with no cat-sized jump is scooping: ignored for health, logged as `scoop`.
"""
import numpy as np
import pandas as pd

from .config import Settings
from .stable import find_bursts


def litter_events(cat_id: str, times: pd.DatetimeIndex, grams: np.ndarray,
                  cfg: Settings) -> list[dict]:
    events = []
    for b in find_bursts(times, grams, cfg):
        rise = b.peak - b.before

        if rise >= cfg.cat_min_weight_g:
            # Readings where the cat is (at least partly) on the box. Relative to
            # THIS cat's jump, so a light kitten stepping on/off (a third of its
            # weight on the scale) still counts as "on", not as litter output.
            on = b.grams - b.before >= 0.2 * rise
            on_times = b.times[on]
            length = (on_times[-1] - on_times[0]).total_seconds()
            # Ignore the half-stepping-in readings when estimating weight
            solid = b.grams - b.before >= 0.8 * rise
            cat_weight = float(np.median(b.grams[solid]) - b.before)
            # Output = settled weight after she stepped off minus settled weight
            # before she stepped on, both from inside this burst. (The next
            # check-in can be an hour later, after the owner scooped the box.)
            idx = np.flatnonzero(on)
            pre, post = b.grams[:idx[0]], b.grams[idx[-1] + 1:]
            before = float(np.median(pre[-cfg.edge_readings:])) if len(pre) else b.before
            after = float(np.median(post[-cfg.edge_readings:])) if len(post) else b.after
            output = max(0.0, after - before)
            events.append({
                "cat_id": cat_id, "device": "litter",
                "start": on_times[0], "end": on_times[-1], "type": "litter_visit",
                "amount_g": round(output, 1), "cat_weight_g": round(cat_weight, 1),
                "duration_sec": round(length, 1),
            })
        elif b.change <= -cfg.scoop_min_g:
            events.append({
                "cat_id": cat_id, "device": "litter",
                "start": b.busy_start, "end": b.busy_end, "type": "scoop",
                "amount_g": round(-b.change, 1), "cat_weight_g": np.nan,
            })
    return events
