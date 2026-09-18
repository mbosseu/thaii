import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disciplines",
  description:
    "Muay Thaï, Kick Boxing, K1 et Boxe Pieds-Poings : comprendre les disciplines couvertes par boxe-thai.com.",
  alternates: { canonical: `${siteConfig.url}/disciplines` },
};

const items = [
  {
    href: "/muay-thai",
    title: "Muay Thaï",
    text: "Boxe thaïlandaise : huit membres, clinch, tradition et sport moderne.",
  },
  {
    href: "/kick-boxing",
    title: "Kick Boxing",
    text: "Poings et pieds, rythme club et compétition selon le règlement.",
  },
  {
    href: "/k1",
    title: "K1",
    text: "Kick-boxing moderne de galas : volume striking, clinch court.",
  },
  {
    href: "/pieds-poings",
    title: "Pieds-Poings",
    text: "Famille de disciplines : Boxe Thaï, Kick, K1 et apparentées.",
  },
];

export default function DisciplinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Comprendre"
        title="Disciplines"
        description="Le cœur éditorial de boxe-thai.com : la Boxe Thaï et l’univers pieds-poings."
        image="/images/covers/danse-wai-kru.webp"
        imageAlt="Tradition et pratique du Muay Thaï"
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="card-surface block p-6 no-underline hover:-translate-y-1 transition-transform">
            <h2 className="font-display text-3xl text-cream">{item.title}</h2>
            <p className="mt-3 text-muted">{item.text}</p>
          </Link>
        ))}
        <Link href="/article/differences-boxe-thai-kick-k1" className="card-surface block p-6 no-underline sm:col-span-2">
          <h2 className="font-display text-3xl text-cream">Boxe Thaï vs Kick vs K1</h2>
          <p className="mt-3 text-muted">Lire l’analyse comparative complète →</p>
        </Link>
      </div>
    </>
  );
}
