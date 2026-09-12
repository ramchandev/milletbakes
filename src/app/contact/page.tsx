import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { JsonLd } from "@/components/site/JsonLd";
import {
  breadcrumbJsonLd,
  contactPageJsonLd,
  faqJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/contact");

export default function Page() {
  return (
    <>
      <JsonLd data={contactPageJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactPage />
    </>
  );
}
