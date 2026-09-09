import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, JsonLd } from "@/components/Ui";
import { faqs } from "@/lib/faq";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "FAQ boxe thaï",
  description:
    "Questions fréquentes sur la boxe thaï et le Muay Thaï : débuter, combattre, équipement, femmes, cours à Toulouse.",
  path: "/faq/",
});

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "FAQ", path: "/faq/" },
          ]),
          faqLd,
        ]}
      />
      <PageHero
        crumbs={[{ href: "/", label: "Accueil" }, { label: "FAQ" }]}
        title="Questions fréquentes"
        lead="Réponses courtes, sans promesse commerciale. Pour les tarifs du club, le site officiel reste la source."
      />
      <div className="container-site grid gap-4 py-12">
        {faqs.map((item) => (
          <details key={item.q} className="border border-white/10 bg-bg-3 p-5">
            <summary className="cursor-pointer text-2xl text-white">{item.q}</summary>
            <p className="mt-3 text-muted">{item.a}</p>
          </details>
        ))}
        <p className="mt-4 text-muted">
          Encore une question pratique ?{" "}
          <Link href="/boxe-thai-toulouse/">Boxe thaï à Toulouse</Link> ou{" "}
          <a href={site.boxingCenterUrl} target="_blank" rel="noopener noreferrer">
            Boxing Center
          </a>
          .
        </p>
      </div>
      <CtaBand />
    </>
  );
}
