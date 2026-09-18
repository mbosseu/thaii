import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";
import { MdxContent } from "@/components/MdxContent";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import {
  formatDate,
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
} from "@/lib/articles";
import { getCategory } from "@/lib/categories";
import { resolveArticleCover } from "@/lib/media";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article introuvable" };
  const cover = resolveArticleCover(article);

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updated ?? article.date,
      images: [{ url: cover.src, alt: cover.alt }],
    },
    alternates: { canonical: `${siteConfig.url}/article/${article.slug}` },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategory(article.category);
  const related = getRelatedArticles(article.slug, article.related);
  const cover = resolveArticleCover(article);

  return (
    <article>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            dateModified: article.updated ?? article.date,
            image: `${siteConfig.url}${cover.src}`,
            author: { "@type": "Organization", name: article.author ?? siteConfig.name },
            publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          },
        ]}
      />

      <header className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {category ? (
            <Link href={`/${category.slug}`} className="badge badge-accent no-underline">
              {category.label}
            </Link>
          ) : null}
          <span className="badge">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          <span className="badge">{article.author}</span>
          <span className="badge">{article.readingTime}</span>
        </div>
        <h1 className="font-display text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl">
          {article.title}
        </h1>
        <p className="mt-5 font-serif text-lg leading-relaxed text-muted">{article.description}</p>
      </header>

      <figure className="mx-auto mt-8 max-w-5xl px-4 sm:px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem]">
          <Image src={cover.src} alt={cover.alt} fill priority sizes="100vw" className="object-cover" />
        </div>
        {article.imageCredit ? (
          <figcaption className="mt-2 text-xs text-muted">Crédit : {article.imageCredit}</figcaption>
        ) : null}
      </figure>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <MdxContent source={article.content} />

        {article.gallery && article.gallery.length > 0 ? (
          <div className="mt-12 space-y-8">
            {article.gallery.map((img) => (
              <figure key={img.src}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem]">
                  <Image src={img.src} alt={img.alt} fill sizes="720px" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-xs text-muted">
                  {img.alt}
                  {img.credit ? ` — ${img.credit}` : ""}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}

        {article.tags && article.tags.length > 0 ? (
          <div className="mt-10 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {related.length > 0 ? (
        <section className="border-t border-border bg-surface/30 py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl text-cream">À lire aussi</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <ArticleCard key={item.slug} article={item} index={i} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <NewsletterBlock />
    </article>
  );
}
