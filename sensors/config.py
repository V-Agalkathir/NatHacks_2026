"""Settings for sensor processing.

Values come from sensors/.env (falling back to sensors/.env.example), and can be
overridden by real environment variables. Relative paths are resolved from the
sensors/ folder, so `python -m sensors.run` works from the repo root.
"""
import os
from dataclasses import dataclass
from pathlib import Path

HERE = Path(__file__).resolve().parent


def _read_env_file(path: Path) -> dict:
    values = {}
    if not path.exists():
        return values
    for line in path.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        values[key.strip()] = value.strip()
    return values


_ENV = {**_read_env_file(HERE / ".env.example"), **_read_env_file(HERE / ".env")}


def _get(key: str, default):
    raw = os.environ.get(key, _ENV.get(key))
    if raw is None or raw == "":
        return default
    if isinstance(default, bool):
        return raw.lower() in ("1", "true", "yes")
    return type(default)(raw)


def _path(key: str, default: str) -> Path:
    p = Path(_get(key, default))
    return p if p.is_absolute() else (HERE / p).resolve()


def _hour(text: str) -> float:
    h, m = text.split(":")
    return int(h) + int(m) / 60


@dataclass
class Settings:
    # Files
    readings_path: Path = _path("READINGS_PATH", "../simulator/output/readings.csv")
    truth_events_path: Path = _path("TRUTH_EVENTS_PATH", "../simulator/output/truth_events.csv")
    truth_daily_path: Path = _path("TRUTH_DAILY_PATH", "../simulator/output/truth_daily.csv")
    output_dir: Path = _path("OUTPUT_DIR", "output")

    # Quiet vs busy detection
    burst_gap_sec: float = _get("BURST_GAP_SEC", 5.0)
    stable_std_g: float = _get("STABLE_STD_G", 1.5)
    min_burst_readings: int = _get("MIN_BURST_READINGS", 3)
    edge_readings: int = _get("EDGE_READINGS", 3)

    # Bowls
    min_change_g: float = _get("MIN_CHANGE_G", 1.0)
    refill_min_g: float = _get("REFILL_MIN_G", 50.0)
    spill_min_g: float = _get("SPILL_MIN_G", 100.0)
    spill_max_sec: float = _get("SPILL_MAX_SEC", 5.0)
    empty_food_bowl_g: float = _get("EMPTY_FOOD_BOWL_G", 150.0)
    empty_water_bowl_g: float = _get("EMPTY_WATER_BOWL_G", 300.0)

    # Litter box
    cat_min_weight_g: float = _get("CAT_MIN_WEIGHT_G", 1500.0)
    scoop_min_g: float = _get("SCOOP_MIN_G", 20.0)

    # Bed
    night_start: float = _hour(_get("NIGHT_START", "22:00"))
    night_end: float = _hour(_get("NIGHT_END", "07:00"))
    breath_min_bpm: float = _get("BREATH_MIN_BPM", 8.0)
    breath_max_bpm: float = _get("BREATH_MAX_BPM", 60.0)

    @property
    def calm_tol_g(self) -> float:
        """How far a reading can wander and still count as 'calm' (noise)."""
        return 2 * self.stable_std_g


settings = Settings()
