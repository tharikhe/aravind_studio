import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingQuickContact from "@/components/FloatingQuickContact";
import { COMPANY_CONTACT } from "@/data/studioInfo";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARCC MEDIA PRODUCTION — End-to-End Creative Studio & Sound Stage",
  description: "ARCC is a full-service media production house with six core divisions: Photography, Film & Video, Events, Creative Direction, Post-Production, and Private Studio Rental.",
  keywords: [
    "ARCC Media Production",
    "Commercial Photography",
    "Brand Films",
    "Live Streaming Events",
    "Studio Rental Los Angeles",
    "DaVinci Color Grading",
    "Motion Graphics",
    "Sound Stage Rental"
  ],
  authors: [{ name: "ARCC Media Production" }],
  openGraph: {
    title: "ARCC MEDIA PRODUCTION — One Studio. Every Story.",
    description: "End-to-end media production house uniting six core divisions under one roof.",
    url: "https://arccmedia.studio",
    siteName: "ARCC Media Production",
    images: [
      {
        url: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "ARCC Media Production — Cinema & Photography Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARCC MEDIA PRODUCTION — One Studio. Every Story.",
    description: "End-to-end media production house uniting six core divisions under one roof.",
    images: ["https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_CONTACT.name,
    legalName: COMPANY_CONTACT.legalName,
    url: "https://arccmedia.studio",
    logo: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600",
    description: COMPANY_CONTACT.tagline,
    telephone: COMPANY_CONTACT.phoneRaw,
    email: COMPANY_CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_CONTACT.addressLine1,
      addressLocality: COMPANY_CONTACT.city,
      addressRegion: COMPANY_CONTACT.state,
      postalCode: COMPANY_CONTACT.postalCode,
      addressCountry: COMPANY_CONTACT.country,
    },
    sameAs: COMPANY_CONTACT.socials.map((s) => s.url),
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark bg-black`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black flex flex-col justify-between">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
        <FloatingQuickContact />
      </body>
    </html>
  );
}
