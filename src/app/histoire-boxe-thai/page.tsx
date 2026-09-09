import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, JsonLd } from "@/components/Ui";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Histoire de la boxe thaï et du Muay Thaï",
  description:
    "Histoire du Muay Thaï : Muay Boran, sport moderne, stades thaïlandais, diffusion internationale et développement en France.",
  path: "/histoire-boxe-thai/",
  image: "/images/entrainement/danse-wai-kru.webp",
});

export default function HistoirePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Histoire", path: "/histoire-boxe-thai/" },
        ])}
      />
      <PageHero
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Histoire" }]}
        title="Histoire de la boxe thaï"
        lead="Du Muay Boran au sport sous gants : une évolution documentée, sans légendes inventées."
        image="/images/entrainement/danse-wai-kru.webp"
        imageAlt="Tradition du Muay Thaï"
      />
      <article className="container-site prose-site max-w-3xl py-12">
        <p>
          L’histoire du Muay Thaï mêle sources militaires, pratiques populaires et sport de spectacle. Les récits
          héroïques circulent beaucoup ; ici, on s’en tient aux faits largement admis par les historiens du sport et
          les fédérations, sans dater ce qui n’est pas établi.
        </p>
        <h2>Contexte thaïlandais et Muay Boran</h2>
        <p>
          Avant le sport moderne, des formes de combat à mains nues existent dans l’espace siamois / thaïlandais.
          On les regroupe souvent sous le nom de Muay Boran (« boxe ancienne ») : un ensemble de styles régionaux,
          plus que d’une seule méthode unique. Ces pratiques servaient l’entraînement des guerriers et, plus tard,
          le divertissement lors de fêtes locales.
        </p>
        <p>
          Le Muay Thaï d’aujourd’hui n’est pas une copie figée de ces styles. Il en hérite des armes (pieds, poings,
          genoux, coudes) et d’un rapport au rituel, tout en s’étant codifié pour le ring.
        </p>
        <h2>Le sport moderne</h2>
        <p>
          Au début du XX<sup>e</sup> siècle, l’introduction progressive des gants de boxe, des rounds et d’un
          règlement rapprochent la discipline du sport international. Le Ring, le scoring et la sécurité des
          combattants deviennent centraux.
        </p>
        <p>
          Deux stades de Bangkok incarnent cette ère : le Rajadamnern Boxing Stadium (ouvert en 1945) et le Lumpinee
          Boxing Stadium (ouvert en 1956). Ils ont accueilli des générations de combattants professionnels et restent
          des lieux de référence pour le Muay Thaï de compétition.
        </p>
        <h2>Diffusion internationale</h2>
        <p>
          Au XX<sup>e</sup> siècle, des combattants thaïlandais affrontent des boxeurs étrangers, des camps s’ouvrent
          aux pratiquants venus d’Europe, du Japon ou des États-Unis, et des organisations internationales structurent
          des titres. Des figures comme Ramon Dekkers aux Pays-Bas ont marqué les échanges Thaïlande–Occident.
        </p>
        <p>
          Des champions thaïlandais largement documentés — notamment Saenchai et Buakaw Banchamek — ont ensuite
          popularisé le sport auprès d’un public mondial, en conservant des styles très différents (créativité
          technique d’un côté, explosivité de l’autre).
        </p>
        <h2>En France</h2>
        <p>
          La boxe thaï se développe en France dans le dernier quart du XX<sup>e</sup> siècle, d’abord dans quelques
          salles pionnières, puis via des combattants partis s’aguerrir en Thaïlande. Des noms comme Dida Diafat ou
          Jean-Charles Skarbowsky sont régulièrement cités dans cette diffusion. Le cadre fédéral actuel passe notamment
          par la FFKMDA pour le Muay Thaï et le kick-boxing.
        </p>
        <p>
          À Toulouse, la pratique s’inscrit dans ce mouvement national : clubs affiliés, cours loisir et filière
          compétition. Le <Link href="/club-boxe-thai-toulouse/">Boxing Center</Link> en est un exemple local, sans
          être le seul club de la région.
        </p>
        <p>
          Pour la pratique contemporaine, lire <Link href="/boxe-thai/">qu’est-ce que la boxe thaï</Link> et{" "}
          <Link href="/techniques-boxe-thai/">les techniques</Link>.
        </p>
      </article>
      <CtaBand />
    </>
  );
}
