import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { categoryImages } from "@/lib/media";

const featured = categories.filter((c) =>
  ["actualites", "clubs", "analyses", "combattants", "guides", "disciplines"].includes(c.slug),
);

export function RubriquesShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Explorer</p>
        <h2 className="section-title-mark mt-2 font-display text-3xl text-cream sm:text-5xl">Rubriques</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="group relative isolate min-h-[11rem] overflow-hidden rounded-[1.25rem] no-underline"
          >
            <Image
              src={categoryImages[category.slug] ?? "/images/editorial/punch-impact-arena.jpg"}
              alt=""
              fill
              sizes="33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
            <div className="relative z-10 flex h-full flex-col justify-end p-5">
              <h3 className="font-display text-2xl text-white">{category.label}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-cream/80">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
