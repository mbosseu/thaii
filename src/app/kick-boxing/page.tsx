import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kick Boxing",
  description:
    "Kick Boxing : règles, différences avec le Muay Thaï et le K1, et comment débuter en club.",
  alternates: { canonical: `${siteConfig.url}/kick-boxing` },
};

export default function KickBoxingPage() {
  return (
    <>
      <PageHero
        eyebrow="Discipline"
        title="Kick Boxing"
        description="Poings et pieds : une base pieds-poings accessible, du loisir à la compétition."
        image="/images/editorial/kick-action-rws.jpg"
        imageAlt="Coup de pied en combat pieds-poings"
      />
      <article className="mx-auto max-w-3xl px-4 py-12 font-serif text-muted sm:px-6">
        <p className="text-lg leading-relaxed">
          Le Kick Boxing combine la boxe et les coups de pied. Selon le règlement, les genoux peuvent être
          limités ; les coudes et le clinch prolongé sont généralement exclus.
        </p>
        <p className="mt-4 leading-relaxed">
          Voir aussi : <Link href="/article/differences-boxe-thai-kick-k1">comparatif des disciplines</Link> et{" "}
          <Link href="/k1">page K1</Link>.
        </p>
      </article>
    </>
  );
}
