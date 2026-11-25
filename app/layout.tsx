import type { Metadata, Viewport } from "next";
import { Marcellus, Marcellus_SC, Nunito_Sans } from "next/font/google";
import { contact, firm, siteUrl } from "@/lib/site";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  axes: ["opsz"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
});

const marcellusSC = Marcellus_SC({
  variable: "--font-marcellus-sc",
  weight: "400",
  subsets: ["latin"],
});

const title = `${firm.shortName} | Law Firm in Mahikeng, North West`;
const description =
  `Attorneys in Mahikeng, North West, for civil and criminal litigation, Road Accident Fund claims, deceased estates, labour disputes and business law. Call ${contact.phone}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${firm.shortName}`,
  },
  description,
  applicationName: firm.shortName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "/",
    siteName: firm.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1b2d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`${nunito.variable} ${marcellus.variable} ${marcellusSC.variable} antialiased`}
    >
      <body className="bg-white font-sans text-base text-body">{children}</body>
    </html>
  );
}
