import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/Ui";
import { getPost, posts } from "@/lib/blog";
import { absoluteUrl, breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    image: post.image,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.updated,
    inLanguage: "fr-FR",
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}/`),
    author: { "@type": "Organization", name: "boxe-thai.com" },
    publisher: { "@type": "Organization", name: "boxe-thai.com", logo: absoluteUrl("/logo.png") },
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog/" },
            { name: post.title, path: `/blog/${post.slug}/` },
          ]),
          articleLd,
        ]}
      />
      <article>
        <div className="relative min-h-[42vh] overflow-hidden">
          <Image src={post.image} alt={post.imageAlt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
          <div className="container-site relative py-20">
            <p className="text-sm text-muted">
              <Link href="/">Accueil</Link> / <Link href="/blog/">Blog</Link>
            </p>
            <h1 className="mt-3 max-w-4xl text-5xl text-white md:text-6xl">{post.title}</h1>
            <p className="mt-3 text-sm text-gold">
              Publié le {post.date} · mis à jour le {post.updated} · boxe-thai.com
            </p>
          </div>
        </div>
        <div className="container-site prose-site max-w-3xl py-12">
          {post.content.map((block, index) => (
            <section key={block.heading || index}>
              {block.heading ? <h2>{block.heading}</h2> : null}
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </section>
          ))}
          <h2>Lire aussi</h2>
          <ul>
            {post.related.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}
