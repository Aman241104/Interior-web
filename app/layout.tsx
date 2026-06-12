import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Styluxe Interior Decor | Turnkey Interior Design in Ahmedabad",
    template: "%s | Styluxe Interior Decor",
  },
  description:
    "Crafting spaces that define you. Premium turnkey interior design for residential and commercial projects in Ahmedabad. Delivered in under 90 days.",
  keywords: [
    "interior design Ahmedabad",
    "turnkey interior design",
    "residential interior designer",
    "commercial interior design",
    "modular kitchen Ahmedabad",
    "Styluxe Interior Decor",
    "Akash Modi interior designer",
  ],
  authors: [{ name: "Styluxe Interior Decor" }],
  creator: "Styluxe Interior Decor",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://styluxe.in",
    siteName: "Styluxe Interior Decor",
    title: "Styluxe Interior Decor | Turnkey Interior Design in Ahmedabad",
    description:
      "Premium turnkey interior design delivered in under 90 days. Residential, commercial, and healthcare spaces crafted with intention.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-cream text-dark antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
