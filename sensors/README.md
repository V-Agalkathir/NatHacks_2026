# ⚖️ Sensors — Person 5 (data pair)

**Branch:** `sensors` · **Pair:** Person 4 (simulator) · **Feeds:** Person 2 (engine)

Waiting on Person 4's sample? Hand-write a tiny `readings.csv` (one water bowl, a few drinks and one refill) and start on `stable.py` and `bowls.py` right away.

**Goal:** turn raw scale readings into real amounts: how much the cat ate and drank, when it used the litter box, and what it weighs. This is the code that would run on real hardware.

Input: `simulator/output/readings.csv` (contract section 1).
Output: `output/events.csv` (section 2) and `output/daily.csv` (section 3).

**Never read `truth_daily.csv` in this code.** Only use it in tests to check your accuracy.

## Files to build

| File | Does |
|---|---|
| `stable.py` | Finds stable vs disturbed periods in a reading stream |
| `bowls.py` | Food and water: eat/drink, refill, spill, evaporation |
| `litter.py` | Litter visits, length, cat weight, output |
| `bed.py` | Bed sessions, nightly weight, rest time |
| `daily.py` | Events → one row per cat per day |
| `run.py` | Runs everything: `python -m sensors.run` |
| `test_accuracy.py` | Compares your `daily.csv` with `truth_daily.csv` |

## Step 1: stable vs disturbed (`stable.py`)

Everything builds on this. Readings are **not evenly spaced**: scales send fast bursts (1/s) only while the weight is changing, and a heartbeat every 5 minutes when stable.

- **Disturbed segment:** a run of readings less than `BURST_GAP_SEC` apart (a burst) whose weights vary by more than `STABLE_STD_G`
- **Stable segment:** heartbeats and the quiet readings between bursts

Give each stable segment one value: the median of its readings. The "before" value of a disturbance is the last stable value before the burst; "after" is the first stable value once it settles.

## Step 2: bowls (`bowls.py`): count decreases only

For each disturbed segment, compare the stable value **before** and **after**:

```
change = after - before

change < -MIN_CHANGE_G   → cat ate/drank |change| grams   (eat / drink event)
change > +REFILL_MIN_G   → refill, ignore                  (refill event)
otherwise                → bump or noise, ignore
```

Guards:
- **Evaporation (water):** during long stable stretches, measure how fast the weight drifts down. Don't count it as drinking; optionally subtract it from the day's total.
- **Spills:** a big drop where the disturbance is very short or looks unlike drinking → `spill` event, not counted.
- **Water:** 1 g = 1 ml.

## Step 3: litter box (`litter.py`)

```
stable baseline ──► jumps up by ~cat weight ──► wobbles ──► back to baseline + output
```

For each disturbed segment where the jump ≥ `CAT_MIN_WEIGHT_G`:
- `litter_visit` event
- **length** = segment duration
- **cat weight** = median during the visit − baseline before
- **output** = baseline after − baseline before (can be ~0)
- **scooping** = a drop in baseline with no cat: ignore it, reset the baseline

## Step 4: bed (`bed.py`)

- Session = reading above baseline by ≥ `CAT_MIN_WEIGHT_G`
- **Nightly weight** = median of all stable readings during sessions between 22:00 and 07:00
- **Rest time** = total session minutes per day
- **Stretch:** during a long still session, remove the slow trend and find the dominant frequency of the tiny wobble (FFT). Breaths per minute = that frequency × 60.

## Step 5: daily totals (`daily.py`)

Sum and average events per cat per day into the columns in contract section 3.

## Done when

- [ ] `python -m sensors.run` writes `events.csv` and `daily.csv`
- [ ] Refills never count as eating or drinking
- [ ] `test_accuracy.py` shows water and food within ~5% of truth, and the correct litter visit count
- [ ] Oscar's last day shows many short visits with near-zero output

## Demo moment

Show one day of raw water-bowl readings (messy line), then the same day with detected drinks marked and refills greyed out: "This is how a scale knows exactly how much your cat drank."
