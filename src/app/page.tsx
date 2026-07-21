"use client";

import { Hero } from "@/components/sections/Hero";
import { Quote } from "@/components/sections/Quote";
import { About } from "@/components/sections/About";
import { Values } from "@/components/sections/Values";
import { Journey } from "@/components/sections/Journey";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Vision } from "@/components/sections/Vision";
import { Conferences } from "@/components/sections/Conferences";
import { Ambitions } from "@/components/sections/Ambitions";
import { Stats } from "@/components/sections/Stats";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { InteractiveTimeline } from "@/components/shared/InteractiveTimeline";
import { Reveal } from "@/components/shared/Reveal";
import { useLanguage } from "@/lib/i18n/context";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <Quote />
      <About />
      <Values />
      <Journey />
      <section className="pb-10">
        <div className="section-shell">
          <Reveal>
            <InteractiveTimeline />
          </Reveal>
        </div>
      </section>
      <Skills />
      <Projects />
      <Vision />
      <Conferences />
      <Ambitions />
      <Stats />
      <Gallery />
      <Contact />
      <span className="sr-only">{t.hero.brand}</span>
    </>
  );
}
