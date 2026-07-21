"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { AfricaSilhouette } from "@/components/shared/AfricaSilhouette";
import { useLanguage } from "@/lib/i18n/context";

gsap.registerPlugin(ScrollTrigger);

export default function UniversePage() {
  const { t } = useLanguage();
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".universe-chapter", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
      });
      gsap.to(".universe-africa", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative overflow-hidden pb-24 pt-28 md:pt-32">
      <div className="universe-africa pointer-events-none absolute inset-y-10 right-[-10%] w-[70%] opacity-15 md:w-[45%]">
        <AfricaSilhouette className="h-full w-full text-emerald" />
      </div>

      <div className="section-shell relative">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          {t.nav.universe}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl text-ivory md:text-6xl">
          {t.universe.title}
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-xl text-muted md:text-2xl">
          {t.universe.subtitle}
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {t.universe.chapters.map((chapter, i) => (
            <article
              key={chapter.title}
              className="universe-chapter rounded-2xl border border-white/8 bg-panel/70 p-7 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-3xl text-ivory">
                {chapter.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {chapter.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/#projects">{t.hero.ctaProjects}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/philosophie">{t.nav.philosophy}</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/">{t.universe.cta}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
