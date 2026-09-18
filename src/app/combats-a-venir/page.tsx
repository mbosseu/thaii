import type { Metadata } from "next";
import { ArticleList } from "@/components/ArticleList";
import { FightCard } from "@/components/FightCard";
import { PageHero } from "@/components/PageHero";
import { formatDate, getArticlesByCategory } from "@/lib/articles";
import { getFights } from "@/lib/content";
import { categoryImages } from "@/lib/media";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Combats à venir",
  description: "Calendrier des combats de pieds-poings annoncés.",
  alternates: { canonical: `${siteConfig.url}/combats-a-venir` },
};

export default function CombatsPage() {
  const articles = getArticlesByCategory("combats-a-venir");
  const upcoming = getFights().upcoming;

  return (
    <>
      <PageHero
        eyebrow="Calendrier"
        title="Combats à venir"
        description="Affiches annoncées. Le statut « à confirmer » signale un dossier encore évolutif."
        image={categoryImages["combats-a-venir"]}
      />
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6">
        {upcoming.map((fight) => (
          <FightCard
            key={fight.id}
            fighter1={fight.fighter1}
            fighter2={fight.fighter2}
            fighter1Slug={fight.fighter1Slug}
            fighter2Slug={fight.fighter2Slug}
            date={formatDate(fight.date)}
            venue={fight.venue}
            event={`${fight.event}${fight.title ? ` · ${fight.title}` : ""}`}
            status={fight.status}
          />
        ))}

        <h2 className="pt-8 font-display text-3xl text-cream">Dossiers éditoriaux</h2>
        <ArticleList articles={articles} showCategory={false} layout="grid" />
      </div>
    </>
  );
}
