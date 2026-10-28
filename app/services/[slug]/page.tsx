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
    alternates: {
      canonical: `/services/${params.slug}`,
    },
    openGraph: {
      title: service.title + ' in Bangalore | ARCC Media Production',
      description: service.summary,
      url: `https://www.arccmp.com/services/${params.slug}`,
      siteName: 'ARCC Media Production',
      type: 'website',
      locale: 'en_IN',
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.slug);

  if (!service) notFound();

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        description: service.summary,
        url: `https://www.arccmp.com/services/${service.slug}`,
        provider: {
          '@id': 'https://www.arccmp.com/#organization',
        },
        areaServed: {
          '@type': 'City',
          name: 'Bangalore',
        },
        serviceType: service.detail,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: service.title + ' Services',
          itemListElement: service.offerings.map((offering, index) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: offering,
            },
            position: index + 1,
          })),
        },
      },
      {
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
            name: service.title,
            item: `https://www.arccmp.com/services/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceExperience service={service} />
    </>
  );
}
