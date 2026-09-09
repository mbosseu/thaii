import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-site py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">404</p>
      <h1 className="text-6xl text-white">Page introuvable</h1>
      <p className="mt-4 max-w-xl text-muted">
        Cette URL n’existe pas. Revenez à l’accueil ou ouvrez le guide de la boxe thaï.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="rounded-sm bg-orange px-5 py-3 font-semibold text-black no-underline">
          Accueil
        </Link>
        <Link href="/boxe-thai/" className="rounded-sm border border-white/20 px-5 py-3 text-white no-underline">
          Qu’est-ce que la boxe thaï ?
        </Link>
      </div>
    </div>
  );
}
