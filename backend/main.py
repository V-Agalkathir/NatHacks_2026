"""Purrcast API. See backend/README.md and docs/CONTRACT.md."""
import os
import sys
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Load backend/.env and add repo root to sys.path so `from engine import ...` works
BACKEND_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(BACKEND_DIR.parent))
try:
    from dotenv import load_dotenv
    load_dotenv(BACKEND_DIR / ".env")
except ImportError:
    pass

# Bridge LLM_API_KEY (backend/.env) -> GEMINI_API_KEY (engine/explain.py)
if os.getenv("LLM_API_KEY") and not os.getenv("GEMINI_API_KEY"):
    os.environ["GEMINI_API_KEY"] = os.environ["LLM_API_KEY"]

from routes import cats, report  # noqa: E402

app = FastAPI(title="Purrcast API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


@app.get("/health")
def health():
    return {"ok": True}


app.include_router(cats.router)
app.include_router(report.router)
