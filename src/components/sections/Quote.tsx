"use client";

import { Reveal } from "@/components/shared/Reveal";
import { useLanguage } from "@/lib/i18n/context";

export function Quote() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 md:py-28" id="quote">
      <div className="section-shell">
        <Reveal className="relative mx-auto max-w-4xl border-y border-gold/20 py-14 text-center md:py-20">
          <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 -translate-y-1/2 bg-gold" />
          <p className="font-serif text-2xl leading-relaxed text-ivory md:text-4xl md:leading-snug">
            “{t.quote.text}”
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.28em] text-gold">
            — {t.quote.author}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
