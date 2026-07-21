"use client";

import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/lib/i18n/context";

const tones = [
  "from-emerald/40 to-ink",
  "from-bronze/40 to-ink",
  "from-gold/35 to-ink",
  "from-bordeaux/45 to-ink",
  "from-emerald/30 via-gold/20 to-ink",
  "from-bronze/30 via-bordeaux/25 to-ink",
];

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading label={t.gallery.label} title={t.gallery.title} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {t.gallery.items.map((label, i) => (
            <Reveal
              key={label}
              delay={i * 0.05}
              className={`group relative min-h-[140px] overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br ${tones[i]} p-5 md:min-h-[200px] ${
                i === 0 || i === 5 ? "md:col-span-1" : ""
              } ${i === 2 ? "md:row-span-1" : ""}`}
            >
              <div className="african-pattern absolute inset-0 opacity-20 transition duration-700 group-hover:opacity-40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.25),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
              <p className="relative mt-auto font-display text-xl text-ivory md:text-2xl">
                {label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
