# NatHacks 2026 Project

> **Project name:** Purrcast 🐾
>
> **One-line summary:** A mobile app that watches your cat's everyday patterns and tells you, in plain language, whether a change is nothing, worth watching, worth a vet visit, or urgent.

## Overview

Cats are experts at hiding illness. Owners notice small changes all the time (drinking a bit more, skipping a meal, an extra trip to the litter box) and face the same question every time: **is this worth a vet visit, or am I overreacting?**

Purrcast learns what's normal for your cat and turns daily patterns into one simple answer, so owners can catch real problems early without rushing to the vet for every small blip.

## The Problem

- **Cats hide symptoms.** By the time illness is obvious, it's often advanced.
- **Owners are stuck guessing.** Going for every small change is expensive and stressful for the cat; waiting risks missing something serious.
- **Smart pet devices show data, not answers.** Litter boxes, feeders, and fountains each have their own app and charts, but none tells the owner what the numbers mean or what to do.

## Our Solution

Purrcast combines a cat's daily signals (water, food, litter visits, activity, sleep, and weight) into one status:

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

**Data for this hackathon:** real home sensor data from cats getting sick over months doesn't exist publicly, so we built a "virtual cat" simulator that generates realistic daily routines with injected health scenarios. Cat detection and eating/drinking recognition run on real images and video. Real sensors are our next step.

## Features

- **One-glance status:** a single colour-coded answer per cat, with icons instead of charts
- **Minimal by default:** details appear only when you tap "See more"
- **Minor blip guidance:** likely harmless causes, what we're watching, and when to call the vet
- **Trend forecasting:** spots slow changes that would be invisible day to day
- **Vet report:** a one-page summary to share at the appointment
- **Push alerts:** notified only when something changes
- **Camera demo:** a cat detected in its litter, food, and water zones

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
cd backend
pip install -r requirements.txt

# Mobile app
cd ../mobile
npm install
```

### Run the project

```bash
# 1. Generate simulated cat data
python simulator/generate.py --cats 3 --days 60

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
- **Simulator and engine:** pandas, NumPy
- **Vision:** YOLO (Ultralytics), OpenCV
- **Explanations:** LLM API (explains results only, never decides)

## Team

- [Name] — [Role or contribution]
- [Name] — [Role or contribution]
- [Name] — [Role or contribution]
- [Name] — [Role or contribution]

## Acknowledgements

- **CAT BEHAVIOR dataset** by MASTER PROJECT on Roboflow Universe (CC BY 4.0), for eating and drinking recognition
- **Ultralytics YOLO**, for cat detection
- **VCA Animal Hospitals** home breathing rate guidance, for sleeping breathing rate thresholds
- natHACKs 2026 organizers and mentors

> ⚠️ Purrcast is not a diagnostic tool and does not replace a veterinarian.