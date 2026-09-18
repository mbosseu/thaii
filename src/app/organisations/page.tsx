import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getOrganizations } from "@/lib/content";
import { sectionImages } from "@/lib/media";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Organisations",
  description: "WBC, WBA, IBF, WBO, EBU, FFB — rôles et ceintures.",
  alternates: { canonical: `${siteConfig.url}/organisations` },
};

export default function OrganisationsPage() {
  const orgs = getOrganizations();
  return (
    <>
      <PageHero
        eyebrow="Écosystème"
        title="Organisations"
        description="Comprendre qui attribue quoi dans la boxe professionnelle et fédérale."
        image={sectionImages.champions}
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {orgs.map((org) => (
          <Link key={org.slug} href={`/organisations/${org.slug}`} className="card-surface overflow-hidden no-underline">
            <div className="relative aspect-[16/9]">
              <Image src={org.image} alt={org.imageAlt} fill className="object-cover" sizes="33vw" />
            </div>
            <div className="p-5">
              <span className="badge">{org.type}</span>
              <h2 className="mt-3 font-display text-2xl text-cream">{org.shortName}</h2>
              <p className="mt-2 text-sm text-muted">{org.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
