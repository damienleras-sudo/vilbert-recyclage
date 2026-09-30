import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vilbert Recyclage — Location de bennes et collecte déchets BTP en Hauts-de-France";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a5c28",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 90px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo recreation for OG image */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px", marginBottom: "40px" }}>
          {/* Recycling symbol */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              border: "8px solid #f5b800",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 72,
              color: "white",
              flexShrink: 0,
            }}
          >
            ♻
          </div>

          {/* Text block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            {/* Top yellow bar */}
            <div style={{ width: 560, height: 8, background: "#f5b800", borderRadius: 4, marginBottom: 6 }} />

            {/* VILBERT */}
            <div
              style={{
                fontSize: 110,
                fontWeight: 900,
                color: "white",
                lineHeight: 1,
                letterSpacing: "-2px",
              }}
            >
              VILBERT
            </div>

            {/* Bottom row: short yellow bar + RECYCLAGE */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 4 }}>
              <div style={{ width: 130, height: 10, background: "#f5b800", borderRadius: 4 }} />
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 600,
                  color: "white",
                  letterSpacing: "8px",
                }}
              >
                RECYCLAGE
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "rgba(255,255,255,0.85)",
            marginBottom: 18,
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Location de bennes &amp; collecte déchets BTP
        </div>

        <div style={{ fontSize: 28, color: "#c8e6c9", marginBottom: 44 }}>
          Hauts-de-France · Beauval (80) · Devis gratuit sous 24h
        </div>

        {/* CTA pill */}
        <div
          style={{
            background: "#f5b800",
            color: "#1a1a1a",
            padding: "20px 40px",
            borderRadius: 12,
            fontSize: 32,
            fontWeight: 900,
          }}
        >
          📞 03 22 93 02 86
        </div>
      </div>
    ),
    { ...size }
  );
}
