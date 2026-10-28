import type { Metadata } from 'next';
import GalleryArchive from '@/components/GalleryArchive';

export const metadata: Metadata = {
  title: 'Visual Archive & Gallery | ARCC Media Production Bangalore',
  description:
    'Browse our comprehensive catalog of photography, studio sets, podcast sessions, fashion editorials, and commercial brand productions at ARCC Media Production.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Visual Archive & Gallery | ARCC Media Production Bangalore',
    description:
      'Browse our comprehensive catalog of photography, studio sets, podcast sessions, fashion editorials, and commercial brand productions at ARCC Media Production.',
    url: 'https://www.arccmp.com/gallery',
    siteName: 'ARCC Media Production',
    type: 'website',
    locale: 'en_IN',
  },
};

const galleryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.arccmp.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Gallery',
      item: 'https://www.arccmp.com/gallery',
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      <GalleryArchive />
    </>
  );
}
