"""Save the engine's real results into snapshot.js, so the app works with no backend.

Run from the repo root, after generating the data:
    cd simulator && python generate.py && cd ..
    python -m sensors.run
    python ui-concept/make_snapshot.py

The app uses the live backend when it can reach one, and this snapshot otherwise
(for example on GitHub Pages, or on your phone away from your laptop).
"""
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO))

from engine import data  # noqa: E402
from engine.run import assess, assess_rows, history, list_cats, now, recent  # noqa: E402

cats = list_cats()
info = {c["cat_id"]: c for c in data.load_cats()}

# The owner's cat can be any age, so save the result for each age group.
# The app picks kitten / adult / senior from the age in the cat's profile.
AGE_GROUPS = {"kitten": 0.5, "adult": 5, "senior": 12}

snapshot = {
    "made": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    "source": str(data.data_source().relative_to(REPO)),
    "cats": [{**c, **{k: info[c["cat_id"]].get(k) for k in ("sex", "age", "scenario")}} for c in cats],
    "status": {c["cat_id"]: {g: assess(c["cat_id"], a) for g, a in AGE_GROUPS.items()} for c in cats},
    "now": {c["cat_id"]: now(c["cat_id"]) for c in cats},
    "recent": {c["cat_id"]: recent(c["cat_id"], 5) for c in cats},
    "history": {c["cat_id"]: history(c["cat_id"], 90) for c in cats},
}

# Days 1-14 (still learning): urgent checks still run, so save each day's result.
# early[cat][d - 1] = status the app shows on learning day d.
daily = data.load_daily()
snapshot["early"] = {}
for c in cats:
    rows = data.cat_rows(daily, c["cat_id"])
    snapshot["early"][c["cat_id"]] = [
        {k: v for k, v in assess_rows(rows.head(d), info[c["cat_id"]]).items() if k in ("level", "message", "details")}
        for d in range(1, 15)
    ]

out = Path(__file__).resolve().parent / "snapshot.js"
out.write_text(
    "// Made by make_snapshot.py from the engine's real output. Don't edit by hand.\n"
    f"window.PURRCAST_SNAPSHOT = {json.dumps(snapshot, indent=1, default=str)};\n",
    encoding="utf-8",
)
print(f"Wrote {out.name} from {snapshot['source']}:")
for c in snapshot["cats"]:
    lv = {g: snapshot["status"][c["cat_id"]][g]["level"] for g in AGE_GROUPS}
    urgent_days = [i + 1 for i, e in enumerate(snapshot["early"][c["cat_id"]]) if e["level"] == "urgent"]
    print(f"  {c['cat_id']:<8} {c['scenario']:<17} learning urgent days={urgent_days} kitten={lv['kitten']:<7} adult={lv['adult']:<7} senior={lv['senior']}")
