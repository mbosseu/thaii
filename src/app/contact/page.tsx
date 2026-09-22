import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter la rédaction d’Actu Thaii.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl text-cream">Contact</h1>
      <p className="mt-4 font-serif text-muted">
        Erreur factuelle, proposition d’article, partenariat club / gala, ou signalement forum : écrivez à{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-cream">
          {siteConfig.contactEmail}
        </a>
        .
      </p>
      <form className="mt-8 space-y-4" action="#" method="post">
        <div>
          <label htmlFor="name" className="text-sm text-muted">
            Nom
          </label>
          <input
            id="name"
            name="name"
            className="mt-1 min-h-11 w-full rounded-xl border border-border bg-surface px-4 text-cream outline-none ring-accent focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 min-h-11 w-full rounded-xl border border-border bg-surface px-4 text-cream outline-none ring-accent focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm text-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-3 text-cream outline-none ring-accent focus:ring-2"
          />
        </div>
        <button type="submit" className="btn-primary">
          Envoyer (démo UI)
        </button>
      </form>
    </div>
  );
}
