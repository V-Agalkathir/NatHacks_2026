"""Assign and apply health scenarios to a cat's healthy daily values.

ONSET_DAY is the 1-based simulation day when a scenario begins.
"""

from collections.abc import Mapping

SCENARIO_BY_CAT = {
    "mochi": "healthy",
    "luna": "blip",
    "lena": "slow_drinking",
    "oscar": "litter_emergency",
}

VALID_SCENARIOS = {
    "healthy",
    "blip",
    "slow_drinking",
    "weight_loss",
    "litter_emergency",
    "not_eating",
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
    if day_number < onset_day:
        return values

    days_since_onset = day_number - onset_day + 1

    # One odd day, placed on the final day so the app shows it as "yesterday"
    if scenario == "blip" and day_number == total_days:
        values["water_ml_day"] *= 1.35
    elif scenario == "slow_drinking":
        gradual_factor = 1.03**days_since_onset
        values["water_ml_day"] *= gradual_factor
        values["litter_output_g_day"] *= gradual_factor
        values["weight_kg"] *= 0.999**days_since_onset
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