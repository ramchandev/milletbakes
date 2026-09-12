import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/site/JsonLd";
import { UtilityPage } from "@/components/site/UtilityPage";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/cookie-policy");

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cookie Policy", path: "/cookie-policy" },
        ])}
      />
      <UtilityPage
        stamp="Policies"
        title="Cookie Policy"
        intro="How the Millet Bakes website uses cookies and similar storage. Last updated 12 September 2026."
      >
        <section>
          <h2 className="font-headline font-bold text-xl text-primary mb-3">What we use</h2>
          <p>
            This storefront is a small-batch bakery site. We use only what is needed to show pages
            and remember your oven basket while you shop. We do not run advertising networks or
            sell cookie data.
          </p>
        </section>
        <section>
          <h2 className="font-headline font-bold text-xl text-primary mb-3">Essential storage</h2>
          <p>
            The shopping cart is kept in your browser (local storage) so quantities stay available
            as you move between Home and Shop. The site may also set a small technical cookie that
            Next.js uses to load pages correctly. These are strictly necessary for the storefront
            to work.
          </p>
        </section>
        <section>
          <h2 className="font-headline font-bold text-xl text-primary mb-3">Third-party services</h2>
          <p>
            If you tap WhatsApp, Instagram, or phone links, those services apply their own cookies
            and privacy rules after you leave this site. We do not control cookies set on
            WhatsApp, Instagram, or your device after you follow those links.
          </p>
        </section>
        <section>
          <h2 className="font-headline font-bold text-xl text-primary mb-3">Your choices</h2>
          <p>
            You can clear site data or block cookies in your browser settings. Clearing storage
            empties the cart. Blocking all cookies may affect how the site loads. For questions,
            use the{" "}
            <Link className="text-secondary underline underline-offset-2" href="/contact">
              contact page
            </Link>
            .
          </p>
        </section>
      </UtilityPage>
    </>
  );
}
