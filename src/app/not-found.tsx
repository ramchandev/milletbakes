import type { Metadata } from "next";
import NotFoundPage from "@/components/pages/NotFoundPage";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "Oops! We could not find what you are looking for. Browse Millet Bakes pages, millet cookies, granola, cakes, and corporate workshops.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundPage />;
}
