import type { Metadata } from "next";
import { pageUrl, siteConfig } from "@/lib/site";

/** Mots-clés prioritaires FR (intent recherche + variantes orthographiques). */
export const primaryKeywords = [
  "boxe thaï",
  "boxe thai",
  "muay thaï",
  "muay thai",
  "kick boxing",
  "kick-boxing",
  "k1",
  "k-1",
  "pieds-poings",
  "boxe pieds-poings",
  "sports de combat",
  "actu thaii",
] as const;

export const guideKeywords = [
  "débuter boxe thaï",
  "débuter muay thai",
  "cours boxe thaï",
  "cours muay thaï",
  "club boxe thaï",
  "équipement boxe thaï",
  "gants muay thai",
  "premier cours boxe thaï",
] as const;

export const localKeywords = [
  "club boxe thaï Toulouse",
  "muay thaï Toulouse",
  "kick boxing Toulouse",
  "salle boxe thaï Toulouse",
  "Boxing Center Toulouse",
] as const;

export const allSiteKeywords = [
  ...primaryKeywords,
  ...guideKeywords,
  ...localKeywords,
  "combattants muay thaï",
  "galas kick boxing",
  "règles k1",
  "clinch muay thaï",
  "FFKMDA",
] as const;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [...primaryKeywords],
  image = "/logo.png",
  imageAlt = siteConfig.name,
  type = "website",
}: PageMetaInput): Metadata {
  const url = pageUrl(path);

  return {
    title,
    description,
    keywords: keywords.join(", "),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    email: siteConfig.contactEmail,
    description: siteConfig.description,
    sameAs: [] as string[],
    knowsAbout: [
      "Muay Thai",
      "Boxe thaï",
      "Kick Boxing",
      "K-1",
      "Boxe pieds-poings",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "fr-FR",
    publisher: { "@type": "Organization", name: siteConfig.name },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/recherche?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
