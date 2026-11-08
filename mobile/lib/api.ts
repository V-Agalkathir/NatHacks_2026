import { CatListItem, CatStatus, VetReport } from "./types";
import { MOCK_CATS, MOCK_STATUSES, MOCK_REPORTS } from "./mockData";

const API = process.env.EXPO_PUBLIC_API_URL || "http://localhost:8000";
const FORCE_MOCK = process.env.EXPO_PUBLIC_USE_MOCK === "true";

export async function getCats(): Promise<CatListItem[]> {
  if (FORCE_MOCK) return MOCK_CATS;
  try {
    const res = await fetch(`${API}/cats`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : MOCK_CATS;
  } catch {
    return MOCK_CATS;
  }
}

export async function getStatus(catId: string): Promise<CatStatus> {
  const normalizedId = catId.toLowerCase();
  if (FORCE_MOCK) {
    return MOCK_STATUSES[normalizedId] || MOCK_STATUSES.luna;
  }

  try {
    const res = await fetch(`${API}/cats/${catId}/status`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error("Couldn't reach Purrcast");
    const data: CatStatus = await res.json();
    return data;
  } catch {
    return MOCK_STATUSES[normalizedId] || MOCK_STATUSES.luna;
  }
}

export async function getVetReport(catId: string): Promise<VetReport> {
  const normalizedId = catId.toLowerCase();
  if (FORCE_MOCK) {
    return MOCK_REPORTS[normalizedId] || MOCK_REPORTS.luna;
  }

  try {
    const res = await fetch(`${API}/cats/${catId}/vet-report`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error("Couldn't fetch vet report");
    const data: VetReport = await res.json();
    return data;
  } catch {
    return MOCK_REPORTS[normalizedId] || MOCK_REPORTS.luna;
  }
}
