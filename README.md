# Purrcast 🐾

> **NatHacks 2026**
>
> **In one line:** Smart scales under a cat's food bowl, water bowl, litter box and bed, plus an app that learns what's normal for *your* cat and tells you when something changes.

## 📱 Try it on your phone (for judges)

No download or sign-up with us needed. It runs in your phone's browser.

### 1. Open the app

| What you want to see | Link |
|---|---|
| **The full app** (60 days of example data) | [v-agalkathir.github.io/NatHacks_2026/ui-concept](https://v-agalkathir.github.io/NatHacks_2026/ui-concept/) |
| **The live hardware demo** (real-time readings from our simulated scales) | [v-agalkathir.github.io/NatHacks_2026/ui-concept/?live=PURR-7F3A](https://v-agalkathir.github.io/NatHacks_2026/ui-concept/?live=PURR-7F3A) |

**Optional: add it to your home screen** so it opens like a normal app:

- **iPhone (Safari):** tap the **Share** button → **Add to Home Screen**.
- **Android (Chrome):** tap **⋮** → **Add to Home screen** (or **Install app**).

Everything you enter stays on your phone only.

### 2. Walk through the full app

1. Tap **Create account**. Any name, email and password works (it's only saved on your phone).
2. **Add a cat:** name, age, weight, and an optional photo. The cartoon cat takes the colour of the photo.
3. **Pair the scales:** tap **Scan all 4 scales**, then **Start learning**. (This pretends to find the 4 scales.)
4. You're now on **"Learning your cat's routine"** (days 1 to 14). The app shows what the cat ate, drank, how often it used the litter box, and its weight.
5. Tap **Skip to day 60** to jump ahead. Now the app compares each day with what's normal for this cat.
6. Look around:
   - **Home:** one simple message (all good, one odd day, worth a vet visit, or urgent), plus what the cat did last.
   - **Dashboard:** a chart for food, water, litter visits and weight. Use the **‹ ›** buttons or the slider at the top to move through the days and see when a message first appears.
   - **Profile → Demo box:** switch between 11 example cats to see every kind of message.

**Good example cats to try** (Profile → Demo box):

| Cat | What happens | What the app says |
|---|---|---|
| **Mochi** | healthy | Everything looks normal |
| **Luna** | drinks a lot more on one day | One unusual day, we'll keep watching |
| **Lena** | slowly drinks more and visits the litter box more | Changes worth checking (vet visit) |
| **Oscar** | suddenly uses the litter box 20 times a day | Urgent: contact a vet now |
| **Simba** | urgent problem while the app is still learning (day 5) | Urgent alerts work from day 1 |

### 3. The live hardware demo

The second link connects to our **simulated ESP32 and 4 scales** running in [Wokwi](https://wokwi.com) (an online electronics simulator). Our team runs it during the demo.

- When we move a slider in Wokwi (the cat eats, drinks, steps into the litter box, or lies on the bed), your phone shows it within a few seconds: the cartoon cat acts it out, and the activity is added to the list.
- Tap **Food, Water, Litter or Bed** to open that scale: weight right now, today's total, and the last activity.
- If the simulation is stopped, the card says **"Scales offline"**. When it starts again, the app catches up on anything it missed.
- If something worrying shows up (for example 10 litter box visits in one day), the screen switches to the alert.

To run the Wokwi simulation yourself, see [`hardware/wokwi/README.md`](hardware/wokwi/README.md).

## Why we built this

Cats are very good at hiding when they feel sick. Changes in their daily habits are often small and slow, so owners usually notice too late.

Many common illnesses show up first as changes in habits. For example, **chronic kidney disease (CKD)** can make a cat:

- drink more water,
- pee more,
- eat less,
- lose weight,
- sleep more or groom less.

CKD affects up to **40% of cats over 10** and **80% of cats over 15** (Cornell Feline Health Center). Older cats need the most watching.

The problem: today you'd need separate gadgets for feeding, drinking, the litter box and weight, each with its own app, and none of them tell you whether a change is normal for *your* cat.

## What Purrcast does

**Purrcast spots changes early.** It does not diagnose illness.

### Four scales, one app

| Scale | Goes under | What it measures |
|---|---|---|
| **Food** | the food bowl | how much the cat eats |
| **Water** | the water bowl | how much the cat drinks |
| **Litter** | the litter box | how often the cat goes, and how long it stays |
| **Bed** | the cat's bed | the cat's weight, measured every time it lies down |

The scales go **under the things the cat already uses**, so the cat's routine doesn't change.

### How it works, step by step

1. **The scales measure.** Each scale reports its weight when something changes (a drop in the water bowl, a jump on the litter box).
2. **We clean up the readings.** Refills, spills, a paw on the bowl, or water slowly evaporating are not counted as eating or drinking.
3. **We add up each day.** At the end of the day, all the readings become one row: grams eaten, ml drunk, litter visits, and weight.
4. **We learn what's normal.** The first 14 days build this cat's own "normal range". A big cat and a small cat have very different normals.
5. **We compare every new day** with the normal range. We look for:
   - **one odd day** (could be nothing, so we keep watching),
   - **a slow change** over a week or more (for example drinking a bit more every week),
   - **an emergency pattern**, like many litter visits with almost nothing left behind, or not eating. These alerts work from day 1, even while still learning.
6. **The owner gets one simple message**, with what we noticed and what to do. No graphs to read.

| Message | Meaning |
|---|---|
| 🟢 **Everything looks normal** | Habits are in the usual range |
| 🟢 **One unusual day** | Something was different once. We'll keep watching for 48 hours |
| 🟡 **Changes worth checking** | A change that keeps going. Worth mentioning to your vet |
| 🔴 **Urgent attention needed** | A pattern that can be an emergency. Contact a vet now |

**Fixed rules decide the message. AI is only used to explain it in plain words.** Purrcast never says "no vet needed", and it always tells owners to call a vet if they're worried.

### When there's no problem, and when there is

- **No alert:** the app shows what the cat is doing **live**, and what it did last.
- **Alert:** the app switches to the alert screen first, with buttons to call your vet or find an emergency vet.
- **"I've checked on my cat":** tells the app you've dealt with it, so it stops repeating the same alert. It comes back if things get worse or if the problem is still there a week later.

### More than one cat?

Each cat has its own profile and its own normal. For now we assume each scale belongs to one cat. In homes with several cats, the cat's weight on the litter box or bed could tell them apart (for example 4.2 kg vs 5.0 kg). Microchips or a camera are other options for later.

## How we're different

| Product | What it does |
|---|---|
| SureFeed Microchip Pet Feeder Connect | Feeding only |
| Petivity Smart Litter Box Monitor | Litter box only |
| **Purrcast** | Food, water, litter box **and** weight, together |

1. **All four in one place.** A change in one habit means more when you can see the others (for example drinking more **and** peeing more **and** losing weight).
2. **Compared with your cat, not an average cat.**
3. **Nothing new for the cat.** The scales go under its usual bowls, box and bed.
4. **Cheaper** than buying several separate smart devices (a goal we still need to confirm with real part prices).

## How it's built

```
Scales (load cell + HX711 + ESP32)
   │  weight readings
   ▼
sensors/   turns readings into events (a drink, a meal, a litter visit) and daily totals
   ▼
engine/    learns the normal range, compares each day, decides the message
   ▼
backend/   FastAPI server: sends the results to the app
   ▼
app        ui-concept/ (cartoon phone app) or mobile/ (Expo app)
```

| Part | Folder | Built with |
|---|---|---|
| Scale simulator (60 days of fake readings for 11 example cats) | `simulator/` | Python |
| Reading → event → daily total | `sensors/` | Python, pandas, NumPy |
| Health engine (normal range, comparisons, rules) | `engine/` | Python, NumPy, SciPy |
| Server | `backend/` | Python, FastAPI |
| Cartoon phone app (installable, works offline) | `ui-concept/` | HTML, CSS, JavaScript |
| Expo app | `mobile/` | React Native (Expo), TypeScript |
| Live hardware simulation | `hardware/wokwi/` | ESP32 (Arduino C++), Wokwi, MQTT |

### The hardware

Each scale is a **load cell** (a metal bar that bends a tiny bit under weight) connected to an **HX711** (a small board that turns that into a number). An **ESP32** (a small Wi-Fi computer) reads all four and sends the readings over Wi-Fi.

- **Food and water:** one 5 kg load cell each.
- **Litter box and bed:** four load cells each, one in every corner (like a bathroom scale), up to 50 kg.

We built this in **Wokwi**, an online simulator, with the real parts and wiring. It sends live readings to the app through a public message server (MQTT). See [`hardware/wokwi/README.md`](hardware/wokwi/README.md).

## What's real, and what's simulated

| Part | Status |
|---|---|
| Health engine, sensors code, server, phone app | ✅ Working |
| ESP32 + 4 scales | ✅ Working in the Wokwi simulator, with the same parts a real build would use |
| 60 days of history | 🟡 Simulated. Public data with these raw scale readings doesn't exist, so our simulator creates realistic readings, including refills, spills and paws on the bowl |
| Physical scales | ⏳ Next step: build them and calibrate with real weights |
| Sending live readings to the engine every night | ⏳ Next step: the live demo saves each day on the phone. A real product would send it to the server, and the engine would check it every night |

## What's next

- Build the physical scales and calibrate them.
- Send live readings to the server, and run the engine on them every night.
- Warn the owner if the scales stop reporting for a long time.
- Tell cats apart in homes with several cats.
- Measure litter output more accurately.
- A report you can send straight to your vet.
- Advice for each cat's age, based on veterinary research.

## Getting Started (run it on your laptop)

This part is for developers. Team members: start with [`docs/SETUP.md`](docs/SETUP.md) → [`docs/CONTRACT.md`](docs/CONTRACT.md) → [`docs/PLAN.md`](docs/PLAN.md) → the `README.md` in your own folder.

Everything below works on Windows (PowerShell) and Mac / Linux / WSL. Where the commands differ, both are shown.

### What you need

- **Python 3.10+** ([python.org](https://www.python.org/downloads/); on Windows tick "Add Python to PATH")
- **Git**
- **Node.js 18+** and the **Expo Go** phone app, only if you run the Expo app in `mobile/`

### 1. Get the code

```bash
git clone https://github.com/V-Agalkathir/NatHacks_2026.git
cd NatHacks_2026
```

### 2. Set up Python (once)

One virtual environment at the repo root is shared by the simulator, sensors, engine and backend.

**Windows (PowerShell)**

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

**Mac / Linux / WSL**

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Activate the environment again in **every new terminal** (`.venv\Scripts\Activate.ps1` or `source .venv/bin/activate`). You'll see `(.venv)` at the start of the prompt.

### 3. Generate the data

Run these from the repo root. The output folders are git-ignored, so **everyone runs this once** after cloning (and again after changing the simulator or sensors).

```bash
# Fake scales: 11 example cats x 60 days of raw readings
cd simulator
python generate.py
cd ..

# Raw readings -> events -> daily totals (sensors/output/daily.csv)
python -m sensors.run

# Optional: check the sensors against the simulator's answer key
python -m sensors.test_accuracy
```

### 4. Check the engine

```bash
python -m engine.run           # one line per cat
python -m engine.run luna      # full JSON for one cat
python -m engine.test_engine   # stress test across many random cats
```

`python -m engine.run` should print `Data: ...sensors/output/daily.csv` and these levels:

| Cat | Scenario | Expected |
|---|---|---|
| Mochi | healthy | `good` |
| Luna | one odd day | `blip` |
| Lena | slow drinking trend | `vet` |
| Oscar | litter emergency | `urgent` |

If it says `sample_data` instead, step 3 didn't run.

### 5. Start the backend (Terminal 1)

```bash
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Check it at [localhost:8000/cats](http://localhost:8000/cats). Interactive API docs are at [localhost:8000/docs](http://localhost:8000/docs).

| Endpoint | Returns |
|---|---|
| `GET /health` | `{ "ok": true }` |
| `GET /cats` | each cat's id, name and level |
| `GET /cats/{id}/status` | level, message, tiles and details (`docs/CONTRACT.md` section 5) |
| `GET /cats/{id}/now` | latest activity (drink, eat, litter, sleep) |
| `GET /cats/{id}/history?days=30` | daily rows |
| `GET /cats/{id}/vet-report` | report with the last 14 days |

### 6. Start an app (Terminal 2)

There are two front ends. Either works with the backend.

#### Option A: the cartoon web app (`ui-concept/`)

```bash
cd ui-concept
python -m http.server 5500
```

Open [localhost:5500](http://localhost:5500). It finds the backend on port 8000 by itself. Flow: create account → add cat (photo, details) → pair scales → "Learning…" → **Demo: jump ahead to day 60**. Switch between the 11 example cats in **Profile → Demo box**.

**On a phone (same Wi-Fi):** find your laptop's IP (`ipconfig` on Windows, `ipconfig getifaddr en0` on Mac, `hostname -I` on Linux) and open `http://<that IP>:5500` on the phone. Campus Wi-Fi often blocks this; use your phone's hotspot instead.

**As a standalone phone app (no laptop needed):**

```bash
python ui-concept/make_snapshot.py   # saves the engine's real results into the app
```

Commit and push `ui-concept/` to `main`, then open the link in **Demo** above and **Add to Home Screen**. It works offline. See [`ui-concept/README.md`](ui-concept/README.md) for details.

#### Option B: the Expo app (`mobile/`)

```bash
cd mobile
npm install
```

Create `mobile/.env` from the example (`copy .env.example .env` on Windows, `cp .env.example .env` on Mac/Linux) and set:

```
EXPO_PUBLIC_API_URL=http://<your laptop IP>:8000
EXPO_PUBLIC_USE_MOCK=false
```

Then:

```bash
npx expo start            # same Wi-Fi as your phone
npx expo start --tunnel   # if the phone can't connect (campus Wi-Fi, WSL)
```

Scan the QR code with Expo Go. See [`mobile/README.md`](mobile/README.md).

### All commands at a glance

| Terminal | Folder | Command |
|---|---|---|
| once | repo root | `cd simulator; python generate.py; cd ..` then `python -m sensors.run` |
| 1 | `backend/` | `uvicorn main:app --reload --host 0.0.0.0 --port 8000` |
| 2 | `ui-concept/` | `python -m http.server 5500` |
| 2 (alt) | `mobile/` | `npx expo start` |

Stop anything with `Ctrl + C`.

### Troubleshooting

| Problem | Fix |
|---|---|
| `python` not found (Windows) | Use `py` instead of `python`, or reinstall Python with "Add to PATH" ticked |
| `Activate.ps1 cannot be loaded` | Run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, then activate again |
| `uvicorn` not recognized | Activate `.venv` first, or run `python -m uvicorn main:app --reload --port 8000` |
| `No data file found` / engine uses `sample_data` | Run step 3 from the repo root |
| Every cat shows the same level | Regenerate: step 3, then restart the backend |
| Port already in use | Stop the old terminal, or change `--port 8000` / `5500` |
| Phone can't open the app | Same Wi-Fi as the laptop, backend started with `--host 0.0.0.0`, allow Python through the firewall, or use a hotspot |
| Git warns `LF will be replaced by CRLF` | Harmless on Windows. Files that show as modified with no real change can be reset with `git restore <folder>` |

## Team

- Ben Tam — Data Simulation & Presentation
- Faisal Hasen — Backend and Business
- Audrey oni — UI Front End
- Agal kathir Vijayakumara — Engine and Hardware
- Wasi Abbas — Backend and Frontend

## References

Cornell Feline Health Center. (2017, October 16). *Chronic kidney disease*. Cornell University College of Veterinary Medicine. [https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/chronic-kidney-disease](https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/chronic-kidney-disease)

## Slide Deck
https://www.canva.com/design/DAHaX07U28o/g6E19qp-4DcNh7_2fZlP1A/edit


## Acknowledgements

- NatHacks 2026 organizers and mentors.
- Cornell Feline Health Center for feline CKD educational resources.
- VCA Animal Hospitals for relevant veterinary educational resources.

---

> **Disclaimer:** Purrcast is a health-monitoring tool, not a diagnostic device. It does not diagnose, treat, or prevent medical conditions and does not replace veterinary care. Owners should consult a veterinarian when they have concerns about their cat's health. In an emergency, they should seek veterinary assistance rather than wait for an application notification.

