import Image from "next/image";
import Link from "next/link";
import { getBoxer } from "@/lib/content";

type FightCardProps = {
  fighter1: string;
  fighter2: string;
  fighter1Slug?: string | null;
  fighter2Slug?: string | null;
  date: string;
  venue: string;
  event: string;
  status?: string;
  href?: string;
};

export function FightCard({
  fighter1,
  fighter2,
  fighter1Slug,
  fighter2Slug,
  date,
  venue,
  event,
  status,
  href,
}: FightCardProps) {
  const a = fighter1Slug ? getBoxer(fighter1Slug) : null;
  const b = fighter2Slug ? getBoxer(fighter2Slug) : null;
  const imgA = a?.image ?? "/images/editorial/fighter-corner-mongkhon.jpg";
  const imgB = b?.image ?? "/images/editorial/ring-exchange.jpg";

  const inner = (
    <div className="card-surface overflow-hidden">
      <div className="grid grid-cols-[1fr_auto_1fr] items-stretch">
        <div className="relative min-h-[10rem] sm:min-h-[12rem]">
          <Image src={imgA} alt={fighter1} fill className="object-cover" sizes="40vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <p className="absolute bottom-3 left-3 right-3 font-display text-xl text-white sm:text-2xl">
            {fighter1}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-surface-2 px-3 text-center">
          <span className="font-display text-2xl text-accent sm:text-3xl">VS</span>
          {status ? <span className="mt-2 badge badge-accent">{status}</span> : null}
        </div>
        <div className="relative min-h-[10rem] sm:min-h-[12rem]">
          <Image src={imgB} alt={fighter2} fill className="object-cover" sizes="40vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <p className="absolute bottom-3 left-3 right-3 text-right font-display text-xl text-white sm:text-2xl">
            {fighter2}
          </p>
        </div>
      </div>
      <div className="space-y-1 px-5 py-4">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">{date}</p>
        <p className="font-medium text-cream">{event}</p>
        <p className="text-sm text-muted">{venue}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block no-underline transition-transform hover:-translate-y-1">
        {inner}
      </Link>
    );
  }

  return inner;
}
