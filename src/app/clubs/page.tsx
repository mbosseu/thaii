import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getClubs } from "@/lib/content";
import { sectionImages } from "@/lib/media";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clubs de boxe",
  description: "Clubs de pieds-poings en France — fiches factuelles.",
  alternates: { canonical: `${siteConfig.url}/clubs` },
};

export default function ClubsPage() {
  const clubs = getClubs();
  return (
    <>
      <PageHero
        eyebrow="Terrains"
        title="Clubs de boxe"
        description="Fiches de clubs pieds-poings en France : disciplines, encadrement et infos pratiques."
        image={sectionImages.clubs}
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {clubs.map((club) => (
          <Link key={club.slug} href={`/clubs/${club.slug}`} className="card-surface group overflow-hidden no-underline">
            <div className="relative aspect-[16/10]">
              <Image src={club.image} alt={club.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">
                {club.city} · {club.region}
              </p>
              <h2 className="mt-2 font-display text-2xl text-cream">{club.name}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted">{club.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
