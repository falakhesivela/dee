import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { contact, firm } from "@/lib/site";

// The preview shown when the site is shared on WhatsApp, Facebook, LinkedIn, X, etc.
// Rendered once at build time.

export const alt = `${firm.name}, ${firm.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const navy = "#0f1b2d";
const navyDeep = "#0b1524";
const gold = "#c89b4a";
const goldLight = "#e2c17e";
const onNavy = "#d5dbe4";

const marcellus = await readFile(join(process.cwd(), "assets/fonts/Marcellus-Regular.ttf"));
const logo = await readFile(join(process.cwd(), "public/logo.png"));
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 80px",
          background: navy,
          borderBottom: `14px solid ${gold}`,
          fontFamily: "Marcellus",
          color: "white",
        }}
      >
        <div
          style={{
            width: 280,
            height: 280,
            flex: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 9999,
            background: navyDeep,
            border: `5px solid ${gold}`,
          }}
        >
          <img src={logoSrc} width={176} height={172} alt="" />
        </div>

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 24, letterSpacing: 4, color: goldLight, textTransform: "uppercase" }}>
            {firm.tagline}
          </div>
          <div style={{ fontSize: 64, lineHeight: 1.08 }}>{firm.name}</div>
          <div style={{ width: 120, height: 3, background: gold }} />
          <div style={{ fontSize: 27, color: onNavy }}>
            {`Litigation · RAF claims · Estates · Labour · Commercial`}
          </div>
          <div style={{ fontSize: 34, color: goldLight }}>{contact.phone}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Marcellus", data: marcellus, style: "normal", weight: 400 }],
    },
  );
}
