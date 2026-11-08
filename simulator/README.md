# 🐱 Simulator — Person 2

**Goal:** generate realistic daily data for "virtual cats," including cats that slowly or suddenly get sick, so the engine has something to detect.

Output must match `docs/CONTRACT.md` section 1 exactly.

## Files to build

| File | Does |
|---|---|
| `generate.py` | Main script: reads `.env`, writes `output/daily.csv` and `output/cats.json` |
| `scenarios.py` | Functions that bend a healthy routine into each scenario |

## Run

```bash
source ../.venv/bin/activate
python generate.py
```

## Step 1: a healthy cat

For each day, start from a normal value and add small random noise:

| Column | Normal | Daily noise |
|---|---|---|
| `water_ml` | 180–220 | ±10% |
| `food_g` | 50–65 | ±8% |
| `litter_visits` | 3–6 | ±1 |
| `litter_avg_sec` | 60–120 | ±15% |
| `active_min` | 100–180 | ±20% |
| `sleep_breaths` | 18–26 | ±2 |
| `weight_kg` | 3.5–5.5 | ±0.5% |

Pick each cat's own normal once, then add noise per day. Use `SEED` from `.env` so results are repeatable.

## Step 2: scenarios (`scenarios.py`)

Each scenario starts at `ONSET_DAY` and changes the healthy values:

| Scenario | What changes | Expected status |
|---|---|---|
| `healthy` | nothing | 🟢 good |
| `blip` | water +35% for 1 day only | 🔵 blip |
| `slow_drinking` | water and litter visits rise ~3% per day; weight drops slowly | 🟡 vet |
| `weight_loss` | weight drops ~0.3% per day, food slightly down | 🟡 vet |
| `litter_emergency` | last 1–2 days: litter visits ×4, avg visit length ×0.3 | 🔴 urgent |
| `not_eating` | last 2 days: food down 70%, activity down 40% | 🔴 urgent |

## Step 3: default cats

Make 4 cats so the demo shows every colour:

| cat_id | name | scenario |
|---|---|---|
| `mochi` | Mochi | healthy |
| `luna` | Luna | blip |
| `tiger` | Tiger | slow_drinking |
| `oscar` | Oscar | litter_emergency |

## Done when

- [ ] `output/daily.csv` has `CATS × DAYS` rows with the exact columns
- [ ] `output/cats.json` lists each cat with its scenario
- [ ] A quick plot of Tiger's water shows a clear upward trend after onset
- [ ] Running twice with the same `SEED` gives identical files

## Tips

- Keep values realistic; judges may ask.
- Values can't go negative; clip at 0.
- Commit a small sample CSV early so Person 3 can start the engine right away.
