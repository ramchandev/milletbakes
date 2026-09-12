import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/site/JsonLd";
import { Providers } from "@/components/site/Providers";
import {
  bakeryJsonLd,
  organizationJsonLd,
  pageMetadata,
  websiteJsonLd,
} from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "material-symbols/outlined.css";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: "Santhiya Karthikeyan", url: `${SITE_URL}/our-story` }],
  creator: "Santhiya Karthikeyan",
  publisher: SITE_NAME,
  category: "food",
  classification: "Bakery",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    title: SITE_NAME,
    capable: true,
    statusBarStyle: "default",
  },
  ...pageMetadata("/"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${epilogue.variable} ${plusJakarta.variable} scroll-smooth h-full`}
    >
      <body className="min-h-full bg-background text-on-surface font-body-md antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={bakeryJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Providers>
          <div className="min-h-full flex flex-col">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
