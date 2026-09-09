import Link from "next/link";
import type { Crumb } from "@/lib/site";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="mb-4 text-sm text-muted">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {index > 0 ? <span className="mx-2 text-white/30">/</span> : null}
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span className="text-ink">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function CtaBand({
  title = "Pratiquer le Muay Thaï à Toulouse",
  text = "Le Boxing Center accueille débutants et pratiquants confirmés, dans un cadre affilié FFKMDA.",
  primaryHref,
  primaryLabel = "Découvrir le Boxing Center",
  secondaryHref = "/cours-boxe-thai-toulouse/",
  secondaryLabel = "Voir les cours à Toulouse",
}: {
  title?: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const href = primaryHref ?? "https://boxingcenter.fr/boxe-thai-muay-thai-et-kick-boxing-toulouse/";
  const external = href.startsWith("http");

  return (
    <section className="border-y border-orange/25 bg-gradient-to-r from-orange/15 via-blue/10 to-gold/10">
      <div className="container-site flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <h2 className="text-4xl text-white md:text-5xl">{title}</h2>
          <p className="mt-2 max-w-xl text-muted">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={href}
            className="rounded-sm bg-orange px-5 py-3 font-semibold text-black no-underline hover:bg-orange-hot"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {primaryLabel}
          </a>
          <Link
            href={secondaryHref}
            className="rounded-sm border border-white/20 px-5 py-3 font-semibold text-white no-underline hover:border-gold"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="text-4xl text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-3 text-muted">{text}</p> : null}
    </div>
  );
}
