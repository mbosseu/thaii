import { ArticleCard } from "@/components/ArticleCard";
import { ArticleList } from "@/components/ArticleList";
import { FightCard } from "@/components/FightCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { RubriquesShowcase } from "@/components/RubriquesShowcase";
import { SectionHeader } from "@/components/SectionHeader";
import { formatDate, getAllArticles } from "@/lib/articles";
import { getBoxers, getFights } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles.slice(0, 5);
  const analyses = articles.filter((a) => a.category === "analyses").slice(0, 3);
  const guides = articles.filter((a) => a.category === "guides").slice(0, 3);
  const portraits = articles.filter((a) => a.category === "clubs" || a.category === "combattants").slice(0, 3);
  const fights = getFights();
  const fighters = getBoxers().slice(0, 4);
  const results = fights.results.slice(0, 4);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pt-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="" width={64} height={64} className="rounded-full" priority />
            <div>
              <p className="font-display text-4xl text-cream sm:text-5xl">{siteConfig.name}</p>
              <p className="mt-1 text-sm text-muted">{siteConfig.tagline}</p>
            </div>
          </div>
          <Link href="/actualites" className="btn-ghost">
            Toute l&apos;actualité →
          </Link>
        </div>
        <ArticleList articles={featured} layout="magazine" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeader
          eyebrow="Calendrier"
          title="Combats à venir"
          description="Affiches pieds-poings suivies par la rédaction, avec statut clair."
          href="/combats-a-venir"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {fights.upcoming.map((fight) => (
            <FightCard
              key={fight.id}
              fighter1={fight.fighter1}
              fighter2={fight.fighter2}
              fighter1Slug={fight.fighter1Slug}
              fighter2Slug={fight.fighter2Slug}
              date={formatDate(fight.date)}
              venue={fight.venue}
              event={fight.event}
              status={fight.status}
              href="/combats-a-venir"
            />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Scoreboard"
            title="Derniers résultats"
            href="/resultats"
            linkLabel="Tous les résultats"
          />
          <div className="overflow-hidden rounded-[1.25rem] border border-border">
            {results.map((r) => (
              <div
                key={r.id}
                className="grid gap-2 border-b border-border px-4 py-4 last:border-b-0 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:px-6"
              >
                <time className="text-xs uppercase tracking-[0.14em] text-muted" dateTime={r.date}>
                  {formatDate(r.date)}
                </time>
                <div>
                  <p className="font-medium text-cream">
                    {r.fighter1} <span className="text-muted">vs</span> {r.fighter2}
                  </p>
                  <p className="text-sm text-muted">
                    {r.event}
                    {r.title ? ` · ${r.title}` : ""}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="badge badge-accent">{r.result}</span>
                  <p className="mt-1 text-xs text-muted">
                    {r.method}
                    {r.rounds ? ` · ${r.rounds}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeader
          eyebrow="Comprendre"
          title="Disciplines"
          description="Muay Thaï, Kick Boxing, K1, Boxe Pieds-Poings."
          href="/disciplines"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/muay-thai", label: "Muay Thaï", text: "Huit membres, clinch, tradition." },
            { href: "/kick-boxing", label: "Kick Boxing", text: "Poings + pieds, rythme club." },
            { href: "/k1", label: "K1", text: "Kick-boxing moderne de galas." },
            { href: "/pieds-poings", label: "Pieds-Poings", text: "Famille de disciplines." },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="card-surface block p-5 no-underline transition-transform hover:-translate-y-1">
              <p className="font-display text-2xl text-cream">{item.label}</p>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {analyses.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <SectionHeader eyebrow="Édito" title="Analyses" href="/analyses" />
          <div className="grid gap-6 lg:grid-cols-3">
            {analyses.map((article, i) => (
              <ArticleCard key={article.slug} article={article} variant="analysis" index={i} />
            ))}
          </div>
        </section>
      ) : null}

      {guides.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <SectionHeader eyebrow="Pédagogie" title="Guides débutants" href="/guides" />
          <div className="grid gap-6 lg:grid-cols-3">
            {guides.map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <SectionHeader eyebrow="Portraits" title="Combattants" href="/combattants" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fighters.map((fighter) => (
            <Link
              key={fighter.slug}
              href={`/combattants/${fighter.slug}`}
              className="group relative isolate min-h-[16rem] overflow-hidden rounded-[1.25rem] no-underline"
            >
              <Image
                src={fighter.image}
                alt={fighter.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-4">
                <p className="font-display text-2xl text-white">{fighter.name}</p>
                <p className="text-sm text-cream/80">
                  {fighter.nationality} · {fighter.weightClass}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {portraits.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <SectionHeader eyebrow="Terrains" title="Clubs & portraits" href="/clubs" />
          <div className="grid gap-6 lg:grid-cols-3">
            {portraits.map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-y border-border bg-surface/50 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Communauté</p>
            <h2 className="mt-2 font-display text-4xl text-cream">Forum</h2>
            <p className="mt-2 max-w-xl text-muted">
              Échangez sur les galas, clubs, entraînements et disciplines — avec une modération claire.
            </p>
          </div>
          <Link href="/forum" className="btn-primary">
            Entrer sur le forum
          </Link>
        </div>
      </section>

      <RubriquesShowcase />
      <NewsletterBlock />
    </>
  );
}
