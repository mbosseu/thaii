export type GalleryItem = {
  src: string;
  alt: string;
  category: "entrainement" | "techniques" | "coachs" | "groupe" | "salle" | "evenements";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/entrainement/combat.webp",
    alt: "Sparring de boxe thaï au Boxing Center Toulouse",
    category: "entrainement",
  },
  {
    src: "/images/entrainement/boxe-thai-header.webp",
    alt: "Cours de Muay Thaï : travail de garde et de déplacements",
    category: "entrainement",
  },
  {
    src: "/images/entrainement/boxe-thai-1.webp",
    alt: "Travail aux paos pendant un cours de boxe thaï",
    category: "techniques",
  },
  {
    src: "/images/entrainement/boxe-thai-2.webp",
    alt: "Enchaînements pieds-poings en séance collective",
    category: "techniques",
  },
  {
    src: "/images/entrainement/danse-wai-kru.webp",
    alt: "Wai Kru, rituel traditionnel du Muay Thaï",
    category: "evenements",
  },
  {
    src: "/images/coaches/coach-jerome.webp",
    alt: "Coach Jérôme, spécialiste boxe thaï et MMA à Toulouse",
    category: "coachs",
  },
  {
    src: "/images/coaches/coach-renaud.webp",
    alt: "Coach Renaud, boxe pieds-poings à Toulouse États-Unis",
    category: "coachs",
  },
  {
    src: "/images/salles/saint-cyprien-hero.webp",
    alt: "Salle Boxing Center Saint-Cyprien à Toulouse",
    category: "salle",
  },
  {
    src: "/images/salles/saint-cyprien-espace.webp",
    alt: "Espace d’entraînement Saint-Cyprien",
    category: "salle",
  },
  {
    src: "/images/salles/saint-cyprien-1.webp",
    alt: "Ring et sacs de frappe à Saint-Cyprien",
    category: "salle",
  },
  {
    src: "/images/salles/saint-cyprien-2.webp",
    alt: "Groupe en cours de boxe thaï / K1",
    category: "groupe",
  },
  {
    src: "/images/salles/saint-cyprien-3.webp",
    alt: "Ambiance de club pendant un cours pieds-poings",
    category: "groupe",
  },
  {
    src: "/images/salles/etats-unis-hero.webp",
    alt: "Boxing Center Toulouse États-Unis",
    category: "salle",
  },
  {
    src: "/images/salles/etats-unis-espace.webp",
    alt: "Grand espace combat de la salle États-Unis",
    category: "salle",
  },
  {
    src: "/images/salles/etats-unis-gants.webp",
    alt: "Gants et matériel de frappe au Boxing Center",
    category: "techniques",
  },
  {
    src: "/images/salles/etats-unis-cage.jpg",
    alt: "Espace striking et cage à Toulouse États-Unis",
    category: "salle",
  },
];

export const galleryCategories: { id: GalleryItem["category"] | "tous"; label: string }[] = [
  { id: "tous", label: "Tout" },
  { id: "entrainement", label: "Entraînement" },
  { id: "techniques", label: "Techniques" },
  { id: "coachs", label: "Coachs" },
  { id: "groupe", label: "Groupe" },
  { id: "salle", label: "Salle" },
  { id: "evenements", label: "Événements" },
];
