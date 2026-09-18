import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { PageHero } from "@/components/PageHero";
import { getAllArticles } from "@/lib/articles";
import { getBoxers, getClubs } from "@/lib/content";
import { sectionImages } from "@/lib/media";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recherche",
  description: "Rechercher dans boxe-thai.com : articles, combattants, clubs.",
  alternates: { canonical: `${siteConfig.url}/recherche` },
};

type Props = { searchParams: Promise<{ q?: string }> };

export default async function RecherchePage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();

  const articles = getAllArticles().filter(
    (a) =>
      !query ||
      a.title.toLowerCase().includes(query) ||
      a.description.toLowerCase().includes(query) ||
      a.tags?.some((t) => t.toLowerCase().includes(query)),
  );
  const fighters = getBoxers().filter(
    (b) => !query || b.name.toLowerCase().includes(query) || b.weightClass.toLowerCase().includes(query),
  );
  const clubs = getClubs().filter(
    (c) => !query || c.name.toLowerCase().includes(query) || c.city.toLowerCase().includes(query),
  );

  return (
    <>
      <PageHero
        eyebrow="Recherche"
        title={query ? `Résultats pour « ${q} »` : "Rechercher"}
        description="Articles, combattants et clubs."
        image={sectionImages.ring}
      />
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6">
        <form action="/recherche" method="get" className="flex gap-2">
          <input
            name="q"
            defaultValue={q}
            className="min-h-11 flex-1 rounded-full border border-border bg-surface px-4 text-cream outline-none ring-accent focus:ring-2"
            placeholder="Mot-clé…"
          />
          <button className="btn-primary" type="submit">
            Chercher
          </button>
        </form>

        <section>
          <h2 className="font-display text-3xl text-cream">Articles ({articles.length})</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 9).map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-cream">Combattants ({fighters.length})</h2>
          <ul className="mt-4 space-y-2">
            {fighters.map((b) => (
              <li key={b.slug}>
                <Link href={`/combattants/${b.slug}`} className="text-cream hover:text-white">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-3xl text-cream">Clubs ({clubs.length})</h2>
          <ul className="mt-4 space-y-2">
            {clubs.map((c) => (
              <li key={c.slug}>
                <Link href={`/clubs/${c.slug}`} className="text-cream hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
