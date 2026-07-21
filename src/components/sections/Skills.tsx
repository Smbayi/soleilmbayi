"use client";

import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/lib/i18n/context";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading label={t.skills.label} title={t.skills.title} />
        <div className="grid gap-6 md:grid-cols-2">
          {t.skills.categories.map((cat, i) => (
            <Reveal
              key={cat.name}
              delay={i * 0.06}
              className="rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.03] to-transparent p-6 md:p-8"
            >
              <h3 className="font-display text-2xl text-gold">{cat.name}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-ink/60 px-3 py-1.5 text-sm text-ivory/85 transition hover:border-gold/40 hover:text-gold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
