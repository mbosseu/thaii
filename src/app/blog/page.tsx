import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/Ui";
import { posts } from "@/lib/blog";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Blog boxe thaï et Muay Thaï",
  description:
    "Articles utiles sur la boxe thaï : débuter, équipement, choisir un club, pratiquer à Toulouse, différences avec la boxe anglaise.",
  path: "/blog/",
  image: "/images/entrainement/boxe-thai-header.webp",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog/" },
        ])}
      />
      <PageHero
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Blog" }]}
        title="Blog"
        lead="Des articles originaux, liés aux pages principales : pour apprendre, puis pour s’entraîner."
      />
      <div className="container-site grid gap-8 py-12 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}/`} className="group no-underline">
            <div className="img-frame aspect-[16/9]">
              <Image src={post.image} alt={post.imageAlt} width={800} height={450} />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-gold">{post.date}</p>
            <h2 className="mt-1 text-3xl text-white group-hover:text-orange">{post.title}</h2>
            <p className="mt-2 text-muted">{post.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
