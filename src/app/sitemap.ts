import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { getBoxers, getClubs, getCoaches, getOrganizations } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const extraPages = [
  "/forum",
  "/muay-thai",
  "/kick-boxing",
  "/k1",
  "/pieds-poings",
  "/champions",
  "/cotes",
  "/recherche",
  "/contact",
  "/mentions-legales",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles().map((article) => ({
    url: `${siteConfig.url}/article/${article.slug}`,
    lastModified: article.updated ?? article.date,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: siteConfig.url, changeFrequency: "daily", priority: 1 },
    ...extraPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...categories.map((c) => ({
      url: `${siteConfig.url}/${c.slug}`,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
    ...getBoxers().map((b) => ({
      url: `${siteConfig.url}/combattants/${b.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...getClubs().map((c) => ({
      url: `${siteConfig.url}/clubs/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...getCoaches().map((c) => ({
      url: `${siteConfig.url}/coachs/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
    ...getOrganizations().map((o) => ({
      url: `${siteConfig.url}/organisations/${o.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
    ...articles,
  ];
}
