"use client";

import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AfricaSilhouette } from "@/components/shared/AfricaSilhouette";
import { useLanguage } from "@/lib/i18n/context";

export function Vision() {
  const { t } = useLanguage();

  return (
    <section id="vision" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-20">
        <AfricaSilhouette className="h-full w-full text-gold" />
      </div>
      <div className="section-shell relative">
        <SectionHeading label={t.vision.label} title={t.vision.title} />
        <Reveal className="max-w-3xl">
          <p className="font-serif text-2xl leading-relaxed text-ivory md:text-3xl">
            {t.vision.lead}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            {t.vision.body}
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
          {t.vision.points.map((point) => (
            <span
              key={point}
              className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-gold"
            >
              {point}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
