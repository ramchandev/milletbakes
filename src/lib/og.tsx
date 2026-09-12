import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ReactNode } from "react";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export async function getOgLogoSrc() {
  const bytes = await readFile(join(process.cwd(), "public/millet-bakes-logo.png"));
  return `data:image/png;base64,${bytes.toString("base64")}`;
}

type OgFrameProps = {
  logoSrc: string;
  stamp: string;
  title: string;
  titleSize?: number;
  children: ReactNode;
  cta: string;
  footerLeft: string;
  footerRight: string;
};

export function OgFrame({
  logoSrc,
  stamp,
  title,
  titleSize = 72,
  children,
  cta,
  footerLeft,
  footerRight,
}: OgFrameProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fdf9f2",
        padding: "52px 64px",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            maxWidth: 700,
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 3.2,
              textTransform: "uppercase",
              color: "#974723",
              fontWeight: 700,
            }}
          >
            {stamp}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              lineHeight: 1.02,
              color: "#200903",
              fontWeight: 800,
            }}
          >
            {title}
          </div>
          {children}
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginTop: 8,
              background: "#974723",
              color: "#ffffff",
              padding: "14px 32px",
              borderRadius: 999,
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 0.4,
            }}
          >
            {cta}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 360,
            height: 360,
            borderRadius: 180,
            background: "#f7f3ec",
            border: "10px solid #e8d5b5",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 18px 40px rgba(32, 9, 3, 0.12)",
            flexShrink: 0,
          }}
        >
          <img
            src={logoSrc}
            alt="Millet Bakes logo"
            width={250}
            height={250}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#79310e",
          fontSize: 22,
          paddingTop: 18,
          borderTop: "1px solid #d5c3bd",
        }}
      >
        <span>{footerLeft}</span>
        <span>{footerRight}</span>
      </div>
    </div>
  );
}
