import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getBoxers } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Combattants",
  description: "Fiches et portraits de combattants Muay Thaï, Kick Boxing et K1 suivis par Actu Thaii.",
  alternates: { canonical: `${siteConfig.url}/combattants` },
};

export default function CombattantsPage() {
  const fighters = getBoxers();

  return (
    <>
      <PageHero
        eyebrow="Portraits"
        title="Combattants"
        description="Fiches factuelles, sources citées. Muay Thaï, Kick Boxing, K1."
        image="/images/editorial/champion-wbc-belts.jpg"
        imageAlt="Champion de Muay Thaï avec ceintures WBC"
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {fighters.map((fighter) => (
          <Link
            key={fighter.slug}
            href={`/combattants/${fighter.slug}`}
            className="group card-surface overflow-hidden no-underline"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={fighter.image}
                alt={fighter.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="33vw"
              />
            </div>
            <div className="p-5">
              <p className="font-display text-2xl text-cream">{fighter.name}</p>
              <p className="mt-1 text-sm text-muted">
                {fighter.nationality} · {fighter.weightClass}
              </p>
              <p className="mt-3 line-clamp-3 text-sm text-muted">{fighter.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
