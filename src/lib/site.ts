export const SITE_NAME = "Millet Bakes";
export const SITE_TAGLINE = "Pure Millet & Jaggery Handcrafted Bakery";
export const SITE_DESCRIPTION =
  "Handcrafted millet cookies, granola jars, cakes, and wellness hampers baked to order in Ayanavaram, Chennai with sprouted ancient grains and country palm jaggery. Zero maida, zero refined sugar.";

export const SITE_URL = (
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.milletbakes.in"
).replace(/\/$/, "");

export const WHATSAPP_NUMBER = "916383100431";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_URL = "https://instagram.com/millet_bakes";
export const BIZYSITE_URL = "https://www.bizysite.in";
export const INSTAGRAM_HANDLE = "@millet_bakes";
export const PHONE_DISPLAY = "+91 63831 00431";
export const PHONE_E164 = "+916383100431";
export const PHONE_HREF = `tel:${PHONE_E164}`;

export const FOUNDER_NAME = "Santhiya Karthikeyan";
export const ADDRESS_LOCALITY = "Ayanavaram";
export const ADDRESS_CITY = "Chennai";
export const ADDRESS_REGION = "Tamil Nadu";
export const ADDRESS_POSTAL_CODE = "600023";
export const ADDRESS_COUNTRY = "IN";
export const ADDRESS_DISPLAY = "Ayanavaram, Chennai, Tamil Nadu - 600023";
export const OPENING_HOURS_DISPLAY = "Monday to Saturday: 9:00 AM – 7:30 PM";
export const PRICE_RANGE = "₹₹";

export const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDOXdzfsw9MovKDKzDaiSJFOhODBklFJNkDuvCk9FoonMKKQP7MWomjEYbMSzK5fsgWpJ-HlyAx3owjc9jVX-0MVUCcCrLRyKAEq_mnz1-db6WDMlqbHap6mVes1YnzkThPlZyJ945I9MiCLeWYt7J4PATRAJ0SG4z64Ev_br_7c4j0o_akvZYnFnbl0I5wzoyE9eM3u1BGuuW_nFoMBukjAY8iyKYjOryaw3ZKe22wXvgTXMpiIGs2_kySf0ORGOuXkRw";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop & Order" },
  { href: "/corporate", label: "Corporate Workshops" },
  { href: "/our-story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
] as const;

export function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function openWhatsApp(message: string) {
  const url = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
