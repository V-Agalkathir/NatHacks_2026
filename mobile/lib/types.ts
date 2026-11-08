export type Level = "good" | "blip" | "vet" | "urgent";

export interface StatusTile {
  key: "water" | "food" | "litter" | "weight" | string;
  label: string;
  ok: boolean;
}

export interface StatusDetails {
  changed: string;
  maybe_nothing: string;
  call_if: string;
}

export interface CatStatus {
  cat_id: string;
  name: string;
  updated: string;
  level: Level;
  message: string;
  tiles: StatusTile[];
  details: StatusDetails;
}

export interface CatListItem {
  cat_id: string;
  name: string;
  level: Level;
  scenario?: string;
}

export interface VetReport {
  cat_id: string;
  name: string;
  generated_at: string;
  level: Level;
  summary: string;
  key_changes: string[];
  days_tracked: number;
  history_summary?: {
    water_avg_ml: number;
    food_avg_g: number;
    weight_kg: number;
    litter_visits_avg: number;
  };
  recommendations: string[];
}
