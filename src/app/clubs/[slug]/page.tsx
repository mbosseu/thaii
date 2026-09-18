import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getClub, getClubs } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getClubs().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const club = getClub(slug);
  if (!club) return { title: "Club introuvable" };
  return {
    title: club.name,
    description: club.summary,
    alternates: { canonical: `${siteConfig.url}/clubs/${club.slug}` },
  };
}

export default async function ClubPage({ params }: Props) {
  const { slug } = await params;
  const club = getClub(slug);
  if (!club) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-[1.25rem]">
        <Image src={club.image} alt={club.imageAlt} fill priority className="object-cover" sizes="100vw" />
      </div>
      <p className="text-xs uppercase tracking-[0.16em] text-muted">
        {club.city} · {club.region}
      </p>
      <h1 className="mt-3 font-display text-5xl text-cream">{club.name}</h1>
      <p className="mt-4 max-w-3xl font-serif text-lg text-muted">{club.summary}</p>
      <p className="mt-2 text-sm text-muted">{club.address}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="card-surface p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-gold">Disciplines</p>
          <ul className="mt-3 space-y-1 text-cream">
            {club.disciplines.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="card-surface p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-gold">Points forts</p>
          <ul className="mt-3 space-y-1 text-cream">
            {club.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      {club.allowExternalBacklink ? (
        <p className="mt-8 font-serif text-muted">
          En savoir plus sur le site du{" "}
          <a href={club.website} target="_blank" rel="noopener noreferrer" className="text-cream underline">
            {club.name}
          </a>
          .
        </p>
      ) : (
        <p className="mt-8 text-sm text-muted">
          Site du club : informations publiques disponibles via recherche — backlink externe non intégré sur cette fiche (ligne éditoriale).
        </p>
      )}

      <Link href="/clubs" className="btn-ghost mt-8">
        ← Tous les clubs
      </Link>
    </div>
  );
}
