import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/lib/categories";
import { sectionImages } from "@/lib/media";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border">
      <div className="absolute inset-0">
        <Image src={sectionImages.divider} alt="" fill sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/85" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_0.8fr]">
        <div>
          <p className="font-display text-4xl text-cream">{siteConfig.name}</p>
          <p className="mt-4 max-w-md font-serif text-sm leading-relaxed text-muted">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Navigation</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/90 no-underline hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Suivre</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>Réseaux — à venir</li>
            <li>
              <Link href="/contact" className="text-cream hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="text-cream hover:text-white">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-border px-4 py-4 text-center text-xs text-muted sm:px-6">
        © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.domain}
      </div>
    </footer>
  );
}
