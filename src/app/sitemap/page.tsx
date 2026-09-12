import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/catalog";
import { JsonLd } from "@/components/site/JsonLd";
import { UtilityLinkList, UtilityPage } from "@/components/site/UtilityPage";
import {
  ROUTES,
  SERVICES,
  breadcrumbJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/sitemap");

const PAGE_LINKS = ROUTES.map((route) => ({
  href: route.path,
  name: route.path === "/" ? "Home" : route.title,
  summary: route.description,
}));

const PRODUCT_LINKS = PRODUCTS.map((product) => ({
  href: `/shop#${product.id}`,
  name: product.name,
  summary: `${product.spec} · ₹${product.price.toLocaleString("en-IN")} · ${product.description}`,
}));

const INDEX_LINKS = [
  {
    href: "/llms.txt",
    name: "llms.txt",
    summary: "Plain-text facts about Millet Bakes for answer engines and AI crawlers.",
  },
  {
    href: "/sitemap.xml",
    name: "XML sitemap",
    summary: "Machine-readable sitemap for search engine crawlers.",
  },
  {
    href: "/service-index",
    name: "Service Index Page",
    summary: "Index of bakery, delivery, workshop, and gifting services.",
  },
  {
    href: "/ai-policy",
    name: "AI Policy",
    summary: "Rules for AI crawlers, training use, and citations of Millet Bakes content.",
  },
  {
    href: "/cookie-policy",
    name: "Cookie Policy",
    summary: "How this site uses cookies and similar browser storage.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Site Map", path: "/sitemap" },
        ])}
      />
      <UtilityPage
        stamp="Site Directory"
        title="Site Map"
        intro="Every public Millet Bakes page, shop product, and service index in one place."
      >
        <section>
          <h2 className="font-headline font-bold text-xl text-primary mb-4">Pages</h2>
          <UtilityLinkList items={[...PAGE_LINKS]} />
        </section>
        <section>
          <h2 className="font-headline font-bold text-xl text-primary mb-4">Shop products</h2>
          <UtilityLinkList items={PRODUCT_LINKS} />
        </section>
        <section>
          <h2 className="font-headline font-bold text-xl text-primary mb-4">Services</h2>
          <UtilityLinkList items={[...SERVICES]} />
        </section>
        <section>
          <h2 className="font-headline font-bold text-xl text-primary mb-4">Indexes</h2>
          <UtilityLinkList items={INDEX_LINKS} />
        </section>
      </UtilityPage>
    </>
  );
}
