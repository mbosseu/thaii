import Image from "next/image";
import Link from "next/link";
import { boxingCenter, site } from "@/lib/site";

export function BoxingCenterBlock() {
  return (
    <section className="container-site py-14">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="img-frame aspect-[4/3] card-glow">
          <Image
            src="/images/salles/saint-cyprien-hero.webp"
            alt="Boxing Center Saint-Cyprien, salle de boxe thaï à Toulouse"
            width={900}
            height={680}
          />
        </div>
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">Pratique à Toulouse</p>
          <h2 className="text-4xl text-white md:text-5xl">Le Boxing Center</h2>
          <p className="mt-4 text-muted">
            Club de sports de combat inauguré en 2016, affilié FFKMDA pour la boxe thaï, le Muay Thaï
            et le kick-boxing. Plusieurs salles en agglomération toulousaine, cours collectifs et
            accès aux espaces d’entraînement selon les formules du club.
          </p>
          <ul className="mt-4 grid gap-2 text-muted">
            <li>Horaires d’ouverture : {boxingCenter.hours}</li>
            <li>Téléphone : {site.phoneDisplay}</li>
            <li>Salles : Saint-Cyprien, États-Unis, Minimes, Ramonville, Portet-sur-Garonne</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.boxingCenterThaiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-orange px-5 py-3 font-semibold text-black no-underline hover:bg-orange-hot"
            >
              Découvrir les cours de Boxe Thaï du Boxing Center
            </a>
            <Link
              href="/club-boxe-thai-toulouse/"
              className="rounded-sm border border-white/20 px-5 py-3 font-semibold text-white no-underline"
            >
              Fiche club
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
