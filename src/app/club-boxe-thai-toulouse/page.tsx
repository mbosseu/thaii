import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, JsonLd } from "@/components/Ui";
import { boxingCenter, site } from "@/lib/site";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Club boxe thaï Toulouse",
  description:
    "Club de boxe thaï à Toulouse : salles du Boxing Center, encadrement, équipements, horaires vérifiés et lien vers le site officiel.",
  path: "/club-boxe-thai-toulouse/",
  image: "/images/salles/etats-unis-hero.webp",
});

export default function ClubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Toulouse", path: "/boxe-thai-toulouse/" },
          { name: "Club", path: "/club-boxe-thai-toulouse/" },
        ])}
      />
      <PageHero
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/boxe-thai-toulouse/", label: "Toulouse" },
          { label: "Club" },
        ]}
        title="Club boxe thaï Toulouse"
        lead="Le Boxing Center : plusieurs salles, un encadrement diplômé, une affiliation FFKMDA pour le Muay Thaï et le kick-boxing."
        image="/images/salles/etats-unis-hero.webp"
        imageAlt="Boxing Center Toulouse États-Unis"
      />
      <div className="container-site py-12">
        <article className="prose-site max-w-3xl">
          <p>
            Un club de boxe thaï se juge sur place : accueil, densité du cours, état des sacs, clarté du coach. À
            Toulouse, le Boxing Center est un réseau de salles plutôt qu’un unique dojo. L’abonnement donne accès aux
            cours collectifs selon les formules publiées sur le site officiel — tarifs et promotions changent, on ne
            les recopie pas ici.
          </p>
          <h2>Encadrement</h2>
          <p>
            Les coachs présentés par le club pour la sphère thaï / pieds-poings incluent notamment Jérôme (boxe thaï
            et MMA, expérience de combat au Canada et en Thaïlande), Renaud (boxe pieds-poings à États-Unis) et Sonia
            (boxe thaï, Boxing Lady, Minimes).
          </p>
        </article>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {boxingCenter.coachesThai.map((coach) => (
            <article key={coach.name} className="border border-white/10 bg-bg-3">
              <div className="img-frame aspect-[4/5]">
                <Image src={coach.image} alt={coach.name} width={500} height={620} />
              </div>
              <div className="p-5">
                <h3 className="text-3xl text-white">{coach.name}</h3>
                <p className="text-sm text-gold">{coach.role}</p>
                <p className="mt-2 text-sm text-muted">{coach.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <h2 className="mt-12 text-4xl text-white">Les salles</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {boxingCenter.salles.map((salle) => (
            <article key={salle.slug} className="border border-white/10 bg-bg-3">
              <div className="img-frame aspect-[16/9]">
                <Image src={salle.image} alt={salle.name} width={800} height={450} />
              </div>
              <div className="p-5">
                <h3 className="text-3xl text-white">{salle.name}</h3>
                <p className="text-sm text-gold">{salle.focus}</p>
                <p className="mt-2 text-muted">
                  {salle.address}, {salle.postalCode} {salle.city}
                </p>
                <p className="mt-2 text-sm text-muted">{salle.note}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-muted">
          Horaires d’ouverture : {boxingCenter.hours}. Tél. {site.phoneDisplay}. Pour les{" "}
          <Link href="/cours-boxe-thai-toulouse/">cours de boxe thaï à Toulouse</Link>, voir les créneaux. Page officielle :{" "}
          <a href={site.boxingCenterUrl} target="_blank" rel="noopener noreferrer">
            boxingcenter.fr
          </a>
          .
        </p>
      </div>
      <CtaBand primaryLabel="Découvrir le Boxing Center" />
    </>
  );
}
