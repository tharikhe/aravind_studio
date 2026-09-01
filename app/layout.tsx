import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Podcast Studio in Bangalore | ARCC Media Production',
  description:
    'Professional podcast studio in Bangalore by ARCC Media Production for video podcasts, founder interviews, brand podcasts, YouTube shows, editing, reels, and studio shoots in Indiranagar.',
  keywords: [
    'ARCC Media Production',
    'ARCC Podcast Studio Bangalore',
    'Podcast Studio in Bangalore',
    'video podcast studio Bangalore',
    'podcast recording studio Indiranagar',
    'YouTube podcast studio Bangalore',
    'podcast editing Bangalore',
    'podcast shoot Bangalore',
  ],
  authors: [{ name: 'ARCC Media Production' }],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: ['/favicon.png'],
    apple: [{ url: '/favicon.png' }],
  },
  openGraph: {
    title: 'Podcast Studio in Bangalore | ARCC Media Production',
    description:
      'Professional podcast studio in Bangalore by ARCC Media Production for video podcasts, founder interviews, brand podcasts, YouTube shows, editing, reels, and studio shoots in Indiranagar.',
    url: 'https://arccmediaproduction.com/',
    siteName: 'ARCC Media Production',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ARCC Media Production',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Podcast Studio in Bangalore | ARCC Media Production',
    description:
      'Professional podcast studio in Bangalore by ARCC Media Production for video podcasts, founder interviews, brand podcasts, YouTube shows, editing, reels, and studio shoots in Indiranagar.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      name: 'ARCC Media Production',
      image: 'https://arccmediaproduction.com/og-image.png',
      url: 'https://arccmediaproduction.com/',
      telephone: '+91-9605533366',
      email: 'business@arccmediaproduction.com',
      description:
        'ARCC Media Production is a professional podcast studio in Indiranagar, Bangalore, offering video podcast recording, multi-camera setups, studio shoots, editing, reels, and post-production support.',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          '2nd floor, 8th main, 80 feet road, next to Bata showroom, HAL 2nd stage, Indiranagar',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560038',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.973024,
        longitude: 77.646698,
      },
      areaServed: {
        '@type': 'City',
        name: 'Bangalore',
      },
      sameAs: ['https://www.instagram.com/arccmediaproduction/'],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
