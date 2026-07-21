"use client";

import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/lib/i18n/context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading label={t.about.label} title={t.about.title} />
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-ivory/80 md:text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p className="text-ivory">{t.about.p3}</p>
          </Reveal>
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-emerald-soft">
                Passions
              </p>
              <div className="flex flex-wrap gap-2">
                {t.about.passions.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1.5 text-sm text-ivory/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-bordeaux">
                Fondations
              </p>
              <div className="flex flex-wrap gap-2">
                {t.about.pillars.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-bordeaux/35 bg-bordeaux/15 px-3 py-1.5 text-sm text-ivory/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
