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
from engine.run import assess, history, list_cats, now  # noqa: E402

cats = list_cats()
sex = {c["cat_id"]: c.get("sex") for c in data.load_cats()}

snapshot = {
    "made": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    "source": str(data.data_source().relative_to(REPO)),
    "cats": [{**c, "sex": sex.get(c["cat_id"])} for c in cats],
    "status": {c["cat_id"]: assess(c["cat_id"]) for c in cats},
    "now": {c["cat_id"]: now(c["cat_id"]) for c in cats},
    "history": {c["cat_id"]: history(c["cat_id"], 30) for c in cats},
}

out = Path(__file__).resolve().parent / "snapshot.js"
out.write_text(
    "// Made by make_snapshot.py from the engine's real output. Don't edit by hand.\n"
    f"window.PURRCAST_SNAPSHOT = {json.dumps(snapshot, indent=1, default=str)};\n",
    encoding="utf-8",
)
print(f"Wrote {out.name} from {snapshot['source']}:")
for c in snapshot["cats"]:
    print(f"  {c['cat_id']:<8} {c['level']}")
