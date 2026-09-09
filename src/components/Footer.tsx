import Image from "next/image";
import Link from "next/link";
import { boxingCenter, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/50">
      <div className="container-site grid gap-10 py-12 md:grid-cols-4">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-3 no-underline">
            <Image src="/logo.png" alt="" width={48} height={48} className="rounded-full" />
            <span className="font-display text-2xl text-white">BOXE THAÏ</span>
          </Link>
          <p className="text-sm text-muted">
            Guide spécialisé sur la boxe thaï et le Muay Thaï. Contenu informatif, puis orientation
            vers la pratique à Toulouse au Boxing Center.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-xl text-gold">Pages</h2>
          <ul className="grid gap-1 text-sm text-muted">
            {nav.footer.slice(0, 8).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-xl text-gold">Toulouse</h2>
          <ul className="grid gap-1 text-sm text-muted">
            {nav.toulouse.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/galerie/">Galerie photos</Link>
            </li>
            <li>
              <Link href="/blog/">Articles</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-xl text-gold">Boxing Center</h2>
          <p className="text-sm text-muted">{boxingCenter.hours}</p>
          <p className="text-sm">
            <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
          </p>
          <p className="text-sm">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="mt-3 text-sm">
            <a href={site.boxingCenterThaiUrl} rel="noopener noreferrer" target="_blank">
              Site officiel du Boxing Center
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="container-site flex flex-col gap-2 text-xs text-muted md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} boxe-thai.com — ressource Muay Thaï</span>
          <span>Informations club vérifiées d’après boxingcenter.fr — plannings susceptibles d’évoluer.</span>
        </div>
      </div>
    </footer>
  );
}
