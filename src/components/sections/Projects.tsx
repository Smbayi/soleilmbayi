"use client";

import { useState } from "react";
import { ArrowUpRight, Cpu, Globe2, HeartPulse, Landmark, Sparkles, University } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/lib/i18n/context";

const icons = [HeartPulse, Landmark, University, Cpu, Sparkles, Globe2];

export function Projects() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading label={t.projects.label} title={t.projects.title} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.projects.items.map((project, i) => {
            const Icon = icons[i % icons.length];
            const open = active === project.id;
            return (
              <Reveal
                key={project.id}
                delay={i * 0.05}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-panel/70 transition duration-500 hover:border-gold/30"
              >
                <div className="relative flex h-40 items-end bg-gradient-to-br from-emerald/30 via-bronze/20 to-bordeaux/30 p-5">
                  <div className="african-pattern absolute inset-0 opacity-30" />
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-ink/40 text-gold backdrop-blur">
                    <Icon size={20} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold/80">
                    {project.tag}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-ivory">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-white/10 px-2 py-0.5 text-[11px] text-ivory/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="mt-5 justify-start px-0 text-gold hover:bg-transparent"
                    onClick={() => setActive(open ? null : project.id)}
                  >
                    {t.projects.seeMore}
                    <ArrowUpRight size={16} />
                  </Button>
                  <AnimatePresence>
                    {open && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-white/10 pt-3 text-sm text-ivory/80"
                      >
                        {project.results}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
