import { ImageResponse } from "next/og";
import { getOgLogoSrc, OG_CONTENT_TYPE, OG_SIZE, OgFrame } from "@/lib/og";

export const alt = "Millet Bakes — pure millet and palm jaggery bakery in Chennai";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpenGraphImage() {
  const logoSrc = await getOgLogoSrc();

  return new ImageResponse(
    (
      <OgFrame
        logoSrc={logoSrc}
        stamp="Ayanavaram, Chennai"
        title="Millet Bakes"
        titleSize={80}
        cta="Order now on WhatsApp →"
        footerLeft="Palm jaggery · Ancient grains"
        footerRight="milletbakes.in"
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#514440",
            lineHeight: 1.35,
            maxWidth: 640,
          }}
        >
          Sprouted millet cookies, granola, cakes, and wellness hampers. Zero
          maida. Zero refined sugar.
        </div>
      </OgFrame>
    ),
    size,
  );
}
