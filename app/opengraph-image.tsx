import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Heltco Ventures — Hands-on Investors in Health Care";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#000000",
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#6D28D9",
            fontWeight: 600,
          }}
        >
          Heltco Ventures
        </div>

        <div
          style={{
            fontSize: 96,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontWeight: 600,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Hands-on investors</span>
          <span>
            in <span style={{ color: "#6D28D9" }}>health care.</span>
          </span>
        </div>

        <div
          style={{
            fontSize: 28,
            color: "rgba(0,0,0,0.5)",
            letterSpacing: "-0.01em",
          }}
        >
          heltcoventures.com
        </div>
      </div>
    ),
    { ...size }
  );
}
