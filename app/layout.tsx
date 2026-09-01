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
  title: 'Podcast Studio in Bangalore | Winterfox Studios',
  description:
    'Professional podcast studio in Bangalore for video podcasts, founder interviews, brand podcasts, YouTube shows, editing, reels, and studio shoots in Indiranagar.',
  keywords: [
    'Podcast Studio in Bangalore',
    'video podcast studio Bangalore',
    'podcast recording studio Indiranagar',
    'YouTube podcast studio Bangalore',
    'podcast editing Bangalore',
    'podcast shoot Bangalore',
    'winterfox studio',
  ],
  authors: [{ name: 'Winterfox Studios' }],
  openGraph: {
    title: 'Podcast Studio in Bangalore | Winterfox Studios',
    description:
      'Professional podcast studio in Bangalore for video podcasts, founder interviews, brand podcasts, YouTube shows, editing, reels, and studio shoots in Indiranagar.',
    url: 'https://winterfox.studio/',
    siteName: 'Winterfox Studios',
    images: [
      {
        url: 'https://winterfox.studio/img/social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Winterfox Studios',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Podcast Studio in Bangalore | Winterfox Studios',
    description:
      'Professional podcast studio in Bangalore for video podcasts, founder interviews, brand podcasts, YouTube shows, editing, reels, and studio shoots in Indiranagar.',
    images: ['https://winterfox.studio/img/social-share.jpg'],
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
      name: 'Winterfox Studios',
      image: 'https://winterfox.studio/img/social-share.jpg',
      url: 'https://winterfox.studio/',
      telephone: '+91-9605533366',
      email: 'business@winterfox.studio',
      description:
        'Winterfox Studios is a professional podcast studio in Indiranagar, Bangalore, offering video podcast recording, multi-camera setups, studio shoots, editing, reels, and post-production support.',
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
      sameAs: ['https://www.instagram.com/winterfox.studios/'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
