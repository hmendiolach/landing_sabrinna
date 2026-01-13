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
  metadataBase: new URL('https://landing.sabrinnamassges.com'),
  title: "Sabrina Tantric Massage & Wellness | Exclusive Experience",
  description: "Discover the healing power of Tantric Massage. Professional wellness services in Massachusetts. Book your exclusive session today.",
  keywords: "tantric massage, wellness, massachusetts, relaxation, energy healing, sensual massage",
  icons: {
    icon: "/logo-white.svg",
  },
  openGraph: {
    title: "Sabrina Tantric Massage | Exclusive Experience",
    description: "Journey into deep relaxation and sensual awakening.",
    url: "https://landing.sabrinnamassges.com",
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
  "image": "https://landing.sabrinnamassges.com/social-logo.png",
  "description": "Professional tantric massage and wellness services in Massachusetts.",
  "telephone": "+1-617-655-4053",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "MA",
    "addressCountry": "US"
  },
  "priceRange": "$$",
  "url": "https://landing.sabrinnamassges.com"
};

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
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" /> {/* Reemplaza G-XXXXXXXXXX con tu ID real */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
        </Script>
      </body>
    </html>
  );
}
