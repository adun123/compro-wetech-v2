import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import AISolution from "@/components/sections/AISolution";
import Workflow from "@/components/sections/Workflow";
import UseCases from "@/components/sections/UseCases";
import WhyUsAndMore from "@/components/sections/WhyUsAndMore";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brand,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.area.city,
      addressRegion: siteConfig.area.region,
      addressCountry: siteConfig.area.country,
    },
    areaServed: {
      "@type": "Place",
      name: `${siteConfig.area.city}, ${siteConfig.area.country}`,
    },
    knowsAbout: services.map((service) => service.title),
  };

  return (
    <main>
      <JsonLd data={organizationJsonLd} />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <AISolution />
      <Workflow />
      <UseCases />
      <WhyUsAndMore />
    </main>
  );
}
