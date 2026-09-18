import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBoxer, getBoxers } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBoxers().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fighter = getBoxer(slug);
  if (!fighter) return { title: "Combattant introuvable" };
  return {
    title: fighter.name,
    description: fighter.bio,
    alternates: { canonical: `${siteConfig.url}/combattants/${fighter.slug}` },
  };
}

export default async function CombattantPage({ params }: Props) {
  const { slug } = await params;
  const fighter = getBoxer(slug);
  if (!fighter) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
            <Image src={fighter.image} alt={fighter.imageAlt} fill priority className="object-cover" sizes="40vw" />
          </div>
          <p className="mt-2 text-xs text-muted">Crédit : {fighter.imageCredit}</p>
        </div>
        <div>
          <p className="badge badge-accent">{fighter.weightClass}</p>
          <h1 className="mt-4 font-display text-5xl text-cream">{fighter.name}</h1>
          <p className="mt-2 text-muted">
            {fighter.nationality} · {fighter.stance} · {fighter.record}
          </p>
          <p className="mt-6 font-serif text-lg leading-relaxed text-muted">{fighter.bio}</p>
          <ul className="mt-8 space-y-2">
            {fighter.highlights.map((h) => (
              <li key={h} className="border-l-2 border-accent pl-4 text-cream">
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Sources</p>
            <ul className="mt-2 space-y-1 text-sm">
              {fighter.sources.map((s) => (
                <li key={s}>
                  <a href={s} target="_blank" rel="noopener noreferrer" className="text-cream">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/combattants" className="btn-ghost mt-8">
            ← Tous les combattants
          </Link>
        </div>
      </div>
    </div>
  );
}
