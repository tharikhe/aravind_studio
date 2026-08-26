import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Aravind Studio - Best Photography Services in Bangalore",
  description: "Professional photography services by Aravind Studio in Bangalore specializing in weddings, fashion, events, and portraits. Book the best photographers in Bangalore.",
  keywords: "Aravind Studio, Photography Bangalore, Wedding Photographer Bangalore, Fashion Photography, Event Photographers, Best Photographers in Bangalore",
  openGraph: {
    title: "Aravind Studio - Photography Bangalore",
    description: "Capturing moments in Bangalore with professional excellence by Aravind Studio.",
    locale: "en_US",
    type: "website",
    siteName: "Aravind Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravind Studio - Photography Bangalore",
    description: "Capturing moments in Bangalore with professional excellence by Aravind Studio.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PhotographyBusiness",
  "name": "Aravind Studio",
  "image": "https://aravindstudio.com/icon.png",
  "description": "Premium photography services by Aravind Studio based in Bangalore, specializing in weddings, fashion, and events.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "url": "https://aravindstudio.com",
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
        <SmoothScroll />
        <div id="global">
          <Cursor />
          <Loader />
          <Navbar />
        </div>
        <div id="main">
          {children}
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}

