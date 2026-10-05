export const categories = [
  {
    slug: "actualites",
    label: "Actualités boxe thaï",
    description:
      "Actualité Muay Thaï, boxe thaï, Kick Boxing et K1 : combats, clubs, combattants et sports pieds-poings.",
  },
  {
    slug: "combats-a-venir",
    label: "Combats à venir",
    description:
      "Affiches, dates et enjeux des prochains combats de boxe thaï, Kick Boxing et K1.",
  },
  {
    slug: "combattants",
    label: "Combattants",
    description:
      "Portraits de combattants Muay Thaï, Kick Boxing et K1 : parcours, style et palmarès.",
  },
  {
    slug: "coachs",
    label: "Coachs",
    description:
      "Coachs et entraîneurs de boxe thaï, Muay Thaï et kick-boxing : pédagogie et expérience ring.",
  },
  {
    slug: "clubs",
    label: "Clubs de boxe thaï",
    description:
      "Clubs de Boxe Thaï, Muay Thaï, Kick Boxing et K1 en France — fiches, salles et disciplines.",
  },
  {
    slug: "disciplines",
    label: "Disciplines",
    description:
      "Muay Thaï, Kick Boxing, K1 et boxe pieds-poings : règles, différences et pratique en club.",
  },
  {
    slug: "guides",
    label: "Guides débutants",
    description:
      "Débuter la boxe thaï : premier cours, équipement, choisir un club Muay Thaï, condition physique.",
  },
  {
    slug: "analyses",
    label: "Analyses",
    description:
      "Analyses de combats Muay Thaï et Kick Boxing, règles, clinch, enjeux sportifs et société.",
  },
  {
    slug: "interviews",
    label: "Interviews",
    description:
      "Interviews de coachs, pratiquants et acteurs de la boxe thaï et des sports pieds-poings.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export const categorySlugs = categories.map((c) => c.slug);

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export const primaryNav = [
  { href: "/actualites", label: "Actualités" },
  { href: "/combats-a-venir", label: "Combats" },
  { href: "/combattants", label: "Combattants" },
  { href: "/clubs", label: "Clubs" },
  { href: "/disciplines", label: "Disciplines" },
  { href: "/forum", label: "Newsletter" },
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
