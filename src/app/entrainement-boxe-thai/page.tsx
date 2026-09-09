import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, JsonLd } from "@/components/Ui";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Entraînement boxe thaï : une séance type",
  description:
    "Déroulé d’un entraînement de boxe thaï : échauffement, technique, paos, sac, préparation physique, clinch et retour au calme.",
  path: "/entrainement-boxe-thai/",
  image: "/images/entrainement/boxe-thai-header.webp",
});

const steps = [
  {
    title: "Échauffement",
    text: "Mobilité, corde à sauter ou shadow, montée progressive du cardio. On prépare hanches, épaules et chevilles avant de frapper.",
    image: "/images/entrainement/boxe-thai-header.webp",
    alt: "Échauffement d’un cours de boxe thaï",
  },
  {
    title: "Technique",
    text: "Garde, déplacements, un ou deux enchaînements du jour. Le coach corrige les appuis plus que le volume.",
    image: "/images/entrainement/boxe-thai-2.webp",
    alt: "Travail technique en Muay Thaï",
  },
  {
    title: "Paos / pattes d’ours",
    text: "Frappes sur cibles tenues par le coach ou un partenaire. Timing, précision, respiration. C’est le cœur pédagogique de beaucoup de cours.",
    image: "/images/entrainement/boxe-thai-1.webp",
    alt: "Paos pendant un cours de boxe thaï",
  },
  {
    title: "Sac",
    text: "Rounds au sac lourd pour l’endurance de frappe et la pose des kicks. On cherche la répétition propre, pas le tapage.",
    image: "/images/salles/saint-cyprien-1.webp",
    alt: "Sacs de frappe en salle",
  },
  {
    title: "Préparation physique",
    text: "Gainage, burpees, gainage de garde, parfois parcours. L’intensité dépend du groupe et du créneau.",
    image: "/images/salles/etats-unis-espace.webp",
    alt: "Espace de préparation physique",
  },
  {
    title: "Clinch puis retour au calme",
    text: "Selon le cours : clinch technique à faible intensité, puis étirements et hydratation. Le combat n’est pas l’étape suivante automatique.",
    image: "/images/entrainement/combat.webp",
    alt: "Travail d’opposition contrôlée",
  },
];

export default function EntrainementPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Entraînement", path: "/entrainement-boxe-thai/" },
        ])}
      />
      <PageHero
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Entraînement" }]}
        title="Entraînement boxe thaï"
        lead="Le déroulé d’une séance de club, tel qu’il se pratique réellement : de l’échauffement au retour au calme."
        image="/images/entrainement/boxe-thai-1.webp"
        imageAlt="Séance de boxe thaï aux paos"
      />
      <div className="container-site grid gap-10 py-12">
        {steps.map((step, index) => (
          <article key={step.title} className="grid items-center gap-6 md:grid-cols-2">
            <div className={`img-frame aspect-[4/3] ${index % 2 ? "md:order-2" : ""}`}>
              <Image src={step.image} alt={step.alt} width={800} height={600} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Étape {index + 1}</p>
              <h2 className="text-4xl text-white">{step.title}</h2>
              <p className="mt-3 text-muted">{step.text}</p>
            </div>
          </article>
        ))}
        <p className="max-w-3xl text-muted">
          Pour débuter sans pression de combat, lire le{" "}
          <Link href="/boxe-thai-debutant/">guide débutant</Link>. Pour le matériel utile en séance, voir{" "}
          <Link href="/equipement-boxe-thai/">l’équipement</Link>. Les horaires toulousains sont sur{" "}
          <Link href="/cours-boxe-thai-toulouse/">cours de boxe thaï à Toulouse</Link>.
        </p>
      </div>
      <CtaBand title="Rejoindre un entraînement à Toulouse" />
    </>
  );
}
