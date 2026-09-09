import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, JsonLd, SectionHeading } from "@/components/Ui";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Techniques de boxe thaï",
  description:
    "Techniques de boxe thaï : jab, direct, crochet, uppercut, low kick, teep, genoux, coudes et clinch.",
  path: "/techniques-boxe-thai/",
  image: "/images/entrainement/boxe-thai-1.webp",
});

const groups = [
  {
    title: "Poings",
    items: [
      { name: "Jab", text: "Direct du bras avant. Mesure la distance, masque un kick, casse le rythme." },
      { name: "Direct (cross)", text: "Frappe arrière, hanche et épaule dans le même temps. Puissance de base." },
      { name: "Crochet (hook)", text: "Trajectoire circulaire à mi-distance, souvent au foie ou à la mâchoire." },
      { name: "Uppercut", text: "Remontée courte, utile quand l’adversaire se couvre ou s’abaisse." },
    ],
  },
  {
    title: "Coups de pied",
    items: [
      { name: "Low kick", text: "Tibia sur la cuisse. Usure la garde et la mobilité. Se pose, ne se « fouette » pas n’importe comment." },
      { name: "Middle kick", text: "Au corps, sur les bras ou les côtes. Demande rotation et appui du pied d’appui." },
      { name: "High kick", text: "À la tête. Plus tardif pour un débutant : souplesse, timing, et risque de se faire contrer." },
      { name: "Teep", text: "Coup de pied de face, poussée ou pique. Gère la distance comme un jab de jambe." },
    ],
  },
  {
    title: "Genoux",
    items: [
      { name: "Genou droit", text: "Frappe avant, hanche engagée, souvent au plexus ou aux côtes." },
      { name: "Genou en rentrant", text: "S’utilise dans le clinch ou en poursuite, genou levé vers le centre." },
      { name: "Genou sauté", text: "Variante offensive, travaillée plus tard et toujours de façon contrôlée en club." },
    ],
  },
  {
    title: "Coudes",
    items: [
      { name: "Coude horizontal", text: "Coupe courte à mi-distance, coude plus haut que la main." },
      { name: "Coude descendant", text: "Trajectoire haute vers le bas, utile si la garde s’ouvre." },
      { name: "Coude en avançant", text: "S’intègre dans une entrée, jamais en frappant « à vide » trop tôt." },
    ],
  },
];

export default function TechniquesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Techniques", path: "/techniques-boxe-thai/" },
        ])}
      />
      <PageHero
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Techniques" }]}
        title="Techniques de boxe thaï"
        lead="Les armes du Muay Thaï, une par une, telles qu’on les travaille en club : d’abord le contrôle, ensuite la puissance."
        image="/images/entrainement/boxe-thai-1.webp"
        imageAlt="Travail technique aux paos"
      />
      <div className="container-site py-12">
        <div className="img-frame mb-10 aspect-[21/9] max-h-[360px]">
          <Image
            src="/images/entrainement/boxe-thai-2.webp"
            alt="Enchaînements pieds-poings en boxe thaï"
            width={1200}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="grid gap-10">
          {groups.map((group) => (
            <section key={group.title}>
              <SectionHeading title={group.title} />
              <div className="grid gap-4 md:grid-cols-2">
                {group.items.map((item) => (
                  <article key={item.name} className="border border-white/10 bg-bg-3 p-5">
                    <h3 className="text-3xl text-orange">{item.name}</h3>
                    <p className="mt-2 text-muted">{item.text}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
          <section>
            <SectionHeading title="Clinch" />
            <div className="max-w-3xl text-muted">
              <p className="mb-4">
                Le clinch n’est pas une mêlée. On cherche une position dominante : contrôle de la nuque ou des
                bras, appuis stables, déplacements pour déséquilibrer, puis genoux. On apprend aussi à en sortir
                sans s’exposer.
              </p>
              <p>
                En club, le clinch se travaille progressivement, avec consignes claires. Il relie naturellement la
                page <Link href="/entrainement-boxe-thai/">entraînement</Link> et les{" "}
                <Link href="/cours-boxe-thai-toulouse/">cours de boxe thaï à Toulouse</Link>.
              </p>
            </div>
          </section>
        </div>
      </div>
      <CtaBand title="Travailler ces techniques en cours" />
    </>
  );
}
