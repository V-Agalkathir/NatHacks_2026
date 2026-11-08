# 🐾 UI concept (design recommendation)

A clickable prototype of a cute, cartoon-style Purrcast app. It's a **design suggestion** for the `mobile/` app, not a replacement for it.

## Open it

Double-click `index.html`, or open it in a browser. Use your phone's width (or the browser's mobile view) to see it as intended.

**With the real backend:** start the backend, then open
`index.html?api=http://localhost:8000`.
Without `?api=`, it uses built-in examples copied from the engine's output.

## Flow

1. **Welcome:** one sentence and one button.
2. **Add your cat:** photo (tap the sticker), name, age, girl/boy. Saved in the browser.
3. **Home:** the cat's photo in a "sticker" with ears, one message in a speech bubble, four tiles, and "See more."
4. **Right now:** Purrcast's own cartoon mascot acts out what the cat is doing: lapping water, chomping kibble, napping with floating Z's, or sitting in the litter box.
5. **See more:** what changed, things to check, when to contact the vet.

The chips at the bottom of Home are prototype-only, for previewing every status and activity in a demo.

**Hooking up the mascot for real:** the activity should come from the sensors' latest event (`drink`, `eat`, `litter_visit`, `bed_session` in `sensors/output/events.csv`), e.g. through a new backend endpoint like `GET /cats/{id}/now`. Map those to the scenes `drink`, `eat`, `litter`, `sleep`; anything else shows `idle`.

## Design choices (to reuse in `mobile/`)

| Token | Value | Used for |
|---|---|---|
| Bowl | `#E3F2EF` | page background |
| Ink | `#2E2140` | outlines and text |
| Nose | `#FF8FAB` | main buttons |
| Butter | `#FFD66B` | highlights, selected options |
| good / blip / vet / urgent | `#7FD8A4` / `#8EC9FF` / `#FFC94D` / `#FF6B5E` | status colour |

- **Font:** Fredoka (Google Fonts), weights 400–700.
- **Cartoon style:** 3 px plum outlines, flat fills, hard offset shadows (`4px 4px 0`), no gradients.
- **Status colour** flows into the sticker ring, ears, speech-bubble badge and changed tiles, so the state is readable at a glance.
- **Minimal by default:** home shows one sentence and four tiles; everything else is behind "See more."
- **Wording** follows the engine: patterns, not diagnoses.
