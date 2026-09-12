import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceExperience from '@/components/ServiceExperience';
import { getService, services } from '@/lib/services';

type ServicePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getService(params.slug);

  if (!service) return {};

  return {
    title: service.title + ' in Bangalore | ARCC Media Production',
    description: service.summary,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.slug);

  if (!service) notFound();

  return <ServiceExperience service={service} />;
}
