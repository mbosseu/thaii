import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { getBoxers, getClubs, getCoaches, getOrganizations } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const disciplineLandings = [
  { path: "/muay-thai", priority: 0.9 },
  { path: "/kick-boxing", priority: 0.85 },
  { path: "/k1", priority: 0.85 },
  { path: "/pieds-poings", priority: 0.85 },
];

const utilityPages = [
  "/forum",
  "/champions",
  "/cotes",
  "/recherche",
  "/contact",
  "/mentions-legales",
  "/organisations",
];

const categoryPriority: Record<string, number> = {
  clubs: 0.85,
  guides: 0.85,
  disciplines: 0.85,
  combattants: 0.8,
  actualites: 0.8,
  analyses: 0.75,
  coachs: 0.7,
  interviews: 0.7,
  "combats-a-venir": 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles().map((article) => ({
    url: `${siteConfig.url}/article/${article.slug}`,
    lastModified: article.updated ?? article.date,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: siteConfig.url, changeFrequency: "daily", priority: 1 },
    ...disciplineLandings.map(({ path, priority }) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...utilityPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...categories.map((c) => ({
      url: `${siteConfig.url}/${c.slug}`,
      changeFrequency: "daily" as const,
      priority: categoryPriority[c.slug] ?? 0.7,
    })),
    ...getBoxers().map((b) => ({
      url: `${siteConfig.url}/combattants/${b.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...getClubs().map((c) => ({
      url: `${siteConfig.url}/clubs/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
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
