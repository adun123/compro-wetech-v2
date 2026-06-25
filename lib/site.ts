export const siteConfig = {
  url: "https://wetechstudio.id",
  brand: "WeTech Studio",
  legalName: "WETECH NEXUS DIGITAL",
  locale: "id_ID",
  language: "id",
  area: {
    city: "Jakarta",
    region: "DKI Jakarta",
    country: "Indonesia",
  },
  contact: {
    email: "hello@wetech.com",
    whatsappUrl:
      "https://wa.me/6287877946981?text=Hello%20WeTech%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20digital%20project",
  },
  description:
    "WeTech Studio helps businesses build professional websites, custom systems, dashboards, backend integrations, and practical automation solutions.",
  keywords: [
    "website development",
    "landing page development",
    "custom web application",
    "business dashboard",
    "API integration",
    "business automation",
    "digital agency Jakarta",
    "WeTech Studio",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
