import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getCoaches } from "@/lib/content";
import { categoryImages } from "@/lib/media";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coachs",
  description: "Portraits de coachs de pieds-poings.",
  alternates: { canonical: `${siteConfig.url}/coachs` },
};

export default function CoachsPage() {
  const coaches = getCoaches();
  return (
    <>
      <PageHero
        eyebrow="Encadrement"
        title="Coachs"
        description="Les acteurs de terrain qui font progresser la boxe française."
        image={categoryImages.coachs}
      />
      <div className="mx-auto max-w-6xl space-y-4 px-4 py-12 sm:px-6">
        {coaches.map((coach) => (
          <Link
            key={coach.slug}
            href={`/coachs/${coach.slug}`}
            className="card-surface block p-6 no-underline transition-transform hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-muted">{coach.city}</p>
            <h2 className="mt-2 font-display text-3xl text-cream">{coach.name}</h2>
            <p className="mt-2 text-muted">{coach.club}</p>
            <p className="mt-3 max-w-3xl text-sm text-muted">{coach.bio}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
