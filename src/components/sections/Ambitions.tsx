"use client";

import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/lib/i18n/context";

export function Ambitions() {
  const { t } = useLanguage();
  const steps = [t.ambitions.short, t.ambitions.medium, t.ambitions.long];

  return (
    <section id="ambitions" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading label={t.ambitions.label} title={t.ambitions.title} />
        <div className="relative grid gap-6 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-gold via-emerald to-bordeaux lg:block" />
          {steps.map((step, i) => (
            <Reveal
              key={step.label}
              delay={i * 0.1}
              className="relative rounded-2xl border border-white/8 bg-panel/80 p-7"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-ink font-display text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-gold">
                {step.label}
              </p>
              <h3 className="mt-2 font-display text-2xl text-ivory">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
