"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="container-site flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/logo.png"
            alt="Logo Boxe Thaï — tigre Muay Thaï"
            width={52}
            height={52}
            className="rounded-full"
            priority
          />
          <span className="leading-none">
            <span className="font-display block text-[1.65rem] text-white">BOXE THAÏ</span>
            <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-orange">
              Muay Thaï · Toulouse
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigation principale">
          {nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm no-underline ${
                isActive(pathname, item.href) ? "text-orange" : "text-ink/85 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/cours-boxe-thai-toulouse/"
            className="rounded-sm bg-orange px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-orange-hot"
          >
            Découvrir les cours
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-bg-2 px-4 py-5 lg:hidden">
          <div className="grid gap-6">
            <MobileGroup title="La discipline" items={nav.discipline} pathname={pathname} />
            <MobileGroup title="Pratiquer" items={nav.pratiquer} pathname={pathname} />
            <MobileGroup title="Toulouse" items={nav.toulouse} pathname={pathname} />
            <Link href="/galerie/" className="text-ink no-underline">
              Galerie
            </Link>
            <Link href="/blog/" className="text-ink no-underline">
              Blog
            </Link>
            <Link href="/faq/" className="text-ink no-underline">
              FAQ
            </Link>
            <Link
              href={site.boxingCenterThaiUrl}
              className="rounded-sm bg-orange px-4 py-3 text-center font-semibold text-black no-underline"
            >
              Pratiquer le Muay Thaï à Toulouse
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MobileGroup({
  title,
  items,
  pathname,
}: {
  title: string;
  items: readonly { href: string; label: string }[];
  pathname: string;
}) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gold">{title}</p>
      <div className="grid gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`no-underline ${isActive(pathname, item.href) ? "text-orange" : "text-ink"}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
