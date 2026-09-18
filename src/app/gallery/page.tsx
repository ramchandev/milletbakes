import type { Metadata } from "next";
import GalleryPage from "@/components/pages/GalleryPage";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/gallery");

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Photo Gallery", path: "/gallery" },
        ])}
      />
      <GalleryPage />
    </>
  );
}
