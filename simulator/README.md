# Simulator instruction manual

The simulator creates fake data for four cats and four scale devices. Its raw
readings are designed to look like measurements from real scales, including
activity bursts, quiet check-ins, sensor noise, refills, evaporation, litter
output, and bed sessions.

The `sensors/` project reads **only** `output/readings.csv`. The other generated
files are metadata or ground truth for testing. Keep file columns and meanings
consistent with [the shared data contract](../docs/CONTRACT.md).

## Quick start

From the repository root, set up the shared Python environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

The generator has defaults, so a `.env` file is optional. To customize a run,
copy the example settings:

```bash
cp simulator/.env.example simulator/.env
```

Run `generate.py` from the simulator folder. It is the simulator's entry
point—the equivalent of a `main()` function—and orchestrates the other modules
in order:

```bash
cd simulator
python generate.py
```

Generated files are written to `simulator/output/` by default. To create a
small sample for development, set `DAYS=3` in `simulator/.env` and run the
generator again. Set it back to `60` for the full sample.

## Source files and responsibilities

`generate.py` coordinates the pipeline; it is not a separate data-processing
step:

```text
generate.py (main entry point)
  ├─ reads baseline.py and applies scenarios.py ──► truth_daily.csv
  ├─ passes daily values to events.py ─────────────► truth_events.csv
  ├─ passes events to scale.py ────────────────────► readings.csv
  └─ writes cat metadata ──────────────────────────► cats.json
```

| File | Responsibility |
|---|---|
| `baseline.py` | Stores each cat's name, optional age and sex, and healthy daily measurement baselines. |
| `scenarios.py` | Assigns a scenario to each cat and adjusts that cat's daily measurements. |
| `events.py` | Splits daily food, water, and litter totals into timed events, and schedules bed sessions, refills, and spills. |
| `scale.py` | Turns those events into raw scale readings with activity bursts, stable check-ins, noise, and device behavior. |
| `output.py` | Writes CSV and JSON files with consistent formatting. |
| `generate.py` | Main entry point (like `main()`): loads settings, calls the other modules in order, and writes all four output files. |
| `.env.example` | Documents optional run and scale settings. Copy it to `.env` to override defaults. |

### Cat metadata and baselines: `baseline.py`

`CAT_METADATA` contains one profile per `cat_id`:

```python
"mochi": {"name": "Mochi", "age": None, "sex": None}
```

Replace `None` with an age or sex value when you have one; otherwise leave it
as `None` (it appears as JSON `null` in `cats.json`). These fields are
metadata only and do not affect baseline values, scenarios, events, or
readings.

`CAT_BASELINES` holds the healthy daily starting values for that same cat:

| Field | Unit | Meaning |
|---|---|---|
| `water_ml_day` | ml/day | Typical water consumption |
| `food_g_day` | g/day | Typical food consumption |
| `litter_visits_day` | visits/day | Typical number of litter visits |
| `litter_avg_sec` | seconds | Typical duration of a litter visit |
| `litter_output_g_day` | g/day | Total daily litter output |
| `weight_kg` | kg | Typical cat weight |
| `bed_min_day` | minutes/day | Typical time spent resting on the bed |

The baseline values in the file are per-cat assumptions. `generate.py` adds
small seeded day-to-day variation so the simulated routine is not identical
every day.

### Scenario changes: `scenarios.py`

`SCENARIO_BY_CAT` assigns one scenario to each cat. Its IDs must match those in
both `CAT_METADATA` and `CAT_BASELINES`. `apply_scenario()` copies a cat's daily
values and applies the selected change; it does not modify the source baseline.

`ONSET_DAY` is a 1-based simulation day. With `ONSET_DAY=40`, gradual
scenarios begin on day 40 after `START_DATE`. The `blip` changes water for that
day only. Emergency scenarios affect the last two days of the run (or begin
later if `ONSET_DAY` is later).

| Scenario | Daily change | Current demo cat |
|---|---|---|
| `healthy` | No scenario change | Mochi |
| `blip` | Water increases 35% for one day | Luna |
| `slow_drinking` | Water and litter output increase 3% per day; weight falls 0.1% per day | Lena |
| `weight_loss` | Weight falls 0.3% per day; food falls 0.5% per day | Available for assignment |
| `litter_emergency` | Final two days: visits ×4, visit length ×0.3, output ×0.02 | Oscar |
| `not_eating` | Final two days: food ×0.3 and bed time ×1.2 | Available for assignment |

These are synthetic scenarios for exercising the processing pipeline, not
medical guidance or predictions.

### Daily values and events: `generate.py` and `events.py`

`generate.py` creates one `truth_daily.csv` row per cat per date. It first
applies seeded daily variation to the baselines, then applies the cat's
scenario. Daily columns are the section 3 fields in the data contract:

`cat_id`, `date`, `water_ml`, `food_g`, `litter_visits`, `litter_avg_sec`,
`litter_output_g`, `weight_kg`, `rest_min`, `sleep_breaths`.

`events.py` turns each daily row into the known events:

- 6–12 eating events and 6–12 drinking events, with amounts that sum to the
  daily food and water totals.
- The specified number of litter visits, with durations averaging to the
  daily visit length and output summing to the daily litter output.
- Two bed-rest sessions whose durations sum to the daily rest time.
- Periodic bowl refills and occasional spills.

These events are written to `truth_events.csv`. They are the answer key for
testing sensors. **Sensors must not read `truth_daily.csv` or
`truth_events.csv`; only use those files to compare results.**

### Raw scales: `scale.py`

`scale.py` generates a separate reading stream for each cat and device:
`food`, `water`, `litter`, and `bed`.

- A stable scale sends one heartbeat every `HEARTBEAT_SEC` (one hour by
  default).
- During an event, the scale sends readings every `BURST_SAMPLE_SEC` (one
  second by default).
- Each reading receives uniform sensor noise up to `NOISE_G` grams.
- Bowl consumption lowers the bowl weight. Refills raise it to full weight.
  Water also loses weight gradually through evaporation; spills cause
  consumption-like drops without a cat.
- A litter visit adds the cat's weight while it is in the box. When it leaves,
  the box baseline increases by the visit's output. The box is scooped once
  each day, resetting that baseline.
- Bed sessions add the cat's weight to the bed baseline. If
  `BREATH_AMP_G` is above zero, the overnight session includes a short,
  high-rate breathing-like wave.

`readings.csv` columns must stay exactly:

| Column | Meaning |
|---|---|
| `cat_id` | Cat associated with the scale |
| `device` | `food`, `water`, `litter`, or `bed` |
| `timestamp` | ISO 8601 local simulation time |
| `grams` | Scale weight in grams |

For example, if the water bowl measures 500 g before a drink and 488 g after,
the sensor processor should be able to infer that 12 g (about 12 ml) was
consumed. Readings are intentionally irregular: hourly during stable periods,
more frequent during events.

### Output formatting: `output.py`

`write_csv()` creates the destination folder if necessary, writes the column
header in the specified order, then writes the provided rows.
`write_json()` writes readable, indented JSON. `generate.py` uses these helpers
for all files.

## Generated files

| File | Contents | Who should use it |
|---|---|---|
| `output/readings.csv` | Noisy raw scale measurements | `sensors/`; the only simulator file sensors may read |
| `output/truth_events.csv` | Scheduled meals, drinks, litter visits, bed sessions, refills, and spills | Simulator/sensor accuracy checks only |
| `output/truth_daily.csv` | True daily values after baseline variation and scenario changes | Simulator/sensor checks and engine work before sensors are ready |
| `output/cats.json` | Cat ID, name, age, sex, and assigned scenario | Other project components; age and sex may be `null` |

The reading and daily columns are defined in
[the shared data contract](../docs/CONTRACT.md), sections 1 and 3. Truth events
use the event fields in section 2.

### CSV formats: one row at a time

All CSV files have a header row. The descriptions below apply to the simulator's
generated files in `output/`; the sensors team's `sensors/output/events.csv` and
`sensors/output/daily.csv` are separate processed outputs.

#### `output/truth_daily.csv`

**One data row represents one cat on one calendar day.** There should be
`DAYS × number of cats` rows. The values are the simulated truth after baseline
variation and scenario effects.

```csv
cat_id,date,water_ml,food_g,litter_visits,litter_avg_sec,litter_output_g,weight_kg,rest_min,sleep_breaths
```

| Column | What this row's value means |
|---|---|
| `cat_id` | Which cat this daily record describes. |
| `date` | Calendar day in `YYYY-MM-DD` format. |
| `water_ml` | Total water consumed that day, in millilitres. |
| `food_g` | Total food consumed that day, in grams. |
| `litter_visits` | Number of litter visits that day. |
| `litter_avg_sec` | Average duration of that day's litter visits, in seconds. |
| `litter_output_g` | Total litter output for that day, in grams. |
| `weight_kg` | The cat's simulated weight for that day, in kilograms. |
| `rest_min` | Total simulated time on the bed that day, in minutes. |
| `sleep_breaths` | Blank; breathing-rate truth is not generated yet. |

#### `output/truth_events.csv`

**One data row represents one scheduled event** for one cat and device. Events
are ordered by their start time. Their start date identifies the event's
simulation day.

```csv
cat_id,device,start,end,type,amount_g,cat_weight_g
```

| Column | What this event's value means |
|---|---|
| `cat_id` | Which cat is involved. |
| `device` | Scale involved: `food`, `water`, `litter`, or `bed`. |
| `start` | Event start time in ISO 8601 format. |
| `end` | Event end time in ISO 8601 format. |
| `type` | Event kind: `eat`, `drink`, `refill`, `spill`, `litter_visit`, or `bed_session`. |
| `amount_g` | Amount consumed for `eat`/`drink`, litter output for `litter_visit`, cat weight for `bed_session`, or simulated weight drop for `spill`; blank for `refill`. Water amounts are grams, approximately equal to millilitres. |
| `cat_weight_g` | Cat's weight during `litter_visit` or `bed_session`, in grams; blank for other event types. For a bed session, this duplicates the cat-weight value in `amount_g`. |

Each eating, drinking, or litter-visit row describes only that event's share
of the daily total. Summing `eat`, `drink`, and litter-visit `amount_g` by cat
and date should match `food_g`, `water_ml`, and `litter_output_g` in
`truth_daily.csv`; counting litter-visit rows should match `litter_visits`.
Refills and spills are included as known events for testing; they are not
consumption.

#### `output/readings.csv`

**One data row represents one measurement from one cat's scale.** Rows are
ordered by timestamp, then cat and device. A stable scale sends occasional
heartbeats; active or changing scales send a burst of readings.

```csv
cat_id,device,timestamp,grams
```

| Column | What this reading's value means |
|---|---|
| `cat_id` | Which cat's scale produced the measurement. |
| `device` | Scale measured: `food`, `water`, `litter`, or `bed`. |
| `timestamp` | Measurement time in ISO 8601 format. |
| `grams` | The scale's measured total weight in grams, including the bowl/contents, box/litter, or bed/cat as applicable. It is not the amount consumed. |

For bowl events, compare the stable weight before and after the event to
estimate consumption. A refill raises the measured weight; evaporation slowly
lowers water-bowl weight. Litter readings include the box baseline and any
litter output left behind. Bed readings include the bed baseline and the cat
when present.

## Settings

Defaults are built into `generate.py` and `scale.py`. A local `simulator/.env`
overrides them; `.env.example` documents the current values.

| Setting | Default | Used for |
|---|---:|---|
| `DAYS` | `60` | Number of simulation days |
| `SEED` | `42` | Repeatable daily variation and event scheduling |
| `START_DATE` | `2026-09-10` | Date assigned to simulation day 1 |
| `ONSET_DAY` | `40` | First day of gradual scenario changes |
| `OUTPUT_DIR` | `output` | Output folder, relative to `simulator/` unless absolute |
| `BURST_SAMPLE_SEC` | `1` | Reading interval during scale activity, in seconds |
| `HEARTBEAT_SEC` | `3600` | Reading interval while scale is stable, in seconds |
| `NOISE_G` | `0.5` | Maximum absolute sensor noise, in grams |
| `EVAPORATION_G_PER_HR` | `0.4` | Water lost to evaporation, in grams/hour |
| `FOOD_BOWL_FULL_G` | `400` | Full food-bowl weight, container included |
| `WATER_BOWL_FULL_G` | `900` | Full water-bowl weight, container included |
| `LITTER_BOX_BASE_G` | `6000` | Empty litter-box scale baseline |
| `BED_BASE_G` | `1500` | Empty bed-scale baseline |
| `BREATH_AMP_G` | `0` | Optional breathing-wave amplitude; zero disables it |

To generate a short sample, change `DAYS` in `.env`; restore it to `60` for the
full run. Keep `SEED` the same to reproduce the same files.

## Run and verify

1. Fill in the cat baselines in `baseline.py`. Optionally add age and sex in
   `CAT_METADATA`; they will only be copied into `cats.json`.
2. Check the scenario assignments in `scenarios.py`. Use the same cat IDs as
   the baselines and metadata.
3. Optionally copy `.env.example` to `.env` and adjust `DAYS`, `SEED`,
   `START_DATE`, or scale settings.
4. From `simulator/`, activate the repository's `.venv` and run
   `python generate.py`.
5. Confirm all four output files exist and contain the expected headers and
   cat IDs.
6. Compare event sums with daily truth: eating amounts should match `food_g`,
   drink amounts should match `water_ml`, litter outputs should match
   `litter_output_g`, and visit counts should match `litter_visits`.
7. Plot a water-bowl day and confirm consumption drops, refill jumps,
   evaporation drift, and quiet hourly check-ins are visible. Plot a litter
   day and confirm visits create plateaus, output raises the baseline, and
   scooping lowers it.
8. Run the same command with the same settings and seed again; the generated
   files should be identical.

With the current settings and seed, a four-cat, 60-day run produces about
230,000 readings (roughly 9 MB). This varies with the simulated event counts.
Generated CSV and JSON files are ignored by git; do not commit them. Share a
small generated sample with the sensors teammate so processing can be tested
before using the full dataset.
