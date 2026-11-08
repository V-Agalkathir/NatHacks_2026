"""Per-cat metadata and healthy daily baselines.

Age and sex are recorded for the cat profile only. They are not used in
simulation calculations.
"""

CAT_METADATA = {
    "mochi": {"name": "Mochi", "age": 4, "sex": "male"},
    "luna": {"name": "Luna", "age": 7, "sex": "female"},
    "lena": {"name": "Lena", "age": 5, "sex": "female"},
    "oscar": {"name": "Oscar", "age": 9, "sex": "male"},
}

CAT_BASELINES = {
    "mochi": {
        "water_ml_day": 180,        # 3.6 kg * ~50 ml/kg
        "food_g_day": 60,           # Scaled for slender small adult (~16.6g/kg)
        "litter_visits_day": 3,     # Standard healthy baseline
        "litter_avg_sec": 45,       # Quick, normal duration
        "litter_output_g_day": 105, # Combined urine/feces weight
        "weight_kg": 3.6,           # Slender female
        "bed_min_day": 720,         # 12 hours (720 mins)
    },
    "luna": {
        "water_ml_day": 210,        # 4.2 kg * 50 ml/kg
        "food_g_day": 70,           # Average domestic shorthair requirement
        "litter_visits_day": 3,     # Standard healthy baseline
        "litter_avg_sec": 50,       # Normal duration
        "litter_output_g_day": 125, # Combined urine/feces weight
        "weight_kg": 4.2,           # Average adult
        "bed_min_day": 780,         # 13 hours (780 mins)
    },
    "lena": {
        "water_ml_day": 240,        # 4.8 kg * 50 ml/kg
        "food_g_day": 80,           # Slightly larger adult requirement
        "litter_visits_day": 4,     # Higher end of normal frequency
        "litter_avg_sec": 55,       # Normal duration
        "litter_output_g_day": 145, # Combined urine/feces weight
        "weight_kg": 4.8,           # Larger adult male
        "bed_min_day": 840,         # 14 hours (840 mins)
    },
    "oscar": {
        "water_ml_day": 270,        # 5.4 kg * 50 ml/kg
        "food_g_day": 90,           # Large frame / Maine Coon mix requirement
        "litter_visits_day": 4,     # High-normal frequency
        "litter_avg_sec": 60,       # Full session duration
        "litter_output_g_day": 165, # Combined urine/feces weight
        "weight_kg": 5.4,           # Large frame
        "bed_min_day": 900,         # 15 hours (900 mins)
    },
}