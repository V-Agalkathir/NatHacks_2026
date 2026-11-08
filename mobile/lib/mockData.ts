import { CatListItem, CatStatus, VetReport } from "./types";

export const MOCK_CATS: CatListItem[] = [
  { cat_id: "mochi", name: "Mochi", level: "good", scenario: "healthy" },
  { cat_id: "luna", name: "Luna", level: "blip", scenario: "blip" },
  { cat_id: "tiger", name: "Tiger", level: "vet", scenario: "slow_drinking" },
  { cat_id: "oscar", name: "Oscar", level: "urgent", scenario: "litter_emergency" },
];

export const MOCK_STATUSES: Record<string, CatStatus> = {
  mochi: {
    cat_id: "mochi",
    name: "Mochi",
    updated: "10 min ago",
    level: "good",
    message: "Everything is normal. No changes in eating, drinking, or litter box visits.",
    tiles: [
      { key: "water", label: "Water ok", ok: true },
      { key: "food", label: "Food ok", ok: true },
      { key: "litter", label: "Litter ok", ok: true },
      { key: "weight", label: "Weight ok", ok: true },
    ],
    details: {
      changed: "All values are within Mochi's baseline range over the last 14 days.",
      maybe_nothing: "Routine healthy activity and balanced daily habits.",
      call_if: "He stops eating for 24+ hours or shows signs of hiding or lethargy.",
    },
  },
  luna: {
    cat_id: "luna",
    name: "Luna",
    updated: "5 min ago",
    level: "blip",
    message: "Luna drank a bit more yesterday. Nothing to do yet, we're watching.",
    tiles: [
      { key: "water", label: "Water up", ok: false },
      { key: "food", label: "Food ok", ok: true },
      { key: "litter", label: "Litter ok", ok: true },
      { key: "weight", label: "Weight ok", ok: true },
    ],
    details: {
      changed: "Water 260 ml yesterday vs her usual 190 ml. Everything else normal.",
      maybe_nothing: "Warm day, dry food, or play. We'll recheck over the next 48 hours.",
      call_if: "She stops eating, vomits more than once, or strains in the litter box.",
    },
  },
  tiger: {
    cat_id: "tiger",
    name: "Tiger",
    updated: "15 min ago",
    level: "vet",
    message: "Tiger has had a steady rise in water intake and gradual weight drop over 10 days.",
    tiles: [
      { key: "water", label: "Water +28%", ok: false },
      { key: "food", label: "Food ok", ok: true },
      { key: "litter", label: "Litter up", ok: false },
      { key: "weight", label: "Weight -4%", ok: false },
    ],
    details: {
      changed: "Daily drinking climbed from 180 ml to 240 ml, and weight dropped from 4.8 kg to 4.6 kg.",
      maybe_nothing: "Could be early renal changes or diabetes mellitus requiring screening.",
      call_if: "Book a vet appointment this week. Call immediately if he becomes completely listless or stops eating.",
    },
  },
  oscar: {
    cat_id: "oscar",
    name: "Oscar",
    updated: "Just now",
    level: "urgent",
    message: "Frequent litter visits with very little output. Suspected urinary blockage.",
    tiles: [
      { key: "water", label: "Water ok", ok: true },
      { key: "food", label: "Food low", ok: false },
      { key: "litter", label: "Litter alerts (14x)", ok: false },
      { key: "weight", label: "Weight ok", ok: true },
    ],
    details: {
      changed: "14 litter box trips in 12 hours with near 0g output and short, restless visits.",
      maybe_nothing: "This is a medical emergency for male cats. Do not wait.",
      call_if: "Take Oscar to the nearest 24/7 veterinary clinic immediately.",
    },
  },
};

export const MOCK_REPORTS: Record<string, VetReport> = {
  mochi: {
    cat_id: "mochi",
    name: "Mochi",
    generated_at: new Date().toISOString(),
    level: "good",
    summary: "Routine check-in: all baseline biomarkers are stable over the past 14 days.",
    key_changes: ["No anomalies detected in eating, drinking, or litter habits."],
    days_tracked: 14,
    history_summary: {
      water_avg_ml: 195,
      food_avg_g: 54,
      weight_kg: 4.3,
      litter_visits_avg: 4,
    },
    recommendations: ["Continue standard home monitoring."],
  },
  luna: {
    cat_id: "luna",
    name: "Luna",
    generated_at: new Date().toISOString(),
    level: "blip",
    summary: "Single-day elevation in hydration (+36%). No secondary symptoms detected.",
    key_changes: ["Water intake: 260 ml on previous day (baseline 190 ml ± 15 ml).", "Litter and food remained within normal thresholds."],
    days_tracked: 14,
    history_summary: {
      water_avg_ml: 202,
      food_avg_g: 58,
      weight_kg: 4.2,
      litter_visits_avg: 4,
    },
    recommendations: ["Monitor water bowl levels over the next 48 hours.", "Check litter output consistency."],
  },
  tiger: {
    cat_id: "tiger",
    name: "Tiger",
    generated_at: new Date().toISOString(),
    level: "vet",
    summary: "Progressive polydipsia/polyuria pattern observed over 10 consecutive days with mild weight loss.",
    key_changes: [
      "Water consumption increased +3% per day over 10 days (currently 245 ml vs 180 ml baseline).",
      "Litter visit frequency & output volume up proportionally.",
      "Body mass decreased from 4.82 kg to 4.61 kg.",
    ],
    days_tracked: 14,
    history_summary: {
      water_avg_ml: 235,
      food_avg_g: 50,
      weight_kg: 4.61,
      litter_visits_avg: 6,
    },
    recommendations: [
      "Schedule non-emergency vet exam within 3-5 days.",
      "Bring this 14-day trend report to rule out renal insufficiency or feline diabetes.",
    ],
  },
  oscar: {
    cat_id: "oscar",
    name: "Oscar",
    generated_at: new Date().toISOString(),
    level: "urgent",
    summary: "Critical urinary distress pattern: frequent unrewarded litter visits indicative of urethral obstruction.",
    key_changes: [
      "14 box visits in 12 hours (normal 3-4 visits/day).",
      "Average time in box under 30 seconds with <5g measured output.",
      "Anorexia during current period.",
    ],
    days_tracked: 14,
    history_summary: {
      water_avg_ml: 120,
      food_avg_g: 15,
      weight_kg: 5.1,
      litter_visits_avg: 14,
    },
    recommendations: [
      "Immediate veterinary emergency intervention required.",
      "Do not delay; potential acute urethral blockage.",
    ],
  },
};
