"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";

export default function CvPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pb-24 pt-28">
      <div className="section-shell max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-gold">CV</p>
        <h1 className="mt-3 font-display text-4xl text-ivory md:text-5xl">
          Soleil Mbayi
        </h1>
        <p className="mt-2 text-muted">{t.hero.subtitle}</p>

        <div className="mt-10 space-y-8 text-ivory/85">
          <section>
            <h2 className="font-display text-xl text-gold">
              {locale === "fr" ? "Profil" : "Profile"}
            </h2>
            <p className="mt-2 leading-relaxed">{t.about.p1}</p>
          </section>
          <section>
            <h2 className="font-display text-xl text-gold">
              {locale === "fr" ? "Compétences" : "Skills"}
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {t.skills.categories.map((c) => (
                <li key={c.name}>
                  <strong>{c.name}</strong> — {c.items.join(", ")}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl text-gold">
              {locale === "fr" ? "Réalisations" : "Selected work"}
            </h2>
            <ul className="mt-2 space-y-3">
              {t.projects.items.map((p) => (
                <li key={p.id}>
                  <strong>{p.title}</strong> — {p.description}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl text-gold">Contact</h2>
            <p className="mt-2">{t.contact.emailValue}</p>
            <p>{t.contact.location}</p>
          </section>
        </div>

        <div className="mt-10 flex gap-3 print:hidden">
          <Button onClick={() => window.print()}>
            {locale === "fr" ? "Imprimer / PDF" : "Print / PDF"}
          </Button>
          <Button asChild variant="outline">
            <Link href="/">{t.universe.cta}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
