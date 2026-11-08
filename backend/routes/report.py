"""Vet report endpoint: GET /cats/{cat_id}/vet-report.

LEARN:
- Sometimes the frontend needs a view that combines multiple engine calls.
- Here we call `assess(cat_id)` (for the level and key changes) and
  `history(cat_id, 14)` (for the last 14 days of daily totals) and return
  them together as one JSON object.
"""
from datetime import datetime, timezone

from fastapi import APIRouter, HTTPException

from engine import data as engine_data
from engine import run as engine_run
from routes.cats import get_cat_status

router = APIRouter(prefix="/cats", tags=["report"])

LEVEL_LABELS = {
    "good": "All good",
    "blip": "Minor blip",
    "vet": "Worth a vet visit",
    "urgent": "Call your vet now",
}


@router.get("/{cat_id}/vet-report")
def get_vet_report(cat_id: str):
    """GET /cats/{cat_id}/vet-report -> cat's level, key changes, and the last 14 days."""
    cat_id = cat_id.lower()

    # 1. Get the status (reuses get_cat_status so MOCK_MODE and 404s work the same way)
    status = get_cat_status(cat_id)

    # 2. Get the last 14 days of daily totals from the engine
    try:
        days_14 = engine_run.history(cat_id, 14)
    except KeyError as e:
        raise HTTPException(status_code=404, detail=f"Unknown cat '{cat_id}'") from e

    # 3. Look up basic cat info (age, sex) from cats.json
    cat_info = next((c for c in engine_data.load_cats() if c["cat_id"] == cat_id), {})

    return {
        "cat_id": cat_id,
        "name": status["name"],
        "age": cat_info.get("age"),
        "sex": cat_info.get("sex"),
        "generated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "level": status["level"],
        "level_label": LEVEL_LABELS.get(status["level"], status["level"]),
        "message": status["message"],
        "key_changes": status["details"]["changed"],
        "maybe_nothing": status["details"]["maybe_nothing"],
        "call_if": status["details"]["call_if"],
        "days": days_14,
    }
