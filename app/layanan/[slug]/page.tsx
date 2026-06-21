import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import ServiceDetail from "@/components/ServiceDetail";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { getServiceBySlug, services } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const url = absoluteUrl(service.path);

  return {
    title: service.metadata.title,
    description: service.metadata.description,
    keywords: service.metadata.keywords,
    alternates: {
      canonical: service.path,
    },
    openGraph: {
      title: service.metadata.title,
      description: service.metadata.description,
      url,
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.brand,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metadata.description,
    url: absoluteUrl(service.path),
    provider: {
      "@type": "Organization",
      name: siteConfig.brand,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Place",
      name: `${siteConfig.area.city}, ${siteConfig.area.country}`,
    },
    serviceType: service.title,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Layanan",
        item: absoluteUrl("/#services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: absoluteUrl(service.path),
      },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceJsonLd, breadcrumbJsonLd]} />
      <Navbar />
      <ServiceDetail service={service} />
    </>
  );
}
