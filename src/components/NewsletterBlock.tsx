import Link from "next/link";

export function NewsletterBlock() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="card-surface overflow-hidden bg-gradient-to-br from-surface via-surface to-accent-soft/20 px-6 py-10 sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Newsletter</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-cream sm:text-4xl">
          Recevez l&apos;essentiel de l&apos;actualité boxe.
        </h2>
        <p className="mt-3 max-w-lg font-serif text-muted">
          Une sélection éditoriale : résultats, affiches et analyses — sans spam.
        </p>
        <form
          className="mt-7 flex max-w-lg flex-col gap-3 sm:flex-row"
          action="/contact"
          method="get"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder="votre@email.fr"
            className="min-h-11 flex-1 rounded-full border border-border bg-background px-4 text-sm text-cream outline-none ring-accent focus:ring-2"
          />
          <button type="submit" className="btn-primary">
            S&apos;inscrire
          </button>
        </form>
        <p className="mt-3 text-xs text-muted">
          Démonstration UI — branchement email à venir.{" "}
          <Link href="/mentions-legales" className="text-cream">
            Mentions légales
          </Link>
        </p>
      </div>
    </section>
  );
}
