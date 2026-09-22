import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Muay Thaï",
  description:
    "Tout comprendre sur le Muay Thaï / boxe thaï : huit membres, clinch, tradition et pratique en club.",
  alternates: { canonical: `${siteConfig.url}/muay-thai` },
};

export default function MuayThaiPage() {
  return (
    <>
      <PageHero
        eyebrow="Discipline"
        title="Muay Thaï"
        description="L’art des huit membres : poings, pieds, genoux, coudes et clinch."
        image="/images/editorial/wai-kru-dual.jpg"
        imageAlt="Wai Kru Ram Muay avant un combat"
      />
      <article className="mx-auto max-w-3xl px-4 py-12 font-serif text-muted sm:px-6">
        <p className="text-lg leading-relaxed">
          Le Muay Thaï — ou boxe thaï — est le sport national de Thaïlande. En France, il se pratique en club
          loisir comme en compétition, souvent sous cadre FFKMDA.
        </p>
        <p className="mt-4 leading-relaxed">
          Lire aussi :{" "}
          <Link href="/article/quest-ce-que-le-muay-thai">Qu’est-ce que le Muay Thaï ?</Link>,{" "}
          <Link href="/article/comment-debuter-boxe-thai">débuter</Link>,{" "}
          <Link href="/article/differences-boxe-thai-kick-k1">différences avec Kick et K1</Link>.
        </p>
      </article>
    </>
  );
}
