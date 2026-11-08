# 🛠️ Team setup (Ubuntu / WSL)

## 1. Get the code

```bash
git clone <repo-url>
cd NatHacks_2026
```

## 2. One Python environment for the whole repo

Simulator, engine, backend, and vision all use Python. Share one virtual environment at the repo root:

```bash
sudo apt update && sudo apt install -y python3-venv python3-pip
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Run `source .venv/bin/activate` in every new terminal.

## 3. Node for the mobile app

```bash
# Install Node 20 via nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
```

Then see `mobile/README.md`.

## 4. Env files

Every folder has a `.env.example`. Copy it once:

```bash
for d in simulator engine backend vision mobile; do cp $d/.env.example $d/.env; done
```

Then fill in any blanks (only the backend needs an LLM key, and it's optional).

## 5. Running everything (Day 2+)

Open 3 terminals:

```bash
# Terminal 1: data
source .venv/bin/activate
python simulator/generate.py

# Terminal 2: backend
source .venv/bin/activate
cd backend && uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Terminal 3: app
cd mobile && npx expo start --tunnel
```

## ⚠️ WSL gotchas

- **Phone can't reach the backend:** WSL has its own network. Easiest fix: run Expo with `--tunnel`, and expose the backend with a tunnel too, e.g. `npx localtunnel --port 8000`, then put that URL in `mobile/.env`.
- **Webcam doesn't work in WSL:** run the vision demo on a video file (see `vision/README.md`), or run that one script in Windows Python.
- **Keep the repo inside the Linux file system** (`/home/...`), not `/mnt/c/...`. It's much faster.

## Git workflow

- Each person works on their own branch: `sim`, `engine`, `vision`, `mobile`.
- Merge into `main` at the end of each day after a quick check.
- Only touch your own folder. Changes to `docs/CONTRACT.md` need a team heads-up.
