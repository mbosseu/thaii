import Image from "next/image";
import Link from "next/link";
import { sectionImages } from "@/lib/media";

type HeroProps = {
  brand: string;
  headline: string;
  support: string;
  ctaHref: string;
  ctaLabel: string;
};

/** Optional full-bleed brand hero — homepage now uses magazine à-la-une instead. */
export function Hero({ brand, headline, support, ctaHref, ctaLabel }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={sectionImages.hero}
          alt="Ring de boxe sous lumières dramatiques"
          fill
          priority
          sizes="100vw"
          className="animate-soft-zoom object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,5,7,0.92)_0%,rgba(5,5,7,0.72)_42%,rgba(5,5,7,0.35)_100%)]" />
      </div>
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24">
        <p className="animate-fade-up font-display text-6xl text-cream sm:text-8xl">{brand}</p>
        <h1 className="animate-fade-up animate-delay-1 mt-5 max-w-2xl font-display text-3xl text-white sm:text-5xl">
          {headline}
        </h1>
        <p className="animate-fade-up animate-delay-2 mt-5 max-w-xl font-serif text-muted">{support}</p>
        <div className="animate-fade-up animate-delay-3 mt-9">
          <Link href={ctaHref} className="btn-primary">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
