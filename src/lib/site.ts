export const siteConfig = {
  name: "Actu Thaii",
  domain: "boxe-thai.com",
  /** Hôte canonique : l’apex redirige déjà vers www. */
  url: "https://www.boxe-thai.com",
  description:
    "Actu Thaii, le média boxe thaï et Muay Thaï : actualités, guides pour débuter, clubs, combattants, Kick Boxing, K1 et sports pieds-poings.",
  locale: "fr_FR",
  tagline: "Boxe thaï, Muay Thaï, Kick Boxing & K1 — actualités et guides.",
  contactEmail: "contact@boxe-thai.com",
} as const;

export function pageUrl(path = "/") {
  if (!path || path === "/") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
