export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  image: string;
  imageAlt: string;
  related: { href: string; label: string }[];
  content: { heading?: string; paragraphs: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "muay-thai-debutant-guide-complet",
    title: "Muay Thaï débutant : guide complet",
    description:
      "Comment aborder le Muay Thaï sans expérience : rythme des cours, techniques de base, condition physique et attentes réalistes.",
    date: "2026-09-01",
    updated: "2026-09-09",
    image: "/images/entrainement/boxe-thai-header.webp",
    imageAlt: "Cours de Muay Thaï pour débutants",
    related: [
      { href: "/boxe-thai-debutant/", label: "Débuter la boxe thaï" },
      { href: "/entrainement-boxe-thai/", label: "Une séance type" },
      { href: "/cours-boxe-thai-toulouse/", label: "Cours à Toulouse" },
    ],
    content: [
      {
        paragraphs: [
          "Le Muay Thaï impressionne souvent par ses coudes, ses genoux et son intensité. Pour un débutant, l’entrée réelle est plus simple : apprendre à se tenir, à frapper proprement et à tenir le rythme d’un cours collectif.",
          "Ce guide pose les bases utiles avant la première séance, sans promettre une transformation rapide ni un passage obligé par le ring.",
        ],
      },
      {
        heading: "Ce que l’on apprend d’abord",
        paragraphs: [
          "Les premières semaines portent sur la garde, les déplacements, le jab, le direct, le low kick et le teep. Les genoux et les coudes arrivent ensuite, progressivement, lorsque la distance et le contrôle sont là.",
          "Le clinch — le corps-à-corps typique de la boxe thaï — se travaille souvent en fin de séance, à faible intensité au début. Il n’est pas nécessaire de tout maîtriser pour profiter d’un cours.",
        ],
      },
      {
        heading: "Condition physique : inutile d’être déjà « prêt »",
        paragraphs: [
          "Beaucoup attendent d’être plus sportifs pour commencer. C’est l’entraînement qui construit cette condition : cardio, gainage, endurance de jambes. Un coach adapte le volume. S’arrêter, boire, reprendre : cela fait partie de l’apprentissage.",
        ],
      },
      {
        heading: "Combien de fois par semaine ?",
        paragraphs: [
          "Deux séances par semaine suffisent pour progresser sans s’épuiser. Une seule permet déjà de découvrir la discipline. Au-delà de trois, la récupération (sommeil, hydratation, étirements) devient aussi importante que le volume.",
        ],
      },
      {
        heading: "Où continuer",
        paragraphs: [
          "Pour le détail d’une séance, voir la page entraînement. Pour le matériel, la page équipement. À Toulouse, les cours de boxe thaï du Boxing Center accueillent les débutants dans un cadre affilié FFKMDA.",
        ],
      },
    ],
  },
  {
    slug: "comment-commencer-boxe-thai",
    title: "Comment commencer la boxe thaï ?",
    description:
      "Les étapes concrètes pour débuter : choisir un cours, arriver en séance, parler au coach et progresser sans se blesser.",
    date: "2026-09-02",
    updated: "2026-09-09",
    image: "/images/entrainement/boxe-thai-1.webp",
    imageAlt: "Débutant au travail aux paos en boxe thaï",
    related: [
      { href: "/boxe-thai-debutant/", label: "Guide débutant" },
      { href: "/equipement-boxe-thai/", label: "Équipement" },
      { href: "/boxe-thai-toulouse/", label: "Pratiquer à Toulouse" },
    ],
    content: [
      {
        paragraphs: [
          "Commencer la boxe thaï ne demande ni combat, ni niveau préalable, ni matériel complet dès le premier jour. Il faut surtout un cours encadré, des chaussures ou pieds nus selon la salle, et l’envie d’apprendre.",
        ],
      },
      {
        heading: "1. Choisir un cours, pas une vidéo",
        paragraphs: [
          "Les tutoriels aident à comprendre les noms des techniques. Ils ne remplacent pas un regard extérieur sur la garde, la hanche ou l’alignement du genou. Un club permet aussi d’apprendre la distance avec un partenaire, ce que l’on ne simule pas seul.",
        ],
      },
      {
        heading: "2. Arriver un peu en avance",
        paragraphs: [
          "Présentez-vous au coach, dites que vous débutez, et demandez où vous placer. La première séance sert à observer le rythme : échauffement, technique, paos, sac. Personne n’attend de vous un enchaînement parfait.",
        ],
      },
      {
        heading: "3. Progresser sans se blesser",
        paragraphs: [
          "Les erreurs fréquentes : frapper trop fort trop tôt, négliger les bandes, forcer sur un low kick mal posé. La puissance vient du relâchement et de la rotation, pas du raidissement. Si une douleur vive apparaît, arrêtez et signalez-le.",
        ],
      },
      {
        heading: "À Toulouse",
        paragraphs: [
          "Le Boxing Center propose une séance d’essai et des cours accessibles aux débutants. Les modalités à jour se trouvent sur le site officiel du club.",
        ],
      },
    ],
  },
  {
    slug: "quel-equipement-pour-debuter",
    title: "Quel équipement pour débuter la boxe thaï ?",
    description:
      "Gants, bandes, protège-dents, tibias, short : ce qui est utile dès le début, ce qui peut attendre, sans recommandation commerciale inventée.",
    date: "2026-09-03",
    updated: "2026-09-09",
    image: "/images/salles/etats-unis-gants.webp",
    imageAlt: "Gants de boxe et matériel de frappe",
    related: [
      { href: "/equipement-boxe-thai/", label: "Page équipement" },
      { href: "/boxe-thai-debutant/", label: "Débuter" },
      { href: "/entrainement-boxe-thai/", label: "Entraînement" },
    ],
    content: [
      {
        paragraphs: [
          "L’équipement de boxe thaï a une fonction précise : protéger les mains, la bouche, les tibias et le partenaire. Inutile d’acheter une panoplie complète avant d’avoir suivi deux ou trois cours.",
        ],
      },
      {
        heading: "L’essentiel ensuite",
        paragraphs: [
          "Les gants (souvent 12 à 16 oz selon le poids et le type de travail), les bandes et un protège-dents couvrent l’essentiel. Les protège-tibias deviennent importants dès que l’on frappe au sac lourd ou que l’on travaille en opposition contrôlée.",
        ],
      },
      {
        heading: "Le short et les pieds",
        paragraphs: [
          "Un short de Muay Thaï laisse la hanche et le genou libres pour les kicks. Un short de sport large peut suffire au début. En salle, on s’entraîne souvent pieds nus ou en chaussons selon le revêtement : suivez la consigne du club.",
        ],
      },
      {
        heading: "Ce que le club peut prêter",
        paragraphs: [
          "Beaucoup de salles mettent à disposition des gants ou des paos pour une séance d’essai. Demandez plutôt que d’investir dans l’urgence. Pour les tailles, un coach voit vite ce qui convient à vos mains.",
        ],
      },
    ],
  },
  {
    slug: "ou-pratiquer-boxe-thai-toulouse",
    title: "Où pratiquer la boxe thaï à Toulouse ?",
    description:
      "Comment choisir une salle à Toulouse, ce que propose le Boxing Center, et comment lire un planning de cours de boxe thaï.",
    date: "2026-09-04",
    updated: "2026-09-09",
    image: "/images/salles/saint-cyprien-hero.webp",
    imageAlt: "Salle de boxe thaï à Toulouse Saint-Cyprien",
    related: [
      { href: "/boxe-thai-toulouse/", label: "Boxe thaï Toulouse" },
      { href: "/club-boxe-thai-toulouse/", label: "Club à Toulouse" },
      { href: "/cours-boxe-thai-toulouse/", label: "Cours à Toulouse" },
    ],
    content: [
      {
        paragraphs: [
          "Toulouse compte plusieurs clubs de sports de combat. Pour la boxe thaï, le critère utile n’est pas le décor : c’est un encadrement diplômé, un créneau régulier, et une salle où l’on peut travailler paos, sac et déplacements.",
        ],
      },
      {
        heading: "Le Boxing Center",
        paragraphs: [
          "Le Boxing Center, inauguré en 2016, regroupe plusieurs salles en agglomération toulousaine. Les cours de boxe thaï / Muay Thaï et kick-boxing y sont affiliés FFKMDA. Saint-Cyprien propose des créneaux labellisés Boxe Thaï / K1 ; la salle États-Unis offre un grand volume de boxe pieds-poings.",
        ],
      },
      {
        heading: "Lire un planning",
        paragraphs: [
          "Les horaires évoluent selon les saisons. Avant de vous déplacer, vérifiez le planning officiel de la salle visée. Un créneau « boxe thaï / K1 » mélange souvent bases de Muay Thaï et rythme kick-boxing moderne : c’est courant en club, et cela n’empêche pas d’apprendre les huit membres.",
        ],
      },
      {
        heading: "Se rendre sur place",
        paragraphs: [
          "Une visite permet de voir le ring, les sacs, l’accueil et l’ambiance du groupe. Le club propose une séance d’essai : les modalités se consultent sur boxingcenter.fr.",
        ],
      },
    ],
  },
  {
    slug: "comment-choisir-club-boxe-thai",
    title: "Comment choisir son club de boxe thaï ?",
    description:
      "Critères concrets pour choisir un club : encadrement, pédagogie, matériel, niveaux, et ce qu’il faut vérifier avant de s’inscrire.",
    date: "2026-09-05",
    updated: "2026-09-09",
    image: "/images/salles/etats-unis-espace.webp",
    imageAlt: "Espace d’entraînement d’un club de boxe thaï",
    related: [
      { href: "/club-boxe-thai-toulouse/", label: "Club boxe thaï Toulouse" },
      { href: "/boxe-thai-debutant/", label: "Débuter" },
      { href: "/faq/", label: "FAQ" },
    ],
    content: [
      {
        paragraphs: [
          "Un bon club de boxe thaï n’est pas forcément le plus médiatique. Il est celui où l’on apprend proprement, où l’on se sent en sécurité, et où l’on peut revenir chaque semaine.",
        ],
      },
      {
        heading: "Encadrement",
        paragraphs: [
          "Demandez qui coach, sur quelle discipline, et s’il existe un cadre fédéral (en France, la FFKMDA concerne notamment le Muay Thaï et le kick-boxing). Un parcours de combattant est un plus, une pédagogie claire en est un autre.",
        ],
      },
      {
        heading: "Pédagogie débutant",
        paragraphs: [
          "Observez si le cours explique la garde avant de lancer des rounds. Un club sérieux sépare souvent le travail technique, les paos et l’opposition. Le sparring n’est pas un rite de passage le premier soir.",
        ],
      },
      {
        heading: "Matériel et espace",
        paragraphs: [
          "Sacs, paos, tapis ou ring, ventilation, vestiaires : le confort compte parce que l’on y passe une à deux heures. Trop de monde sur trop peu de surface rend l’apprentissage bruyant et imprécis.",
        ],
      },
      {
        heading: "À Toulouse",
        paragraphs: [
          "Le Boxing Center publie ses salles, ses coachs et ses plannings. C’est une base vérifiable pour comparer, puis venir essayer un cours de boxe thaï plutôt que de choisir uniquement en ligne.",
        ],
      },
    ],
  },
  {
    slug: "muay-thai-ou-boxe-anglaise",
    title: "Muay Thaï ou boxe anglaise : quelles différences ?",
    description:
      "Armes, distance, clinch, condition physique : comprendre les écarts entre Muay Thaï et boxe anglaise pour choisir sa pratique.",
    date: "2026-09-06",
    updated: "2026-09-09",
    image: "/images/entrainement/combat.webp",
    imageAlt: "Échanges pieds-poings en Muay Thaï",
    related: [
      { href: "/boxe-thai/", label: "Qu’est-ce que la boxe thaï ?" },
      { href: "/techniques-boxe-thai/", label: "Techniques" },
      { href: "/muay-thai/", label: "Muay Thaï" },
    ],
    content: [
      {
        paragraphs: [
          "La boxe anglaise et le Muay Thaï partagent la garde, le jab, le direct, le crochet et l’uppercut. Elles divergent dès que les jambes, les genoux, les coudes et le corps-à-corps entrent en jeu.",
        ],
      },
      {
        heading: "Les armes",
        paragraphs: [
          "La boxe anglaise utilise les poings. Le Muay Thaï utilise poings, pieds, genoux et coudes — d’où l’expression « art des huit membres ». Le teep (coup de pied de face) et le low kick changent toute la gestion de la distance.",
        ],
      },
      {
        heading: "Le clinch",
        paragraphs: [
          "En boxe anglaise, l’arbitre sépare souvent le corps-à-corps. En boxe thaï, le clinch est un domaine à part : contrôle de la nuque, déséquilibres, genoux. C’est aussi ce qui rend la discipline plus complète… et plus exigeante pour le cou et le tronc.",
        ],
      },
      {
        heading: "La condition",
        paragraphs: [
          "Les deux sports demandent du souffle. Le Muay Thaï ajoute un travail lourd de hanches, de tibias et d’appuis. Beaucoup de boxeurs anglais s’y retrouvent pour le cardio ; beaucoup de thaïlandais travaillent encore la boxe de poings pour affiner la précision.",
        ],
      },
      {
        heading: "Faut-il choisir ?",
        paragraphs: [
          "On peut commencer par l’une et découvrir l’autre. À Toulouse, le Boxing Center enseigne les deux, ce qui permet de tester un cours de boxe thaï sans abandonner une base de boxe anglaise si on en a déjà une.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
