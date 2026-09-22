import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Communauté",
  description:
    "Rejoignez Actu Thaii : inscrivez-vous pour être informé des nouveaux articles Muay Thaï et pieds-poings.",
  alternates: { canonical: `${siteConfig.url}/forum` },
};

export default function ForumPage() {
  return (
    <>
      <PageHero
        eyebrow="Communauté"
        title="Restez informé"
        description="Pas encore de forum ouvert : en attendant, laissez votre email pour recevoir les nouveaux articles."
        image="/images/editorial/lumpinee-stadium.jpg"
        imageAlt="Public autour d'un ring de Muay Thaï"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="card-surface mb-10 p-6">
          <h2 className="font-display text-3xl text-cream">Pourquoi une newsletter ?</h2>
          <p className="mt-4 text-muted">
            On préfère vous prévenir quand un vrai dossier sort, plutôt que de lancer un forum vide.
            Nom + email suffisent. Pas de spam : uniquement les nouvelles publications.
          </p>
          <p className="mt-4 text-sm text-muted">
            Question ou demande de suppression de données :{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-cream underline">
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>
      </div>
      <NewsletterBlock />
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <p className="text-muted">
          En attendant, lisez les{" "}
          <Link href="/actualites" className="text-cream underline">
            actualités
          </Link>
          , les{" "}
          <Link href="/guides" className="text-cream underline">
            guides débutants
          </Link>{" "}
          ou{" "}
          <Link href="/contact" className="text-cream underline">
            contactez la rédaction
          </Link>
          .
        </p>
      </div>
    </>
  );
}
