# Purrcast 🐾

> **NatHacks 2026**
>
> **One-line summary:** An integrated feline health-monitoring system that tracks eating, drinking, litter box activity, and body weight to identify potentially concerning changes in a cat's everyday behaviour.

## 👋 For the team

Start here:

[`docs/SETUP.md`](docs/SETUP.md) → [`docs/CONTRACT.md`](docs/CONTRACT.md) → [`docs/PLAN.md`](docs/PLAN.md) → the `README.md` in your own folder.

## Overview

Cats are remarkably good at concealing signs of pain and illness. Changes in their everyday behaviour can be subtle, gradual, and difficult for owners to recognize.

In particular, conditions such as chronic kidney disease (CKD) can cause changes in water consumption, urination, appetite, energy levels, and body weight. These changes may develop before an owner recognizes that something is wrong.

**Purrcast aims to make these changes easier to recognize.**

Purrcast is an integrated hardware and software ecosystem that monitors four important aspects of a cat's daily routine:

- Food consumption
- Water consumption
- Litter box activity
- Body weight

Using weight-sensing hardware integrated beneath a cat's existing food bowl, water bowl, litter box, and sleeping area, Purrcast collects everyday measurements and combines them into one personalized health-monitoring dashboard.

Rather than forcing owners to interpret multiple measurements independently, Purrcast establishes an individual baseline for each cat, monitors changes over time, and highlights patterns that may warrant attention.

Our goal is simple: **help cat owners recognize potentially concerning changes earlier by making everyday health monitoring effortless.**

## The Problem

### 1. Cats conceal signs of illness

Unlike humans, cats cannot communicate when something feels wrong. They may continue their everyday routines despite experiencing discomfort or developing an illness.

As a result, owners may not recognize gradual behavioural changes until symptoms become more noticeable.

### 2. Important health indicators go unnoticed

Many health conditions can affect a cat's everyday activities.

Chronic kidney disease (CKD), for example, can involve:

- Increased water consumption.
- Increased urine production.
- Changes in appetite.
- Weight loss.
- Lethargy and changes in grooming.

According to the Cornell Feline Health Center, CKD affects up to 40% of cats over 10 years old and 80% of cats over 15 years old.

These changes are particularly important to monitor in senior cats.

### 3. Existing monitoring solutions are fragmented

Smart pet products already collect useful information about cats, but monitoring is often distributed across separate devices and applications.

Owners may need different products to monitor feeding, drinking, litter box activity, and weight.

Purrcast aims to bring these measurements together into one unified system that interprets changes in relation to the individual cat's normal behaviour.

## Our Solution

Purrcast combines four weight-sensing components with a centralized mobile application.

### The Four Monitoring Components

**1. Food Consumption**

A weight sensor beneath the existing food bowl monitors changes in food weight to estimate how much food the cat consumes.

**2. Water Consumption**

A weight sensor beneath the existing water bowl monitors changes in water weight to estimate daily water consumption.

**3. Litter Box Activity**

A weight sensor beneath the litter box detects changes associated with litter box visits and monitors activity patterns over time.

Additional processing may help identify changes in the weight of the litter box contents, although accurately distinguishing urine, feces, litter changes, and other disturbances requires further validation.

**4. Daily Body Weight**

A weight-sensing platform integrated beneath the cat's sleeping area aims to capture automatic weight measurements during periods of rest.

This allows owners to monitor gradual weight changes without having to manually weigh their cats.

### One Unified Dashboard

All four measurements feed into one application, where owners can:

- View their cat's daily eating and drinking habits.
- Monitor litter box activity.
- Track daily body weight.
- Compare current measurements against individual historical baselines.
- Identify unusual changes and longer-term trends.
- Receive notifications when potentially concerning patterns emerge.

The goal is to make health monitoring simple enough that owners do not need to interpret complicated graphs or constantly check multiple applications.

## How It Works

### 1. Data Collection

Weight sensors continuously or periodically collect measurements from the four monitored environments.

### 2. Signal Processing

Raw sensor readings are processed to account for environmental disturbances and distinguish meaningful changes from ordinary fluctuations.

Examples include:

- Food and water refills.
- Water evaporation.
- Spillage.
- Paw contact and movement.
- Changes in litter box weight.

### 3. Individual Baseline Development

Purrcast establishes a personalized understanding of each cat's normal behaviour.

Instead of relying exclusively on universal thresholds, the system compares measurements against the individual cat's historical patterns.

### 4. Change Detection

The system monitors deviations from normal behaviour and looks for changes that persist over time or occur across multiple measurements.

For example:

A gradual increase in water consumption combined with increased litter box activity and declining body weight may represent a pattern worth discussing with a veterinarian.

### 5. Personalized Health Insights

The mobile application presents the information in simple language, helping owners understand:

- What has changed?
- How significant is the change compared with their cat's baseline?
- Has the change persisted?
- Should they consider contacting their veterinarian?

**Important:** Purrcast identifies potentially concerning changes. It does not diagnose diseases or replace professional veterinary assessment.

## Multi-Cat Households

Purrcast is designed with individual cat profiles in mind.

Each cat should have its own profile containing its historical measurements and behavioural baseline.

In the initial prototype, we assume that measurements from each monitored environment can be attributed to a known cat.

However, shared resources in multi-cat households introduce an identification challenge.

Potential future approaches include:

- Microchip-based identification.
- Weight-pattern recognition.
- Camera-assisted cat recognition.

Individual identification in shared environments is an important area for future hardware and software development.

## Competitive Landscape

Existing smart pet products demonstrate that owners are interested in monitoring their pets' everyday activities.

However, Purrcast aims to differentiate itself through the integration of multiple measurements into one monitoring ecosystem.

| Product                               | Primary functionality                                    |
| ------------------------------------- | -------------------------------------------------------- |
| SureFeed Microchip Pet Feeder Connect | Individualized feeding and food consumption monitoring   |
| Petivity Smart Litter Box Monitor     | Litter box activity monitoring                           |
| **Purrcast**                          | Food, water, litter activity, and body weight monitoring |

### Our Differentiation

**1. Integrated Monitoring**

Four different measurements are brought together within one ecosystem.

**2. Personalized Interpretation**

Purrcast compares changes against an individual cat's historical behaviour rather than simply presenting raw measurements.

**3. Convenience**

The hardware is designed to integrate beneath existing household pet equipment, minimizing changes to the owner's daily routine.

**4. Accessibility**

We aim to offer a more affordable alternative to purchasing multiple specialized monitoring devices.

Our pricing advantage remains a target to validate through hardware prototyping, manufacturing estimates, and competitor research.

## Technical Architecture

### Current Technology Stack

- **Mobile application:** React Native (Expo), TypeScript
- **Backend:** Python, FastAPI
- **Data processing:** pandas, NumPy, SciPy
- **Sensor simulation:** Python
- **Hardware (planned):** Load cells, HX711 amplifiers, ESP32 microcontrollers
- **Health interpretation:** Rule-based change detection, with optional LLM-generated explanations

### Hardware Design

Each monitoring component is intended to use weight sensors to collect measurements from its respective environment.

The planned hardware architecture includes:

- Load cells to measure weight changes.
- HX711 amplifiers to convert sensor signals.
- ESP32 microcontrollers to collect and transmit readings.
- A backend system to process and analyze measurements.

### Data Processing and Interpretation

The processing pipeline aims to:

1. Convert raw sensor readings into usable measurements.
2. Account for noise and environmental disturbances.
3. Estimate food and water consumption.
4. Monitor litter box activity and weight changes.
5. Track daily body weight.
6. Compare measurements against individual baselines.
7. Identify persistent or combined behavioural changes.

Where AI is used, its role is to explain already-determined findings in accessible language, not independently diagnose conditions or determine medical urgency.

## Current Prototype and Development Scope

For NatHacks 2026, we are developing a software prototype that demonstrates the intended data collection, processing, and interpretation pipeline.

We do not currently have a completed physical hardware system.

Since publicly available datasets containing the specific raw measurements needed for our proposed setup are limited, we simulate raw sensor readings to demonstrate the processing pipeline.

The simulator can incorporate disturbances such as:

- Food and water refills.
- Paw contact.
- Spillage.
- Changes in measured weight.

The objective is to demonstrate how raw measurements can be transformed into meaningful monitoring data.

Our longer-term goal is to connect the same processing architecture to physical sensors, subject to hardware testing and calibration.

## Future Development

Potential areas of future development include:

- Physical hardware integration and calibration.
- Reliable individual cat identification in multi-cat households.
- Improved litter output measurement.
- More sophisticated behavioural trend detection.
- Personalized monitoring recommendations based on veterinary research.
- Veterinary report generation.
- Historical health data and long-term trend visualization.
- Optional integrations with veterinary clinics and existing pet health platforms.

## Demo

- **Live demo:** [Add Expo link]
- **Video:** [Add demonstration link]

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.10+
- Expo Go (iOS or Android)

### Installation

```bash
# Clone the repository
git clone [repo-url]
cd purrcast

# Backend environment
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Mobile application
cd mobile
npm install
```

### Running the Project

```bash
# 1. Generate simulated sensor readings
python simulator/generate.py

# 2. Process the simulated readings
python -m sensors.run

# 3. Start the backend
cd backend
uvicorn main:app --reload

# 4. Start the mobile application
cd ../mobile
npx expo start
```

## Team

- [Name] — [Role or contribution]
- [Name] — [Role or contribution]
- [Name] — [Role or contribution]
- [Name] — [Role or contribution]

## References

Cornell Feline Health Center. (2017, October 16). *Chronic kidney disease*. Cornell University College of Veterinary Medicine. [https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/chronic-kidney-disease](https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/chronic-kidney-disease)


## Acknowledgements

- NatHacks 2026 organizers and mentors.
- Cornell Feline Health Center for feline CKD educational resources.
- VCA Animal Hospitals for relevant veterinary educational resources.

---

> **Disclaimer:** Purrcast is a health-monitoring tool, not a diagnostic device. It does not diagnose, treat, or prevent medical conditions and does not replace veterinary care. Owners should consult a veterinarian when they have concerns about their cat's health. In an emergency, they should seek veterinary assistance rather than wait for an application notification.

