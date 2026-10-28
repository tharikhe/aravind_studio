import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

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
    'photography studio Bangalore',
    'brand films Bangalore',
    'studio rental Bangalore',
    'corporate photography Bangalore',
  ],
  authors: [{ name: 'ARCC Media Production' }],
  alternates: {
    canonical: '/',
  },
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
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'ARCC Media Production — Podcast & Photography Studio in Bangalore',
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
    images: ['/logo.png'],
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
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': 'https://arccmediaproduction.com/#organization',
      name: 'ARCC Media Production',
      image: 'https://arccmediaproduction.com/logo.png',
      logo: {
        '@type': 'ImageObject',
        url: 'https://arccmediaproduction.com/logo.png',
      },
      url: 'https://arccmediaproduction.com/',
      telephone: '+91-8248288388',
      email: 'info@arccmp.com',
      description:
        'ARCC Media Production is a professional photography and podcast studio near Bannerghatta Main Road, Bangalore, offering video podcast recording, multi-camera setups, studio shoots, editing, reels, and post-production support.',
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Bank Transfer',
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
        latitude: 12.8398,
        longitude: 77.5922,
      },
      hasMap: 'https://maps.google.com/?q=12.8398,77.5922',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '09:00',
          closes: '21:00',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Bangalore' },
        { '@type': 'Place', name: 'Bannerghatta Road' },
        { '@type': 'Place', name: 'JP Nagar' },
        { '@type': 'Place', name: 'Jayanagar' },
        { '@type': 'Place', name: 'BTM Layout' },
        { '@type': 'Place', name: 'HSR Layout' },
        { '@type': 'Place', name: 'Koramangala' },
        { '@type': 'Place', name: 'Electronic City' },
      ],
      sameAs: ['https://www.instagram.com/arccmediaproduction/'],
      foundingDate: '2021',
      knowsLanguage: ['en', 'hi', 'kn'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://arccmediaproduction.com/#website',
      url: 'https://arccmediaproduction.com/',
      name: 'ARCC Media Production',
      publisher: {
        '@id': 'https://arccmediaproduction.com/#organization',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://arccmediaproduction.com/#webpage',
      url: 'https://arccmediaproduction.com/',
      name: 'Podcast Studio in Bangalore | ARCC Media Production',
      isPartOf: {
        '@id': 'https://arccmediaproduction.com/#website',
      },
      about: {
        '@id': 'https://arccmediaproduction.com/#organization',
      },
      description:
        'Professional photography and podcast studio in Bangalore by ARCC Media Production for video podcasts, founder interviews, brand films, studio shoots, editing, and post-production near Bannerghatta Main Road.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://arccmediaproduction.com/',
        },
      ],
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
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
