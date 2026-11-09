"""Step 5: turn the decision into plain, neutral words for the owner.

Builds everything the app shows (docs/CONTRACT.md section 5):
  message  - one sentence on the home screen
  tiles    - water / food / litter / weight: "steady", "up" or "down"
  details  - "See more": changed, maybe_nothing (things to check), call_if

Wording rules (agreed with the team):
  - Describe PATTERNS, never judge health. Say "consistent", not "healthy" or "ok".
  - Make no medical claims or diagnoses.
  - Always point to the vet for anything else the owner notices.
  - Urgent stays calm but is never softened: a blockage can be life-threatening.

Template sentences always work with no API key. If USE_LLM=true, polish()
lets an LLM reword them, but it is only given the level and facts. It never
chooses the level (golden rule #1).
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

# How to describe a change in each metric, as (one day in the past, ongoing).
# {pct} = size of the change in %, {more} = "more" or "less".
PHRASES = {
    "water_ml": ("drank about {pct}% {more} than usual",
                 "has been drinking about {pct}% {more} than usual"),
    "food_g": ("ate about {pct}% {more} than usual",
               "has been eating about {pct}% {more} than usual"),
    "litter_visits": ("used the litter box about {pct}% {more} often than usual",
                      "has been using the litter box about {pct}% {more} often than usual"),
    "litter_avg_sec": ("spent about {pct}% {more} time per litter visit than usual",
                       "has been spending about {pct}% {more} time per litter visit than usual"),
    "litter_output_g": ("left about {pct}% {more} in the litter box than usual",
                        "has been leaving about {pct}% {more} in the litter box than usual"),
    "weight_kg": ("weighed about {pct}% {more} than usual",
                  "has been weighing about {pct}% {more} than usual"),
    "rest_min": ("rested about {pct}% {more} than usual",
                 "has been resting about {pct}% {more} than usual"),
}

# Gentle questions for the owner when a pattern changes (shown for blip and vet).
# These point at everyday causes; they are suggestions, not explanations.
THINGS_TO_CHECK = {
    "water_ml": "Is {pos} water bowl in a warm spot? Has {pos} food changed (dry vs wet)? "
                "Has {subj_l} been more active?",
    "food_g": "Has {pos} food or treat routine changed? Has anything new been stressing {obj}?",
    "litter_visits": "Has the litter or the box's location changed? "
                     "Is {subj_l} straining or crying in the box?",
    "litter_avg_sec": "Has the litter changed? Is {subj_l} straining in the box?",
    "litter_output_g": "Has {pos} drinking or food changed recently?",
    "weight_kg": "Have {pos} food or portions changed? Is {subj_l} eating less than usual?",
    "rest_min": "Has the weather or household routine changed? Is {subj_l} hiding more than usual?",
}

# Purrcast watches habits; it cannot catch every illness. Said wherever "all is well" might be assumed.
LIMITS = "Purrcast tracks changes in habits and measurements; it can't detect every illness."


def pronouns(cat: dict) -> dict:
    """Pronouns from cats.json sex: she/her, he/him/his, or they/their."""
    sex = str(cat.get("sex", "")).lower()
    if sex == "female":
        p = {"subj": "She", "obj": "her", "pos": "her"}
    elif sex == "male":
        p = {"subj": "He", "obj": "him", "pos": "his"}
    else:
        p = {"subj": "They", "obj": "them", "pos": "their"}
    p["subj_l"] = p["subj"].lower()
    return p


def fmt(metric: str, value) -> str:
    """Number + unit, e.g. '190 ml' or '4.21 kg'."""
    if value is None:
        return "no data"
    unit = LABELS.get(metric, ("", ""))[1]
    number = f"{value:.2f}" if metric == "weight_kg" else f"{value:.0f}"
    return f"{number} {unit}".strip()


def _pct_change(f: dict) -> float | None:
    """How far yesterday's value is from usual, in % (+ is up, - is down)."""
    value, usual = f.get("value"), f.get("usual")
    if value is None or not usual:
        return None
    return (value - usual) / usual * 100


def phrase(f: dict, cat: dict) -> str:
    """A short neutral description of one finding, e.g.
    'she drank about 35% more than usual yesterday'."""
    p = pronouns(cat)
    kind, metric = f["kind"], f["metric"]

    # Combination findings have their own wording
    if kind == "drink_and_pee":
        return f"{p['subj_l']} has been drinking more and leaving more in the litter box"
    if kind == "eat_less_lose_weight":
        return f"{p['subj_l']} has been eating less and slowly losing weight"

    pct = _pct_change(f)
    if pct is None or metric not in PHRASES:
        return f"{p['pos']} {LABELS.get(metric, (metric, ''))[0].lower()} has changed"

    past, ongoing = PHRASES[metric]
    # Weight moves in small steps, so show one decimal place for it
    size = f"{abs(pct):.1f}" if metric == "weight_kg" else f"{abs(pct):.0f}"
    words = {"pct": size, "more": "more" if pct > 0 else "less"}

    if kind in ("trend", "weight_drop"):
        return f"{p['subj_l']} {ongoing.format(**words)}, changing gradually over the last " \
               f"{config.TREND_WINDOW_DAYS} days"
    when = "yesterday" if f.get("days_ago", 1) == 1 else "2 days ago"
    return f"{p['subj_l']} {past.format(**words)} {when}"


def describe(f: dict, cat: dict) -> str:
    """One sentence with the real numbers, for the 'See more' section."""
    pos = pronouns(cat)["pos"]
    label = LABELS.get(f["metric"], (f["metric"], ""))[0]
    value, usual = f.get("value"), f.get("usual")
    kind = f["kind"]

    if kind == "trend":
        direction = "rising" if f["pct_per_week"] > 0 else "falling"
        return (f"{label} has been gradually {direction} (about {abs(f['pct_per_week']):.0f}% "
                f"a week): {fmt(f['metric'], value)} yesterday vs {pos} usual {fmt(f['metric'], usual)}.")
    if kind == "weight_drop":
        pct = (1 - value / usual) * 100 if value and usual else 0
        return f"Weight is {fmt('weight_kg', value)} vs {pos} usual {fmt('weight_kg', usual)} ({pct:.0f}% lower)."
    if kind == "drink_and_pee":
        return "Drinking more and leaving more in the litter box at the same time."
    if kind == "eat_less_lose_weight":
        return (f"Eating less ({fmt('food_g', value)} yesterday vs {pos} usual {fmt('food_g', usual)}) "
                f"while slowly losing weight.")
    if kind == "litter_blockage":
        return (f"{value:.0f} litter visits in the last day (usually about {usual:.0f}) "
                f"with very little left behind.")
    if kind == "not_eating":
        return f"Ate {fmt('food_g', value)} in the last day vs {pos} usual {fmt('food_g', usual)}, for 2 days in a row."
    # spike / multi: one day's value vs normal
    when = "yesterday" if f.get("days_ago", 1) == 1 else "2 days ago"
    return f"{label} {fmt(f['metric'], value)} {when} vs {pos} usual {fmt(f['metric'], usual)}."


COMBOS = ("drink_and_pee", "eat_less_lose_weight")


def headline(findings: list[dict]) -> list[dict]:
    """The findings worth putting in the short message.
    A warning combination already sums up its metrics, so show it alone;
    otherwise show up to 2 findings."""
    combos = [f for f in findings if f["kind"] in COMBOS]
    return combos[:1] if combos else findings[:2]


def build_message(level: str, findings: list[dict], cat: dict) -> str:
    """The one sentence (or two) on the home screen."""
    name = cat.get("name", cat.get("cat_id", "Your cat"))

    if level == "good":
        return (f"{name}'s patterns have been consistent over the last 24 hours. "
                f"If you notice any other symptoms, contact your vet.")

    if level == "urgent":
        f = findings[0]
        tail = "This pattern can need urgent care. Contact your vet or an emergency clinic now."
        if f["kind"] == "litter_blockage":
            return (f"{name} has visited the litter box {f['value']:.0f} times in the last day "
                    f"with very little output. {tail}")
        if f["kind"] == "not_eating":
            return f"{name} has eaten very little for 2 days in a row. {tail}"
        return f"{name} shows a warning pattern. {tail}"

    # blip and vet: describe what changed (up to 2 findings), neutrally
    changes = ", and ".join(phrase(f, cat) for f in headline(findings))
    return f"{name}'s patterns have changed: {changes}."


def build_tiles(level: str, findings: list[dict], last_row) -> list[dict]:
    """Four tiles: 'Water steady', 'Water up', 'Food down', ...
    ok=False only means 'this area changed', so the app can highlight it."""
    flagged = {f["metric"]: f for f in findings}
    tiles = []
    for key, metrics in TILE_GROUPS.items():
        name = key.capitalize()
        # Scale offline yesterday: say so instead of pretending it's steady
        if all(m not in last_row or last_row.get(m) is None or last_row.get(m) != last_row.get(m)
               for m in metrics):
            tiles.append({"key": key, "label": f"{name}: no data", "ok": False})
            continue
        hit = next((flagged[m] for m in metrics if m in flagged), None)
        if hit is None:
            tiles.append({"key": key, "label": f"{name} steady", "ok": True})
            continue
        v, u = hit.get("value"), hit.get("usual")
        if hit["kind"] == "litter_blockage":
            word = "many visits"
        elif hit["kind"] == "trend":
            word = "up" if hit["pct_per_week"] > 0 else "down"
        elif v is not None and u is not None:
            word = "up" if v > u else "down"
        else:
            word = "changed"
        tiles.append({"key": key, "label": f"{name} {word}", "ok": False})
    return tiles


def build_details(level: str, findings: list[dict], cat: dict) -> dict:
    """The 'See more' text.

    changed:       what moved, with real numbers
    maybe_nothing: things the owner could check (blip and vet only)
    call_if:       when to contact the vet. Never says a vet isn't needed (golden rule #2).
    """
    p = pronouns(cat)

    if findings:
        changed = " ".join(describe(f, cat) for f in findings)
        if level == "blip":
            changed += " Everything else is consistent with usual."
    else:
        changed = f"Eating, drinking, litter use, weight and rest are all consistent with {p['pos']} usual patterns."

    maybe_nothing = ""
    if level in ("blip", "vet"):
        checks = []
        for f in headline(findings):
            q = THINGS_TO_CHECK.get(f["metric"])
            if q and q not in checks:
                checks.append(q)
        if checks:
            maybe_nothing = "Things to check: " + " ".join(checks).format(**p)
        if level == "blip":
            maybe_nothing += " We'll keep watching over the next 48 hours."

    call_if = {
        "good": f"{LIMITS} If you notice any other symptoms, contact your vet.",
        "blip": "If you have any concerns, contact your vet.",
        "vet": (f"This change has lasted long enough that it's worth mentioning to your vet. "
                f"Contact them sooner if {p['subj_l']} stops eating, hides, vomits, or strains in the litter box."),
        "urgent": "Contact your vet or an emergency clinic now. Don't wait to see if it passes.",
    }[level]

    return {"changed": changed, "maybe_nothing": maybe_nothing.strip(), "call_if": call_if}


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
            "Rewrite these cat-habit notes in a warm, calm, plain tone for the owner. "
            "Keep every number and fact. Describe patterns only: do not diagnose, do not add "
            "medical claims, do not call the cat healthy or sick, and never say the cat doesn't "
            "need a vet. If the level is urgent, keep it clearly urgent. Return JSON with keys "
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
