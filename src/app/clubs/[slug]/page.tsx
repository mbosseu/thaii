import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getClub, getClubs, getCoaches } from "@/lib/content";
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

  const coaches = getCoaches().filter((c) => c.clubSlug === club.slug);
  const locations = "locations" in club ? club.locations : undefined;
  const email = "email" in club ? club.email : undefined;
  const hours = "hours" in club ? club.hours : undefined;

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

      {locations && locations.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-display text-3xl text-cream">Nos salles</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Choisissez selon votre quartier et votre emploi du temps — plannings à vérifier auprès du club.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <div key={loc.name} className="card-surface p-5">
                <p className="font-display text-xl text-cream">{loc.name}</p>
                <p className="mt-2 text-sm text-muted">{loc.address}</p>
                {"note" in loc && loc.note ? (
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-accent">{loc.note}</p>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {coaches.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-display text-3xl text-cream">Coachs Boxe Thaïlandaise</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Des entraîneurs diplômés pour faire évoluer débutants comme compétiteurs.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {coaches.map((coach) => (
              <Link
                key={coach.slug}
                href={`/coachs/${coach.slug}`}
                className="card-surface group grid overflow-hidden no-underline sm:grid-cols-[8rem_1fr]"
              >
                <div className="relative aspect-square sm:aspect-auto sm:min-h-full">
                  <Image
                    src={coach.image}
                    alt={coach.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="160px"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-2xl text-cream">{coach.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{coach.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {(email || hours) && (
        <section className="card-surface mt-10 p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-gold">Infos pratiques</p>
          <ul className="mt-4 space-y-2 text-cream">
            {email ? (
              <li>
                Email :{" "}
                <a href={`mailto:${email}`} className="underline">
                  {email}
                </a>
              </li>
            ) : null}
            {hours ? <li>Horaires : {hours}</li> : null}
          </ul>
        </section>
      )}

      {club.allowExternalBacklink ? (
        <p className="mt-8 font-serif text-muted">
          Présentation complète sur le site du{" "}
          <a href={club.website} target="_blank" rel="noopener noreferrer" className="text-cream underline">
            Boxing Center — Boxe Thaï &amp; Kick Boxing à Toulouse
          </a>
          .
        </p>
      ) : (
        <p className="mt-8 text-sm text-muted">
          Site du club : informations publiques disponibles via recherche — backlink externe non intégré sur cette
          fiche (ligne éditoriale).
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/article/boxing-center-toulouse-portrait" className="btn-primary">
          Lire le portrait
        </Link>
        <Link href="/clubs" className="btn-ghost">
          ← Tous les clubs
        </Link>
      </div>
    </div>
  );
}
