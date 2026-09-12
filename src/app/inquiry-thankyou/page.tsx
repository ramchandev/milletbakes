import type { Metadata } from "next";
import { ThankYouLead } from "@/components/site/ThankYouLead";
import { INQUIRY_HANDOFF_KEY } from "@/lib/lead-handoff";

export const metadata: Metadata = {
  title: "Thank You — Inquiry",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <ThankYouLead
      homeHref="/contact"
      homeLabel="Back to Contact"
      stamp="Inquiry"
      storageKey={INQUIRY_HANDOFF_KEY}
      title="Thank you"
    />
  );
}
