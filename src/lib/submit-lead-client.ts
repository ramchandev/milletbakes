import { submitLead } from "@/app/actions/submit-lead";
import type { LeadPayload } from "@/lib/email";

export async function emailLead(payload: LeadPayload) {
  const result = await submitLead(payload);
  if (!result.ok) {
    throw new Error(result.error);
  }
}
