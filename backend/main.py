"""Purrcast API. See backend/README.md and docs/CONTRACT.md."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Purrcast API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


@app.get("/health")
def health():
    return {"ok": True}


# TODO (Person 3): include routes/cats.py and routes/report.py
