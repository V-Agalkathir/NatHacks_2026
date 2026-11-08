"""Engine entry point. The backend only needs these functions:

    from engine.run import assess, list_cats, history
    assess("luna")      # -> status dict, docs/CONTRACT.md section 5
    list_cats()         # -> [{cat_id, name, level}]   for GET /cats
    history("luna", 30) # -> daily rows                for GET /cats/{id}/history

Try it from the repo root:
    python -m engine.run          # table of all cats
    python -m engine.run luna     # full JSON for one cat
"""
import json
import sys
from datetime import datetime, timezone

import pandas as pd

from . import anomaly, baseline, config, data, explain, rules, trends


def _now() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def assess_rows(rows: pd.DataFrame, cat: dict) -> dict:
    """The whole pipeline for one cat's rows (no file loading, so it's easy to test)."""
    name = cat.get("name", cat["cat_id"])
    result = {"cat_id": cat["cat_id"], "name": name, "updated": _now()}

    # Not enough days yet to know what's normal
    base = baseline.compute(rows)
    if len(rows) <= config.BASELINE_DAYS or not base:
        result.update({
            "level": "good",
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
    z_recent = anomaly.recent(rows, base, n=2)
    trend_info = trends.compute(rows, base)
    level, findings = rules.decide(rows, base, z_recent, trend_info)

    result.update({
        "level": level,
        "message": explain.build_message(level, findings, cat),
        "tiles": explain.build_tiles(level, findings, rows.iloc[-1]),
        "details": explain.build_details(level, findings, cat),
    })
    return explain.polish(result)


def _find_cat(cat_id: str) -> dict:
    for c in data.load_cats():
        if c["cat_id"] == cat_id:
            return c
    raise KeyError(f"Unknown cat '{cat_id}'")


def assess(cat_id: str) -> dict:
    """Status for one cat. Raises KeyError for an unknown cat (backend -> 404)."""
    cat = _find_cat(cat_id)
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


if __name__ == "__main__":
    print(f"Data: {data.data_source()}\n")
    if len(sys.argv) > 1:
        print(json.dumps(assess(sys.argv[1]), indent=2))
    else:
        for c in list_cats():
            r = assess(c["cat_id"])
            print(f"{c['cat_id']:<8} {r['level']:<7} {r['message']}")
