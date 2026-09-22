import { NewsletterForm } from "@/components/NewsletterForm";

export function NewsletterBlock() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="newsletter-panel relative z-10 px-6 py-10 sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Newsletter</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-cream sm:text-4xl">
          Soyez informé(e) des nouveaux <span className="text-accent">articles</span>
        </h2>
        <p className="mt-3 max-w-lg font-serif text-muted">
          Laissez votre nom et votre email : on vous prévient quand un nouveau dossier ou guide est
          publié. Pas de spam.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}
