"""Typical ranges for healthy cats: used where the cat's OWN normal can't be trusted.

Purrcast mostly compares a cat with itself. That fails in two cases:

  1. Days 1-14: there is no "usual" yet. Some patterns are worrying for ANY cat,
     so they are checked from day 1 (early_urgent).
  2. The cat was already sick when monitoring started: its "usual" includes the
     illness, so a steady high level looks normal. After day 14 the learned usual
     is compared with typical ranges for a cat of that weight (starting_point).

Numbers (general guidelines, not a diagnosis):
  - Healthy adult cats pee about 2-4 times a day (plus about one poop).
  - Water intake above ~100 ml per kg of body weight per day is generally
    considered abnormal.
  - A cat that hasn't peed in 24 hours, or keeps going with little result,
    can have a urinary blockage, which is an emergency.
"""
import pandas as pd

from . import config


def _finding(kind: str, metric: str, value, typical=None, **extra) -> dict:
    return {"kind": kind, "metric": metric,
            "value": None if value is None or pd.isna(value) else float(value),
            "usual": typical, **extra}


def early_urgent(rows: pd.DataFrame) -> list[dict]:
    """Urgent patterns that need no baseline (used during the learning days)."""
    if rows.empty:
        return []
    last = rows.iloc[-1]
    visits = last.get("litter_visits")

    # Far more litter visits than any healthy cat makes in a day
    if pd.notna(visits) and visits >= config.URGENT_VISITS_ANY_CAT:
        return [_finding("many_visits_any_cat", "litter_visits", visits, config.TYPICAL_VISITS_MAX)]

    # No litter visits at all for a full day (skip the first day: it may be partial)
    if len(rows) >= 2 and pd.notna(visits) and visits == 0 and bool(last.get("data_ok", True)):
        return [_finding("no_visits", "litter_visits", visits, None)]

    # Almost nothing eaten for 2 full days in a row
    food = rows["food_g"].tail(2) if "food_g" in rows else pd.Series(dtype=float)
    if len(rows) >= 3 and len(food) == 2 and food.notna().all() and (food < config.NOT_EATING_G).all():
        return [_finding("not_eating_any_cat", "food_g", food.iloc[-1], None)]
    return []


def no_visits_today(rows: pd.DataFrame) -> list[dict]:
    """After day 14 too: a full day with zero litter visits is urgent for any cat."""
    last = rows.iloc[-1]
    visits = last.get("litter_visits")
    if pd.notna(visits) and visits == 0 and bool(last.get("data_ok", True)):
        return [_finding("no_visits", "litter_visits", visits, None)]
    return []


def starting_point(base: dict, prof: dict) -> list[dict]:
    """Is the cat's learned 'usual' already outside the typical range?

    Catches a cat that was sick before monitoring started. Not used for kittens,
    who drink and eat more per kg while growing.
    """
    if prof["group"] == "kitten" or "weight_kg" not in base:
        return []
    weight = base["weight_kg"]["mean"]
    found = []
    if "water_ml" in base and weight > 0:
        limit = config.TYPICAL_WATER_ML_PER_KG * weight
        if base["water_ml"]["mean"] > limit:
            found.append(_finding("high_start", "water_ml", base["water_ml"]["mean"], limit, weight=weight))
    if "litter_visits" in base and base["litter_visits"]["mean"] > config.TYPICAL_VISITS_MAX:
        found.append(_finding("high_start", "litter_visits", base["litter_visits"]["mean"],
                              config.TYPICAL_VISITS_MAX, weight=weight))
    return found
