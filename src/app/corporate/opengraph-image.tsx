import { ImageResponse } from "next/og";
import { getOgLogoSrc, OG_CONTENT_TYPE, OG_SIZE, OgFrame } from "@/lib/og";

export const alt =
  "Millet Bakes corporate workshops and wellness gifting — hands-on millet baking for teams in Chennai and across India";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const DETAILS = [
  "Hands-on millet baking workshops",
  "Employee wellness masterclasses",
  "Branded festive & onboarding hampers",
  "Teams of 12–60+ · Chennai & pan-India",
];

export default async function CorporateOpenGraphImage() {
  const logoSrc = await getOgLogoSrc();

  return new ImageResponse(
    (
      <OgFrame
        logoSrc={logoSrc}
        stamp="Corporate Workshops & Wellness Gifting"
        title="Bake together. Gift with purpose."
        titleSize={52}
        footerLeft="Zero maida · Palm jaggery · Small-batch"
        footerRight="milletbakes.in/corporate"
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#514440",
            lineHeight: 1.35,
            maxWidth: 680,
          }}
        >
          Team culinary experiences and artisan gift tins from Millet Bakes —
          ancient-grain recipes led from our Chennai kitchen.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginTop: 6,
          }}
        >
          {DETAILS.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 22,
                color: "#200903",
                fontWeight: 600,
              }}
            >
              <span style={{ color: "#974723" }}>•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </OgFrame>
    ),
    size,
  );
}
