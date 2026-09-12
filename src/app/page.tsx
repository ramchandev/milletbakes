import HomePage from "@/components/pages/HomePage";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, productCatalogJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={productCatalogJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }])}
      />
      <HomePage />
    </>
  );
}
