"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/lib/categories";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3 no-underline" aria-label={`${siteConfig.name} — accueil`}>
          <Image
            src="/logo.png"
            alt=""
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <span className="leading-none">
            <span className="font-display block text-2xl tracking-wide text-cream sm:text-3xl">
              {siteConfig.name}
            </span>
            <span className="hidden text-[0.65rem] uppercase tracking-[0.22em] text-accent sm:block">
              Muay Thaï · Kick · K1
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Navigation principale">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2.5 py-2 text-[0.8rem] font-semibold text-[#e7e7e7] no-underline transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-full border border-border-strong px-3 py-2 text-sm text-cream transition-colors hover:bg-white/5"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
          >
            Recherche
          </button>
          <button
            type="button"
            className="rounded-full border border-border-strong px-3 py-2 text-sm text-cream xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </div>

      {searchOpen ? (
        <div className="border-t border-border bg-surface/95 px-4 py-4 sm:px-6">
          <form action="/recherche" method="get" className="mx-auto flex max-w-6xl gap-2">
            <label htmlFor="q" className="sr-only">
              Rechercher
            </label>
            <input
              id="q"
              name="q"
              type="search"
              placeholder="Combattant, club, gala, discipline…"
              className="min-h-11 flex-1 rounded-full border border-border bg-background px-4 text-sm text-cream outline-none ring-accent focus:ring-2"
            />
            <button type="submit" className="btn-primary">
              OK
            </button>
          </form>
        </div>
      ) : null}

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-surface/95 px-4 py-4 xl:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="grid gap-1 sm:grid-cols-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-cream no-underline hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
