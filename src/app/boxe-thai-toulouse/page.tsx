import Image from "next/image";
import Link from "next/link";
import { BoxingCenterBlock } from "@/components/BoxingCenterBlock";
import { PageHero } from "@/components/PageHero";
import { CtaBand, JsonLd } from "@/components/Ui";
import { boxingCenter, site } from "@/lib/site";
import { absoluteUrl, breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Boxe Thaï Toulouse : cours, entraînement et club",
  description:
    "Boxe thaï à Toulouse : comment choisir un club, comment se déroule l’entraînement, et présentation vérifiée du Boxing Center.",
  path: "/boxe-thai-toulouse/",
  image: "/images/salles/saint-cyprien-hero.webp",
});

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Boxing Center — Boxe thaï Toulouse",
  url: site.boxingCenterThaiUrl,
  telephone: site.phoneHref,
  email: site.email,
  image: absoluteUrl("/images/salles/saint-cyprien-hero.webp"),
  sport: "Muay Thai",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11 rue Sainte-Lucie",
    postalCode: "31300",
    addressLocality: "Toulouse",
    addressCountry: "FR",
  },
  openingHours: site.openingHours,
  sameAs: [site.boxingCenterUrl],
};

export default function ToulousePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Boxe thaï Toulouse", path: "/boxe-thai-toulouse/" },
          ]),
          localBusiness,
        ]}
      />
      <PageHero
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Boxe thaï Toulouse" }]}
        title="Boxe Thaï Toulouse : cours, entraînement et club"
        lead="Trouver où pratiquer le Muay Thaï à Toulouse, comprendre un cours, et rejoindre le Boxing Center avec des informations vérifiées."
        image="/images/salles/saint-cyprien-hero.webp"
        imageAlt="Salle de boxe thaï Boxing Center Saint-Cyprien Toulouse"
      />
      <article className="container-site prose-site max-w-3xl py-12">
        <p>
          Chercher « boxe thaï Toulouse » ou « Muay Thaï Toulouse », c’est généralement vouloir un cours encadré, un
          club accessible, et savoir si l’on peut arriver débutant. Cette page répond à ça, puis oriente vers le
          Boxing Center, partenaire local de boxe-thai.com.
        </p>
        <h2>Comment se déroule l’entraînement</h2>
        <p>
          Une séance de boxe thaï à Toulouse suit le même schéma qu’ailleurs en club : échauffement, technique, paos,
          sac, physique, parfois clinch. Le détail est sur{" "}
          <Link href="/entrainement-boxe-thai/">la page entraînement</Link>. On n’y exige pas un combat.
        </p>
        <div className="img-frame my-8 aspect-[16/9]">
          <Image
            src="/images/entrainement/boxe-thai-1.webp"
            alt="Entraînement de boxe thaï à Toulouse, travail aux paos"
            width={1100}
            height={620}
          />
        </div>
        <h2>Comment choisir un club</h2>
        <p>
          Encadrement diplômé, créneau régulier, matériel (sacs, paos), pédagogie débutant, affiliation (FFKMDA pour
          le Muay Thaï / kick-boxing). Visitez avant de vous engager. Un article développe{" "}
          <Link href="/blog/comment-choisir-club-boxe-thai/">comment choisir son club</Link>.
        </p>
        <h2>Le Boxing Center à Toulouse</h2>
        <p>
          Inauguré en 2016, le Boxing Center propose des cours de boxe thaï / Muay Thaï et kick-boxing, affiliés
          FFKMDA, dans plusieurs salles : Saint-Cyprien, États-Unis, Minimes, Ramonville-Saint-Agne et
          Portet-sur-Garonne. Horaires d’ouverture indiqués par le club : {boxingCenter.hours}.
        </p>
        <p>
          Les créneaux labellisés Boxe Thaï / K1 à Saint-Cyprien (saison 2026–2027, à vérifier sur le planning officiel) :
        </p>
        <ul>
          {boxingCenter.saintCyprienSchedule.map((row) => (
            <li key={row.day}>
              {row.day} : {row.slots.join(" · ")}
            </li>
          ))}
        </ul>
        <p>
          Les plannings évoluent. La source à jour reste{" "}
          <a href={site.boxingCenterThaiUrl} target="_blank" rel="noopener noreferrer">
            la page boxe thaï du Boxing Center
          </a>
          .
        </p>
        <p>
          Pages complémentaires : <Link href="/club-boxe-thai-toulouse/">club boxe thaï Toulouse</Link> et{" "}
          <Link href="/cours-boxe-thai-toulouse/">cours boxe thaï Toulouse</Link>.
        </p>
      </article>
      <BoxingCenterBlock />
      <CtaBand
        title="Découvrir les cours de Boxe Thaï du Boxing Center"
        primaryHref={site.boxingCenterThaiUrl}
        primaryLabel="Découvrir les cours de Boxe Thaï du Boxing Center"
      />
    </>
  );
}
