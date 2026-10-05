import type { MetadataRoute } from "next";
import { getAllArticles, type ArticleMeta } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { getBoxers, getClubs, getCoaches, getOrganizations } from "@/lib/content";
import { resolveArticleCover } from "@/lib/media";
import { siteConfig } from "@/lib/site";

type Freq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type EntryInput = {
  path: string;
  lastModified?: string | Date;
  changeFrequency?: Freq;
  priority?: number;
  images?: string[];
};

function absoluteUrl(path: string) {
  if (!path || path === "/") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

function absoluteImage(src: string) {
  if (src.startsWith("http")) return src;
  return `${siteConfig.url}${src.startsWith("/") ? src : `/${src}`}`;
}

function toDate(value?: string | Date | null): Date | undefined {
  if (!value) return undefined;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function latestDate(values: Array<string | Date | undefined | null>): Date {
  let latest = new Date(0);
  for (const value of values) {
    const date = toDate(value);
    if (date && date > latest) latest = date;
  }
  return latest.getTime() === 0 ? new Date() : latest;
}

function entry({
  path,
  lastModified,
  changeFrequency = "weekly",
  priority = 0.5,
  images,
}: EntryInput): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(path),
    lastModified: toDate(lastModified) ?? new Date(),
    changeFrequency,
    priority,
    ...(images?.length ? { images: images.map(absoluteImage) } : {}),
  };
}

function articlePriority(article: ArticleMeta, now: Date): number {
  const baseByCategory: Record<string, number> = {
    guides: 0.9,
    disciplines: 0.88,
    clubs: 0.86,
    analyses: 0.82,
    actualites: 0.8,
    interviews: 0.75,
    combattants: 0.78,
    coachs: 0.72,
  };

  let priority = baseByCategory[article.category] ?? 0.75;

  const published = toDate(article.updated ?? article.date);
  if (published) {
    const ageDays = (now.getTime() - published.getTime()) / (1000 * 60 * 60 * 24);
    if (ageDays <= 30) priority = Math.min(0.95, priority + 0.05);
    else if (ageDays > 365) priority = Math.max(0.55, priority - 0.1);
  }

  return Number(priority.toFixed(2));
}

function dedupe(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const map = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const item of entries) {
    const existing = map.get(item.url);
    if (!existing) {
      map.set(item.url, item);
      continue;
    }
    const existingPriority = existing.priority ?? 0;
    const nextPriority = item.priority ?? 0;
    map.set(item.url, nextPriority >= existingPriority ? item : existing);
  }
  return [...map.values()].sort((a, b) => {
    const byPriority = (b.priority ?? 0) - (a.priority ?? 0);
    if (byPriority !== 0) return byPriority;
    return a.url.localeCompare(b.url);
  });
}

const disciplineLandings = [
  { path: "/muay-thai", priority: 0.92, image: "/images/editorial/wai-kru-dual.jpg" },
  { path: "/kick-boxing", priority: 0.88, image: "/images/editorial/catch-kick-action.jpg" },
  { path: "/k1", priority: 0.88, image: "/images/editorial/punch-impact-arena.jpg" },
  { path: "/pieds-poings", priority: 0.88, image: "/images/editorial/ring-exchange.jpg" },
] as const;

const hubPages = [
  { path: "/clubs", priority: 0.9 },
  { path: "/guides", priority: 0.9 },
  { path: "/disciplines", priority: 0.9 },
  { path: "/combattants", priority: 0.86 },
  { path: "/coachs", priority: 0.7 },
  { path: "/organisations", priority: 0.6 },
  { path: "/forum", priority: 0.55 },
  { path: "/contact", priority: 0.45 },
  { path: "/champions", priority: 0.5 },
  { path: "/cotes", priority: 0.45 },
  { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" as const },
];

const categoryPriority: Record<string, number> = {
  clubs: 0.9,
  guides: 0.9,
  disciplines: 0.9,
  combattants: 0.86,
  actualites: 0.84,
  analyses: 0.8,
  coachs: 0.7,
  interviews: 0.7,
  "combats-a-venir": 0.72,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const articles = getAllArticles();
  const contentUpdated = latestDate(articles.map((a) => a.updated ?? a.date));

  const staticEntries: MetadataRoute.Sitemap = [
    entry({
      path: "/",
      lastModified: contentUpdated,
      changeFrequency: "daily",
      priority: 1,
      images: ["/logo.png"],
    }),
    ...disciplineLandings.map((page) =>
      entry({
        path: page.path,
        lastModified: contentUpdated,
        changeFrequency: "weekly",
        priority: page.priority,
        images: [page.image],
      }),
    ),
    ...hubPages.map((page) =>
      entry({
        path: page.path,
        lastModified: contentUpdated,
        changeFrequency: page.changeFrequency ?? "weekly",
        priority: page.priority,
      }),
    ),
    ...categories.map((category) => {
      const categoryDates = articles
        .filter((article) => article.category === category.slug)
        .map((article) => article.updated ?? article.date);
      return entry({
        path: `/${category.slug}`,
        lastModified: latestDate([...categoryDates, contentUpdated]),
        changeFrequency: "daily",
        priority: categoryPriority[category.slug] ?? 0.7,
      });
    }),
  ];

  const entityEntries: MetadataRoute.Sitemap = [
    ...getBoxers().map((boxer) =>
      entry({
        path: `/combattants/${boxer.slug}`,
        lastModified: contentUpdated,
        changeFrequency: "monthly",
        priority: 0.74,
        images: [boxer.image],
      }),
    ),
    ...getClubs().map((club) =>
      entry({
        path: `/clubs/${club.slug}`,
        lastModified: contentUpdated,
        changeFrequency: "weekly",
        priority: 0.82,
        images: [club.image],
      }),
    ),
    ...getCoaches().map((coach) =>
      entry({
        path: `/coachs/${coach.slug}`,
        lastModified: contentUpdated,
        changeFrequency: "monthly",
        priority: 0.58,
        images: [coach.image],
      }),
    ),
    ...getOrganizations().map((org) =>
      entry({
        path: `/organisations/${org.slug}`,
        lastModified: contentUpdated,
        changeFrequency: "monthly",
        priority: 0.55,
      }),
    ),
  ];

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => {
    const cover = resolveArticleCover(article);
    return entry({
      path: `/article/${article.slug}`,
      lastModified: article.updated ?? article.date,
      changeFrequency: "weekly",
      priority: articlePriority(article, now),
      images: [cover.src],
    });
  });

  return dedupe([...staticEntries, ...entityEntries, ...articleEntries]);
}
