import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de boxe-thai.com.",
  alternates: { canonical: `${siteConfig.url}/mentions-legales` },
};

export default function MentionsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl text-cream">Mentions légales</h1>
      <div className="prose-article mt-8">
        <p>
          <strong>Éditeur :</strong> projet éditorial {siteConfig.name} ({siteConfig.domain}).
        </p>
        <p>
          Les contenus d&apos;actualité s&apos;appuient sur des sources publiques citées. Les analyses et
          pronostics éditoriaux ne constituent pas des conseils de paris.
        </p>
        <p>
          <strong>Hébergement :</strong> à préciser en production (ex. Vercel).
        </p>
        <p>
          <strong>Images :</strong> visuels fournis pour le projet et photos de salles / entraînement créditées.
          Les illustrations de contexte ne prétendent pas être des portraits officiels exclusifs.
        </p>
        <p>
          <strong>Contact :</strong> {siteConfig.contactEmail}
        </p>
      </div>
    </div>
  );
}
