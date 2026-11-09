"""Assign and apply health scenarios to a cat's healthy daily values.

ONSET_DAY is the 1-based simulation day when a scenario begins.
"""

from collections.abc import Mapping

SCENARIO_BY_CAT = {
    "mochi": "healthy",
    "luna": "blip",
    "lena": "slow_drinking",
    "oscar": "litter_emergency",
    "bella": "diabetes",
    "milo": "hyperthyroid",
    "coco": "dental",
    "nala": "not_eating",
    "pip": "growing",
    "ziggy": "sick_from_start",
    "simba": "early_blockage",
}

VALID_SCENARIOS = {
    "healthy",
    "blip",
    "slow_drinking",
    "weight_loss",
    "litter_emergency",
    "not_eating",
    "diabetes",
    "hyperthyroid",
    "dental",
    "growing",
    "sick_from_start",
    "early_blockage",
}


def scenario_for_cat(cat_id: str) -> str:
    """Return a cat's assigned scenario, raising an error for unknown cats."""
    try:
        scenario = SCENARIO_BY_CAT[cat_id]
    except KeyError as error:
        raise KeyError(f"No scenario assigned for cat {cat_id!r}") from error

    if scenario not in VALID_SCENARIOS:
        raise ValueError(f"Unknown scenario {scenario!r} assigned to {cat_id!r}")

    return scenario


def apply_scenario(
    baseline: Mapping[str, float],
    scenario: str,
    day_number: int,
    onset_day: int,
    total_days: int,
) -> dict[str, float]:
    """Return daily values after applying a scenario's changes.

    Day numbers are 1-based. The gradual changes begin on ``onset_day``;
    final-day scenarios affect the last two simulation days, but not before
    ``onset_day``.
    """
    if scenario not in VALID_SCENARIOS:
        raise ValueError(f"Unknown scenario {scenario!r}")
    if not 1 <= day_number <= total_days:
        raise ValueError(f"day_number must be between 1 and {total_days}")

    values = dict(baseline)

    # A growing kitten: weight climbs from day 1 and food, water and litter
    # grow with it. Normal for a kitten, so the engine should NOT flag it.
    if scenario == "growing":
        growth = 1.005**day_number
        for key in ("weight_kg", "food_g_day", "water_ml_day", "litter_output_g_day"):
            values[key] *= growth
        return values

    # A urinary-blockage-like day in the first week, while Purrcast is still
    # learning (day 5 only: the vet treated it). Shows urgent alerts from day 1.
    if scenario == "early_blockage":
        if day_number == 5:
            values["litter_visits_day"] *= 5
            values["litter_avg_sec"] *= 0.3
            values["litter_output_g_day"] *= 0.02
        return values

    # Already unwell before monitoring started: the baseline in baseline.py is
    # high from day 1 and stays steady, so it never looks like a "change".
    if scenario == "sick_from_start":
        return values

    if day_number < onset_day:
        return values

    days_since_onset = day_number - onset_day + 1

    # One odd day, placed on the final day so the app shows it as "yesterday"
    if scenario == "blip" and day_number == total_days:
        values["water_ml_day"] *= 1.35
    elif scenario == "slow_drinking":
        gradual_factor = 1.03**days_since_onset
        # Kidney-disease-like: more drinking, more peeing (more and bigger visits)
        values["water_ml_day"] *= gradual_factor
        values["litter_output_g_day"] *= gradual_factor
        values["litter_visits_day"] *= 1.025**days_since_onset
        values["weight_kg"] *= 0.999**days_since_onset
    elif scenario == "diabetes":
        # Diabetes-like: drinking, peeing and eating all rise, but weight drops
        values["water_ml_day"] *= 1.035**days_since_onset
        values["litter_output_g_day"] *= 1.035**days_since_onset
        values["litter_visits_day"] *= 1.03**days_since_onset
        values["food_g_day"] *= 1.02**days_since_onset
        values["weight_kg"] *= 0.997**days_since_onset
    elif scenario == "hyperthyroid":
        # Thyroid-like: eating clearly more, yet losing weight; a bit more drinking, less rest
        values["food_g_day"] *= 1.025**days_since_onset
        values["water_ml_day"] *= 1.01**days_since_onset
        values["weight_kg"] *= 0.997**days_since_onset
        values["bed_min_day"] *= 0.99**days_since_onset
    elif scenario == "dental":
        # Dental-pain-like: eating slowly drops, weight follows
        values["food_g_day"] *= 0.98**days_since_onset
        values["weight_kg"] *= 0.998**days_since_onset
    elif scenario == "weight_loss":
        values["weight_kg"] *= 0.997**days_since_onset
        values["food_g_day"] *= 0.995**days_since_onset
    elif (
        scenario == "litter_emergency"
        and day_number >= max(onset_day, total_days - 1)
    ):
        values["litter_visits_day"] *= 4
        values["litter_avg_sec"] *= 0.3
        values["litter_output_g_day"] *= 0.02
    elif (
        scenario == "not_eating"
        and day_number >= max(onset_day, total_days - 1)
    ):
        values["food_g_day"] *= 0.3
        values["bed_min_day"] = min(values["bed_min_day"] * 1.2, 1440)

    return values