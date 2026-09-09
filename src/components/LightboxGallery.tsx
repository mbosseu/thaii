"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryCategories, galleryItems, type GalleryItem } from "@/lib/gallery";

export function LightboxGallery() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]["id"]>("tous");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () =>
      category === "tous" ? galleryItems : galleryItems.filter((item) => item.category === category),
    [category],
  );

  const current = active === null ? null : items[active];

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {galleryCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setCategory(item.id);
              setActive(null);
            }}
            className={`rounded-full border px-4 py-2 text-sm ${
              category === item.id
                ? "border-orange bg-orange text-black"
                : "border-white/15 text-muted hover:border-gold hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className="img-frame aspect-[4/3] text-left"
            onClick={() => setActive(index)}
          >
            <Image src={item.src} alt={item.alt} width={800} height={600} className="object-cover" />
          </button>
        ))}
      </div>
      {current ? (
        <Lightbox
          item={current}
          onClose={() => setActive(null)}
          onPrev={() => setActive((index) => (index === null ? 0 : (index + items.length - 1) % items.length))}
          onNext={() => setActive((index) => (index === null ? 0 : (index + 1) % items.length))}
        />
      ) : null}
    </div>
  );
}

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
    >
      <div className="relative max-h-[90vh] max-w-5xl" onClick={(event) => event.stopPropagation()}>
        <Image
          src={item.src}
          alt={item.alt}
          width={1400}
          height={900}
          className="max-h-[78vh] w-auto object-contain"
        />
        <p className="mt-3 text-center text-sm text-muted">{item.alt}</p>
        <div className="mt-4 flex justify-center gap-3">
          <button type="button" className="border border-white/20 px-4 py-2" onClick={onPrev}>
            Précédent
          </button>
          <button type="button" className="border border-white/20 px-4 py-2" onClick={onClose}>
            Fermer
          </button>
          <button type="button" className="border border-white/20 px-4 py-2" onClick={onNext}>
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}
