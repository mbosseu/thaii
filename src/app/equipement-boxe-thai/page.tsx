import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, JsonLd } from "@/components/Ui";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Équipement de boxe thaï",
  description:
    "Équipement de boxe thaï : gants, bandes, protège-dents, protège-tibias, short. Ce qui est nécessaire ou optionnel pour débuter.",
  path: "/equipement-boxe-thai/",
  image: "/images/salles/etats-unis-gants.webp",
});

const gear = [
  {
    title: "Gants",
    need: "Utile dès que l’on frappe paos et sac",
    text: "Ils protègent les mains et le partenaire. Le grammage dépend du poids du pratiquant et du type de travail (souvent plus lourds pour le sac et l’opposition). Un coach aide à choisir la taille.",
  },
  {
    title: "Bandes",
    need: "Recommandé avec les gants",
    text: "Elles stabilisent le poignet et les métacarpes. Une pose simple suffit au début ; l’objectif est le maintien, pas un wrapping de compétition.",
  },
  {
    title: "Protège-dents",
    need: "Dès qu’il y a opposition ou drills face à face",
    text: "Protège dents et mâchoire. Un modèle bouilli (thermoformable) convient à la plupart des pratiquants loisir.",
  },
  {
    title: "Protège-tibias",
    need: "Important dès les kicks appuyés et le travail à deux",
    text: "Ils limitent les hématomes sur les tibias et protègent le partenaire. Optionnels pour une toute première séance 100 % technique à vide.",
  },
  {
    title: "Short",
    need: "Optionnel au début",
    text: "Le short de Muay Thaï libère la hanche. Un short de sport large fonctionne pour découvrir. Évitez jean et tissus rigides.",
  },
  {
    title: "Accessoires utiles",
    need: "Selon la pratique",
    text: "Corde à sauter, protège-poitrine (selon les cours), chevillères, baume pour les bleus. Aucun de ces éléments n’est obligatoire pour commencer.",
  },
];

export default function EquipementPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Équipement", path: "/equipement-boxe-thai/" },
        ])}
      />
      <PageHero
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Équipement" }]}
        title="Équipement de boxe thaï"
        lead="Chaque pièce a une fonction de protection ou de liberté de mouvement. Pas de liste d’achats inventée : seulement ce qui sert réellement."
        image="/images/salles/etats-unis-gants.webp"
        imageAlt="Gants et matériel de boxe"
      />
      <div className="container-site py-12">
        <div className="img-frame mb-10 aspect-[16/7] max-h-[320px]">
          <Image
            src="/images/salles/etats-unis-gants-hero.webp"
            alt="Matériel de frappe au Boxing Center"
            width={1200}
            height={420}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {gear.map((item) => (
            <article key={item.title} className="border border-white/10 bg-bg-3 p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-gold">{item.need}</p>
              <h2 className="mt-2 text-3xl text-white">{item.title}</h2>
              <p className="mt-3 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-muted">
          Pour la première séance, voir <Link href="/boxe-thai-debutant/">boxe thaï débutant</Link>. Article lié :{" "}
          <Link href="/blog/quel-equipement-pour-debuter/">quel équipement pour débuter</Link>.
        </p>
      </div>
      <CtaBand />
    </>
  );
}
