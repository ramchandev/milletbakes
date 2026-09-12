const GA4_ID_PATTERN = /^G-[A-Z0-9]+$/i;

export function getGaMeasurementId() {
  const raw = (
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
    process.env.GA_MEASUREMENT_ID ||
    ""
  ).trim();

  return GA4_ID_PATTERN.test(raw) ? raw.toUpperCase() : "";
}
