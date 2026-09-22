import Link from "next/link";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "Tout voir",
}: SectionHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        ) : null}
        <h2 className="section-title-mark mt-2 font-display text-3xl text-cream sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 font-serif text-base leading-relaxed text-muted">{description}</p>
        ) : null}
      </div>
      {href ? (
        <Link href={href} className="btn-ghost shrink-0">
          {linkLabel} →
        </Link>
      ) : null}
    </div>
  );
}
