"""Age-aware checks: the cat's age changes what counts as a worrying change.

  kitten (under KITTEN_MAX_AGE): still growing, so eating and drinking more and
      gaining weight is expected. Food, water and litter output are compared
      per kg of body weight, and weight gain is never flagged.
  senior (SENIOR_MIN_AGE and up): kidney disease, diabetes and thyroid problems
      are more common, so trends are flagged a little earlier.
  adult: the normal rules.

Age comes from cats.json, or from the owner's profile (assess(cat_id, age=...)).
"""
import pandas as pd

from . import config

# Metrics that grow with body size, so kittens are compared per kg
PER_KG = ["water_ml", "food_g", "litter_output_g"]


def profile(age) -> dict:
    """{group, trend_factor, weight_drop_pct} for a cat of this age (in years)."""
    try:
        age = float(age)
    except (TypeError, ValueError):
        age = None
    if age is not None and age < config.KITTEN_MAX_AGE:
        return {"group": "kitten", "trend_factor": 1.0,
                "weight_drop_pct": config.WEIGHT_DROP_PCT}
    if age is not None and age >= config.SENIOR_MIN_AGE:
        return {"group": "senior", "trend_factor": config.SENIOR_TREND_FACTOR,
                "weight_drop_pct": config.SENIOR_WEIGHT_DROP_PCT}
    return {"group": "adult", "trend_factor": 1.0, "weight_drop_pct": config.WEIGHT_DROP_PCT}


def adjust_rows(rows: pd.DataFrame, prof: dict) -> pd.DataFrame:
    """For kittens, rescale food, water and output to the kitten's starting weight.

    A kitten that grew 20% and eats 20% more is eating the same per kg, so after
    this step it looks steady. A kitten eating more while its weight stays flat
    (or drops) still shows up as a change.
    """
    if prof["group"] != "kitten" or "weight_kg" not in rows.columns:
        return rows
    weight = rows["weight_kg"].ffill().bfill()
    start = rows["weight_kg"].head(config.BASELINE_DAYS).median()
    if weight.isna().all() or pd.isna(start) or start <= 0:
        return rows
    out = rows.copy()
    for m in PER_KG:
        if m in out.columns:
            out[m] = out[m] * start / weight
    return out


def expected_change(metric: str, direction: float, prof: dict) -> bool:
    """True if this change is normal for the cat's age (kittens gaining weight)."""
    return prof["group"] == "kitten" and metric == "weight_kg" and direction > 0


def note(prof: dict, cat: dict) -> str:
    """One line for 'See more' explaining how age was taken into account."""
    name = cat.get("name", "your cat")
    if prof["group"] == "kitten":
        return (f"{name} is a kitten, so eating and drinking more while growing is expected. "
                f"Purrcast compares food and water per kg of body weight and doesn't flag weight gain.")
    if prof["group"] == "senior":
        return (f"{name} is a senior cat, so Purrcast flags gradual changes a little earlier.")
    return ""
