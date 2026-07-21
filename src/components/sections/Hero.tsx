"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AfricaSilhouette } from "@/components/shared/AfricaSilhouette";
import { useLanguage } from "@/lib/i18n/context";

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24 md:pt-28"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute -right-10 top-24 h-[70%] w-[55%] opacity-25 md:opacity-40">
          <AfricaSilhouette className="h-full w-full text-emerald" />
        </div>
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/15 blur-[100px]" />
        <div className="absolute bottom-20 left-10 h-48 w-48 rounded-full bg-bordeaux/20 blur-[90px]" />
      </motion.div>

      <div className="section-shell grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles size={14} />
            {t.hero.nickname}
          </motion.p>

          <motion.h1
            className="font-display text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-6xl lg:text-[4.2rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
          >
            <span className="gold-gradient-text block text-5xl sm:text-6xl md:text-7xl">
              {t.hero.brand}
            </span>
            <span className="mt-5 block max-w-3xl text-[1.35rem] font-normal leading-snug text-ivory/90 sm:text-2xl md:text-3xl lg:text-[2rem]">
              {t.hero.title}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <Button asChild size="lg">
              <Link href="/univers">
                {t.hero.ctaUniverse}
                <ArrowDownRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/#projects">{t.hero.ctaProjects}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/cv">
                <Download size={16} />
                {t.hero.ctaCv}
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/#contact">{t.hero.ctaContact}</Link>
            </Button>
          </motion.div>

          <motion.p
            className="mt-8 text-xs uppercase tracking-[0.24em] text-bronze"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            {t.hero.location}
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/25 via-emerald/10 to-bordeaux/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel">
            <Image
              src="/fondateur.jpeg"
              alt="Soleil Mbayi"
              width={720}
              height={900}
              priority
              className="h-[420px] w-full object-cover object-top md:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-display text-lg text-ivory">Soleil Mbayi</p>
              <p className="text-sm text-gold/90">{t.hero.nickname}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
