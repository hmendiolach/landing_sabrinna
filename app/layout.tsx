import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://landing.sabrinnamassage.com'),
  title: "Sabrina Tantric Massage | Lowell, Middlesex County, MA",
  description: "Discover the healing power of Tantric Massage in Lowell, Middlesex County, MA. Professional wellness services. Book your exclusive session today.",
  keywords: "tantric massage, wellness, lowell, middlesex county, ma, massachusetts, relaxation, energy healing, sensual massage",
  icons: {
    icon: "/logo-white.svg",
  },
  openGraph: {
    title: "Sabrina Tantric Massage | Exclusive Experience",
    description: "Journey into deep relaxation and sensual awakening.",
    url: "https://landing.sabrinnamassage.com",
    siteName: "Sabrina Tantric Massage",
    images: [
      {
        url: "/social-logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Sabrina Tantric Massage & Wellness",
  "image": "https://landing.sabrinnamassage.com/social-logo.png",
  "description": "Professional tantric massage and wellness services in Lowell, Middlesex County, MA.",
  "telephone": "+1-617-655-4053",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lowell",
    "addressRegion": "MA",
    "addressCountry": "US"
  },
  "priceRange": "$$",
  "url": "https://landing.sabrinnamassage.com"
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased bg-brand-dark text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <GoogleAnalytics gaId="G-SJ3VFHG8KJ" />
      </body>
    </html>
  );
}
