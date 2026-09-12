import type { Metadata } from "next";
import CorporatePage from "@/components/pages/CorporatePage";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/corporate");

export default function Page() {
  return (
    <>
      <JsonLd data={serviceJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Corporate Workshops", path: "/corporate" },
        ])}
      />
      <CorporatePage />
    </>
  );
}
