import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { editorial } from "@/lib/media";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disciplines",
  description:
    "Muay Thaï, Kick Boxing, K1 et Boxe Pieds-Poings : comprendre les disciplines couvertes par Actu Thaii.",
  alternates: { canonical: `${siteConfig.url}/disciplines` },
};

const items = [
  {
    href: "/muay-thai",
    title: "Muay Thaï",
    text: "Boxe thaïlandaise : huit membres, clinch, tradition et sport moderne.",
    image: editorial.waiKru,
  },
  {
    href: "/kick-boxing",
    title: "Kick Boxing",
    text: "Poings et pieds, rythme club et compétition selon le règlement.",
    image: editorial.kick,
  },
  {
    href: "/k1",
    title: "K1",
    text: "Kick-boxing moderne de galas : volume striking, clinch court.",
    image: editorial.redBlue,
  },
  {
    href: "/pieds-poings",
    title: "Pieds-Poings",
    text: "Famille de disciplines : Boxe Thaï, Kick, K1 et apparentées.",
    image: editorial.catchKick,
  },
];

export default function DisciplinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Comprendre"
        title="Disciplines"
        description="Le cœur éditorial d’Actu Thaii : la Boxe Thaï et l’univers pieds-poings."
        image={editorial.waiKru}
        imageAlt="Tradition et pratique du Muay Thaï"
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative isolate min-h-[14rem] overflow-hidden rounded-[1.25rem] no-underline"
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15" />
            <div className="relative z-10 flex h-full flex-col justify-end p-6">
              <h2 className="font-display text-3xl text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-cream/85">{item.text}</p>
            </div>
          </Link>
        ))}
        <Link
          href="/article/differences-boxe-thai-kick-k1"
          className="group relative isolate min-h-[12rem] overflow-hidden rounded-[1.25rem] no-underline sm:col-span-2"
        >
          <Image
            src={editorial.clinch}
            alt=""
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
          <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
            <h2 className="font-display text-3xl text-white sm:text-4xl">Boxe Thaï vs Kick vs K1</h2>
            <p className="mt-2 text-cream/85">Lire l’analyse comparative complète →</p>
          </div>
        </Link>
      </div>
    </>
  );
}
