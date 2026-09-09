import { LightboxGallery } from "@/components/LightboxGallery";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/Ui";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Galerie photos boxe thaï",
  description:
    "Galerie photos de boxe thaï au Boxing Center Toulouse : entraînement, techniques, coachs, groupe et salles.",
  path: "/galerie/",
  image: "/images/entrainement/combat.webp",
});

export default function GaleriePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Galerie", path: "/galerie/" },
        ])}
      />
      <PageHero
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Galerie" }]}
        title="Galerie"
        lead="Photos réelles d’entraînement et de salles au Boxing Center. Lightbox adaptée au mobile."
        image="/images/entrainement/combat.webp"
        imageAlt="Galerie d’entraînement Muay Thaï"
      />
      <div className="container-site py-12">
        <LightboxGallery />
        <p className="mt-8 text-sm text-muted">
          Photos fournies pour le Boxing Center. Toute personne reconnaissable y figure dans le cadre de la
          communication du club. Signalez-nous un retrait si nécessaire.
        </p>
      </div>
    </>
  );
}
