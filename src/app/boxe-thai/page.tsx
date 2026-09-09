import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, JsonLd } from "@/components/Ui";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Qu’est-ce que la boxe thaï ?",
  description:
    "Définition de la boxe thaï : origines, huit membres, clinch, et différences avec la boxe anglaise et le kick-boxing.",
  path: "/boxe-thai/",
  image: "/images/entrainement/danse-wai-kru.webp",
});

export default function BoxeThaiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Boxe thaï", path: "/boxe-thai/" },
        ])}
      />
      <PageHero
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Boxe thaï" }]}
        title="Qu’est-ce que la boxe thaï ?"
        lead="La boxe thaï est le nom français du Muay Thaï : un sport de combat debout qui utilise poings, pieds, genoux, coudes et clinch."
        image="/images/entrainement/danse-wai-kru.webp"
        imageAlt="Rituel et pratique du Muay Thaï"
      />
      <article className="container-site prose-site max-w-3xl py-12">
        <h2>Définition</h2>
        <p>
          La boxe thaï est un sport de percussion où l’on frappe et se défend avec huit points de contact :
          deux poings, deux pieds (ou tibias), deux genoux et deux coudes. On y ajoute le clinch, le corps-à-corps
          qui permet de contrôler l’adversaire, de le déséquilibrer et de frapper du genou.
        </p>
        <p>
          En Thaïlande, on parle de Muay Thaï, sport national. En France, « boxe thaï » et « Muay Thaï » désignent
          la même discipline. Voir aussi la page <Link href="/muay-thai/">Muay Thaï</Link>.
        </p>
        <div className="img-frame my-8 aspect-[16/9]">
          <Image
            src="/images/entrainement/boxe-thai-header.webp"
            alt="Garde et déplacements en boxe thaï"
            width={1100}
            height={620}
          />
        </div>
        <h2>Principes fondamentaux</h2>
        <p>
          La garde protège le visage et le foie. Les hanches transmettent la puissance. La distance se gère avec le
          teep (coup de pied de face) et les pas. Le rythme d’un round force à relâcher, respirer, puis accélérer.
        </p>
        <p>
          Le respect du partenaire et du coach fait partie de la pratique. Avant un combat, le Wai Kru / Ram Muay
          rappelle l’ancrage culturel de la discipline — ce n’est pas un ornement de spectacle, c’est un rituel d’école.
        </p>
        <h2>Poings, jambes, genoux, coudes et clinch</h2>
        <ul>
          <li>Poings : jab, direct, crochet, uppercut.</li>
          <li>Jambes : low kick, middle kick, high kick, teep.</li>
          <li>Genoux : au corps, en rentrant, parfois à la tête selon le niveau.</li>
          <li>Coudes : coupes courtes, en avançant ou en pivotant.</li>
          <li>Clinch : contrôle de la nuque, déplacements, genoux, sorties.</li>
        </ul>
        <p>
          Le détail technique est sur la page <Link href="/techniques-boxe-thai/">techniques de boxe thaï</Link>.
        </p>
        <h2>Différences avec les autres sports de combat</h2>
        <p>
          <strong className="text-ink">Boxe anglaise</strong> : uniquement les poings, pas de coups de pied ni de clinch offensif prolongé.
        </p>
        <p>
          <strong className="text-ink">Kick-boxing</strong> : poings et pieds, parfois genoux selon le règlement. Moins de coudes, clinch souvent limité.
        </p>
        <p>
          <strong className="text-ink">K1</strong> : kick-boxing moderne de galas, rythme élevé, clinch court, coudes rarement autorisés.
        </p>
        <p>
          <strong className="text-ink">MMA</strong> : ajoute projections et sol. La boxe thaï y est une base de striking, pas un équivalent.
        </p>
        <p>
          Un article compare aussi <Link href="/blog/muay-thai-ou-boxe-anglaise/">Muay Thaï et boxe anglaise</Link>.
        </p>
      </article>
      <CtaBand title="Passer de la définition à la pratique" />
    </>
  );
}
