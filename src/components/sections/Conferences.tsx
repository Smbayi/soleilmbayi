"use client";

import { Mic2 } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/lib/i18n/context";

export function Conferences() {
  const { t } = useLanguage();

  return (
    <section id="conferences" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label={t.conferences.label}
          title={t.conferences.title}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.conferences.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-emerald/40"
            >
              <Mic2 className="mb-4 text-emerald-soft" size={20} />
              <h3 className="font-display text-xl text-ivory">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
