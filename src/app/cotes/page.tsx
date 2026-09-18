import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { formatDate } from "@/lib/articles";
import { getCotes } from "@/lib/cotes";
import { sectionImages } from "@/lib/media";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cotes / Pronostics",
  description:
    "Pronostics éditoriaux des grands combats de pieds-poings : pourcentages, analyse et parti pris argumenté de la rédaction.",
  openGraph: {
    title: `Cotes / Pronostics | ${siteConfig.name}`,
    description: "Analyses éditoriales avant les grands combats — pas un conseil de pari.",
  },
  alternates: { canonical: `${siteConfig.url}/cotes` },
};

export default function CotesPage() {
  const data = getCotes();

  return (
    <>
      <PageHero
        eyebrow="Débat sportif"
        title="Cotes / Pronostics"
        description="Lectures éditoriales avant les grands combats : estimations de chances, explications et parti pris argumenté."
        image={sectionImages.cotes}
        imageAlt="Ambiance avant un grand combat de boxe"
        meta={
          <span className="badge">
            Dernière MAJ · <time dateTime={data.lastUpdated}>{formatDate(data.lastUpdated)}</time>
          </span>
        }
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <aside
          className="rounded-[var(--radius-lg)] border border-accent/35 bg-accent-soft/25 px-5 py-4 text-sm leading-relaxed text-cream"
          role="note"
        >
          {data.disclaimer}
        </aside>

        <div className="mt-10 space-y-8">
          {data.fights.map((fight, index) => (
            <article
              key={fight.id}
              className="card-surface animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="border-b border-border px-5 py-5 sm:px-8 sm:py-7">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  <time dateTime={fight.date}>{formatDate(fight.date)}</time>
                  <span className="mx-2">·</span>
                  {fight.event}
                </p>
                <h2 className="mt-3 font-display text-3xl text-cream sm:text-5xl">
                  {fight.fighter1} <span className="text-accent">vs</span> {fight.fighter2}
                </h2>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-8">
                <div className="rounded-[var(--radius-md)] border border-border bg-surface-2/80 px-5 py-5">
                  <p className="text-sm text-muted">{fight.fighter1}</p>
                  <p className="mt-1 font-display text-5xl text-cream">{fight.percent1}%</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">
                    chances de victoire (éditorial)
                  </p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-border bg-surface-2/80 px-5 py-5">
                  <p className="text-sm text-muted">{fight.fighter2}</p>
                  <p className="mt-1 font-display text-5xl text-cream">{fight.percent2}%</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">
                    chances de victoire (éditorial)
                  </p>
                </div>
              </div>

              <div className="px-5 pb-2 sm:px-8" aria-hidden="true">
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
                    style={{ width: `${fight.percent1}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3 px-5 py-6 sm:px-8">
                <p className="max-w-3xl font-serif leading-relaxed text-muted">{fight.editorial}</p>
                <p className="max-w-3xl font-medium leading-relaxed text-cream">{fight.stance}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
