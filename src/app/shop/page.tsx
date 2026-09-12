import type { Metadata } from "next";
import ShopPage from "@/components/pages/ShopPage";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, pageMetadata, productCatalogJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/shop");

export default function Page() {
  return (
    <>
      <JsonLd data={productCatalogJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Shop & Order", path: "/shop" },
        ])}
      />
      <ShopPage />
    </>
  );
}
