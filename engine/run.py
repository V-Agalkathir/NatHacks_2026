"""Engine entry point. The backend only needs these functions:

    from engine.run import assess, list_cats, history, now, recent
    assess("luna")      # -> status dict, docs/CONTRACT.md section 5
    assess("luna", age=0.5)  # same, judged for a cat of another age (owner's profile)
    list_cats()         # -> [{cat_id, name, level}]   for GET /cats
    history("luna", 30) # -> daily rows                for GET /cats/{id}/history
    recent("luna", 5)   # -> last 5 activities         for GET /cats/{id}/recent

Try it from the repo root:
    python -m engine.run          # table of all cats
    python -m engine.run luna     # full JSON for one cat
"""
import json
import sys
from datetime import datetime, timezone

import pandas as pd

from . import age, anomaly, baseline, config, data, explain, reference, rules, trends


def _now() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def assess_rows(rows: pd.DataFrame, cat: dict) -> dict:
    """The whole pipeline for one cat's rows (no file loading, so it's easy to test)."""
    name = cat.get("name", cat["cat_id"])
    result = {"cat_id": cat["cat_id"], "name": name, "updated": _now()}
    prof = age.profile(cat.get("age"))
    rows = age.adjust_rows(rows, prof)   # kittens: food and water per kg

    # Not enough days yet to know what's normal
    base = baseline.compute(rows)
    if len(rows) <= config.BASELINE_DAYS or not base:
        # Urgent patterns are still checked from day 1, against typical ranges for any cat
        if early := reference.early_urgent(rows):
            result.update({
                "level": "urgent",
                "learning": True,
                "message": explain.build_message("urgent", early, cat),
                "tiles": explain.build_tiles("urgent", early, rows.iloc[-1]),
                "details": explain.build_details("urgent", early, cat),
            })
            return explain.polish(result)
        result.update({
            "level": "good",
            "learning": True,
            "message": (f"Learning {name}'s usual patterns ({len(rows)} of {config.BASELINE_DAYS} days). "
                        f"If you notice any symptoms, contact your vet."),
            "tiles": [{"key": k, "label": f"{k.capitalize()} learning", "ok": True}
                      for k in explain.TILE_GROUPS],
            "details": {"changed": "Not enough days yet to know what's usual for this cat.",
                        "maybe_nothing": "",
                        "call_if": explain.build_details("good", [], cat)["call_if"]},
        })
        return result

    # 1. normal  2. z-scores  3. trends  4. rules decide  5. explain
    level, findings = _judge(rows, base, prof)

    # Keep yellow steady: if the last 2 days were "worth a vet visit", a quieter
    # day doesn't flip back to green (owners would see yellow-green-yellow).
    if level in ("good", "blip") and len(rows) > config.BASELINE_DAYS + 1:
        for back in (1, 2):
            if len(rows) - back <= config.BASELINE_DAYS:
                break
            prev_level, prev_findings = _judge(rows.iloc[:-back], base, prof)
            if prev_level == "vet":
                level, findings = prev_level, prev_findings
                break

    details = explain.build_details(level, findings, cat)
    details["age_note"] = age.note(prof, cat)
    result.update({
        "level": level,
        "age_group": prof["group"],
        "message": explain.build_message(level, findings, cat),
        "tiles": explain.build_tiles(level, findings, rows.iloc[-1]),
        "details": details,
    })
    return explain.polish(result)


def _judge(rows: pd.DataFrame, base: dict, prof: dict):
    """Rules for the last day of `rows`: (level, findings)."""
    z_recent = anomaly.recent(rows, base, n=2)
    trend_info = trends.compute(rows, base)
    return rules.decide(rows, base, z_recent, trend_info, prof)


def _find_cat(cat_id: str) -> dict:
    for c in data.load_cats():
        if c["cat_id"] == cat_id:
            return c
    raise KeyError(f"Unknown cat '{cat_id}'")


def assess(cat_id: str, age: float | None = None) -> dict:
    """Status for one cat. Raises KeyError for an unknown cat (backend -> 404).

    age (years) overrides cats.json, e.g. the age the owner typed in the app.
    """
    cat = _find_cat(cat_id)
    if age is not None:
        cat = {**cat, "age": age}
    rows = data.cat_rows(data.load_daily(), cat_id)
    if rows.empty:
        raise KeyError(f"No data for cat '{cat_id}'")
    return assess_rows(rows, cat)


def list_cats() -> list[dict]:
    """[{cat_id, name, level}] for the cat switcher (GET /cats)."""
    df = data.load_daily()
    out = []
    for cat in data.load_cats():
        rows = data.cat_rows(df, cat["cat_id"])
        level = assess_rows(rows, cat)["level"] if not rows.empty else "good"
        out.append({"cat_id": cat["cat_id"], "name": cat.get("name", cat["cat_id"]), "level": level})
    return out


def history(cat_id: str, days: int = 30) -> list[dict]:
    """Last `days` daily rows as plain dicts (dates as strings, empty values as None)."""
    _find_cat(cat_id)
    rows = data.cat_rows(data.load_daily(), cat_id).tail(days).copy()
    rows["date"] = rows["date"].dt.strftime("%Y-%m-%d")
    rows = rows.astype(object).where(rows.notna(), None)
    return rows.to_dict(orient="records")


# Sensor event type -> mascot scene in the app
SCENES = {"drink": "drink", "eat": "eat", "litter_visit": "litter", "bed_session": "sleep"}


def now(cat_id: str) -> dict:
    """The cat's most recent activity, for the app's animated mascot (GET /cats/{id}/now).

    Returns {cat_id, scene, type, time, text}. scene is drink / eat / litter / sleep,
    or idle when there are no events yet.
    """
    _find_cat(cat_id)
    events = data.load_events()
    result = {"cat_id": cat_id, "scene": "idle", "type": None, "time": None,
              "text": "No activity recorded yet"}
    if events is None:
        return result
    mine = events[(events["cat_id"] == cat_id) & events["type"].isin(SCENES)]
    if mine.empty:
        return result

    e = mine.sort_values("start").iloc[-1]
    result.update(_activity(e))
    return result


def _activity(e) -> dict:
    """One sensor event -> {scene, type, time, text} for the app."""
    clock = e["start"].strftime("%I:%M %p").lstrip("0")
    amount = e.get("amount_g")
    if e["type"] == "drink":
        text = f"Drank {amount:.0f} ml at {clock}"
    elif e["type"] == "eat":
        text = f"Ate {amount:.0f} g at {clock}"
    elif e["type"] == "litter_visit":
        text = f"Used the litter box at {clock}"
    else:
        minutes = int((e["end"] - e["start"]).total_seconds() // 60)
        text = f"Napping on the bed since {clock} ({minutes // 60} h {minutes % 60} min)"
    return {"scene": SCENES[e["type"]], "type": e["type"],
            "time": e["start"].strftime("%Y-%m-%dT%H:%M:%S"), "text": text}


def recent(cat_id: str, n: int = 5) -> list[dict]:
    """The cat's last n activities, newest first (GET /cats/{id}/recent).
    Each item: {scene, type, time, text}. Litter visits show the time only, never grams."""
    _find_cat(cat_id)
    events = data.load_events()
    if events is None:
        return []
    mine = events[(events["cat_id"] == cat_id) & events["type"].isin(SCENES)]
    return [_activity(e) for _, e in mine.sort_values("start").tail(n).iloc[::-1].iterrows()]


if __name__ == "__main__":
    print(f"Data: {data.data_source()}\n")
    if len(sys.argv) > 1:
        print(json.dumps(assess(sys.argv[1]), indent=2))
    else:
        for c in list_cats():
            r = assess(c["cat_id"])
            print(f"{c['cat_id']:<8} {r['level']:<7} {r['message']}")
