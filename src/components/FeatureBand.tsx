import Image from "next/image";
import Link from "next/link";

type FeatureBandProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export function FeatureBand({
  eyebrow,
  title,
  description,
  href,
  cta,
  image,
  imageAlt,
  reverse = false,
}: FeatureBandProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="card-surface grid overflow-hidden lg:grid-cols-2">
        <div
          className={`relative min-h-[16rem] sm:min-h-[20rem] ${reverse ? "lg:order-2" : ""}`}
        >
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className={`flex flex-col justify-center p-7 sm:p-10 ${reverse ? "lg:order-1" : ""}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">{title}</h2>
          <p className="mt-4 font-serif text-base leading-relaxed text-muted">{description}</p>
          <Link href={href} className="btn-primary mt-8 w-fit">
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
