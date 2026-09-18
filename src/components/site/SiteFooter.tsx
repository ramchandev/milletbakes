import Link from "next/link";
import {
  BIZYSITE_URL,
  INSTAGRAM_URL,
  LOGO_SRC,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

const INSTAGRAM_PATH =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";

const FOOTER_LINK =
  "hover:text-primary-fixed transition-colors duration-200";

export function SiteFooter() {
  return (
    <footer className="bg-primary-container text-on-primary-container border-t border-outline/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-3">
            <Link href="/" className="flex items-center gap-3">
              <img
                src={LOGO_SRC}
                alt="Millet Bakes logo"
                className="h-14 w-auto object-contain drop-shadow-sm"
              />
              <h3 className="font-headline text-xl font-bold text-on-primary">Millet Bakes</h3>
            </Link>
            <p className="text-sm text-on-primary-container/80 leading-relaxed">
              Pure millet and palm jaggery, baked to order in Chennai. Zero maida, zero refined
              sugar, and small-batch ancient grain craft for homes and corporate wellness.
            </p>
          </div>
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-secondary-fixed">
              Explore
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="text-on-primary-container/80 hover:text-primary-fixed transition-colors duration-200" href="/shop">
                Shop &amp; Order
              </Link>
              <Link className="text-on-primary-container/80 hover:text-primary-fixed transition-colors duration-200" href="/gallery">
                Gallery
              </Link>
              <Link className="text-on-primary-container/80 hover:text-primary-fixed transition-colors duration-200" href="/our-story">
                Our Story
              </Link>
              <Link className="text-on-primary-container/80 hover:text-primary-fixed transition-colors duration-200" href="/corporate">
                Workshops
              </Link>
              <Link className="text-on-primary-container/80 hover:text-primary-fixed transition-colors duration-200" href="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-secondary-fixed">
              The Craft
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <span className="text-on-primary-container/80">Zero Refined Sugar</span>
              <span className="text-on-primary-container/80">100% Ancient Grains</span>
              <Link className="text-on-primary-container/80 hover:text-primary-fixed transition-colors duration-200" href="/corporate">
                Corporate Gifting
              </Link>
              <Link className="text-on-primary-container/80 hover:text-primary-fixed transition-colors duration-200" href="/corporate">
                Workshops
              </Link>
            </div>
          </div>
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-secondary-fixed">
              Direct Oven Contact
            </h4>
            <a
              className="text-sm text-on-primary-container/80 hover:text-primary-fixed transition-colors duration-200 flex items-center gap-2"
              href={INSTAGRAM_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d={INSTAGRAM_PATH} />
              </svg>
              <span>Instagram @millet_bakes</span>
            </a>
            <a
              className="text-secondary-fixed font-semibold underline hover:text-primary-fixed transition-colors duration-200 flex items-center gap-2"
              href={PHONE_HREF}
            >
              Contact: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-outline/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body text-on-primary-container/70 mt-10">
          <p>
            © {new Date().getFullYear()} Millet Bakes. Pure Millet &amp; Jaggery Craft. All rights reserved. • Website
            Design By{" "}
            <a
              className="underline underline-offset-2 hover:text-primary-fixed transition-colors duration-200"
              href={BIZYSITE_URL}
              rel="nofollow noindex noreferrer noopener"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Bizy Site
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link className={FOOTER_LINK} href="/sitemap">
              Site Map
            </Link>
            <a className={FOOTER_LINK} href="/llms.txt">
              llms.txt
            </a>
            <Link className={FOOTER_LINK} href="/service-index">
              Service Index Page
            </Link>
            <Link className={FOOTER_LINK} href="/ai-policy">
              AI Policy
            </Link>
            <Link className={FOOTER_LINK} href="/cookie-policy">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
