import type { Metadata } from "next";
import { ArticleList } from "@/components/ArticleList";
import { PageHero } from "@/components/PageHero";
import { getArticlesByCategory } from "@/lib/articles";
import { getCategory, type CategorySlug } from "@/lib/categories";
import { categoryImages } from "@/lib/media";
import { siteConfig } from "@/lib/site";

export function buildCategoryMetadata(slug: CategorySlug): Metadata {
  const category = getCategory(slug);
  const title = category?.label ?? slug;
  const description = category?.description ?? siteConfig.description;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      locale: siteConfig.locale,
      type: "website",
    },
    alternates: { canonical: `${siteConfig.url}/${slug}` },
  };
}

export function CategoryPage({ slug }: { slug: CategorySlug }) {
  const category = getCategory(slug);
  const articles = getArticlesByCategory(slug);
  if (!category) return null;

  const image = categoryImages[slug] ?? "/images/editorial/punch-impact-arena.jpg";
  const layout = articles.length >= 3 ? "magazine" : articles.length === 1 ? "stack" : "grid";

  return (
    <>
      <PageHero
        eyebrow="Rubrique"
        title={category.label}
        description={category.description}
        image={image}
        imageAlt={`Rubrique ${category.label}`}
        meta={
          <span className="badge">
            {articles.length} article{articles.length > 1 ? "s" : ""}
          </span>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <ArticleList articles={articles} showCategory={false} layout={layout} />
      </div>
    </>
  );
}
