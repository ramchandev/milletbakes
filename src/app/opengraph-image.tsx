import { ImageResponse } from "next/og";

export const alt = "Millet Bakes — pure millet and palm jaggery bakery in Chennai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fdf9f2",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#974723",
            fontWeight: 700,
          }}
        >
          Ayanavaram, Chennai
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              lineHeight: 0.95,
              color: "#200903",
              fontWeight: 800,
            }}
          >
            Millet Bakes
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#514440",
              maxWidth: 860,
              lineHeight: 1.3,
            }}
          >
            Sprouted millet cookies, granola, cakes, and wellness hampers.
            Zero maida. Zero refined sugar.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#79310e",
            fontSize: 24,
          }}
        >
          <span>Palm jaggery · Ancient grains</span>
          <span>WhatsApp orders</span>
        </div>
      </div>
    ),
    size,
  );
}
