import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  meta?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  meta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="animate-fade-up animate-delay-1 mt-3 max-w-3xl font-display text-4xl text-cream sm:text-6xl">
          {title}
        </h1>
        <p className="animate-fade-up animate-delay-2 mt-4 max-w-2xl font-serif text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
        {meta ? <div className="animate-fade-up animate-delay-3 mt-5">{meta}</div> : null}
      </div>
    </section>
  );
}
