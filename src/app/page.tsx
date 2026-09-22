import { ArticleCard } from "@/components/ArticleCard";
import { ArticleList } from "@/components/ArticleList";
import { FeatureBand } from "@/components/FeatureBand";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { RubriquesShowcase } from "@/components/RubriquesShowcase";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllArticles } from "@/lib/articles";
import { getBoxers } from "@/lib/content";
import { editorial } from "@/lib/media";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles.slice(0, 5);
  const enjeux = articles.filter((a) => a.tags?.includes("enjeux"));
  const enjeuxCorps = enjeux.filter((a) =>
    a.tags?.some((t) => t === "santé" || t === "blessures" || t === "poids"),
  );
  const enjeuxVie = enjeux.filter((a) =>
    a.tags?.some((t) => t === "précarité" || t === "après-carrière" || t === "argent" || t === "société"),
  );
  const analyses = articles
    .filter((a) => a.category === "analyses" && !a.tags?.includes("enjeux"))
    .slice(0, 3);
  const guides = articles.filter((a) => a.category === "guides").slice(0, 3);
  const portraits = articles.filter((a) => a.category === "clubs" || a.category === "combattants").slice(0, 3);
  const fighters = getBoxers().slice(0, 4);

  const dossierArgent = (enjeuxVie.length ? enjeuxVie : enjeux).slice(0, 2);
  const dossierCorps = (enjeuxCorps.length ? enjeuxCorps : enjeux).slice(0, 2);

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

      {dossierArgent.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionHeader
            eyebrow="Enjeux"
            title="Derrière le KO"
            description="Cachets, contrats opaques, vies en équilibre : ce que le spectacle ne montre pas."
            href="/analyses"
            linkLabel="Toutes les analyses"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {dossierArgent.map((article, i) => (
              <ArticleCard key={article.slug} article={article} variant="horizontal" index={i} />
            ))}
          </div>
        </section>
      ) : null}

      {dossierCorps.length > 0 ? (
        <section className="border-y border-border bg-surface/40 py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeader
              eyebrow="Santé & silence"
              title="Le prix du corps"
              description="Coupure de poids, blessures cachées, après-carrière : les dettes que le ring laisse."
              href="/analyses"
              linkLabel="Lire le dossier"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {dossierCorps.map((article, i) => (
                <ArticleCard key={article.slug} article={article} variant="horizontal" index={i} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeader
          eyebrow="Comprendre"
          title="Disciplines"
          description="Muay Thaï, Kick Boxing, K1, Boxe Pieds-Poings."
          href="/disciplines"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "/muay-thai",
              label: "Muay Thaï",
              text: "Huit membres, clinch, tradition.",
              image: editorial.waiKru,
            },
            {
              href: "/kick-boxing",
              label: "Kick Boxing",
              text: "Poings + pieds, rythme club.",
              image: editorial.kick,
            },
            {
              href: "/k1",
              label: "K1",
              text: "Kick-boxing moderne de galas.",
              image: editorial.redBlue,
            },
            {
              href: "/pieds-poings",
              label: "Pieds-Poings",
              text: "Famille de disciplines.",
              image: editorial.catchKick,
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative isolate min-h-[14rem] overflow-hidden rounded-[1.25rem] no-underline"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
              <div className="relative z-10 flex h-full flex-col justify-end p-5">
                <p className="font-display text-2xl text-white">{item.label}</p>
                <p className="mt-1 text-sm text-cream/80">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FeatureBand
        eyebrow="Tradition"
        title="Du camp au stade"
        description="Photos de ring, de salle et de rituels — la Boxe Thaï vue de près, sans images génériques."
        href="/muay-thai"
        cta="Découvrir le Muay Thaï"
        image={editorial.rajadamnern}
        imageAlt="Soirée de Muay Thaï au stade Rajadamnern"
      />

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

      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <Image
            src={editorial.lumpinee}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/55" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:flex-row sm:items-center sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Communauté</p>
            <h2 className="mt-2 font-display text-4xl text-cream">Ne ratez rien</h2>
            <p className="mt-2 max-w-xl text-muted">
              Inscrivez-vous pour être prévenu(e) dès qu’un nouvel article est publié.
            </p>
          </div>
          <Link href="#newsletter" className="btn-primary">
            S&apos;inscrire à la newsletter
          </Link>
        </div>
      </section>

      <RubriquesShowcase />
      <div id="newsletter">
        <NewsletterBlock />
      </div>
    </>
  );
}
