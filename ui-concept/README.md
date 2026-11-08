# 🐾 UI concept (design recommendation)

A clickable prototype of a cute, cartoon-style Purrcast app, running on the real simulated data. It's a **design suggestion** for the `mobile/` app, not a replacement for it.

## Run it with the whole pipeline

From the repo root:

```bash
# 1. Make the data (once, or after changing the simulator)
cd simulator && python generate.py && cd ..
python -m sensors.run

# 2. Terminal 1: backend
cd backend
uvicorn main:app --reload --port 8000

# 3. Terminal 2: the UI
cd ui-concept
python -m http.server 5500
```

Open http://localhost:5500. It finds the backend at `localhost:8000` automatically (or pass `?api=http://...`). If the backend isn't running, it falls back to built-in examples so the demo never breaks.

## Demo flow

1. **Create account:** name, email, vet clinic.
2. **Add your cat:** photo, name, age, weight, girl/boy, known conditions. The **coat colour is picked from the photo** and used for the cartoon mascot; the owner can change it.
3. **Pair your scales:** tap Scan on the food, water, litter and bed scales (faked). The demo box picks which simulated cat's data to use: Mochi (steady), Luna (one odd day), Lena (slow change), Oscar (urgent pattern).
4. **Learning the routine:** "Your first daily summary arrives in 14 days." The owner's details are context; the engine learns the cat's normal from the sensor data.
5. **Jump ahead to day 60:** the home screen runs on the real engine output.
   - Status in a speech bubble; the ring and ears take the status colour.
   - **Right now:** the mascot, in the cat's coat colour, acts out the latest real sensor event (`GET /cats/{id}/now`): drinking, eating, litter box, or napping. It always stays calm; the text and colours carry the status.
   - **See more:** what changed, things to check, when to contact the vet (plus the owner's vet clinic).
   - **This week:** the last 7 days vs the cat's usual for water, food, litter visits and weight, and how many unreliable readings were skipped.

The simulated cat's name and pronouns are swapped for the owner's cat, so it feels like their own.

## Design tokens (to reuse in `mobile/`)

| Token | Value | Used for |
|---|---|---|
| Bowl | `#E3F2EF` | page background |
| Ink | `#2E2140` | outlines and text |
| Nose | `#FF8FAB` | main buttons |
| Butter | `#FFD66B` | highlights, selected options |
| good / blip / vet / urgent | `#7FD8A4` / `#8EC9FF` / `#FFC94D` / `#FF6B5E` | status colour |

- **Font:** Fredoka (Google Fonts).
- **Cartoon style:** 3 px plum outlines, flat fills, hard offset shadows (`4px 4px 0`), no gradients.
- **Wording** follows the engine: patterns, not diagnoses.

## Pitch notes

- **Two cats, one home:** the litter scale can tell cats apart by the size of the weight jump (e.g. 4.2 kg vs 5.0 kg). The prototype assumes one cat per home.
- **Owner input isn't the baseline:** age, weight and conditions are context; the cat's normal comes from ~2 weeks of sensor data.
