"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/lib/i18n/context";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 48;
    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / total, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl text-gold md:text-5xl">
      {count}+
    </span>
  );
}

export function Stats() {
  const { t } = useLanguage();

  return (
    <section id="stats" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading label={t.stats.label} title={t.stats.title} align="center" />
        <Reveal className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {t.stats.items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-6 text-center"
            >
              <Counter value={item.value} />
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                {item.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
