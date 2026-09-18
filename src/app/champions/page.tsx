import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { formatDate } from "@/lib/articles";
import { getChampions } from "@/lib/champions";
import { sectionImages } from "@/lib/media";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Références & titres",
  description:
    "Repères éditoriaux sur les organisations pieds-poings (ONE, FFKMDA). À vérifier sur les sources officielles.",
  alternates: { canonical: `${siteConfig.url}/champions` },
};

export default function ChampionsPage() {
  const data = getChampions();

  return (
    <>
      <PageHero
        eyebrow="Référence"
        title="Organisations & titres"
        description="Repères pour lire le Muay Thaï et le kick-boxing. Toujours croiser avec les sites officiels."
        image={sectionImages.champions}
        imageAlt="Univers compétition pieds-poings"
        meta={
          <span className="badge">
            Dernière MAJ · <time dateTime={data.lastUpdated}>{formatDate(data.lastUpdated)}</time>
          </span>
        }
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="mb-8 max-w-3xl text-sm text-muted">{data.note}</p>
        <div className="space-y-8">
          {data.organizations.map((org) => (
            <section key={org.id} id={org.id} className="card-surface scroll-mt-28 overflow-hidden">
              <div className="border-b border-border px-5 py-4 sm:px-7">
                <h2 className="font-display text-3xl text-cream">{org.name}</h2>
                <p className="text-sm text-muted">{org.fullName}</p>
              </div>
              <div className="overflow-x-auto px-2 sm:px-4">
                <table className="w-full min-w-[32rem] text-left text-sm">
                  <thead>
                    <tr className="text-xs uppercase tracking-[0.14em] text-muted">
                      <th className="px-3 py-3 font-medium">Catégorie</th>
                      <th className="px-3 py-3 font-medium">Référence</th>
                      <th className="px-3 py-3 font-medium">Nationalité</th>
                      <th className="px-3 py-3 font-medium">Depuis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {org.champions.map((champion) => (
                      <tr
                        key={`${org.id}-${champion.weightClass}`}
                        className="border-t border-border/70 transition-colors hover:bg-white/[0.02]"
                      >
                        <td className="px-3 py-3.5 text-cream">{champion.weightClass}</td>
                        <td className="px-3 py-3.5 font-medium text-white">{champion.name}</td>
                        <td className="px-3 py-3.5 text-muted">{champion.nationality ?? "—"}</td>
                        <td className="px-3 py-3.5 text-muted">{champion.since ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
