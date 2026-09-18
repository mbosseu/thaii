import { ArticleCard } from "@/components/ArticleCard";
import type { ArticleMeta } from "@/lib/articles";

type ArticleListProps = {
  articles: ArticleMeta[];
  showCategory?: boolean;
  layout?: "magazine" | "grid" | "stack";
};

export function ArticleList({
  articles,
  showCategory = true,
  layout = "grid",
}: ArticleListProps) {
  if (articles.length === 0) {
    return (
      <div className="card-surface px-6 py-10 text-center text-muted">
        Aucun article dans cette rubrique pour le moment.
      </div>
    );
  }

  if (layout === "magazine") {
    const [featured, ...rest] = articles;
    const side = rest.slice(0, 2);
    const more = rest.slice(2);

    return (
      <div className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="animate-fade-up">
            <ArticleCard
              article={featured}
              variant="featured"
              showCategory={showCategory}
              priority
            />
          </div>
          <div className="flex flex-col gap-6">
            {side.map((article, index) => (
              <div key={article.slug} className="animate-fade-up" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                <ArticleCard
                  article={article}
                  variant="horizontal"
                  showCategory={showCategory}
                  index={index + 1}
                />
              </div>
            ))}
          </div>
        </div>
        {more.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((article, index) => (
              <ArticleCard
                key={article.slug}
                article={article}
                variant="grid"
                showCategory={showCategory}
                index={index}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  if (layout === "stack") {
    return (
      <div className="space-y-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.slug}
            article={article}
            variant="horizontal"
            showCategory={showCategory}
            index={index}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <ArticleCard
          key={article.slug}
          article={article}
          variant="grid"
          showCategory={showCategory}
          index={index}
        />
      ))}
    </div>
  );
}
