import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";

const pages = [
  "/",
  "/boxe-thai/",
  "/muay-thai/",
  "/histoire-boxe-thai/",
  "/techniques-boxe-thai/",
  "/entrainement-boxe-thai/",
  "/boxe-thai-debutant/",
  "/equipement-boxe-thai/",
  "/boxe-thai-toulouse/",
  "/club-boxe-thai-toulouse/",
  "/cours-boxe-thai-toulouse/",
  "/boxe-thai-femme/",
  "/galerie/",
  "/blog/",
  "/faq/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...pages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" || path === "/boxe-thai-toulouse/" ? 1 : 0.8,
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}/`,
      lastModified: new Date(post.updated),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
