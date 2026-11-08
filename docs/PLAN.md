# 🗓️ 3-day plan

| Person | Team | Folder |
|---|---|---|
| 1 | Mobile | `mobile/` |
| 2 | Backend | `engine/` |
| 3 | Backend | `backend/` |
| 4 | Data | `simulator/` |
| 5 | Data | `sensors/` |

## Day 1: everyone unblocked
| Person | Goal by end of day |
|---|---|
| 1 | Home screen on a real phone, all 4 states, on mock data |
| 2 | Baseline + anomaly working on `truth_daily.csv` |
| 3 | Backend running in `MOCK_MODE`; `/health`, `/cats`, `/cats/{id}/status` |
| 4 | Sample `readings.csv` + `truth_daily.csv` by lunch; full 4 cats × 60 days by evening |
| 5 | Stable/disturbed detection + bowl eat/drink events on the sample |

## Day 2: connect everything
| Person | Goal |
|---|---|
| 1 | App loads live data from Person 3; cat switcher; vet report screen |
| 2 | Rules + explanations; every demo cat gets its expected level |
| 3 | Backend calls Person 2's `assess()`; `/history` and `/vet-report` |
| 4 | Tune scenarios with Person 2 until levels are right; make demo plots |
| 5 | Litter + bed processing; `daily.csv` within ~5% of truth; engine switches to it |

**End-of-day check:** open the app, switch between all 4 cats, see green, blue, amber, red.

## Day 3: polish and pitch
- Morning: fix bugs, polish UI, freeze features by noon
- Afternoon: record a backup demo video, rehearse the pitch 5 times
- Fill in README team names and demo links

## Merging
End of each day: open a pull request per branch into `main`, merge one at a time, then everyone runs `git pull origin main`.

## Demo script (90 seconds)
1. Problem: "Cats hide illness. Owners guess."
2. Mochi: green, nothing to do.
3. Luna: blue blip. Tap "See more": what changed, could be nothing, when to call.
4. Tiger: amber. A slow trend no one would notice day to day. Show the vet report.
5. Oscar: red. Many litter visits with almost no output: call now.
6. Raw scale signal → detected drinks and refills: "This is how a scale knows exactly how much she drank."
7. What's next: real scales, smart litter boxes, vet validation.
