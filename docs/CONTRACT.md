# 📜 The Contract (read this first, everyone)

This is the one file that lets four people build in parallel. **Don't change it without telling the whole team.**

## Who owns what

| Folder | Owner | Builds |
|---|---|---|
| `simulator/` | Person 2 | Fake "virtual cat" daily data |
| `engine/` | Person 3 | Baseline, anomaly, trend, status rules |
| `backend/` | Person 3 | FastAPI that serves results to the app |
| `vision/` | Person 1 | Camera demo: cat detection + zones |
| `mobile/` | Person 4 | The Expo phone app |

```
simulator ──► simulator/output/daily.csv ──► engine ──► backend (API) ──► mobile
vision    ──► live camera demo (separate)
```

## 1. Daily data format (simulator → engine)

File: `simulator/output/daily.csv`. **One row per cat per day.**

| Column | Type | Example | Meaning |
|---|---|---|---|
| `cat_id` | string | `luna` | lowercase id, no spaces |
| `date` | YYYY-MM-DD | `2026-11-01` | the day |
| `water_ml` | float | `190` | water drunk that day |
| `food_g` | float | `58` | food eaten that day |
| `litter_visits` | int | `5` | litter box visits |
| `litter_avg_sec` | float | `95` | average visit length in seconds |
| `active_min` | float | `140` | minutes active |
| `sleep_breaths` | float | `22` | sleeping breaths per minute |
| `weight_kg` | float | `4.2` | body weight |

Cat info: `simulator/output/cats.json`

```json
[{ "cat_id": "luna", "name": "Luna", "age": 8, "sex": "female", "scenario": "slow_drinking" }]
```

## 2. Status levels (engine → backend → mobile)

Exactly these four strings, everywhere:

| Level | App label | Colour |
|---|---|---|
| `good` | All good | green |
| `blip` | Minor blip | blue |
| `vet` | Worth a vet visit | amber |
| `urgent` | Call your vet now | red |

## 3. API response (backend → mobile)

`GET /cats/{cat_id}/status`

```json
{
  "cat_id": "luna",
  "name": "Luna",
  "updated": "2026-11-08T10:00:00Z",
  "level": "blip",
  "message": "Luna drank a bit more yesterday. Nothing to do yet, we're watching.",
  "tiles": [
    { "key": "water",  "label": "Water up",  "ok": false },
    { "key": "food",   "label": "Food ok",   "ok": true },
    { "key": "litter", "label": "Litter ok", "ok": true },
    { "key": "sleep",  "label": "Sleep ok",  "ok": true }
  ],
  "details": {
    "changed": "Water 260 ml yesterday vs her usual 190 ml. Everything else normal.",
    "maybe_nothing": "Warm day, dry food, or play. We'll recheck over the next 48 hours.",
    "call_if": "She stops eating, vomits more than once, or strains in the litter box."
  }
}
```

Other endpoints:
- `GET /health` → `{ "ok": true }`
- `GET /cats` → list of `{ cat_id, name, level }`
- `GET /cats/{cat_id}/history?days=30` → daily rows for charts (only for "See more")
- `GET /cats/{cat_id}/vet-report` → report JSON

## 4. Golden rules

1. **Rules decide, AI explains.** The LLM never picks the level.
2. **When unsure, say "call your vet."** Never "you don't need a vet."
3. **Minimal by default.** The app shows status + one sentence + tiles; details only on "See more."
4. **Never commit `.env`.** Only `.env.example` goes in git.
