import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCoach, getCoaches } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getCoaches().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const coach = getCoach(slug);
  if (!coach) return { title: "Coach introuvable" };
  return {
    title: coach.name,
    description: coach.bio,
    alternates: { canonical: `${siteConfig.url}/coachs/${coach.slug}` },
  };
}

export default async function CoachPage({ params }: Props) {
  const { slug } = await params;
  const coach = getCoach(slug);
  if (!coach) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="badge badge-accent">Coach</p>
      <h1 className="mt-4 font-display text-5xl text-cream">{coach.name}</h1>
      <p className="mt-2 text-muted">
        {coach.club} · {coach.city}
      </p>
      <p className="mt-6 font-serif text-lg text-muted">{coach.bio}</p>
      <p className="mt-4 text-cream">{coach.method}</p>
      {coach.clubSlug ? (
        <Link href={`/clubs/${coach.clubSlug}`} className="btn-ghost mt-8">
          Voir le club →
        </Link>
      ) : null}
    </div>
  );
}
