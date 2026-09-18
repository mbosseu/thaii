import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Forum",
  description:
    "Espace communautaire boxe-thai.com : galas, combattants, clubs, entraînements, disciplines et conseils débutants. Modération active.",
  alternates: { canonical: `${siteConfig.url}/forum` },
};

const topics = [
  { title: "Galas & résultats", text: "Comptes-rendus, affiches, réactions après combat." },
  { title: "Clubs & entraînements", text: "Choisir une salle, séances types, conseils débutants." },
  { title: "Disciplines", text: "Muay Thaï, Kick Boxing, K1, pieds-poings." },
  { title: "Combattants & coachs", text: "Portraits, parcours, questions à la communauté." },
  { title: "Pronostics éditoriaux", text: "Analyses et débats — pas de conseil de pari." },
];

export default function ForumPage() {
  return (
    <>
      <PageHero
        eyebrow="Communauté"
        title="Forum"
        description="Un espace pour échanger entre passionnés. La modération exclut les contenus abusifs, diffamatoires ou hors sujet."
        image="/images/covers/boxe-thai-header.webp"
        imageAlt="Communauté boxe thaï"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="card-surface mb-8 p-6">
          <h2 className="font-display text-3xl text-cream">Règles de modération</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Pas d’insultes, de harcèlement ni de propos discriminatoires.</li>
            <li>Pas de diffamation envers clubs, coachs ou combattants.</li>
            <li>Pas de spam commercial ni de liens trompeurs.</li>
            <li>Rester sur le sujet : boxe thaï et pieds-poings.</li>
          </ul>
          <p className="mt-4 text-sm text-muted">
            Pour signaler un abus :{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-cream">
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <article key={topic.title} className="card-surface p-5">
              <h3 className="font-display text-2xl text-cream">{topic.title}</h3>
              <p className="mt-2 text-sm text-muted">{topic.text}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gold">Bientôt ouvert</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-muted">
          En attendant l’ouverture des fils, lisez les{" "}
          <Link href="/actualites">actualités</Link>, les{" "}
          <Link href="/guides">guides débutants</Link> ou contactez la rédaction via{" "}
          <Link href="/contact">la page contact</Link>.
        </p>
      </div>
    </>
  );
}
