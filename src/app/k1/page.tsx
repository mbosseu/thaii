import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "K1",
  description: "K1 rules : kick-boxing moderne de galas, rythme élevé, clinch court.",
  alternates: { canonical: `${siteConfig.url}/k1` },
};

export default function K1Page() {
  return (
    <>
      <PageHero
        eyebrow="Discipline"
        title="K1"
        description="Le kick-boxing de galas : volume striking, genoux, clinch limité."
        image="/images/covers/combat.webp"
        imageAlt="Ambiance combat K1 / pieds-poings"
      />
      <article className="mx-auto max-w-3xl px-4 py-12 font-serif text-muted sm:px-6">
        <p className="text-lg leading-relaxed">
          Le K1 est un format de kick-boxing moderne. En club, les créneaux « Boxe Thaï / K1 » mélangent souvent
          bases techniques et rythme combat.
        </p>
        <p className="mt-4 leading-relaxed">
          Lire : <Link href="/article/differences-boxe-thai-kick-k1">Boxe Thaï vs Kick vs K1</Link>.
        </p>
      </article>
    </>
  );
}
