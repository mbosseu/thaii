import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/Ui";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Boxe Thaï : découvrez le Muay Thaï | boxe-thai.com",
    template: "%s",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "boxe thaï",
    "Muay Thaï",
    "boxe thaï Toulouse",
    "club boxe thaï Toulouse",
    "cours boxe thaï Toulouse",
    "techniques Muay Thaï",
  ],
  authors: [{ name: "boxe-thai.com" }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Boxe Thaï : découvrez le Muay Thaï",
    description: site.description,
    images: [{ url: "/logo.png", alt: "Logo Boxe Thaï" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boxe Thaï : découvrez le Muay Thaï",
    description: site.description,
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: site.url,
      name: site.name,
      inLanguage: site.language,
      description: site.description,
    },
    {
      "@type": "SportsActivityLocation",
      "@id": absoluteUrl("/#boxing-center"),
      name: "Boxing Center Toulouse",
      url: site.boxingCenterUrl,
      telephone: site.phoneHref,
      email: site.email,
      sport: "Muay Thai",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toulouse",
        addressRegion: "Occitanie",
        addressCountry: "FR",
      },
      openingHours: site.openingHours,
      sameAs: [site.boxingCenterUrl],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${outfit.variable} ${bebas.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={graph} />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-orange focus:px-3 focus:py-2 focus:text-black"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
