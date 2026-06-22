import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  metadataBase: new URL('https://www.sidecor.in'),
  title: {
    default: "Styluxe Interior Decor | Premium Turnkey Interiors Ahmedabad",
    template: "%s | Styluxe Interior Decor",
  },
  description:
    "Award-winning turnkey interior design in Ahmedabad. Residential, commercial & healthcare spaces crafted by Akash Modi. Delivered in under 90 days. IEA 2025 winners.",
  keywords: [
    "interior design Ahmedabad",
    "turnkey interior design Ahmedabad",
    "residential interior designer Ahmedabad",
    "commercial interior design Gujarat",
    "modular kitchen Ahmedabad",
    "interior designer Paldi Ahmedabad",
    "luxury interior design Gujarat",
    "home interior design Ahmedabad",
    "office interior design Ahmedabad",
    "Styluxe Interior Decor",
    "Akash Modi interior designer",
    "interior design under 90 days",
    "best interior designer Ahmedabad",
    "turnkey home interior Gujarat",
    "3D interior design Ahmedabad",
  ],
  authors: [{ name: "Akash N. Modi", url: "https://www.sidecor.in/about" }],
  creator: "Styluxe Interior Decor",
  publisher: "Styluxe Interior Decor",
  category: "Interior Design",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sidecor.in",
    siteName: "Styluxe Interior Decor",
    title: "Styluxe Interior Decor | Premium Turnkey Interiors Ahmedabad",
    description:
      "Award-winning turnkey interior design in Ahmedabad. Residential, commercial & healthcare spaces. IEA 2025 winners. Delivered in under 90 days.",
    images: [
      {
        url: "/images/award-iea-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Styluxe Interior Decor — IEA International Excellence Awards 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Styluxe Interior Decor | Premium Turnkey Interiors Ahmedabad",
    description:
      "Award-winning turnkey interior design in Ahmedabad. IEA 2025 winners. Delivered in under 90 days.",
    images: ["/images/award-iea-2025.jpg"],
  },
  alternates: {
    canonical: "https://www.sidecor.in",
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
  verification: {
    google: "",
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
        <JsonLd />
        <Analytics />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
