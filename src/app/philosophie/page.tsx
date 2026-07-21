"use client";

import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";

export default function PhilosophyPage() {
  const { t } = useLanguage();

  return (
    <div className="pb-24 pt-28 md:pt-32">
      <div className="section-shell">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">
            {t.nav.philosophy}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ivory md:text-6xl">
            {t.philosophy.title}
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-xl text-muted md:text-2xl">
            {t.philosophy.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 space-y-10">
          {t.philosophy.sections.map((section, i) => (
            <Reveal
              key={section.title}
              delay={i * 0.08}
              className="grid gap-4 border-t border-white/8 pt-8 md:grid-cols-[0.35fr_1fr]"
            >
              <h2 className="font-display text-3xl text-gold">{section.title}</h2>
              <p className="text-base leading-relaxed text-ivory/80 md:text-lg">
                {section.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-2xl border border-gold/25 bg-gold/5 p-8 md:p-12">
          <p className="font-serif text-2xl leading-relaxed text-ivory md:text-3xl">
            {t.philosophy.closing}
          </p>
          <Button asChild className="mt-8" variant="outline">
            <Link href="/">{t.universe.cta}</Link>
          </Button>
        </Reveal>
      </div>
    </div>
  );
}
