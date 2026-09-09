import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, JsonLd } from "@/components/Ui";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Muay Thaï : l’art des huit membres",
  description:
    "Le Muay Thaï expliqué : sport national thaïlandais, huit armes, rituel, entraînement moderne et pratique en club.",
  path: "/muay-thai/",
  image: "/images/entrainement/danse-wai-kru.webp",
});

export default function MuayThaiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Muay Thaï", path: "/muay-thai/" },
        ])}
      />
      <PageHero
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Muay Thaï" }]}
        title="Muay Thaï"
        lead="Nom thaïlandais de la boxe thaï : un art martial devenu sport mondial, toujours marqué par ses rituels et ses huit armes."
        image="/images/entrainement/danse-wai-kru.webp"
        imageAlt="Wai Kru en Muay Thaï"
      />
      <article className="container-site prose-site max-w-3xl py-12">
        <p>
          Muay Thaï signifie littéralement la boxe thaïlandaise. C’est le sport national du Royaume de Thaïlande,
          pratiqué comme art martial, comme conditionnement et comme sport de compétition sous gants.
        </p>
        <h2>Une identité culturelle</h2>
        <p>
          Le Wai Kru et le Ram Muay précèdent les combats officiels : salut aux maîtres, ancrage, concentration.
          La musique traditionnelle (sarama) rythme encore de nombreux galas. En club, ces éléments se transmettent
          selon le professeur : certains y consacrent du temps, d’autres restent centrés sur le striking.
        </p>
        <div className="img-frame my-8 aspect-[16/9]">
          <Image
            src="/images/entrainement/combat.webp"
            alt="Round de Muay Thaï en salle"
            width={1100}
            height={620}
          />
        </div>
        <h2>Le sport moderne</h2>
        <p>
          Le Muay Thaï contemporain se dispute en rounds chronométrés, avec gants, protège-dents et règles de scoring
          qui valorisent les coups nets, le contrôle du ring et le clinch. Les stades de Bangkok, notamment Rajadamnern
          et Lumpinee, restent des références historiques de la scène thaïlandaise.
        </p>
        <p>
          L’histoire détaillée — Muay Boran, sport moderne, diffusion internationale — est sur la page{" "}
          <Link href="/histoire-boxe-thai/">histoire de la boxe thaï</Link>.
        </p>
        <h2>S’entraîner au Muay Thaï</h2>
        <p>
          Un cours de club alterne technique, paos, sac et condition. On n’y cherche pas à copier un camp de Phuket
          dès la première semaine : on construit une garde, des appuis, puis la puissance. Voir{" "}
          <Link href="/entrainement-boxe-thai/">l’entraînement</Link> et{" "}
          <Link href="/boxe-thai-debutant/">le guide débutant</Link>.
        </p>
        <p>
          À Toulouse, les <Link href="/cours-boxe-thai-toulouse/">cours de boxe thaï</Link> du Boxing Center permettent
          de pratiquer le Muay Thaï dans un cadre affilié FFKMDA.
        </p>
      </article>
      <CtaBand />
    </>
  );
}
