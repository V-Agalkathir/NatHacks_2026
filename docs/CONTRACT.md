# 📜 The Contract (read this first, everyone)

This is the one file that lets four people build in parallel. **Don't change it without telling the whole team.**

## Who owns what

| Person | Team | Folder | Branch | Builds |
|---|---|---|---|---|
| 1 | Mobile | `mobile/` | `mobile` | The Expo phone app |
| 2 | Backend | `engine/` | `engine` | Baseline, anomaly, trend, status rules |
| 3 | Backend | `backend/` | `backend` | FastAPI routes, mock mode, vet report |
| 4 | Data | `simulator/` | `simulator` | Fake scale hardware: raw weight readings |
| 5 | Data | `sensors/` | `sensors` | Raw readings → events → daily totals |

**Stay in your own folder.** That way branches almost never conflict.

```
simulator ─► output/readings.csv ─► sensors ─► output/events.csv
                                            └► output/daily.csv ─► engine ─► backend ─► mobile
```

The `sensors/` code is what would run on real scales later. Only `simulator/` gets replaced when hardware arrives.

## The four scales

| Device | What it weighs | What we get |
|---|---|---|
| `food` | Food bowl | Grams eaten (decreases only) |
| `water` | Water bowl | ml drunk (decreases only, 1 g ≈ 1 ml) |
| `litter` | Whole litter box | Visits, visit length, cat weight, output |
| `bed` | Flat scale under the bed | Nightly weight, rest time |

## 1. Raw readings (simulator → sensors)

File: `simulator/output/readings.csv`. One row per reading. Like real battery-powered scales, each device sends a **burst** (one reading every `BURST_SAMPLE_SEC`) only while its weight is changing, plus a **heartbeat** every `HEARTBEAT_SEC` when stable. Readings are **not** evenly spaced. Expect ~700 rows per device per day (~25 MB for 4 cats × 60 days).

| Column | Type | Example |
|---|---|---|
| `cat_id` | string | `luna` |
| `device` | string | `food` / `water` / `litter` / `bed` |
| `timestamp` | ISO 8601 | `2026-11-01T08:14:05` |
| `grams` | float | `2843.5` |

Cat info: `simulator/output/cats.json`

```json
[{ "cat_id": "luna", "name": "Luna", "age": 8, "sex": "female", "scenario": "blip" }]
```

For testing only, the simulator also writes `simulator/output/truth_daily.csv` (the true daily values, same columns as section 3). `sensors/` must **never** read it; it's only for checking accuracy.

## 2. Events (sensors, intermediate)

File: `sensors/output/events.csv`

| Column | Example | Meaning |
|---|---|---|
| `cat_id` | `luna` | |
| `device` | `water` | |
| `start` | `2026-11-01T08:14:05` | when the disturbance began |
| `end` | `2026-11-01T08:14:41` | when the scale settled |
| `type` | `drink` | `eat`, `drink`, `refill`, `spill`, `litter_visit`, `bed_session` |
| `amount_g` | `12.4` | consumed (eat/drink), output (litter), cat weight (bed) |
| `cat_weight_g` | `4210` | only for `litter_visit` and `bed_session` |

## 3. Daily totals (sensors → engine)

File: `sensors/output/daily.csv`. **One row per cat per day.**

| Column | Type | Example | From |
|---|---|---|---|
| `cat_id` | string | `luna` | |
| `date` | YYYY-MM-DD | `2026-11-01` | |
| `water_ml` | float | `190` | sum of `drink` events |
| `food_g` | float | `58` | sum of `eat` events |
| `litter_visits` | int | `4` | count of `litter_visit` |
| `litter_avg_sec` | float | `95` | average visit length |
| `litter_output_g` | float | `110` | sum of litter output |
| `weight_kg` | float | `4.21` | median of the night's bed weights |
| `rest_min` | float | `780` | total `bed_session` time |
| `sleep_breaths` | float or empty | `22` | stretch goal; leave empty if not built |

## 4. Status levels (engine → backend → mobile)

Exactly these four strings, everywhere:

| Level | App label | Colour |
|---|---|---|
| `good` | All good | green |
| `blip` | Minor blip | blue |
| `vet` | Worth a vet visit | amber |
| `urgent` | Call your vet now | red |

## 5. API response (backend → mobile)

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
    { "key": "weight", "label": "Weight ok", "ok": true }
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
- `GET /cats/{cat_id}/history?days=30` → daily rows (only for "See more")
- `GET /cats/{cat_id}/vet-report` → report JSON

## 6. Golden rules

1. **Rules decide, AI explains.** The LLM never picks the level.
2. **When unsure, say "call your vet."** Never "you don't need a vet."
3. **Minimal by default.** Status + one sentence + tiles; details only on "See more."
4. **`sensors/` never peeks at `truth_daily.csv`.** It must work from raw readings alone, like real hardware.
5. **Never commit `.env`.** Only `.env.example` goes in git.
