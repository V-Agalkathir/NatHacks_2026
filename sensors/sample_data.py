"""A small fake readings.csv for testing sensors/ before the real simulator is ready.

This is NOT the simulator (that's Person 4's job). It makes 2 cats x 3 days of
scale readings that behave like the contract describes, plus answer keys:

    luna  - normal cat; on day 2 her water bowl gets knocked over
    oscar - normal, then on the last day: many short litter visits, almost no output

Run from the repo root:
    python -m sensors.sample_data
    python -m sensors.run --readings sensors/output/sample/readings.csv
    python -m sensors.test_accuracy --truth-dir sensors/output/sample
"""
import json
from pathlib import Path

import numpy as np
import pandas as pd

from .config import settings

OUT = Path(__file__).resolve().parent / "output" / "sample"
START = pd.Timestamp("2026-11-01")
DAYS = 3
NOISE_G = 0.5
EVAP_G_PER_HR = 0.4
FOOD_FULL, WATER_FULL = 400.0, 900.0
EMPTY_FOOD, EMPTY_WATER = settings.empty_food_bowl_g, settings.empty_water_bowl_g
LITTER_BASE, BED_BASE = 6000.0, 1500.0
CALM = 3  # calm seconds recorded before and after each disturbance

rng = np.random.default_rng(7)


class Scale:
    """One fake scale: keeps its current weight and records readings."""

    def __init__(self, cat_id, device, weight, evap=0.0):
        self.cat_id, self.device, self.weight, self.evap = cat_id, device, weight, evap
        self.extra = 0.0  # cat weight while lying on the bed
        self.t = START
        self.rows = []

    def _advance(self, t):
        hours = (t - self.t).total_seconds() / 3600
        self.weight -= self.evap * hours
        self.t = t

    def read(self, t, value=None):
        self._advance(t)
        v = self.weight + self.extra if value is None else value
        self.rows.append((self.cat_id, self.device, t, v + rng.normal(0, NOISE_G)))

    def calm(self, t, secs=CALM):
        for k in range(secs):
            self.read(t + pd.Timedelta(seconds=k))
        return t + pd.Timedelta(seconds=secs)


def heartbeats(scales, episodes):
    """Run every episode in time order, with an hourly check-in on every scale."""
    end = START + pd.Timedelta(days=DAYS) - pd.Timedelta(seconds=1)
    hours = list(pd.date_range(START, end, freq="1h")) + [end]
    queue = [(t, "hb", None) for t in hours] + episodes
    queue.sort(key=lambda x: x[0])
    for t, kind, fn in queue:
        if kind == "hb":
            for s in scales:
                s.read(t)
        else:
            fn(t)


# --- disturbances -----------------------------------------------------------

def consume(scale, amount, secs, truth, type_):
    def run(t):
        t = scale.calm(t)
        start, base = t, scale.weight
        for k in range(1, secs + 1):
            press = rng.uniform(3, 10) if rng.random() < 0.15 else 0
            scale.read(t, base - amount * k / secs + press + rng.normal(0, 1))
            t += pd.Timedelta(seconds=1)
        scale.weight = base - amount
        truth.append(dict(device=scale.device, start=start, end=t, type=type_, amount_g=amount))
        scale.calm(t)
    return run


def refill(scale, full, truth):
    def run(t):
        t = scale.calm(t)
        start, base = t, scale.weight
        for k in range(1, 5):
            scale.read(t, base + (full - base) * k / 4 + rng.uniform(0, 20))
            t += pd.Timedelta(seconds=1)
        scale.weight = full
        truth.append(dict(device=scale.device, start=start, end=t, type="refill", amount_g=full - base))
        scale.calm(t)
    return run


def knock_over(scale, empty, truth):
    def run(t):
        t = scale.calm(t)
        start, base = t, scale.weight
        scale.read(t, base * 0.6)
        scale.read(t + pd.Timedelta(seconds=1), empty + 15)
        t += pd.Timedelta(seconds=2)
        scale.weight = empty
        scale.evap = 0
        truth.append(dict(device=scale.device, start=start, end=t, type="spill", amount_g=base - empty))
        scale.calm(t)
    return run


def litter_visit(scale, cat_w, secs, output, truth):
    def run(t):
        t = scale.calm(t)
        base = scale.weight
        for f in (0.4, 0.8):
            scale.read(t, base + cat_w * f)
            t += pd.Timedelta(seconds=1)
        start = t
        for _ in range(secs):
            scale.read(t, base + cat_w + rng.normal(0, 60))
            t += pd.Timedelta(seconds=1)
        end = t - pd.Timedelta(seconds=1)
        for f in (0.7, 0.3):
            scale.read(t, base + output + cat_w * f)
            t += pd.Timedelta(seconds=1)
        scale.weight = base + output
        truth.append(dict(device="litter", start=start, end=end, type="litter_visit",
                          amount_g=output, cat_weight_g=cat_w, duration_sec=secs))
        scale.calm(t)
    return run


def scoop(scale, truth):
    def run(t):
        t = scale.calm(t)
        start, base = t, scale.weight
        for k in range(1, 9):
            scale.read(t, base - (base - LITTER_BASE) * k / 8 + rng.uniform(0, 30))
            t += pd.Timedelta(seconds=1)
        scale.weight = LITTER_BASE
        truth.append(dict(device="litter", start=start, end=t, type="scoop", amount_g=base - LITTER_BASE))
        scale.calm(t)
    return run


def bed_step(scale, cat_w, getting_on):
    def run(t):
        t = scale.calm(t)
        for f in ((0.3, 0.7, 1.0) if getting_on else (0.7, 0.3, 0.0)):
            scale.read(t, scale.weight + cat_w * f)
            t += pd.Timedelta(seconds=1)
        scale.extra = cat_w if getting_on else 0.0
        scale.calm(t)
    return run


def breathing(scale, cat_w, bpm, amp=3.0):
    def run(t):
        for k in range(600):  # 60 s at 10 readings per second
            tt = t + pd.Timedelta(milliseconds=100 * k)
            wave = amp * np.sin(2 * np.pi * (bpm / 60) * k / 10)
            scale.read(tt, scale.weight + cat_w + wave)
    return run


# --- one cat ----------------------------------------------------------------

def make_cat(cat_id, cat_w, bpm, knock_day=None, emergency_day=None):
    food = Scale(cat_id, "food", FOOD_FULL)
    water = Scale(cat_id, "water", WATER_FULL, evap=EVAP_G_PER_HR)
    litter = Scale(cat_id, "litter", LITTER_BASE)
    bed = Scale(cat_id, "bed", BED_BASE)
    truth, episodes, sessions = [], [], []

    def at(day, hh, mm, ss=0):
        return START + pd.Timedelta(days=day, hours=hh, minutes=mm, seconds=ss)

    def add(t, fn):
        episodes.append((t, "ep", fn))

    for d in range(DAYS):
        add(at(d, 7, 30), refill(water, WATER_FULL, truth))
        add(at(d, 7, 35), refill(food, FOOD_FULL, truth))

        # Drinks and meals spread over the day (never on the hour, to avoid check-ins)
        for i, hh in enumerate([8, 10, 12, 14, 16, 18, 20, 22]):
            if d == knock_day and 16 <= hh < 19:
                continue
            add(at(d, hh, 12 + i), consume(water, round(rng.uniform(18, 30), 1),
                                           int(rng.integers(15, 45)), truth, "drink"))
        for i, hh in enumerate([8, 11, 13, 15, 17, 19, 21]):
            amt = round(rng.uniform(6, 10) * (0.3 if d == emergency_day else 1), 1)
            add(at(d, hh, 40 + i), consume(food, amt, int(rng.integers(20, 60)), truth, "eat"))

        if d == knock_day:
            add(at(d, 16, 2), knock_over(water, EMPTY_WATER, truth))
            add(at(d, 19, 5), refill(water, WATER_FULL, truth))
            add(at(d, 19, 6), lambda t: setattr(water, "evap", EVAP_G_PER_HR))

        # Litter
        if d == emergency_day:
            for i in range(16):
                add(at(d, 6 + i, 25), litter_visit(litter, cat_w, int(rng.integers(15, 30)),
                                                   round(rng.uniform(0, 3), 1), truth))
        else:
            for hh in (6, 11, 17, 21):
                add(at(d, hh, 20), litter_visit(litter, cat_w, int(rng.integers(60, 150)),
                                                round(rng.uniform(20, 35), 1), truth))
        add(at(d, 18, 45), scoop(litter, truth))

        # Bed: afternoon nap and the night
        for on_t, off_t in ((at(d, 13, 10), at(d, 15, 5)), (at(d, 22, 30), at(d + 1, 6, 30))):
            add(on_t, bed_step(bed, cat_w, True))
            if off_t < START + pd.Timedelta(days=DAYS):
                add(off_t, bed_step(bed, cat_w, False))
            sessions.append((on_t + pd.Timedelta(seconds=CALM + 2),
                             min(off_t + pd.Timedelta(seconds=CALM), START + pd.Timedelta(days=DAYS) - pd.Timedelta(seconds=1))))
        add(at(d, 2, 15), (lambda t: None) if d == 0 else breathing(bed, cat_w, bpm))

    heartbeats([food, water, litter, bed], episodes)

    readings = food.rows + water.rows + litter.rows + bed.rows
    truth_ev = pd.DataFrame(truth).assign(cat_id=cat_id)
    return readings, truth_ev, sessions


def truth_daily(cat_id, ev, sessions, cat_w, bpm, knock_day):
    rows = []
    for d in range(DAYS):
        day = (START + pd.Timedelta(days=d)).date()
        e = ev[pd.to_datetime(ev["start"]).dt.date == day]
        visits = e[e["type"] == "litter_visit"]
        rest = 0.0
        for s, f in sessions:
            lo, hi = max(s, pd.Timestamp(day)), min(f, pd.Timestamp(day) + pd.Timedelta(days=1))
            rest += max(0, (hi - lo).total_seconds() / 60)
        rows.append(dict(
            cat_id=cat_id, date=str(day),
            water_ml=round(e.loc[e.type == "drink", "amount_g"].sum(), 1),
            food_g=round(e.loc[e.type == "eat", "amount_g"].sum(), 1),
            litter_visits=len(visits),
            litter_avg_sec=round(visits["duration_sec"].mean(), 1),
            litter_output_g=round(visits["amount_g"].sum(), 1),
            weight_kg=cat_w / 1000, rest_min=round(rest, 1),
            sleep_breaths=bpm if d < DAYS - 1 else np.nan,  # breathing sample is the next night
            data_ok=d != knock_day,
        ))
    return rows


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    cats = [
        dict(cat_id="luna", name="Luna", cat_w=4200.0, bpm=22.0, knock_day=1, emergency_day=None),
        dict(cat_id="oscar", name="Oscar", cat_w=5000.0, bpm=24.0, knock_day=None, emergency_day=DAYS - 1),
    ]
    all_readings, all_truth, all_daily = [], [], []
    for c in cats:
        readings, ev, sessions = make_cat(c["cat_id"], c["cat_w"], c["bpm"], c["knock_day"], c["emergency_day"])
        all_readings += readings
        all_truth.append(ev)
        all_daily += truth_daily(c["cat_id"], ev, sessions, c["cat_w"], c["bpm"], c["knock_day"])

    df = pd.DataFrame(all_readings, columns=["cat_id", "device", "timestamp", "grams"])
    df["timestamp"] = df["timestamp"].dt.strftime("%Y-%m-%dT%H:%M:%S.%f").str[:-3]
    df["grams"] = df["grams"].round(1)
    df.to_csv(OUT / "readings.csv", index=False)

    tev = pd.concat(all_truth, ignore_index=True)
    for col in ("start", "end"):
        tev[col] = pd.to_datetime(tev[col]).dt.strftime("%Y-%m-%dT%H:%M:%S")
    cols = ["cat_id", "device", "start", "end", "type", "amount_g", "cat_weight_g", "duration_sec"]
    tev.reindex(columns=cols).to_csv(OUT / "truth_events.csv", index=False)
    pd.DataFrame(all_daily).to_csv(OUT / "truth_daily.csv", index=False)
    (OUT / "cats.json").write_text(json.dumps(
        [dict(cat_id=c["cat_id"], name=c["name"]) for c in cats], indent=2))

    print(f"Wrote {len(df):,} readings and answer keys to {OUT}")


if __name__ == "__main__":
    main()
