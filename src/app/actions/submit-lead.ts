"use server";

import { sendLeadEmail, type LeadPayload } from "@/lib/email";

export async function submitLead(payload: LeadPayload) {
  const fields = Object.fromEntries(
    Object.entries(payload.fields).map(([key, value]) => [key, String(value ?? "").trim()]),
  );

  if (!payload.subject.trim()) {
    return { ok: false as const, error: "Missing subject." };
  }

  try {
    await sendLeadEmail({
      type: payload.type,
      subject: payload.subject.trim(),
      replyTo: payload.replyTo?.trim() || undefined,
      fields,
    });
    return { ok: true as const };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not send the email. Please try again.";
    return { ok: false as const, error: message };
  }
}
