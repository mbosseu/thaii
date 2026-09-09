import Image from "next/image";
import { Breadcrumbs } from "@/components/Ui";
import type { Crumb } from "@/lib/site";

export function PageHero({
  crumbs,
  title,
  lead,
  image,
  imageAlt,
}: {
  crumbs: Crumb[];
  title: string;
  lead: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {image ? (
        <div className="absolute inset-0">
          <Image src={image} alt={imageAlt || ""} fill priority className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>
      ) : null}
      <div className="container-site relative py-14 md:py-20">
        <Breadcrumbs items={crumbs} />
        <h1 className="max-w-4xl text-5xl text-white md:text-7xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{lead}</p>
      </div>
    </section>
  );
}
