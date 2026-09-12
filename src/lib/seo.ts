import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/catalog";
import {
  ADDRESS_CITY,
  ADDRESS_COUNTRY,
  ADDRESS_DISPLAY,
  ADDRESS_LOCALITY,
  ADDRESS_POSTAL_CODE,
  ADDRESS_REGION,
  FOUNDER_NAME,
  INSTAGRAM_URL,
  LOGO_SRC,
  PHONE_E164,
  PRICE_RANGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  WHATSAPP_URL,
} from "@/lib/site";

export const SITE_KEYWORDS = [
  "millet bakery Chennai",
  "ragi cookies",
  "jaggery bakery",
  "no maida cookies",
  "millet granola",
  "palm jaggery cakes",
  "corporate wellness hamper Chennai",
  "Ayanavaram bakery",
  "Santhiya Karthikeyan",
];

export const FAQS = [
  {
    question: "What is the shelf life and ideal storage for Millet Bakes?",
    answer:
      "Cookies and crisps stay fresh 35 to 45 days in an airtight container away from sunlight. Fresh millet loaves and brownies last 4 to 5 days at room temperature, or up to 10 days refrigerated. We bake without chemical stabilizers.",
  },
  {
    question: "How do you sweeten your bakes without refined white sugar?",
    answer:
      "Millet Bakes uses organic jaggery powder, palm jaggery (karupatti), date puree, and raw honey. We do not use high-fructose corn syrup, artificial sweeteners, or refined white cane sugar.",
  },
  {
    question: "Do you offer Chennai same-day delivery and pan-India shipping?",
    answer:
      "Yes. Fresh cakes and breads dispatch from the Ayanavaram kitchen for same-day or next-day Chennai delivery. Sealed millet cookies, crisps, and granola hampers ship across India by air courier and reach most metros in 48 to 72 hours.",
  },
  {
    question: "What are the requirements for corporate workshops and masterclasses?",
    answer:
      "Hands-on millet baking workshops run for corporate health days, residential communities, and culinary schools. Cohorts start at 12 participants and can scale past 60. Millet Bakes brings grain starter kits, ingredients, and beginner-friendly guidance.",
  },
] as const;

export const ROUTES = [
  {
    path: "/",
    title: "Millet Bakes | Pure Millet & Jaggery Bakery",
    description:
      "Handcrafted millet cookies, granola, cakes, and hampers baked to order in Ayanavaram, Chennai. Zero maida, zero refined sugar.",
    ogDescription:
      "Millet cookies, granola, cakes, and hampers from Chennai. Zero maida. Order on WhatsApp.",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/shop",
    title: "Shop Millet Cookies, Cakes & Hampers",
    description:
      "Order ragi cookies, millet granola, tea cakes, and wellness hampers. Same-day Chennai delivery and pan-India courier.",
    ogDescription:
      "Shop ragi cookies, granola, cakes, and hampers. Order on WhatsApp for Chennai delivery.",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/corporate",
    title: "Corporate Workshops & Wellness Gifting",
    description:
      "Book millet baking workshops and branded wellness hampers for teams in Chennai and across India.",
    ogDescription:
      "Hands-on millet workshops and branded team hampers. Book a corporate bake today.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/our-story",
    title: "Our Story — Ancient Grain Baking",
    description:
      "Meet founder Santhiya Karthikeyan and the Ayanavaram kitchen behind Millet Bakes: millets and palm jaggery, never maida.",
    ogDescription:
      "Santhiya Karthikeyan’s Chennai bakery: sprouted millets and palm jaggery, never maida.",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/contact",
    title: "Contact the Ayanavaram Studio",
    description:
      "WhatsApp +91 63831 00431 for custom hampers, workshops, and fresh bake slots. Studio in Ayanavaram, Chennai 600023. Monday to Saturday, 9:00 AM – 7:30 PM.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/sitemap",
    title: "Site Map",
    description:
      "Complete site map of Millet Bakes pages, shop products, corporate services, and machine-readable indexes.",
    changeFrequency: "weekly" as const,
    priority: 0.4,
  },
  {
    path: "/service-index",
    title: "Service Index Page",
    description:
      "Index of Millet Bakes services: WhatsApp bakery orders, Chennai delivery, pan-India shipping, corporate workshops, and wellness gifting.",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    path: "/ai-policy",
    title: "AI Policy",
    description:
      "How Millet Bakes treats AI crawlers, training use, citations, and automated access to bakery content.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  {
    path: "/cookie-policy",
    title: "Cookie Policy",
    description:
      "How Millet Bakes uses cookies and similar storage for the storefront, cart, and third-party links.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
] as const;

export const SERVICES = [
  {
    href: "/shop",
    name: "WhatsApp bakery orders",
    summary: "Build a hamper or shop cookies, granola, cakes, and gift boxes, then send the order to the kitchen on WhatsApp.",
  },
  {
    href: "/shop",
    name: "Chennai same-day and next-day delivery",
    summary: "Fresh cakes and breads dispatch from the Ayanavaram kitchen for local Chennai doorstep delivery.",
  },
  {
    href: "/shop",
    name: "Pan-India courier shipping",
    summary: "Sealed millet cookies, crisps, and granola hampers ship by air courier to most Indian metros in 48 to 72 hours.",
  },
  {
    href: "/contact",
    name: "Studio pickup by appointment",
    summary: "Collect bakes from the Ayanavaram studio or the Kodambakkam pickup slot after booking a time.",
  },
  {
    href: "/corporate",
    name: "Corporate millet baking workshops",
    summary: "Hands-on ancient-grain masterclasses for teams of about 12 to 60+, on-site or in studio.",
  },
  {
    href: "/corporate",
    name: "Desk wellness and mindful snacking talks",
    summary: "Office tasting sessions that swap ultra-processed 4 PM snacks for millet energy bites.",
  },
  {
    href: "/shop#corporate-hamper",
    name: "Corporate and festive wellness hampers",
    summary: "Branded artisan gift tins for Diwali, New Year, onboarding, and team milestones.",
  },
  {
    href: "/contact",
    name: "Custom dietary and bulk inquiries",
    summary: "Eggless, diabetic-friendly, vegan, and large wedding or conference orders via the inquiry form.",
  },
] as const;

type PagePath = (typeof ROUTES)[number]["path"];

export function absoluteUrl(path = "/") {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata(
  path: PagePath,
  extras: Metadata = {},
): Metadata {
  const route = ROUTES.find((item) => item.path === path);
  if (!route) return extras;

  const url = absoluteUrl(path);
  const isHome = path === "/";
  const socialDescription =
    "ogDescription" in route && route.ogDescription
      ? route.ogDescription
      : route.description;

  return {
    title: isHome
      ? { default: route.title, template: `%s | ${SITE_NAME}` }
      : route.title,
    description: route.description,
    keywords: SITE_KEYWORDS,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: isHome ? route.title : `${route.title} | ${SITE_NAME}`,
      description: socialDescription,
      siteName: SITE_NAME,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: isHome ? route.title : `${route.title} | ${SITE_NAME}`,
      description: socialDescription,
    },
    ...extras,
  };
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_LOCALITY,
    addressLocality: ADDRESS_CITY,
    addressRegion: ADDRESS_REGION,
    postalCode: ADDRESS_POSTAL_CODE,
    addressCountry: ADDRESS_COUNTRY,
  };
}

export function bakeryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Bakery", "LocalBusiness"],
    "@id": `${SITE_URL}/#bakery`,
    name: SITE_NAME,
    alternateName: "Millet Bakes Chennai",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: PHONE_E164,
    image: [absoluteUrl("/web-app-manifest-512x512.png"), LOGO_SRC],
    logo: absoluteUrl("/web-app-manifest-192x192.png"),
    priceRange: PRICE_RANGE,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, WhatsApp order",
    address: postalAddress(),
    areaServed: [
      { "@type": "City", name: ADDRESS_CITY },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:30",
    },
    founder: {
      "@type": "Person",
      name: FOUNDER_NAME,
      jobTitle: "Master Baker & Founder",
      address: postalAddress(),
    },
    sameAs: [INSTAGRAM_URL],
    hasMenu: absoluteUrl("/shop"),
    menu: absoluteUrl("/shop"),
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: WHATSAPP_URL,
        actionPlatform: "http://schema.org/DesktopWebPlatform",
      },
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#bakery` },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    founder: { "@type": "Person", name: FOUNDER_NAME },
    address: postalAddress(),
    telephone: PHONE_E164,
    sameAs: [INSTAGRAM_URL],
    logo: absoluteUrl("/web-app-manifest-192x192.png"),
  };
}

export function productCatalogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `${SITE_NAME} Shop`,
    url: absoluteUrl("/shop"),
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "Offer",
      position: index + 1,
      url: `${absoluteUrl("/shop")}#${product.id}`,
      price: product.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        sku: product.id,
        category: product.category,
        brand: { "@type": "Brand", name: SITE_NAME },
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${absoluteUrl("/shop")}#${product.id}`,
        },
      },
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  crumbs: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function aboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `Our Story | ${SITE_NAME}`,
    url: absoluteUrl("/our-story"),
    description:
      "The Millet Bakes story: founder Santhiya Karthikeyan and an Ayanavaram kitchen baking sprouted millets with palm jaggery.",
    mainEntity: {
      "@type": "Person",
      name: FOUNDER_NAME,
      jobTitle: "Founder and Master Baker",
      worksFor: { "@id": `${SITE_URL}/#bakery` },
      address: postalAddress(),
      sameAs: [INSTAGRAM_URL],
    },
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate millet baking workshops and wellness gifting",
    serviceType: "Corporate wellness workshop",
    provider: { "@id": `${SITE_URL}/#bakery` },
    areaServed: [
      { "@type": "City", name: ADDRESS_CITY },
      { "@type": "Country", name: "India" },
    ],
    description:
      "Hands-on millet and jaggery baking workshops plus branded corporate hampers for teams in Chennai and across India.",
    url: absoluteUrl("/corporate"),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Workshop formats",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hands-on ancient grain baking workshop",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate wellness hamper gifting",
          },
        },
      ],
    },
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact | ${SITE_NAME}`,
    url: absoluteUrl("/contact"),
    description: `Reach ${SITE_NAME} at ${ADDRESS_DISPLAY}. WhatsApp ${PHONE_E164}.`,
    mainEntity: { "@id": `${SITE_URL}/#bakery` },
  };
}
