import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOrganization, getOrganizations } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getOrganizations().map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const org = getOrganization(slug);
  if (!org) return { title: "Organisation introuvable" };
  return {
    title: org.name,
    description: org.summary,
    alternates: { canonical: `${siteConfig.url}/organisations/${org.slug}` },
  };
}

export default async function OrgPage({ params }: Props) {
  const { slug } = await params;
  const org = getOrganization(slug);
  if (!org) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <span className="badge badge-accent">{org.type}</span>
      <h1 className="mt-4 font-display text-5xl text-cream">{org.name}</h1>
      <p className="mt-4 font-serif text-lg text-muted">{org.summary}</p>
      <p className="mt-4 text-cream">{org.role}</p>
      <a href={org.website} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
        Site officiel
      </a>
      <div>
        <Link href="/organisations" className="btn-ghost mt-6">
          ← Toutes les organisations
        </Link>
      </div>
    </div>
  );
}
