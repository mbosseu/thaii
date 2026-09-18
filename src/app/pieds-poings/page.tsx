import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Boxe Pieds-Poings",
  description:
    "La boxe pieds-poings : famille de disciplines regroupant Boxe Thaï, Kick Boxing, K1 et apparentées.",
  alternates: { canonical: `${siteConfig.url}/pieds-poings` },
};

export default function PiedsPoingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Discipline"
        title="Pieds-Poings"
        description="Le terme parapluie des sports de percussion debout : thaï, kick, K1…"
        image="/images/covers/boxe-thai-2.webp"
        imageAlt="Entraînement pieds-poings"
      />
      <article className="mx-auto max-w-3xl px-4 py-12 font-serif text-muted sm:px-6">
        <p className="text-lg leading-relaxed">
          « Pieds-poings » désigne une famille de disciplines. Sur boxe-thai.com, on y regroupe la Boxe Thaï,
          le Kick Boxing, le K1 et les pratiques de club associées.
        </p>
        <p className="mt-4 leading-relaxed">
          Explorer : <Link href="/muay-thai">Muay Thaï</Link>, <Link href="/kick-boxing">Kick Boxing</Link>,{" "}
          <Link href="/k1">K1</Link>, <Link href="/disciplines">toutes les disciplines</Link>.
        </p>
      </article>
    </>
  );
}
