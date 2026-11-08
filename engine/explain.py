"""Step 5: turn the decision into plain words for the owner.

Builds everything the app shows (docs/CONTRACT.md section 5):
  message  - one sentence on the home screen
  tiles    - water / food / litter / weight, each ok or not
  details  - "See more": changed, maybe_nothing, call_if

Template sentences always work with no API key. If USE_LLM=true, polish()
lets an LLM reword them in a friendlier tone, but it is only given the level
and facts. It never chooses the level (golden rule #1).
"""
import os

from . import config

# metric -> (display name, unit)
LABELS = {
    "water_ml": ("Water", "ml"),
    "food_g": ("Food", "g"),
    "litter_visits": ("Litter visits", ""),
    "litter_avg_sec": ("Litter visit length", "s"),
    "litter_output_g": ("Litter output", "g"),
    "weight_kg": ("Weight", "kg"),
    "rest_min": ("Rest time", "min"),
}

# The 4 tiles on the home screen and which metrics feed each one
TILE_GROUPS = {
    "water": ["water_ml"],
    "food": ["food_g"],
    "litter": ["litter_visits", "litter_avg_sec", "litter_output_g"],
    "weight": ["weight_kg"],
}

# Short phrases for the blip message: (if it went up, if it went down)
BLIP_PHRASES = {
    "water_ml": ("drank a bit more", "drank a bit less"),
    "food_g": ("ate a bit more", "ate a bit less"),
    "litter_visits": ("used the litter box more", "used the litter box less"),
    "litter_avg_sec": ("spent longer in the litter box", "had shorter litter visits"),
    "litter_output_g": ("had more litter output", "had less litter output"),
    "weight_kg": ("weighed a bit more", "weighed a bit less"),
    "rest_min": ("rested more", "rested less"),
}

# Harmless explanations, shown only for blips
MAYBE_NOTHING = {
    "water_ml": "A warm day, dry food, or extra play.",
    "food_g": "A new food, treats, or a busy day.",
    "litter_visits": "Drinking a bit more, stress, or a change in routine.",
    "litter_avg_sec": "Fresh litter or a change in routine.",
    "litter_output_g": "Drinking or eating a bit more or less than usual.",
    "weight_kg": "The bed scale was bumped or she ate a big meal.",
    "rest_min": "A cold day, a quiet day, or a busy household.",
}

URGENT_SHORT = {
    "litter_blockage": "is going to the litter box a lot with almost no output",
    "not_eating": "has barely eaten for 2 days",
}


def pronouns(cat: dict) -> tuple[str, str]:
    """('She', 'her') / ('He', 'his') / ('They', 'their') from cats.json sex."""
    sex = str(cat.get("sex", "")).lower()
    if sex == "female":
        return "She", "her"
    if sex == "male":
        return "He", "his"
    return "They", "their"


def fmt(metric: str, value) -> str:
    """Number + unit, e.g. '190 ml' or '4.21 kg'."""
    if value is None:
        return "no data"
    unit = LABELS.get(metric, ("", ""))[1]
    number = f"{value:.2f}" if metric == "weight_kg" else f"{value:.0f}"
    return f"{number} {unit}".strip()


def describe(f: dict, cat: dict) -> str:
    """One sentence with real numbers for one finding."""
    _, pos = pronouns(cat)
    label = LABELS.get(f["metric"], (f["metric"], ""))[0]
    value, usual = f.get("value"), f.get("usual")
    kind = f["kind"]

    if kind == "trend":
        direction = "rising" if f["pct_per_week"] > 0 else "falling"
        return (f"{label} has been slowly {direction} (about {abs(f['pct_per_week']):.0f}% "
                f"a week): {fmt(f['metric'], value)} yesterday vs {pos} usual {fmt(f['metric'], usual)}.")
    if kind == "weight_drop":
        pct = (1 - value / usual) * 100 if value and usual else 0
        return f"Weight is {fmt('weight_kg', value)} vs {pos} usual {fmt('weight_kg', usual)} ({pct:.0f}% down)."
    if kind == "drink_and_pee":
        return "Drinking more and leaving more in the litter box at the same time."
    if kind == "eat_less_lose_weight":
        return (f"Eating less ({fmt('food_g', value)} yesterday vs {pos} usual {fmt('food_g', usual)}) "
                f"while slowly losing weight.")
    if kind == "litter_blockage":
        return (f"{value:.0f} litter visits yesterday (usually about {usual:.0f}) "
                f"with almost no output.")
    if kind == "not_eating":
        return f"Ate only {fmt('food_g', value)} yesterday vs {pos} usual {fmt('food_g', usual)}."
    # spike / multi: one day's value vs normal
    when = "yesterday" if f.get("days_ago", 1) == 1 else "2 days ago"
    return f"{label} {fmt(f['metric'], value)} {when} vs {pos} usual {fmt(f['metric'], usual)}."


def build_message(level: str, findings: list[dict], cat: dict) -> str:
    """The one sentence on the home screen."""
    name = cat.get("name", cat.get("cat_id", "Your cat"))
    if level == "good":
        return f"{name} is doing great. Nothing to do."
    if level == "blip":
        f = findings[0]
        up, down = BLIP_PHRASES.get(f["metric"], ("changed a bit", "changed a bit"))
        phrase = up if (f.get("z") or 0) > 0 else down
        when = "yesterday" if f.get("days_ago", 1) == 1 else "recently"
        return f"{name} {phrase} {when}. Nothing to do yet, we're watching."
    if level == "vet":
        return f"{name} has a slow change worth checking. Book a vet visit this week."
    short = URGENT_SHORT.get(findings[0]["kind"], "shows a warning sign")
    return f"{name} {short}. Call your vet or an emergency clinic now."


def build_tiles(level: str, findings: list[dict], last_row) -> list[dict]:
    """Four tiles: 'Water up', 'Food ok', ... ok=False if that area was flagged."""
    flagged = {f["metric"]: f for f in findings}
    tiles = []
    for key, metrics in TILE_GROUPS.items():
        name = key.capitalize()
        # Scale offline yesterday: say so instead of pretending it's fine
        if all(m not in last_row or last_row.get(m) is None or last_row.get(m) != last_row.get(m)
               for m in metrics):
            tiles.append({"key": key, "label": f"{name}: no data", "ok": False})
            continue
        hit = next((flagged[m] for m in metrics if m in flagged), None)
        if hit is None:
            tiles.append({"key": key, "label": f"{name} ok", "ok": True})
            continue
        v, u = hit.get("value"), hit.get("usual")
        if hit["kind"] == "trend":
            word = "up" if hit["pct_per_week"] > 0 else "down"
        elif v is not None and u is not None:
            word = "up" if v > u else "down"
        else:
            word = "changed"
        if key == "litter" and hit["kind"] == "litter_blockage":
            word = "problem"
        tiles.append({"key": key, "label": f"{name} {word}", "ok": False})
    return tiles


def build_details(level: str, findings: list[dict], cat: dict) -> dict:
    """The 'See more' text: what changed, maybe nothing, when to call the vet."""
    subj, pos = pronouns(cat)
    if findings:
        changed = " ".join(describe(f, cat) for f in findings)
        if level == "blip":
            changed += " Everything else normal."
    else:
        changed = f"Everything is within {pos} normal range."

    maybe_nothing = ""
    if level == "blip":
        maybe_nothing = (MAYBE_NOTHING.get(findings[0]["metric"], "Small day-to-day changes are normal.")
                         + " We'll recheck over the next 48 hours.")

    # Golden rule #2: always tell the owner when to call. Never "no vet needed".
    call_if = {
        "good": f"{subj} stops eating, vomits more than once, or strains in the litter box.",
        "blip": f"{subj} stops eating, vomits more than once, or strains in the litter box.",
        "vet": f"Don't wait for the appointment if {subj.lower()} stops eating, hides, vomits, or strains in the litter box.",
        "urgent": "Now. Don't wait to see if it passes. Straining with little or no urine can be life-threatening within hours.",
    }[level]

    return {"changed": changed, "maybe_nothing": maybe_nothing, "call_if": call_if}


def polish(result: dict) -> dict:
    """Optional: let an LLM reword message + details. Never changes level or tiles.

    Only runs when USE_LLM=true and GEMINI_API_KEY is set. Any error returns the
    template text unchanged, so the app always works.
    """
    if not config.USE_LLM or not os.getenv("GEMINI_API_KEY"):
        return result
    try:
        import json
        from google import genai

        client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
        prompt = (
            "Rewrite these cat-health notes in a warm, short, plain tone for the owner. "
            "Keep every number and fact. Do not change the meaning or urgency, do not add "
            "medical claims, never say the cat doesn't need a vet. Return JSON with keys "
            "message, changed, maybe_nothing, call_if.\n"
            f"Level (fixed, do not change): {result['level']}\n"
            + json.dumps({"message": result["message"], **result["details"]})
        )
        resp = client.models.generate_content(model="gemini-2.5-flash", contents=prompt)
        text = resp.text.strip().removeprefix("```json").removesuffix("```").strip()
        new = json.loads(text)
        result["message"] = new.get("message", result["message"])
        for k in ("changed", "maybe_nothing", "call_if"):
            result["details"][k] = new.get(k, result["details"][k])
    except Exception:
        pass  # fall back to the template text
    return result
