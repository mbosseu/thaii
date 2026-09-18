export const categories = [
  {
    slug: "actualites",
    label: "Actualités",
    description: "L’actualité de la boxe thaï et des sports pieds-poings.",
  },
  {
    slug: "resultats",
    label: "Résultats",
    description: "Résultats de galas Muay Thaï, Kick Boxing et K1.",
  },
  {
    slug: "combats-a-venir",
    label: "Combats à venir",
    description: "Affiches, dates et enjeux des prochains combats pieds-poings.",
  },
  {
    slug: "galas",
    label: "Galas",
    description: "Galas français et internationaux à suivre.",
  },
  {
    slug: "combattants",
    label: "Combattants",
    description: "Portraits et parcours de combattants pieds-poings.",
  },
  {
    slug: "coachs",
    label: "Coachs",
    description: "Les entraîneurs qui font la boxe thaï et le kick-boxing.",
  },
  {
    slug: "clubs",
    label: "Clubs",
    description: "Clubs spécialisés Boxe Thaï, Kick Boxing et K1 en France.",
  },
  {
    slug: "disciplines",
    label: "Disciplines",
    description: "Muay Thaï, Kick Boxing, K1 et Boxe Pieds-Poings expliqués.",
  },
  {
    slug: "guides",
    label: "Guides débutants",
    description: "Débuter, équipement, choisir un club, préparer sa condition.",
  },
  {
    slug: "analyses",
    label: "Analyses",
    description: "Analyses de combats, règles et enjeux sportifs.",
  },
  {
    slug: "interviews",
    label: "Interviews",
    description: "Paroles de coachs, pratiquants et acteurs du ring.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export const categorySlugs = categories.map((c) => c.slug);

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export const primaryNav = [
  { href: "/actualites", label: "Actualités" },
  { href: "/resultats", label: "Résultats" },
  { href: "/galas", label: "Galas" },
  { href: "/combats-a-venir", label: "Combats" },
  { href: "/combattants", label: "Combattants" },
  { href: "/clubs", label: "Clubs" },
  { href: "/disciplines", label: "Disciplines" },
  { href: "/forum", label: "Forum" },
] as const;

export const footerNav = [
  ...primaryNav,
  { href: "/coachs", label: "Coachs" },
  { href: "/guides", label: "Guides" },
  { href: "/analyses", label: "Analyses" },
  { href: "/interviews", label: "Interviews" },
  { href: "/muay-thai", label: "Muay Thaï" },
  { href: "/kick-boxing", label: "Kick Boxing" },
  { href: "/k1", label: "K1" },
  { href: "/pieds-poings", label: "Pieds-Poings" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/contact", label: "Contact" },
] as const;
