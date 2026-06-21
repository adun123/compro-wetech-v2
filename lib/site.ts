export const siteConfig = {
  url: "https://wetechstudio.id",
  brand: "WeTech Studio",
  legalName: "PT WeTech Digital Nusantara",
  locale: "id_ID",
  language: "id",
  area: {
    city: "Jakarta",
    region: "DKI Jakarta",
    country: "Indonesia",
  },
  contact: {
    email: "hello@wetech.studio",
    whatsappUrl:
      "https://wa.me/6281234567890?text=Halo%20WeTech%20Studio%2C%20saya%20ingin%20konsultasi%20project%20digital",
  },
  description:
    "WeTech Studio membantu bisnis membangun website, sistem custom, dashboard, integrasi backend, dan solusi AI yang fungsional untuk pertumbuhan bisnis.",
  keywords: [
    "jasa pembuatan website",
    "jasa landing page",
    "aplikasi web custom",
    "dashboard bisnis",
    "integrasi API",
    "solusi AI bisnis",
    "digital agency Jakarta",
    "WeTech Studio",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
