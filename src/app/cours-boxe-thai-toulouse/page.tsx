import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, JsonLd } from "@/components/Ui";
import { boxingCenter, site } from "@/lib/site";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Cours boxe thaï Toulouse",
  description:
    "Cours de boxe thaï à Toulouse : créneaux Saint-Cyprien Boxe Thaï / K1, niveaux, séance d’essai et lien vers le planning officiel.",
  path: "/cours-boxe-thai-toulouse/",
  image: "/images/salles/saint-cyprien-espace.webp",
});

export default function CoursPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Toulouse", path: "/boxe-thai-toulouse/" },
          { name: "Cours", path: "/cours-boxe-thai-toulouse/" },
        ])}
      />
      <PageHero
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/boxe-thai-toulouse/", label: "Toulouse" },
          { label: "Cours" },
        ]}
        title="Cours de boxe thaï à Toulouse"
        lead="Des créneaux collectifs pour débuter ou progresser, sans obligation de combat. Horaires à confirmer sur le planning du club."
        image="/images/salles/saint-cyprien-espace.webp"
        imageAlt="Cours de boxe thaï à Saint-Cyprien"
      />
      <div className="container-site grid gap-10 py-12 md:grid-cols-2">
        <article className="prose-site">
          <h2>Ce que l’on y fait</h2>
          <p>
            Un cours de boxe thaï à Toulouse n’est pas un stage de compétition par défaut. On y travaille garde,
            frappes, paos et condition. Les créneaux Saint-Cyprien sont labellisés Boxe Thaï / K1 : bases de Muay Thaï
            et rythme kick-boxing moderne selon le coach et le groupe.
          </p>
          <p>
            Débutants bienvenus. Les confirmés enchaînent davantage. Le combat reste un choix. Voir{" "}
            <Link href="/boxe-thai-debutant/">débuter la boxe thaï</Link> et{" "}
            <Link href="/entrainement-boxe-thai/">la séance type</Link>.
          </p>
          <h2>Séance d’essai</h2>
          <p>
            Le Boxing Center propose une séance d’essai. Modalités (tarif, formulaire, choix de salle) : uniquement
            sur{" "}
            <a href={site.boxingCenterUrl} target="_blank" rel="noopener noreferrer">
              le site officiel
            </a>
            , pour rester exact.
          </p>
        </article>
        <div>
          <div className="img-frame mb-6 aspect-[4/3]">
            <Image
              src="/images/salles/saint-cyprien-hero.webp"
              alt="Boxing Center Saint-Cyprien, cours Boxe Thaï / K1"
              width={800}
              height={600}
            />
          </div>
          <h2 className="text-3xl text-white">Saint-Cyprien — Boxe Thaï / K1</h2>
          <p className="mt-2 text-sm text-muted">11 rue Sainte-Lucie, 31300 Toulouse · saison 2026–2027</p>
          <table className="mt-4 w-full border-collapse text-left text-sm">
            <caption className="sr-only">Horaires Boxe Thaï / K1 Saint-Cyprien</caption>
            <tbody>
              {boxingCenter.saintCyprienSchedule.map((row) => (
                <tr key={row.day} className="border-b border-white/10">
                  <th className="py-3 pr-4 font-semibold text-gold">{row.day}</th>
                  <td className="py-3 text-muted">{row.slots.join(" · ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-muted">
            Vérifiez le planning officiel avant de vous déplacer : les horaires peuvent changer.
          </p>
        </div>
      </div>
      <section className="container-site pb-12">
        <h2 className="text-4xl text-white">Autres salles</h2>
        <p className="mt-3 max-w-3xl text-muted">
          La salle États-Unis propose un volume élevé de boxe pieds-poings. Minimes, Ramonville et Portet complètent
          le réseau. Adresses et photos : <Link href="/club-boxe-thai-toulouse/">page club</Link>. Vue d’ensemble locale :{" "}
          <Link href="/boxe-thai-toulouse/">boxe thaï Toulouse</Link>.
        </p>
      </section>
      <CtaBand
        primaryHref={site.boxingCenterThaiUrl}
        primaryLabel="Découvrir les cours à Toulouse"
      />
    </>
  );
}
