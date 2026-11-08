"""Step 4: the rules that decide the level. RULES DECIDE, AI ONLY EXPLAINS.

Checked from most to least serious; the first level that matches wins:
    urgent -> vet -> blip -> good

Each rule returns "findings" (what triggered it) so explain.py can
describe it with real numbers. Keep this file short: judges may read it.
"""
import pandas as pd

from . import config
from .trends import is_trend


def _finding(kind: str, metric: str, rows: pd.DataFrame, base: dict, **extra) -> dict:
    """Package one reason for the decision, with yesterday's value and the usual value."""
    value = rows.iloc[-1].get(metric)
    return {
        "kind": kind,
        "metric": metric,
        "value": None if pd.isna(value) else float(value),
        "usual": base[metric]["mean"] if metric in base else None,
        **extra,
    }


def _below_for_days(rows, metric, base, fraction, days) -> bool:
    """True if the metric was under `fraction` of normal on each of the last `days` days."""
    if metric not in base:
        return False
    last = rows[metric].tail(days)
    return last.notna().all() and (last < fraction * base[metric]["mean"]).all()


def _big_enough(metric, rows, base, days_ago=1) -> bool:
    """True if that day's value differs from normal by at least MIN_CHANGE_PCT."""
    value = rows[metric].iloc[-days_ago]
    mean = base[metric]["mean"]
    if pd.isna(value) or mean == 0:
        return False
    return abs(value - mean) / abs(mean) * 100 >= config.MIN_CHANGE_PCT.get(metric, 15)


def decide(rows: pd.DataFrame, base: dict, z_recent: list[dict], trends: dict):
    """Return (level, findings). level is one of good / blip / vet / urgent."""
    z_today = z_recent[-1] if z_recent else {}

    # ---------------- 🔴 URGENT ----------------
    # Many litter visits with almost no output: possible urinary blockage
    zv = z_today.get("litter_visits")
    output = rows.iloc[-1].get("litter_output_g")
    if (zv is not None and zv >= config.URGENT_Z and "litter_output_g" in base
            and pd.notna(output) and output < 0.3 * base["litter_output_g"]["mean"]):
        return "urgent", [_finding("litter_blockage", "litter_visits", rows, base)]

    # Eating under 40% of normal for 2+ days
    if _below_for_days(rows, "food_g", base, 0.4, 2):
        return "urgent", [_finding("not_eating", "food_g", rows, base)]

    # Fast breathing while asleep for 2+ days (stretch goal: only if the column has data)
    if "sleep_breaths" in rows.columns:
        last2 = rows["sleep_breaths"].tail(2)
        if last2.notna().all() and (last2 > 35).all():
            return "urgent", [{"kind": "fast_breathing", "metric": "sleep_breaths",
                               "value": float(last2.iloc[-1]), "usual": None}]

    # ---------------- 🟡 VET ----------------
    vet = []

    # A steady trend in any metric
    for m, t in trends.items():
        if is_trend(m, t):
            vet.append(_finding("trend", m, rows, base, pct_per_week=t["pct_per_week"]))

    # Weight down 5%+ from normal (median of last 3 days, so one bad reading doesn't count)
    if "weight_kg" in base:
        recent_weight = rows["weight_kg"].tail(3).median()
        if pd.notna(recent_weight) and recent_weight <= 0.95 * base["weight_kg"]["mean"]:
            vet.append(_finding("weight_drop", "weight_kg", rows, base))

    # Two or more metrics clearly odd on the same day.
    # Bar is a bit above BLIP_Z: with 7 metrics, two mild wobbles together happen by chance.
    odd_today = [m for m, z in z_today.items()
                 if abs(z) >= config.BLIP_Z + 0.5 and _big_enough(m, rows, base)]
    if len(odd_today) >= 2:
        for m in odd_today:
            vet.append(_finding("multi", m, rows, base, z=z_today[m]))

    # Drinking more AND peeing more together (kidney / diabetes / thyroid pattern)
    w, o = trends.get("water_ml"), trends.get("litter_output_g")
    # Each only needs half the normal trend speed, but must still beat 2x noise and have moved up
    def rising(t):
        bar = max(config.TREND_PCT_PER_WEEK / 2, 2 * t["noise_pct"])
        return t["pct_per_week"] >= bar and t["shift_z"] >= 1.0
    if w and o and rising(w) and rising(o):
        vet.append(_finding("drink_and_pee", "water_ml", rows, base))

    if vet:
        # One finding per metric is enough for the explanation
        unique = {f["metric"]: f for f in vet}
        return "vet", list(unique.values())

    # ---------------- 🔵 BLIP ----------------
    # One odd day (yesterday or the day before), no trend
    for days_ago, day_z in enumerate(reversed(z_recent), start=1):   # newest first
        spikes = [(m, z) for m, z in day_z.items()
                  if abs(z) >= config.BLIP_Z and _big_enough(m, rows, base, days_ago)]
        if spikes:
            m, z = max(spikes, key=lambda s: abs(s[1]))   # the biggest spike
            f = _finding("spike", m, rows, base, z=z, days_ago=days_ago)
            f["value"] = float(rows[m].iloc[-days_ago])   # value on the odd day itself
            return "blip", [f]

    # ---------------- 🟢 GOOD ----------------
    return "good", []
