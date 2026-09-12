import type { Metadata } from "next";
import StoryPage from "@/components/pages/StoryPage";
import { JsonLd } from "@/components/site/JsonLd";
import { aboutPageJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/our-story");

export default function Page() {
  return (
    <>
      <JsonLd data={aboutPageJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Story", path: "/our-story" },
        ])}
      />
      <StoryPage />
    </>
  );
}
