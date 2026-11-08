"""Step 3: food and water bowls. Count decreases only.

For every busy period, compare the calm weight before and after:
  big, fast drop (or bowl ends up empty)  -> spill      (not counted)
  smaller drop                            -> eat/drink  (counted)
  big rise                                -> refill     (ignored)
  anything else                           -> bump/noise (ignored)

Separately, any time the bowl sits at its empty weight we write a `bowl_empty`
event, so the app says "check the bowl" instead of "your cat stopped drinking".
Evaporation never makes a burst, so it's ignored automatically.
"""
import numpy as np
import pandas as pd

from .config import Settings
from .stable import find_bursts


def _event(cat_id, device, start, end, type_, amount):
    return {
        "cat_id": cat_id, "device": device,
        "start": start, "end": end, "type": type_,
        "amount_g": round(float(amount), 1), "cat_weight_g": np.nan,
    }


def bowl_events(cat_id: str, device: str, times: pd.DatetimeIndex, grams: np.ndarray,
                cfg: Settings) -> list[dict]:
    consume = "eat" if device == "food" else "drink"
    empty = cfg.empty_food_bowl_g if device == "food" else cfg.empty_water_bowl_g
    events = []

    for b in find_bursts(times, grams, cfg):
        change = b.change
        ends_empty = b.after <= empty + cfg.min_change_g
        if change < -cfg.spill_min_g and (b.duration <= cfg.spill_max_sec or ends_empty):
            events.append(_event(cat_id, device, b.busy_start, b.busy_end, "spill", -change))
        elif change < -cfg.min_change_g:
            events.append(_event(cat_id, device, b.busy_start, b.busy_end, consume, -change))
        elif change > cfg.refill_min_g:
            events.append(_event(cat_id, device, b.busy_start, b.busy_end, "refill", change))

    events.extend(_empty_periods(cat_id, device, times, grams, empty, cfg))
    return events


def _empty_periods(cat_id, device, times, grams, empty, cfg) -> list[dict]:
    """One `bowl_empty` event for each stretch where the bowl sits at its empty weight."""
    is_empty = grams <= empty + cfg.min_change_g
    events = []
    i = 0
    while i < len(is_empty):
        if not is_empty[i]:
            i += 1
            continue
        j = i
        while j + 1 < len(is_empty) and is_empty[j + 1]:
            j += 1
        # The bowl stops being empty at the next reading (usually a refill)
        end = times[j + 1] if j + 1 < len(times) else times[j]
        events.append(_event(cat_id, device, times[i], end, "bowl_empty", 0))
        i = j + 1
    return events
