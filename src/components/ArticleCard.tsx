import Image from "next/image";
import Link from "next/link";
import { formatDate, type ArticleMeta } from "@/lib/articles";
import { getCategory } from "@/lib/categories";
import { resolveArticleCover } from "@/lib/media";

type Variant = "featured" | "horizontal" | "grid" | "compact" | "analysis";

type ArticleCardProps = {
  article: ArticleMeta;
  variant?: Variant;
  showCategory?: boolean;
  priority?: boolean;
  index?: number;
};

export function ArticleCard({
  article,
  variant = "grid",
  showCategory = true,
  priority = false,
  index = 0,
}: ArticleCardProps) {
  const category = getCategory(article.category);
  const cover = resolveArticleCover(article);

  if (variant === "featured") {
    return (
      <Link
        href={`/article/${article.slug}`}
        className="group relative isolate flex min-h-[28rem] overflow-hidden rounded-[1.25rem] no-underline sm:min-h-[34rem]"
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
        <div className="relative z-10 mt-auto p-6 sm:p-8 md:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {showCategory && category ? <span className="badge badge-accent">{category.label}</span> : null}
            <span className="badge">{formatDate(article.date)}</span>
            <span className="badge">{article.readingTime}</span>
          </div>
          <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            {article.title}
          </h2>
          <p className="mt-3 max-w-2xl font-serif text-base leading-relaxed text-cream/85 sm:text-lg">
            {article.description}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link
        href={`/article/${article.slug}`}
        className="group card-surface grid overflow-hidden no-underline sm:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="relative aspect-[16/11] sm:aspect-auto sm:min-h-[12rem]">
          <Image src={cover.src} alt={cover.alt} fill sizes="40vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="flex flex-col justify-center p-5 sm:p-6">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {showCategory && category ? <span className="badge badge-accent">{category.label}</span> : null}
            <span className="text-xs uppercase tracking-[0.14em] text-muted">
              {formatDate(article.date)} · {article.readingTime}
            </span>
          </div>
          <h2 className="font-display text-xl leading-tight text-cream transition-colors group-hover:text-white sm:text-2xl">
            {article.title}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm text-muted">{article.description}</p>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={`/article/${article.slug}`} className="group flex gap-4 no-underline">
        <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-28">
          <Image src={cover.src} alt={cover.alt} fill sizes="112px" className="object-cover" />
        </div>
        <div className="min-w-0">
          {showCategory && category ? (
            <p className="text-[0.65rem] uppercase tracking-[0.16em] text-accent">{category.label}</p>
          ) : null}
          <h3 className="mt-1 font-display text-lg leading-snug text-cream group-hover:text-white">
            {article.title}
          </h3>
          <p className="mt-1 text-xs text-muted">{formatDate(article.date)}</p>
        </div>
      </Link>
    );
  }

  const isAnalysis = variant === "analysis" || article.category === "analyses";

  return (
    <Link
      href={`/article/${article.slug}`}
      className={`group card-surface animate-fade-up flex h-full flex-col overflow-hidden no-underline ${
        isAnalysis ? "border-l-2 border-l-gold" : ""
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {showCategory && category ? <span className="badge badge-accent">{category.label}</span> : null}
          <span className="text-xs uppercase tracking-[0.14em] text-muted">{formatDate(article.date)}</span>
        </div>
        <h2 className="font-display text-2xl leading-tight text-cream group-hover:text-white">
          {article.title}
        </h2>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {article.description}
        </p>
        <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-muted">
          <span>{article.author ?? "Boxe Thaï"} · {article.readingTime}</span>
          <span className="text-cream">Lire →</span>
        </div>
      </div>
    </Link>
  );
}
