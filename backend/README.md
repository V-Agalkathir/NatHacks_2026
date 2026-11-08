# 🔌 Backend — Person 3

**Goal:** a small FastAPI server that calls the engine and serves the JSON from `docs/CONTRACT.md` section 3.

## Files to build

| File | Does |
|---|---|
| `main.py` | Creates the app, enables CORS, includes routes, `/health` |
| `routes/cats.py` | `GET /cats`, `GET /cats/{id}/status`, `GET /cats/{id}/history` |
| `routes/report.py` | `GET /cats/{id}/vet-report` |

## Run

```bash
source ../.venv/bin/activate
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Then open http://localhost:8000/docs for the auto-generated API page.

## Day 1 trick: mock first

Before the engine is ready, make `/cats/{id}/status` return the hard-coded example from the contract. Person 4 can then connect the app immediately, and you swap in `engine.run.assess(cat_id)` later. Nobody waits on anybody.

## Reaching it from a phone (WSL)

Phones can't see `localhost` inside WSL. Run:

```bash
npx localtunnel --port 8000
```

Send the URL it prints to Person 4 for `mobile/.env`.

## Done when

- [ ] `/health` returns `{ "ok": true }`
- [ ] `/cats` lists all 4 demo cats
- [ ] `/cats/luna/status` matches the contract shape exactly
- [ ] The phone app loads real data from it
- [ ] `/vet-report` returns the cat's level, key changes, and the last 14 days
