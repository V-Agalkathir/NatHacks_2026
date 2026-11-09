"""Cat endpoints: GET /cats, /cats/{cat_id}/status, /now, /recent, /history.

LEARN:
- APIRouter groups related endpoints so we don't crowd main.py.
- Path parameters like `{cat_id}` in the URL are passed directly into your function.
- Query parameters like `?days=30` use `Query(...)` to set defaults and limits.
- Raising `HTTPException(status_code=404, ...)` sends a clean 404 error to the phone app.
"""
from datetime import datetime, timezone
import os

from fastapi import APIRouter, HTTPException, Query

from engine import run as engine_run

router = APIRouter(prefix="/cats", tags=["cats"])

# Hard-coded example from docs/CONTRACT.md section 5 (used only when MOCK_MODE=true)
MOCK_CATS = [
    {"cat_id": "mochi", "name": "Mochi", "level": "good"},
    {"cat_id": "luna", "name": "Luna", "level": "blip"},
    {"cat_id": "tiger", "name": "Tiger", "level": "vet"},
    {"cat_id": "oscar", "name": "Oscar", "level": "urgent"},
]

MOCK_LUNA_STATUS = {
    "cat_id": "luna",
    "name": "Luna",
    "updated": "2026-11-08T10:00:00Z",
    "level": "blip",
    "message": "Luna drank a bit more yesterday. Nothing to do yet, we're watching.",
    "tiles": [
        {"key": "water", "label": "Water up", "ok": False},
        {"key": "food", "label": "Food ok", "ok": True},
        {"key": "litter", "label": "Litter ok", "ok": True},
        {"key": "weight", "label": "Weight ok", "ok": True},
    ],
    "details": {
        "changed": "Water 260 ml yesterday vs her usual 190 ml. Everything else normal.",
        "maybe_nothing": "Warm day, dry food, or play. We'll recheck over the next 48 hours.",
        "call_if": "She stops eating, vomits more than once, or strains in the litter box.",
    },
}


def is_mock() -> bool:
    """Check if MOCK_MODE=true in backend/.env."""
    return os.getenv("MOCK_MODE", "false").strip().lower() in ("1", "true", "yes")


@router.get("")
def get_cats():
    """GET /cats -> list of {cat_id, name, level} for all 4 demo cats."""
    if is_mock():
        return MOCK_CATS
    return engine_run.list_cats()


@router.get("/{cat_id}/status")
def get_cat_status(
    cat_id: str,
    age: float | None = Query(None, ge=0, le=30, description="Owner's cat age in years (age-aware checks)"),
):
    """GET /cats/{cat_id}/status?age=0.5 -> status object matching CONTRACT section 5."""
    cat_id = cat_id.lower()
    if is_mock() and cat_id == "luna":
        return {
            **MOCK_LUNA_STATUS,
            "updated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        }
    try:
        return engine_run.assess(cat_id, age)
    except KeyError as e:
        raise HTTPException(status_code=404, detail=f"Unknown cat '{cat_id}'") from e


@router.get("/{cat_id}/now")
def get_cat_now(cat_id: str):
    """GET /cats/{cat_id}/now -> latest activity (drink / eat / litter / sleep) for the mascot."""
    cat_id = cat_id.lower()
    try:
        return engine_run.now(cat_id)
    except KeyError as e:
        raise HTTPException(status_code=404, detail=f"Unknown cat '{cat_id}'") from e


@router.get("/{cat_id}/recent")
def get_cat_recent(cat_id: str, n: int = Query(5, ge=1, le=50)):
    """GET /cats/{cat_id}/recent?n=5 -> last activities, newest first, for 'What they did last'."""
    cat_id = cat_id.lower()
    try:
        return engine_run.recent(cat_id, n)
    except KeyError as e:
        raise HTTPException(status_code=404, detail=f"Unknown cat '{cat_id}'") from e


@router.get("/{cat_id}/history")
def get_cat_history(
    cat_id: str,
    days: int = Query(30, ge=1, le=365, description="Number of recent days to return"),
):
    """GET /cats/{cat_id}/history?days=30 -> daily rows for 'See more'."""
    cat_id = cat_id.lower()
    try:
        return engine_run.history(cat_id, days)
    except KeyError as e:
        raise HTTPException(status_code=404, detail=f"Unknown cat '{cat_id}'") from e
