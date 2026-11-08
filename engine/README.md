# 🧠 Engine — Person 3

**Goal:** turn a cat's daily rows into one status (`good` / `blip` / `vet` / `urgent`) plus a short explanation.

Input: `sensors/output/daily.csv`. Output: the status object in `docs/CONTRACT.md` section 5.

Until Person 1's `sensors/` works, point `DATA_PATH` at `simulator/output/truth_daily.csv` (same columns) so you're never blocked.

## Files to build

| File | Does |
|---|---|
| `baseline.py` | Mean and standard deviation per metric from the first `BASELINE_DAYS` |
| `anomaly.py` | z-score for each metric today: `(today - mean) / std` |
| `trends.py` | Linear slope over the last `TREND_WINDOW_DAYS`; % change per week |
| `rules.py` | **Decides the level.** Keep it short and readable; judges may ask to see it |
| `explain.py` | Turns findings into plain sentences. Template text first, LLM optional |
| `run.py` | `assess(cat_id) -> dict` that the backend calls |

## Decision rules (`rules.py`)

Check from most to least serious. First match wins.

**🔴 urgent**
- `litter_visits` z ≥ `URGENT_Z` **and** `litter_output_g` below 30% of baseline (many visits, little output: possible blockage)
- `food_g` below 40% of baseline for 2+ days
- `sleep_breaths` above 35 for 2+ days (only if the stretch goal is built; skip empty values)

**🟡 vet**
- Any metric with a steady trend ≥ `TREND_PCT_PER_WEEK` for `TREND_WINDOW_DAYS`
- Two or more metrics with z ≥ 2 at the same time
- Weight down 5%+ from baseline
- `water_ml` and `litter_output_g` both trending up (drinking more and peeing more together)

**🔵 blip**
- One metric with z ≥ `BLIP_Z` for 1–2 days, no trend

**🟢 good**
- None of the above

## Explanations (`explain.py`)

Each result needs three short sentences for "See more":
- `changed`: what moved, with numbers
- `maybe_nothing`: harmless causes (only for `blip`)
- `call_if`: specific signs that should make the owner call the vet

Write template sentences first so the app works without any API key. If `USE_LLM=true`, let the LLM rewrite them in a friendlier tone, **but give it the level and facts; never ask it to decide.**

## Done when

- [ ] Each default cat gets the expected level (see simulator README table)
- [ ] `python -m engine.run` prints all 4 cats and their levels
- [ ] Every result has `message`, `tiles`, and `details`
- [ ] Works with `USE_LLM=false`

## Tip

Write a tiny test: run the engine on each scenario and assert the expected level. When someone tweaks a threshold, you'll know immediately if a demo cat broke.
