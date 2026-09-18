import type { ArticleMeta } from "./articles";

export function resolveArticleCover(article: Pick<ArticleMeta, "slug" | "cover" | "coverAlt">) {
  return {
    src: article.cover ?? "/images/covers/combat.webp",
    alt: article.coverAlt ?? "Illustration boxe thaï / pieds-poings",
  };
}

export const sectionImages = {
  hero: "/images/covers/combat.webp",
  champions: "/images/covers/boxe-thai-header.webp",
  clubs: "/images/clubs/saint-cyprien-hero.webp",
  divider: "/images/covers/boxe-thai-2.webp",
  ring: "/images/covers/combat.webp",
  crowd: "/images/covers/boxe-thai-header.webp",
  cotes: "/images/covers/danse-wai-kru.webp",
} as const;

export const categoryImages: Record<string, string> = {
  actualites: "/images/covers/combat.webp",
  resultats: "/images/covers/boxe-thai-1.webp",
  "combats-a-venir": "/images/covers/boxe-thai-header.webp",
  galas: "/images/covers/boxe-thai-2.webp",
  combattants: "/images/covers/combat.webp",
  coachs: "/images/fighters/coach-jerome.webp",
  clubs: "/images/clubs/saint-cyprien-hero.webp",
  disciplines: "/images/covers/danse-wai-kru.webp",
  guides: "/images/covers/boxe-thai-1.webp",
  analyses: "/images/covers/boxe-thai-header.webp",
  interviews: "/images/fighters/coach-renaud.webp",
};
