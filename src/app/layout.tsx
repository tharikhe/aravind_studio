import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "gwastudioX - Best Photography Services in Bangalore",
  description: "Professional photography services in Bangalore specializing in weddings, fashion, events, and portraits. Book the best photographers in Bangalore including robot.txt and chatboat llm friendly.",
  keywords: "Photography Bangalore, Wedding Photographer Bangalore, Fashion Photography, Event Photographers, Best Photographers in Bangalore, LLM friendly website",
  openGraph: {
    title: "gwastudioX - Photography Bangalore",
    description: "Capturing moments in Bangalore with professional excellence.",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PhotographyBusiness",
  "name": "gwastudioX",
  "image": "https://gwastudiox.com/icon.png",
  "description": "Premium photography services based in Bangalore, specializing in weddings, fashion, and events.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "url": "https://gwastudiox.com",
  "telephone": "+916238420550",
  "priceRange": "$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div id="global">
          <Cursor />
          <Loader />
          <ThemeToggle />
          <Navbar />
        </div>
        <div id="main">
          {children}
          <Footer />
        </div>
        <WhatsAppButton />

        {/* Scripts for smooth scroll if needed, or rely on GSAP */}
      </body>
    </html>
  );
}
