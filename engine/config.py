"""Engine settings.

Values come from engine/.env if it exists (copy .env.example to .env),
otherwise the defaults below are used. Tune thresholds here or in .env
if a demo cat gets the wrong level.
"""
import os
from pathlib import Path

ENGINE_DIR = Path(__file__).resolve().parent
REPO_DIR = ENGINE_DIR.parent

# python-dotenv is optional: without it we just read normal env variables
try:
    from dotenv import load_dotenv
    load_dotenv(ENGINE_DIR / ".env")
except ImportError:
    pass


def _float(name: str, default: float) -> float:
    return float(os.getenv(name, default))


def _int(name: str, default: int) -> int:
    return int(os.getenv(name, default))


def _path(value: str) -> Path:
    """Paths in .env are relative to the engine/ folder."""
    p = Path(value)
    return p if p.is_absolute() else (ENGINE_DIR / p).resolve()


# ---------- Where the data lives ----------
DATA_PATH = _path(os.getenv("DATA_PATH", "../sensors/output/daily.csv"))
CATS_PATH = _path(os.getenv("CATS_PATH", "../simulator/output/cats.json"))

# Tried in order, so the engine works at every stage of the hackathon:
# 1. real sensors output  2. simulator answer key  3. our own fake test data
DATA_FALLBACKS = [
    DATA_PATH,
    REPO_DIR / "simulator" / "output" / "truth_daily.csv",
    ENGINE_DIR / "sample_data" / "daily.csv",
]
# Individual events (drinks, meals, litter visits, naps) for the "right now" mascot
EVENTS_FALLBACKS = [
    REPO_DIR / "sensors" / "output" / "events.csv",
    REPO_DIR / "simulator" / "output" / "truth_events.csv",
]
CATS_FALLBACKS = [
    CATS_PATH,
    REPO_DIR / "simulator" / "output" / "cats.json",
    ENGINE_DIR / "sample_data" / "cats.json",
]

# ---------- Thresholds ----------
BASELINE_DAYS = _int("BASELINE_DAYS", 14)          # days used to learn "normal"
TREND_WINDOW_DAYS = _int("TREND_WINDOW_DAYS", 10)  # days used to look for a trend
TREND_PCT_PER_WEEK = _float("TREND_PCT_PER_WEEK", 10)  # min % change/week = real trend
BLIP_Z = _float("BLIP_Z", 2.0)      # one odd day
URGENT_Z = _float("URGENT_Z", 3.0)  # used by the litter blockage rule
USE_LLM = os.getenv("USE_LLM", "false").lower() == "true"

# ---------- Age-aware checks (engine/age.py) ----------
KITTEN_MAX_AGE = _float("KITTEN_MAX_AGE", 1.0)    # under this (years) = still growing
SENIOR_MIN_AGE = _float("SENIOR_MIN_AGE", 10.0)   # this age and up = senior
SENIOR_TREND_FACTOR = _float("SENIOR_TREND_FACTOR", 0.75)  # seniors: trends flagged at 75% of the usual speed
WEIGHT_DROP_PCT = _float("WEIGHT_DROP_PCT", 5)    # weight this % under normal = worth a vet visit
SENIOR_WEIGHT_DROP_PCT = _float("SENIOR_WEIGHT_DROP_PCT", 4)

# Litter visits averaging this % above normal for a week = worth a vet visit
VISITS_UP_PCT = _float("VISITS_UP_PCT", 30)

# Measured and used by the rules, but never shown to owners as a number
# (owners see litter visit counts; output only helps tell a blockage from more peeing)
OWNER_HIDDEN = {"litter_output_g"}

# ---------- Metrics ----------
# Columns from docs/CONTRACT.md section 3 that the engine scores.
METRICS = [
    "water_ml",
    "food_g",
    "litter_visits",
    "litter_avg_sec",
    "litter_output_g",
    "weight_kg",
    "rest_min",
]

# Smallest spread (std) we trust for each metric. If a cat is very steady,
# the real std can be tiny and z-scores explode on normal noise.
MIN_STD = {
    "water_ml": 8,
    "food_g": 3,
    "litter_visits": 0.8,
    "litter_avg_sec": 8,
    "litter_output_g": 8,
    "weight_kg": 0.02,
    "rest_min": 40,
}

# Spread floor as a fraction of normal (14 days is a small sample, so the
# measured std often comes out too low). Weight is very stable, so its floor is tiny.
REL_STD_FLOOR = {"weight_kg": 0.004}
DEFAULT_REL_STD_FLOOR = 0.05

# Smallest change (% of normal) worth telling an owner about. A day must be
# both statistically odd (z) AND this different, so tiny wobbles never alert.
MIN_CHANGE_PCT = {
    "water_ml": 15,
    "food_g": 15,
    "litter_visits": 30,
    "litter_avg_sec": 20,
    "litter_output_g": 20,
    "weight_kg": 3,
    "rest_min": 20,
}

# Weight changes slowly, so a much smaller weekly trend already matters.
TREND_PCT_OVERRIDE = {"weight_kg": 1.5}
