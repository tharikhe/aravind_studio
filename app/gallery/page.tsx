import type { Metadata } from 'next';
import GalleryArchive from '@/components/GalleryArchive';

export const metadata: Metadata = {
  title: 'Visual Archive & Gallery | ARCC Media Production Bangalore',
  description:
    'Browse our comprehensive catalog of photography, studio sets, podcast sessions, fashion editorials, and commercial brand productions at ARCC Media Production.',
};

export default function GalleryPage() {
  return <GalleryArchive />;
}
