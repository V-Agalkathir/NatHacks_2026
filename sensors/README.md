# ⚖️ Sensors — Person 5 (data pair)

**Branch:** `sensors` · **Pair:** Person 4 (simulator) · **Feeds:** Person 2 (engine)

**In one sentence:** read the raw scale weights and work out what the cat did: how much it ate and drank, when it used the litter box, and what it weighs. This is the code that would run on real scales.

| | File | Contract section |
|---|---|---|
| **Input** | `simulator/output/readings.csv` | 1 |
| **Output** | `sensors/output/events.csv` | 2 |
| **Output** | `sensors/output/daily.csv` (Person 2 uses this) | 3 |
| **Answer keys** (tests only) | `simulator/output/truth_events.csv`, `truth_daily.csv` | 1 |

**Golden rule:** your processing code reads **only** `readings.csv`. The answer keys are for `test_accuracy.py` only, because real scales don't come with answers.

## Quick start

From the repo root, with the venv active:

```bash
# 1. No simulator data yet? Make a small 2-cat, 3-day sample with answer keys
python -m sensors.sample_data

# 2. Process it
python -m sensors.run --readings sensors/output/sample/readings.csv

# 3. Check accuracy against the answer keys
python -m sensors.test_accuracy --truth-dir sensors/output/sample
```

Once Person 4's simulator works, just run `python -m sensors.run` and `python -m sensors.test_accuracy` (paths come from `.env`).

Tested on a 60-day, 2-cat file (~218k readings, ~1 s): every drink, spill and litter visit found; water within ~1%, food within ~2%, litter visit counts exact, bowl-empty days flagged.

## What's in `readings.csv`

One row = one weight reading. All 4 cats and all 4 scales in one file:

```
cat_id, device, timestamp,           grams
luna,   water,  2026-11-01T08:07:01, 498.0
luna,   water,  2026-11-01T08:07:02, 495.2
oscar,  litter, 2026-11-01T09:31:15, 10210.0
```

Readings are **not evenly spaced**, like real battery-saving scales:
- **Quiet:** one check-in every hour (`HEARTBEAT_SEC=3600`)
- **Busy** (cat touching the scale): one reading every second, starting a few seconds before and ending a few seconds after

What you'll find in it:

| Scale | Event | Looks like | You should |
|---|---|---|---|
| Food / water | Eat / drink | Wiggles 10–60 s, settles **lower** | Count the drop |
| Food / water | Refill | Jumps **up** | Ignore |
| Water | Evaporation | Tiny slow drop between check-ins | Don't count as drinking |
| Food / water | **Knocked over** | Big drop in 1–2 s, or weight near 0 | Spill, don't count |
| Food / water | **Bowl empty** | Sits at the empty-bowl weight | Flag it (not "cat stopped eating") |
| Litter | Visit | Jumps up ~cat weight, wiggles 1–2 min, drops back | Count, time it |
| Litter | Output | Box a bit heavier after the visit | Record the extra grams |
| Litter | Scooping | Box drops with no cat | Ignore, reset starting weight |
| Bed | Rest | Up by ~cat weight for hours | Session; night weight = cat weight |
| All | Noise | ±0.5 g on every reading | Ignore |

## Files to build

| File | Does |
|---|---|
| `config.py` | Loads the numbers from `.env` (thresholds, file paths) |
| `run.py` | Start button: loads data, runs every step, saves outputs. `python -m sensors.run` |
| `stable.py` | Finds when the scale is quiet vs when the cat is touching it |
| `bowls.py` | Food and water: eat/drink, refill, spill, empty bowl, evaporation |
| `litter.py` | Litter visits, length, cat weight, output, scooping |
| `bed.py` | Rest sessions, nightly weight, rest time |
| `daily.py` | Events → one row per cat per day |
| `test_accuracy.py` | Compares your outputs with the answer keys |
| `sample_data.py` | Makes a small test `readings.csv` + answer keys (not the real simulator) |

## Step 0: start without waiting

Don't wait for Person 4: `python -m sensors.sample_data` makes a realistic test file (Luna's bowl gets knocked over on day 2; Oscar has the litter emergency on day 3).

## Step 1: load (`run.py`)

- Read `readings.csv` with pandas; parse `timestamp` as datetime.
- Group by `cat_id` and `device`, sort by time. Every later step works on **one cat's one scale** at a time.

## Step 2: quiet vs busy (`stable.py`)

Everything builds on this.

- **Busy segment (burst):** readings less than `BURST_GAP_SEC` apart whose weights vary by more than `STABLE_STD_G`
- **Quiet segment:** check-ins and the calm readings at the start and end of each burst

For each busy segment, return:
- **before** = median of the calm readings just before it
- **after** = median of the calm readings once it settles
- **start**, **end**, **duration**, and the **max/min** weight during it

## Step 3: bowls (`bowls.py`): count decreases only

```
change = after - before

after  ≤ EMPTY_*_BOWL_G + MIN_CHANGE_G        → bowl empty or off the scale (spill / bowl_empty)
change < -SPILL_MIN_G and duration < SPILL_MAX_SEC → knocked over (spill, not counted)
change < -MIN_CHANGE_G                         → eat / drink |change| grams
change > +REFILL_MIN_G                         → refill, ignore
otherwise                                      → bump or noise, ignore
```

Check in that order. Also:
- **Evaporation:** water drifts down slowly between check-ins. It never makes a burst, so it's ignored automatically. Optionally measure the drift rate and report it.
- **Bowl empty:** if the bowl sits at its empty weight, write a `bowl_empty` event. The engine uses this to say "check the bowl" instead of "your cat isn't drinking."
- **Water:** 1 g = 1 ml.

## Step 4: litter box (`litter.py`)

```
starting weight ──► jumps up by ~cat weight ──► wobbles ──► back to starting weight + output
```

For each busy segment where the jump ≥ `CAT_MIN_WEIGHT_G`:
- `litter_visit` event
- **length** = segment duration
- **cat weight** = median during the visit − weight before
- **output** = weight after − weight before (can be ~0: that's Oscar's emergency signal)

A drop with **no** cat-sized jump = scooping. Ignore it and use the new, lower weight as the starting weight.

## Step 5: bed (`bed.py`)

- **Session** = weight above the empty bed by ≥ `CAT_MIN_WEIGHT_G`
- **Nightly weight** = median of readings during sessions between `NIGHT_START` and `NIGHT_END`
- **Rest time** = total session minutes per day
- **Stretch:** the simulator may add one 60-second fast sample per night with a tiny breathing wobble. Remove the slow trend, find the strongest frequency (FFT), breaths per minute = frequency × 60.

## Step 6: daily totals (`daily.py`)

One row per cat per day, columns exactly as in contract section 3:

| Column | How |
|---|---|
| `water_ml` | sum of `drink` |
| `food_g` | sum of `eat` |
| `litter_visits` | count of `litter_visit` |
| `litter_avg_sec` | average visit length |
| `litter_output_g` | sum of litter output |
| `weight_kg` | nightly weight ÷ 1000 |
| `rest_min` | sum of bed session minutes |
| `sleep_breaths` | stretch goal; leave empty if not built |
| `data_ok` | `false` if that day had a spill or empty bowl, so the engine won't raise a false alarm |

Save events to `output/events.csv` and daily rows to `output/daily.csv`.

## Step 7: check your work (`test_accuracy.py`)

- **Events:** compare with `truth_events.csv`. Did you find the right drinks, meals, and visits? Within a few seconds and a few grams?
- **Daily:** compare with `truth_daily.csv`. Print the % error per column.
- If something's off, tune the numbers in `.env`, not the code.

## Done when

- [ ] `python -m sensors.run` writes `events.csv` and `daily.csv`
- [ ] Refills never count as eating or drinking
- [ ] Knocked-over bowls are marked as spills, not drinking
- [ ] Water and food within ~5% of truth; litter visit count exact
- [ ] Oscar's last day shows many short visits with near-zero output

## Demo moment

Show one day of raw water-bowl readings (a messy line), then the same day with drinks marked, the refill greyed out, and a knocked-over bowl flagged: "This is how a scale knows exactly how much your cat drank, and when not to panic."
