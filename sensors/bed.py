"""Step 5: bed scale.

- Session  = the bed weighs at least CAT_MIN_WEIGHT_G more than when empty
- Nightly weight = median of calm readings during sessions between NIGHT_START
  and NIGHT_END. A night belongs to the date it started on (Mon 22:00 -> Tue 07:00
  counts as Monday).
- Rest time = total session minutes per calendar day
- Stretch: breathing rate from short fast-sampled stretches (FFT)
"""
import numpy as np
import pandas as pd

from .config import Settings
from .stable import busy_mask, find_bursts, to_secs


def _empty_bed_weight(grams: np.ndarray, cfg: Settings) -> float:
    """Typical weight with no cat: readings near the lightest ones."""
    low = grams.min()
    near_low = grams[grams <= low + cfg.cat_min_weight_g / 2]
    return float(np.median(near_low))


def _night_date(t: pd.Timestamp, cfg: Settings):
    """The date a night belongs to, or None if `t` isn't at night."""
    hour = t.hour + t.minute / 60
    if hour >= cfg.night_start:
        return t.date()
    if hour < cfg.night_end:
        return (t - pd.Timedelta(days=1)).date()
    return None


def _split_by_day(start: pd.Timestamp, end: pd.Timestamp) -> dict:
    """Minutes of [start, end] that fall on each calendar day."""
    out = {}
    cur = start
    while cur < end:
        next_midnight = cur.normalize() + pd.Timedelta(days=1)
        stop = min(end, next_midnight)
        out[cur.date()] = out.get(cur.date(), 0) + (stop - cur).total_seconds() / 60
        cur = stop
    return out


def _breaths_per_min(t: pd.DatetimeIndex, w: np.ndarray, cfg: Settings):
    """Strongest slow wobble in a fast-sampled stretch, in breaths per minute."""
    secs = to_secs(t)
    secs = secs - secs[0]
    dt = np.median(np.diff(secs))
    detrended = w - np.polyval(np.polyfit(secs, w, 1), secs)
    power = np.abs(np.fft.rfft(detrended)) ** 2
    freqs = np.fft.rfftfreq(len(w), d=dt)
    band = (freqs * 60 >= cfg.breath_min_bpm) & (freqs * 60 <= cfg.breath_max_bpm)
    if not band.any():
        return None
    return float(freqs[band][np.argmax(power[band])] * 60)


def _fast_stretches(t: pd.DatetimeIndex, on: np.ndarray, min_sec=30, max_dt=0.25):
    """Index ranges sampled faster than `max_dt` seconds, for at least `min_sec`, cat on bed."""
    secs = to_secs(t)
    fast = np.diff(secs) <= max_dt
    out, i = [], 0
    while i < len(fast):
        if not fast[i]:
            i += 1
            continue
        j = i
        while j < len(fast) and fast[j]:
            j += 1
        s, e = i, j + 1
        if secs[e - 1] - secs[s] >= min_sec and on[s:e].all():
            out.append((s, e))
        i = j
    return out


def bed_events(cat_id: str, times: pd.DatetimeIndex, grams: np.ndarray, cfg: Settings):
    """Returns (events, per_day) where per_day has weight_kg, rest_min, sleep_breaths."""
    empty = _empty_bed_weight(grams, cfg)
    on = grams - empty >= cfg.cat_min_weight_g
    calm = ~busy_mask(times, find_bursts(times, grams, cfg))

    events = []
    rest = {}
    i = 0
    while i < len(on):
        if not on[i]:
            i += 1
            continue
        j = i
        while j + 1 < len(on) and on[j + 1]:
            j += 1
        seg = slice(i, j + 1)
        calm_on = calm[seg]
        weights = grams[seg][calm_on] if calm_on.any() else grams[seg]
        events.append({
            "cat_id": cat_id, "device": "bed",
            "start": times[i], "end": times[j], "type": "bed_session",
            "amount_g": round(float((times[j] - times[i]).total_seconds() / 60), 1),
            "cat_weight_g": round(float(np.median(weights) - empty), 1),
        })
        for day, mins in _split_by_day(times[i], times[j]).items():
            rest[day] = rest.get(day, 0) + mins
        i = j + 1

    # Nightly weight from calm readings with the cat on the bed
    nightly, daytime = {}, {}
    for t, w, is_on, is_calm in zip(times, grams, on, calm):
        if not (is_on and is_calm):
            continue
        night = _night_date(t, cfg)
        if night is not None:
            nightly.setdefault(night, []).append(w - empty)
        else:
            daytime.setdefault(t.date(), []).append(w - empty)

    # Stretch: breathing
    breaths = {}
    for s, e in _fast_stretches(times, on):
        bpm = _breaths_per_min(times[s:e], grams[s:e], cfg)
        day = _night_date(times[s], cfg) or times[s].date()
        if bpm is not None:
            breaths.setdefault(day, []).append(bpm)

    days = sorted(set(rest) | set(nightly) | set(daytime) | set(breaths))
    per_day = pd.DataFrame({
        "date": days,
        "weight_kg": [
            round(np.median(nightly.get(d) or daytime.get(d) or [np.nan]) / 1000, 3)
            for d in days
        ],
        "rest_min": [round(rest.get(d, 0.0), 1) for d in days],
        "sleep_breaths": [
            round(float(np.median(breaths[d])), 1) if d in breaths else np.nan for d in days
        ],
    })
    return events, per_day
