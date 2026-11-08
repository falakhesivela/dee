import type { Metadata } from "next";
import { Marcellus, Marcellus_SC, Nunito_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "DB Tsamaesi Attorneys Incorporated",
  description:
    "Expert legal solutions with integrity, professionalism and a client-centred approach. Litigation, personal injury, estates, labour, administrative and commercial law.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${marcellus.variable} ${marcellusSC.variable} antialiased`}
    >
      <body className="bg-white font-sans text-base text-body">{children}</body>
    </html>
  );
}
