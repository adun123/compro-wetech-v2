import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { absoluteUrl, siteConfig } from "@/lib/site";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} - Digital Technology Partner`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: `${siteConfig.brand} - Digital Technology Partner`,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.brand,
    locale: siteConfig.locale,
    type: "website",
    images: [{ url: absoluteUrl("/generated/compro-hero.png"), width: 1200, height: 630, alt: `${siteConfig.brand} digital technology partner` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} - Digital Technology Partner`,
    description: siteConfig.description,
    images: [absoluteUrl("/generated/compro-hero.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning className={inter.variable}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
