"use client";

import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/lib/i18n/context";

export function Journey() {
  const { t } = useLanguage();

  return (
    <section id="journey" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading label={t.journey.label} title={t.journey.title} />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-emerald to-bordeaux md:left-1/2 md:-translate-x-1/2" />
          <ol className="space-y-8">
            {t.journey.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.04}
                className={`relative grid gap-3 md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div
                  className={`pl-10 md:pl-0 ${
                    i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-ivory md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-gold bg-ink md:left-1/2 md:-translate-x-1/2" />
                <div className="hidden md:block" />
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
