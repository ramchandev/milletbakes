import Link from "next/link";
import { PRODUCTS, formatProductTitle } from "@/lib/catalog";
import { ROUTES, SERVICES } from "@/lib/seo";
import { formatINR, HEADER_WHATSAPP_HREF, NAV_LINKS } from "@/lib/site";

const EXTRA_PAGES = ROUTES.filter(
  (route) => !NAV_LINKS.some((link) => link.href === route.path),
).map((route) => ({
  href: route.path,
  name: route.title,
  summary: route.description,
}));

const PRODUCT_LINKS = PRODUCTS.map((product) => ({
  href: `/shop#${product.id}`,
  name: formatProductTitle(product),
  summary: `${product.spec} · ${formatINR(product.price)}`,
}));

function OfferLink({
  href,
  name,
  summary,
}: {
  href: string;
  name: string;
  summary: string;
}) {
  return (
    <Link
      className="group flex flex-col h-full rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 warm-card-shadow hover:border-secondary/50 hover:shadow-md transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      href={href}
    >
      <span className="font-headline font-bold text-primary group-hover:text-secondary transition-colors">
        {name}
      </span>
      <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
        {summary}
      </p>
      <span className="mt-auto pt-4 font-label text-xs font-bold uppercase tracking-wider text-secondary">
        Open page
      </span>
    </Link>
  );
}

export default function NotFoundPage() {
  return (
    <main className="flex-1 parchment-pattern">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="font-stamp text-[11px] font-extrabold uppercase tracking-widest text-secondary block mb-3">
            404 · Page not found
          </span>
          <h1 className="font-headline font-bold text-3xl md:text-5xl text-primary tracking-tight leading-tight">
            Oops! We could not find what you are looking for!
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant mt-5 leading-relaxed">
            That address is not on the Millet Bakes oven map. Here is what we offer — every page,
            bake, and service, ready to tap.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              className="inline-flex min-h-11 items-center justify-center px-6 py-3 rounded-full bg-primary text-on-primary font-label text-sm font-bold hover:bg-secondary transition-colors"
              href="/"
            >
              Back to Home
            </Link>
            <Link
              className="inline-flex min-h-11 items-center justify-center px-6 py-3 rounded-full bg-surface-container-lowest border border-outline-variant/50 text-primary font-label text-sm font-bold hover:border-secondary/50 transition-colors"
              href="/shop"
            >
              Shop the menu
            </Link>
            <a
              className="inline-flex min-h-11 items-center justify-center px-6 py-3 rounded-full bg-secondary text-on-secondary font-label text-sm font-bold hover:opacity-90 transition-opacity"
              href={HEADER_WHATSAPP_HREF}
              rel="noopener noreferrer"
              target="_blank"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="font-headline font-bold text-xl text-primary mb-5">Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {NAV_LINKS.map((link) => (
                <OfferLink
                  key={link.href}
                  href={link.href}
                  name={link.label}
                  summary={
                    ROUTES.find((route) => route.path === link.href)?.description ??
                    "Explore Millet Bakes."
                  }
                />
              ))}
              {EXTRA_PAGES.map((page) => (
                <OfferLink key={page.href} href={page.href} name={page.name} summary={page.summary} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-headline font-bold text-xl text-primary mb-5">Bakes we offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRODUCT_LINKS.map((product) => (
                <OfferLink
                  key={product.href}
                  href={product.href}
                  name={product.name}
                  summary={product.summary}
                />
              ))}
              <OfferLink
                href="/corporate"
                name="Custom Hamper & Bulk Orders"
                summary="Branded tins, wedding favors, and volume pricing for teams and events."
              />
            </div>
          </section>

          <section>
            <h2 className="font-headline font-bold text-xl text-primary mb-5">Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((service) => (
                <OfferLink
                  key={`${service.href}-${service.name}`}
                  href={service.href}
                  name={service.name}
                  summary={service.summary}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
