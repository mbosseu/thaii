import type { ArticleMeta } from "./articles";

export function resolveArticleCover(article: Pick<ArticleMeta, "slug" | "cover" | "coverAlt">) {
  return {
    src: article.cover ?? "/images/editorial/punch-impact-arena.jpg",
    alt: article.coverAlt ?? "Illustration boxe thaï / pieds-poings",
  };
}

export const editorial = {
  clinch: "/images/editorial/clinch-elbow-impact.jpg",
  punch: "/images/editorial/punch-impact-arena.jpg",
  kick: "/images/editorial/kick-action-rws.jpg",
  champion: "/images/editorial/champion-wbc-belts.jpg",
  ritual: "/images/editorial/fighter-kneeling-ritual.jpg",
  lumpineeChamp: "/images/editorial/lumpinee-champion.jpg",
  victoryTeam: "/images/editorial/victory-belt-team.jpg",
  lumpinee: "/images/editorial/lumpinee-stadium.jpg",
  waiKru: "/images/editorial/wai-kru-dual.jpg",
  rwsPromo: "/images/editorial/rws-champions-promo.jpg",
  rajadamnern: "/images/editorial/rajadamnern-ceiling.jpg",
  training: "/images/editorial/training-camp-ring.jpg",
  women: "/images/editorial/women-fight-action.jpg",
  knockdown: "/images/editorial/knockdown-count.jpg",
  mongkhonKneeling: "/images/editorial/mongkhon-kneeling.jpg",
  thaiFight: "/images/editorial/thai-fight-knee.jpg",
  redBlue: "/images/editorial/rajadamnern-red-blue.jpg",
  catchKick: "/images/editorial/catch-kick-action.jpg",
  pads: "/images/editorial/pads-training-knee.jpg",
  flyingKnee: "/images/editorial/flying-knee-cinematic.jpg",
  ringExchange: "/images/editorial/ring-exchange.jpg",
  corner: "/images/editorial/fighter-corner-mongkhon.jpg",
  victory: "/images/editorial/victory-arm-raised.jpg",
  montage: "/images/editorial/fighters-montage.jpg",
  respect: "/images/editorial/pre-fight-respect.jpg",
} as const;

export const sectionImages = {
  hero: editorial.corner,
  champions: editorial.montage,
  clubs: editorial.training,
  divider: editorial.ritual,
  ring: editorial.punch,
  crowd: editorial.lumpinee,
  cotes: editorial.waiKru,
} as const;

export const categoryImages: Record<string, string> = {
  actualites: editorial.punch,
  "combats-a-venir": editorial.corner,
  combattants: editorial.champion,
  coachs: editorial.pads,
  clubs: editorial.training,
  disciplines: editorial.waiKru,
  guides: editorial.pads,
  analyses: editorial.clinch,
  interviews: editorial.victoryTeam,
};
