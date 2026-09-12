import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { UtilityLinkList, UtilityPage } from "@/components/site/UtilityPage";
import { SERVICES, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/service-index");

function serviceIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} Service Index`,
    url: `${SITE_URL}/service-index`,
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: service.href.startsWith("http") ? service.href : `${SITE_URL}${service.href}`,
      description: service.summary,
    })),
  };
}

export default function Page() {
  return (
    <>
      <JsonLd data={serviceIndexJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service Index Page", path: "/service-index" },
        ])}
      />
      <UtilityPage
        stamp="What We Offer"
        title="Service Index Page"
        intro="Millet Bakes services for homes, offices, and festive gifting — from WhatsApp bakery orders to corporate workshops."
      >
        <UtilityLinkList items={[...SERVICES]} />
      </UtilityPage>
    </>
  );
}
