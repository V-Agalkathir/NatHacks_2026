# NatHacks 2026 Project

> **Project name:** Purrcast 🐾
>
> **One-line summary:** A mobile app that watches your cat's everyday patterns and tells you, in plain language, whether a change is nothing, worth watching, worth a vet visit, or urgent.

## 👋 For the team

Start here: [`docs/SETUP.md`](docs/SETUP.md) → [`docs/CONTRACT.md`](docs/CONTRACT.md) → [`docs/PLAN.md`](docs/PLAN.md) → the `README.md` in your own folder.

## Overview

Cats are experts at hiding illness. Owners notice small changes all the time (drinking a bit more, skipping a meal, an extra trip to the litter box) and face the same question every time: **is this worth a vet visit, or am I overreacting?**

Purrcast learns what's normal for your cat and turns daily patterns into one simple answer, so owners can catch real problems early without rushing to the vet for every small blip.

## The Problem

- **Cats hide symptoms.** By the time illness is obvious, it's often advanced.
- **Owners are stuck guessing.** Going for every small change is expensive and stressful for the cat; waiting risks missing something serious.
- **Smart pet devices show data, not answers.** Litter boxes, feeders, and fountains each have their own app and charts, but none tells the owner what the numbers mean or what to do.

## Our Solution

Purrcast uses four simple scales, under the food bowl, water bowl, litter box, and bed, to measure exactly how much a cat eats and drinks, when it uses the litter box, and what it weighs. It combines those signals into one status:

| Status | Meaning | What the app says |
|---|---|---|
| 🟢 All good | Everything normal | Nothing. No news is good news. |
| 🔵 Minor blip | A small one-off change | What to check at home, and what would make it worth calling the vet |
| 🟡 Worth a vet visit | A steady trend, or several changes together | Book an appointment this week, with a report for the vet |
| 🔴 Urgent | A known red-flag pattern | Call your vet or emergency clinic now |

**How it decides:**
1. **Learn normal:** builds a personal baseline from the cat's first two weeks.
2. **Spot changes:** flags values outside that cat's normal range.
3. **Watch trends:** projects where a 7 to 14 day trend is heading if it continues.
4. **One answer:** clear rules decide the status; AI only writes the plain-language explanation.

**Safety rule:** when in doubt, Purrcast always says "call your vet." It never tells owners they definitely don't need one.

**How the scales work:** bowls only count **decreases** in weight, so refills are ignored automatically. A litter visit shows up as a jump of about the cat's weight, and the box's weight gain afterwards estimates output. The bed scale gives a clean nightly weight.

**Data for this hackathon:** we don't have hardware yet, and no public dataset of home pet-scale readings exists, so we simulate the **raw signal** real scales would produce, including noise, refills, evaporation, paw bumps, and spills. Our processing turns that signal into exact amounts, and the same code runs on real scales.

## Features

- **One-glance status:** a single colour-coded answer per cat, with icons instead of charts
- **Minimal by default:** details appear only when you tap "See more"
- **Minor blip guidance:** likely harmless causes, what we're watching, and when to call the vet
- **Trend forecasting:** spots slow changes that would be invisible day to day
- **Vet report:** a one-page summary to share at the appointment
- **Push alerts:** notified only when something changes
- **Scale processing:** raw weight readings turned into exact amounts eaten, drunk, and output

## Demo

- **Live demo:** [Add Expo link or remove]
- **Video:** [Add link]

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.10+
- Expo Go app on your phone (iOS or Android)

### Installation

```bash
# Clone the repo
git clone [repo-url]
cd purrcast

# Backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

# Mobile app
cd ../mobile
npm install
```

### Run the project

```bash
# 1. Generate fake scale readings, then process them
python simulator/generate.py
python -m sensors.run

# 2. Start the backend
cd backend
uvicorn main:app --reload

# 3. Start the mobile app, then scan the QR code with Expo Go
cd ../mobile
npx expo start
```

## Tech Stack

- **Mobile app:** React Native (Expo), TypeScript
- **Backend:** Python, FastAPI
- **Simulator, sensor processing, and engine:** pandas, NumPy, SciPy
- **Planned hardware:** load cells + HX711 amplifiers + ESP32
- **Explanations:** LLM API (explains results only, never decides)

## Team

- [Name] — [Role or contribution]
- [Name] — [Role or contribution]
- [Name] — [Role or contribution]
- [Name] — [Role or contribution]

## Acknowledgements

- **VCA Animal Hospitals** home breathing rate guidance, for sleeping breathing rate thresholds
- natHACKs 2026 organizers and mentors

> ⚠️ Purrcast is not a diagnostic tool and does not replace a veterinarian.
