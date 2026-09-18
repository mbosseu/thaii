import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl text-cream sm:text-6xl">Page introuvable</h1>
      <p className="mt-4 max-w-md font-serif text-muted">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
