"""Per-cat metadata and healthy daily baselines.

Age and sex are recorded for the cat profile; the engine uses age for
age-aware checks (kittens are expected to eat and drink more as they grow).
"""

CAT_METADATA = {
    "mochi": {"name": "Mochi", "age": 4, "sex": "male"},
    "luna": {"name": "Luna", "age": 7, "sex": "female"},
    "lena": {"name": "Lena", "age": 5, "sex": "female"},
    "oscar": {"name": "Oscar", "age": 9, "sex": "male"},
    "bella": {"name": "Bella", "age": 11, "sex": "female"},
    "milo": {"name": "Milo", "age": 13, "sex": "male"},
    "coco": {"name": "Coco", "age": 8, "sex": "female"},
    "nala": {"name": "Nala", "age": 6, "sex": "female"},
    "pip": {"name": "Pip", "age": 0.5, "sex": "male"},
    "ziggy": {"name": "Ziggy", "age": 14, "sex": "female"},
    "simba": {"name": "Simba", "age": 4, "sex": "male"},
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
    "bella": {
        "water_ml_day": 220,        # 4.4 kg senior
        "food_g_day": 72,
        "litter_visits_day": 3,
        "litter_avg_sec": 50,
        "litter_output_g_day": 130,
        "weight_kg": 4.4,
        "bed_min_day": 840,
    },
    "milo": {
        "water_ml_day": 200,        # 4.0 kg senior
        "food_g_day": 65,
        "litter_visits_day": 3,
        "litter_avg_sec": 45,
        "litter_output_g_day": 115,
        "weight_kg": 4.0,
        "bed_min_day": 900,
    },
    "coco": {
        "water_ml_day": 190,        # 3.9 kg adult
        "food_g_day": 64,
        "litter_visits_day": 3,
        "litter_avg_sec": 45,
        "litter_output_g_day": 110,
        "weight_kg": 3.9,
        "bed_min_day": 780,
    },
    "nala": {
        "water_ml_day": 200,        # 4.0 kg adult
        "food_g_day": 66,
        "litter_visits_day": 3,
        "litter_avg_sec": 48,
        "litter_output_g_day": 115,
        "weight_kg": 4.0,
        "bed_min_day": 780,
    },
    "pip": {
        "water_ml_day": 120,        # 2.0 kg, 6-month-old kitten (grows during the sim)
        "food_g_day": 55,           # kittens eat more per kg than adults
        "litter_visits_day": 3,
        "litter_avg_sec": 35,
        "litter_output_g_day": 80,
        "weight_kg": 2.0,
        "bed_min_day": 960,
    },
    "ziggy": {
        "water_ml_day": 440,        # 3.6 kg senior, ALREADY drinking a lot (~120 ml/kg/day)
        "food_g_day": 66,           # when monitoring starts: the baseline itself is high
        "litter_visits_day": 5,
        "litter_avg_sec": 50,
        "litter_output_g_day": 230,
        "weight_kg": 3.6,
        "bed_min_day": 840,
    },
    "simba": {
        "water_ml_day": 230,        # 5.0 kg adult; urgent litter day during the learning week
        "food_g_day": 75,
        "litter_visits_day": 3,
        "litter_avg_sec": 45,
        "litter_output_g_day": 135,
        "weight_kg": 5.0,
        "bed_min_day": 780,
    },
}
