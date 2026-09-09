import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, JsonLd } from "@/components/Ui";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Boxe thaï femme",
  description:
    "Boxe thaï pour les femmes : commencer sans expérience, technique, condition physique et environnement d’entraînement, sans clichés.",
  path: "/boxe-thai-femme/",
  image: "/images/entrainement/boxe-thai-2.webp",
});

export default function FemmePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Boxe thaï femme", path: "/boxe-thai-femme/" },
        ])}
      />
      <PageHero
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Boxe thaï femme" }]}
        title="Boxe thaï femme"
        lead="La même discipline, les mêmes armes, un cadre d’apprentissage qui doit être respectueux et exigeant — pas un marketing « pink »."
        image="/images/entrainement/boxe-thai-2.webp"
        imageAlt="Pratique de la boxe thaï en cours collectif"
      />
      <article className="container-site prose-site max-w-3xl py-12">
        <div className="img-frame mb-8 aspect-[16/9]">
          <Image
            src="/images/salles/saint-cyprien-3.webp"
            alt="Cours collectif de boxe thaï à Toulouse"
            width={1100}
            height={620}
          />
        </div>
        <h2>Commencer sans expérience</h2>
        <p>
          On débute comme tout le monde : garde, déplacements, frappes contrôlées. Aucun passé martial n’est requis.
          La première séance sert à voir le rythme, pas à prouver quelque chose. Le guide{" "}
          <Link href="/boxe-thai-debutant/">débutant</Link> s’applique tel quel.
        </p>
        <h2>Technique et condition</h2>
        <p>
          Le Muay Thaï développe coordination, souffle et tonicité. Ce n’est pas un programme minceur. Les bénéfices
          physiques existent, mais ils viennent de la régularité, pas d’une promesse. Les techniques sont les mêmes :{" "}
          <Link href="/techniques-boxe-thai/">huit membres et clinch</Link>.
        </p>
        <h2>Environnement d’entraînement</h2>
        <p>
          Un bon club corrige, ne met pas en danger, et n’infantilise personne. Le Boxing Center indique accueillir une
          part élevée de pratiquantes et propose des cours exclusivement féminins (Boxing Lady), sans opposition. Des
          cours mixtes de boxe thaï existent aussi : le choix dépend de ce que l’on cherche.
        </p>
        <p>
          À Toulouse, voir les <Link href="/cours-boxe-thai-toulouse/">cours</Link> et le{" "}
          <Link href="/club-boxe-thai-toulouse/">club</Link>.
        </p>
      </article>
      <CtaBand title="Pratiquer la boxe thaï à Toulouse" />
    </>
  );
}
