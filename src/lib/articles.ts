import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { CategorySlug } from "./categories";
import { categorySlugs } from "./categories";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type GalleryImage = {
  src: string;
  alt: string;
  credit?: string;
};

export type ArticleFrontmatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: CategorySlug;
  author?: string;
  tags?: string[];
  cover?: string;
  coverAlt?: string;
  imageCredit?: string;
  gallery?: GalleryImage[];
  related?: string[];
  draft?: boolean;
};

export type ArticleMeta = ArticleFrontmatter & {
  slug: string;
  readingTime: string;
};

export type Article = ArticleMeta & {
  content: string;
};

function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

function isCategorySlug(value: string): value is CategorySlug {
  return (categorySlugs as readonly string[]).includes(value);
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (!data.title || !data.description || !data.date || !data.category) {
    throw new Error(`Article "${slug}" is missing required frontmatter.`);
  }

  if (!isCategorySlug(data.category)) {
    throw new Error(`Article "${slug}" has invalid category "${data.category}".`);
  }

  if (data.draft) return null;

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated,
    category: data.category,
    author: data.author ?? "Rédaction Boxe Thaï",
    tags: data.tags ?? [],
    cover: data.cover,
    coverAlt: data.coverAlt,
    imageCredit: data.imageCredit,
    gallery: data.gallery ?? [],
    related: data.related ?? [],
    readingTime: estimateReadingTime(content),
    content,
  };
}

export function getAllArticles(): ArticleMeta[] {
  return getArticleSlugs()
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => article !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content: _content, ...meta }) => meta);
}

export function getArticlesByCategory(category: CategorySlug): ArticleMeta[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getRelatedArticles(slug: string, relatedSlugs: string[] = []): ArticleMeta[] {
  const all = getAllArticles();
  const related = relatedSlugs
    .map((relatedSlug) => all.find((article) => article.slug === relatedSlug))
    .filter((article): article is ArticleMeta => Boolean(article));

  if (related.length > 0) return related;

  const current = all.find((article) => article.slug === slug);
  if (!current) return [];

  return all
    .filter((article) => article.slug !== slug && article.category === current.category)
    .slice(0, 3);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
