import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, JsonLd } from "@/components/Ui";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Boxe thaï débutant : comment commencer",
  description:
    "Commencer la boxe thaï sans expérience : niveau, âge, équipement, première séance. Un débutant n’est pas obligé de combattre.",
  path: "/boxe-thai-debutant/",
  image: "/images/entrainement/boxe-thai-header.webp",
});

export default function DebutantPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Débutant", path: "/boxe-thai-debutant/" },
        ])}
      />
      <PageHero
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Débutant" }]}
        title="Boxe thaï débutant"
        lead="On commence par apprendre, pas par affronter. Voici ce qui se passe vraiment lors des premières séances."
        image="/images/entrainement/boxe-thai-header.webp"
        imageAlt="Cours de boxe thaï accessible aux débutants"
      />
      <article className="container-site prose-site max-w-3xl py-12">
        <div className="img-frame mb-8 aspect-[16/9]">
          <Image
            src="/images/salles/saint-cyprien-2.webp"
            alt="Groupe débutant et confirmé en cours collectif"
            width={1100}
            height={620}
          />
        </div>
        <h2>Faut-il un niveau pour commencer ?</h2>
        <p>
          Non. Un cours collectif de club est conçu pour mélanger les profils : le coach donne des variantes. Venir
          de la boxe anglaise, du fitness ou de la musculation aide pour le cardio ou la force, mais n’est pas un
          prérequis. La coordination pieds-poings s’apprend sur le tapis.
        </p>
        <h2>L’âge</h2>
        <p>
          Un adulte peut débuter à tout âge, à intensité adaptée. Chez Boxing Center, des cours de boxe éducative
          existent dès 7 ans, avec des créneaux enfants et adolescents selon les salles. Les mineurs suivent le
          planning jeune, distinct des cours adultes.
        </p>
        <h2>La première séance</h2>
        <p>
          Arrivez un peu en avance, signalez que vous débutez, hydratez-vous. Vêtements de sport suffisent souvent
          pour découvrir. Observez le rythme : échauffement, technique, paos, sac. Vous n’êtes pas évalué.
        </p>
        <h2>Équipement</h2>
        <p>
          Inutile d’acheter tout avant d’avoir testé. Le détail — ce qui est nécessaire, ce qui est optionnel — est
          sur la page <Link href="/equipement-boxe-thai/">équipement de boxe thaï</Link>.
        </p>
        <h2>Doit-on combattre ?</h2>
        <p>
          Non. Un débutant n’est pas obligé de faire des combats, ni même du sparring. L’opposition, quand elle
          existe, est encadrée et consentie. La majorité des pratiquants s’entraîne pour la technique et la forme.
        </p>
        <h2>La suite logique</h2>
        <p>
          Après quelques cours : <Link href="/entrainement-boxe-thai/">comprendre la séance type</Link>, puis{" "}
          <Link href="/techniques-boxe-thai/">les techniques</Link>, puis un{" "}
          <Link href="/cours-boxe-thai-toulouse/">cours de boxe thaï à Toulouse</Link> si vous êtes dans la région.
        </p>
        <p>
          Guides complémentaires :{" "}
          <Link href="/blog/comment-commencer-boxe-thai/">comment commencer</Link> et{" "}
          <Link href="/blog/muay-thai-debutant-guide-complet/">guide Muay Thaï débutant</Link>.
        </p>
      </article>
      <CtaBand title="Essayer un cours, sans combat" />
    </>
  );
}
