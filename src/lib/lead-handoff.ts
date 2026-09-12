export type LeadHandoff = {
  message: string;
  fields: Record<string, string>;
};

export const INQUIRY_HANDOFF_KEY = "millet-bakes:inquiry-lead";
export const CORPORATE_HANDOFF_KEY = "millet-bakes:corporate-lead";

export function storeLeadHandoff(key: string, payload: LeadHandoff) {
  sessionStorage.setItem(key, JSON.stringify(payload));
}

export function readLeadHandoff(key: string): LeadHandoff | null {
  const raw = sessionStorage.getItem(key);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as LeadHandoff;
    if (!parsed?.message) return null;
    return parsed;
  } catch {
    return null;
  }
}
