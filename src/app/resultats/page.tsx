import type { Metadata } from "next";
import { ArticleList } from "@/components/ArticleList";
import { PageHero } from "@/components/PageHero";
import { formatDate, getArticlesByCategory } from "@/lib/articles";
import { getFights } from "@/lib/content";
import { categoryImages } from "@/lib/media";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Résultats",
  description: "Résultats de combats et galas — pieds-poings France et international.",
  alternates: { canonical: `${siteConfig.url}/resultats` },
};

export default function ResultatsPage() {
  const articles = getArticlesByCategory("resultats");
  const results = getFights().results;

  return (
    <>
      <PageHero
        eyebrow="Scoreboard"
        title="Résultats"
        description="Résultats structurés et articles de compte rendu, sources citées."
        image={categoryImages.resultats}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="overflow-hidden rounded-[1.25rem] border border-border">
          {results.map((r) => (
            <div
              key={r.id}
              className="grid gap-3 border-b border-border px-4 py-5 last:border-b-0 sm:grid-cols-[8rem_1.4fr_1fr] sm:px-6"
            >
              <time dateTime={r.date} className="text-xs uppercase tracking-[0.14em] text-muted">
                {formatDate(r.date)}
              </time>
              <div>
                <p className="font-display text-xl text-cream">
                  {r.fighter1} <span className="text-accent">vs</span> {r.fighter2}
                </p>
                <p className="text-sm text-muted">
                  {r.event} · {r.venue}
                </p>
                {r.title ? <p className="text-sm text-gold">{r.title}</p> : null}
              </div>
              <div>
                <span className="badge badge-accent">{r.result}</span>
                <p className="mt-2 text-sm text-muted">
                  {r.method}
                  {r.rounds ? ` · ${r.rounds}` : ""}
                </p>
                {r.scorecards ? <p className="text-xs text-muted">{r.scorecards}</p> : null}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-14 font-display text-3xl text-cream">Comptes rendus</h2>
        <div className="mt-6">
          <ArticleList articles={articles} showCategory={false} layout="stack" />
        </div>
      </div>
    </>
  );
}
