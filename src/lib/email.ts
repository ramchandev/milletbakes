import { Resend } from "resend";

export type LeadType = "inquiry" | "corporate" | "order";

export type LeadPayload = {
  type: LeadType;
  subject: string;
  replyTo?: string;
  fields: Record<string, string>;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderText(fields: Record<string, string>) {
  return Object.entries(fields)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

function renderHtml(subject: string, fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #ebdccf;color:#613e32;font-weight:600;width:180px">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #ebdccf;color:#1c1c18;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<!doctype html>
<html><body style="margin:0;background:#fdf9f2;font-family:Georgia,serif">
  <div style="max-width:640px;margin:24px auto;background:#ffffff;border:1px solid #ebdccf;border-radius:12px;overflow:hidden">
    <div style="background:#3a1d13;color:#ffdbd0;padding:20px 24px">
      <p style="margin:0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase">Millet Bakes</p>
      <h1 style="margin:8px 0 0;font-size:22px;color:#ffffff">${escapeHtml(subject)}</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:15px">${rows}</table>
  </div>
</body></html>`;
}

function uniqueOrderSubject(base: string) {
  const stamp = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(new Date());
  return `${base} — ${stamp} IST`;
}

export async function sendLeadEmail(payload: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error("Email is not configured. Add RESEND_API_KEY, RESEND_FROM_EMAIL, and RESEND_TO_EMAIL.");
  }

  const subject =
    payload.type === "order" ? uniqueOrderSubject(payload.subject) : payload.subject;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: payload.replyTo || undefined,
    subject,
    text: renderText(payload.fields),
    html: renderHtml(subject, payload.fields),
    headers:
      payload.type === "order"
        ? { "X-Entity-Ref-ID": crypto.randomUUID() }
        : undefined,
  });

  if (error) {
    throw new Error(error.message);
  }
}
