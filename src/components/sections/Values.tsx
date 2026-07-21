"use client";

import { Brain, Crown, Flame, HandHeart, Landmark, Scale, Target, Users } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/lib/i18n/context";

const icons = [Flame, Target, Scale, Crown, Users, HandHeart, Landmark, Brain];

export function Values() {
  const { t } = useLanguage();

  return (
    <section id="values" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading label={t.values.label} title={t.values.title} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.values.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal
                key={item.title}
                delay={i * 0.05}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition duration-500 hover:-translate-y-1 hover:border-gold/35 hover:bg-gold/[0.04]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition group-hover:scale-110">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-xl text-ivory">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
