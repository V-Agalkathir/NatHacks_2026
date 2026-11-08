# 🐱 Simulator — Person 4 (data pair)

**Branch:** `simulator` · **Pair:** Person 5 (sensors) · **Feeds:** Person 5, and Person 2 via `truth_daily.csv`

**Goal:** pretend to be four real scales. Produce the raw, messy weight readings that real hardware would send, including cats that slowly or suddenly get sick.

Output must match `docs/CONTRACT.md` section 1.

## Files to build

| File | Does |
|---|---|
| `generate.py` | Main script: writes `output/readings.csv`, `output/cats.json`, `output/truth_daily.csv` |
| `daily_plan.py` | Decides each cat's true daily values (healthy routine + scenario) |
| `scale.py` | Turns a day's plan into raw readings per device, with realistic noise |

Run:

```bash
source ../.venv/bin/activate
python generate.py
```

## Step 1: the true daily plan (`daily_plan.py`)

Pick each cat's own normal once, then add small daily noise. Use `SEED` so it's repeatable.

| Value | Typical range | Daily noise |
|---|---|---|
| Water drunk | 150–250 ml | ±10% |
| Food eaten | 45–70 g | ±8% |
| Litter visits | 3–5 | ±1 |
| Litter visit length | 60–150 s | ±15% |
| Litter output | 80–140 g | ±15% |
| Weight | 3.5–5.5 kg | ±0.5% |
| Time on bed | 600–900 min | ±15% |

These are starting assumptions for a healthy adult indoor cat; check them against a vet source and cite it in the main README.

Write these true values to `output/truth_daily.csv` (same columns as contract section 3).

## Step 2: scenarios

Each starts at `ONSET_DAY` and changes the healthy plan:

| Scenario | What changes | Expected status |
|---|---|---|
| `healthy` | nothing | 🟢 good |
| `blip` | water +35% for 1 day only | 🔵 blip |
| `slow_drinking` | water and litter output rise ~3%/day; weight drifts down | 🟡 vet |
| `weight_loss` | weight −0.3%/day; food slightly down | 🟡 vet |
| `litter_emergency` | last 1–2 days: visits ×4, visit length ×0.3, output near 0 | 🔴 urgent |
| `not_eating` | last 2 days: food −70%, time on bed up | 🔴 urgent |

Default cats:

| cat_id | name | scenario |
|---|---|---|
| `mochi` | Mochi | healthy |
| `luna` | Luna | blip |
| `tiger` | Tiger | slow_drinking |
| `oscar` | Oscar | litter_emergency |

## Step 3: raw readings (`scale.py`)

One reading per device every `SAMPLE_SEC` seconds. Every reading gets small sensor noise (±`NOISE_G`).

**Food and water bowls**
- Start each bowl at a full weight (container + contents).
- Split the day's total into 6–12 meals or drinks at random times.
- During each one (10–60 s): readings jump around (head and paw bumps), then settle **lower** by that amount.
- **Refills:** every 1–2 days, the bowl jumps **up** to full. The sensors code must ignore these.
- **Water evaporation:** a slow constant drop of `EVAPORATION_G_PER_HR`.
- **Occasional spill** (about once a week): a sudden drop with no cat. Sensors should flag it, not count it.

**Litter box**
- Baseline = box + litter (e.g. 6000 g).
- Each visit: reading rises by the cat's weight, wobbles for the visit length, then falls back to baseline **plus the output**.
- **Scooping:** once a day the baseline drops back down.

**Bed**
- Baseline = bed weight.
- Sessions: reading rises by the cat's weight for long stretches, mostly at night.
- Stretch goal: add a tiny wave (±`BREATH_AMP_G`) at the breathing rate while the cat lies still.

## Size tip

At `SAMPLE_SEC=5`, 4 devices × 4 cats × 60 days is about 2.8 million rows. That's fine for pandas, but if it's slow, use `SAMPLE_SEC=10` or 30 days while developing.

## Done when

- [ ] `readings.csv`, `cats.json`, `truth_daily.csv` generated with the exact columns
- [ ] Plotting one water bowl day shows drinks (drops), a refill (jump up), and slow evaporation
- [ ] Plotting one litter day shows visits as plateaus and the baseline creeping up
- [ ] Same `SEED` → identical files

**Ship a small sample early** (2 cats, 3 days) so Person 5 can start building `sensors/` right away. Also tell Person 2 when `truth_daily.csv` exists; the engine can run on it before `sensors/` is done.
