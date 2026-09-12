import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arccmediaproduction.com'),
  title: 'Podcast Studio in Bangalore | ARCC Media Production',
  description:
    'Professional photography and podcast studio in Bangalore by ARCC Media Production for video podcasts, founder interviews, brand films, studio shoots, editing, and post-production near Bannerghatta Main Road.',
  keywords: [
    'ARCC Media Production',
    'ARCC Podcast Studio Bangalore',
    'Podcast Studio in Bangalore',
    'video podcast studio Bangalore',
    'podcast recording studio Bannerghatta',
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
      'Professional photography and podcast studio in Bangalore by ARCC Media Production for video podcasts, founder interviews, brand films, studio shoots, editing, and post-production near Bannerghatta Main Road.',
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
      'Professional photography and podcast studio in Bangalore by ARCC Media Production for video podcasts, founder interviews, brand films, studio shoots, editing, and post-production near Bannerghatta Main Road.',
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
      telephone: '+91-8248288388',
      email: 'business@arccmediaproduction.com',
      description:
        'ARCC Media Production is a professional photography and podcast studio near Bannerghatta Main Road, Bangalore, offering video podcast recording, multi-camera setups, studio shoots, editing, reels, and post-production support.',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          '1st Cross, Venkateshwara Temple Street, C.K. Palya Road, Bannerghatta Main Road',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560083',
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
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
