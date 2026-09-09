import Image from "next/image";
import Link from "next/link";
import { BoxingCenterBlock } from "@/components/BoxingCenterBlock";
import { CtaBand, JsonLd, SectionHeading } from "@/components/Ui";
import { posts } from "@/lib/blog";
import { faqs } from "@/lib/faq";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Boxe Thaï : découvrez le Muay Thaï",
  description:
    "Guide de la boxe thaï et du Muay Thaï : techniques des huit membres, débuter, s’entraîner, et cours à Toulouse au Boxing Center.",
  path: "/",
  image: "/images/entrainement/combat.webp",
});

const limbs = [
  { title: "Poings", text: "Jab, direct, crochet, uppercut : la base de la distance et des ouvertures." },
  { title: "Pieds", text: "Low kick, middle kick, high kick et teep pour frapper, stopper ou tenir à distance." },
  { title: "Genoux", text: "Frappes courtes au corps et à la tête, souvent préparées par le clinch." },
  { title: "Coudes", text: "Armes courtes, coupantes, utilisées à mi-distance avec un contrôle strict en club." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Accueil", path: "/" }])} />
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="/images/entrainement/combat.webp"
          alt="Cours de boxe thaï : échange pieds-poings au Boxing Center Toulouse"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
        <div className="container-site relative flex min-h-[88vh] items-end pb-16 pt-28">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-gold">boxe-thai.com</p>
            <h1 className="text-6xl text-white md:text-8xl">Boxe Thaï : découvrez le Muay Thaï</h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              L’art des huit membres, expliqué sans jargon inutile : origines, techniques,
              entraînement, et où le pratiquer à Toulouse.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/boxe-thai/"
                className="rounded-sm bg-orange px-5 py-3 font-semibold text-black no-underline hover:bg-orange-hot"
              >
                Comprendre la discipline
              </Link>
              <Link
                href="/boxe-thai-toulouse/"
                className="rounded-sm border border-white/25 px-5 py-3 font-semibold text-white no-underline"
              >
                Cours de boxe thaï à Toulouse
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="La discipline"
              title="Un sport complet, une culture vivante"
              text="La boxe thaï — ou Muay Thaï — combine poings, pieds, genoux, coudes et clinch. C’est un sport de combat moderne, issu d’une tradition thaïlandaise, accessible en club sans obligation de combattre."
            />
            <div className="flex flex-wrap gap-4">
              <Link href="/boxe-thai/">Qu’est-ce que la boxe thaï ?</Link>
              <Link href="/muay-thai/">Page Muay Thaï</Link>
              <Link href="/histoire-boxe-thai/">Histoire</Link>
            </div>
          </div>
          <div className="img-frame aspect-[4/3] card-glow">
            <Image
              src="/images/entrainement/danse-wai-kru.webp"
              alt="Wai Kru, rituel traditionnel du Muay Thaï"
              width={900}
              height={680}
            />
          </div>
        </div>
      </section>

      <section className="bg-bg-2/80 py-16">
        <div className="container-site">
          <SectionHeading eyebrow="Huit membres" title="Les armes de la boxe thaï" />
          <div className="grid gap-4 md:grid-cols-4">
            {limbs.map((limb) => (
              <article key={limb.title} className="border border-white/10 bg-bg-3 p-5">
                <h3 className="text-3xl text-orange">{limb.title}</h3>
                <p className="mt-3 text-sm text-muted">{limb.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6">
            <Link href="/techniques-boxe-thai/">Voir toutes les techniques de boxe thaï</Link>
          </p>
        </div>
      </section>

      <section className="container-site grid gap-8 py-16 md:grid-cols-2">
        <article className="img-frame relative min-h-[340px]">
          <Image
            src="/images/entrainement/boxe-thai-header.webp"
            alt="Débutant en cours de boxe thaï"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-0 p-6">
            <h2 className="text-4xl text-white">Débuter sans expérience</h2>
            <p className="mt-2 text-muted">
              Niveau, âge, première séance, matériel : tout ce qu’il faut savoir avant de pousser la porte.
            </p>
            <Link href="/boxe-thai-debutant/" className="mt-3 inline-block text-gold">
              Guide boxe thaï débutant
            </Link>
          </div>
        </article>
        <article className="img-frame relative min-h-[340px]">
          <Image
            src="/images/entrainement/boxe-thai-1.webp"
            alt="Travail aux paos pendant un entraînement de Muay Thaï"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-0 p-6">
            <h2 className="text-4xl text-white">Une séance type</h2>
            <p className="mt-2 text-muted">
              Échauffement, technique, paos, sac, physique, clinch, retour au calme.
            </p>
            <Link href="/entrainement-boxe-thai/" className="mt-3 inline-block text-gold">
              Déroulé d’un entraînement
            </Link>
          </div>
        </article>
      </section>

      <section className="bg-bg-2/80 py-16">
        <div className="container-site">
          <SectionHeading
            eyebrow="Toulouse"
            title="Boxe thaï à Toulouse"
            text="Pour passer de la lecture à la pratique : un club, des cours, un encadrement. Le Boxing Center est le partenaire local de ce site."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/boxe-thai-toulouse/" className="border border-white/10 bg-bg-3 p-6 no-underline">
              <h3 className="text-3xl text-white">Cours, club, entraînement</h3>
              <p className="mt-2 text-sm text-muted">Page SEO locale : comment s’entraîner à Toulouse.</p>
            </Link>
            <Link href="/club-boxe-thai-toulouse/" className="border border-white/10 bg-bg-3 p-6 no-underline">
              <h3 className="text-3xl text-white">Trouver un club</h3>
              <p className="mt-2 text-sm text-muted">Salles, critères de choix, informations vérifiées.</p>
            </Link>
            <Link href="/cours-boxe-thai-toulouse/" className="border border-white/10 bg-bg-3 p-6 no-underline">
              <h3 className="text-3xl text-white">Les cours</h3>
              <p className="mt-2 text-sm text-muted">Créneaux, niveaux, séance d’essai.</p>
            </Link>
          </div>
        </div>
      </section>

      <BoxingCenterBlock />

      <section className="container-site py-16">
        <SectionHeading eyebrow="Journal" title="Articles récents" />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="group no-underline">
              <div className="img-frame aspect-[16/10]">
                <Image src={post.image} alt={post.imageAlt} width={700} height={440} />
              </div>
              <h3 className="mt-4 text-2xl text-white group-hover:text-orange">{post.title}</h3>
              <p className="mt-2 text-sm text-muted">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-bg-2/80 py-16">
        <div className="container-site">
          <SectionHeading eyebrow="Questions" title="FAQ" />
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.slice(0, 4).map((item) => (
              <article key={item.q} className="border border-white/10 p-5">
                <h3 className="text-2xl text-white">{item.q}</h3>
                <p className="mt-2 text-sm text-muted">{item.a}</p>
              </article>
            ))}
          </div>
          <p className="mt-6">
            <Link href="/faq/">Toutes les questions fréquentes</Link>
          </p>
        </div>
      </section>

      <CtaBand
        primaryHref={site.boxingCenterThaiUrl}
        primaryLabel="Découvrir le Boxing Center"
      />
    </>
  );
}
