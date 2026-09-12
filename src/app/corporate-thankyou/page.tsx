import type { Metadata } from "next";
import { ThankYouLead } from "@/components/site/ThankYouLead";
import { CORPORATE_HANDOFF_KEY } from "@/lib/lead-handoff";

export const metadata: Metadata = {
  title: "Thank You — Corporate Inquiry",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <ThankYouLead
      homeHref="/corporate"
      homeLabel="Back to Corporate Workshops"
      stamp="Corporate Bookings"
      storageKey={CORPORATE_HANDOFF_KEY}
      title="Thank you"
    />
  );
}
