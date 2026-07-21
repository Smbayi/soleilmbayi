"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-panel/80">
      <div className="section-shell py-16 md:py-20">
        <p className="mx-auto max-w-3xl text-center font-serif text-2xl leading-relaxed text-ivory/90 md:text-3xl">
          “{t.footer.phrase}”
        </p>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-muted md:flex-row">
          <p>{t.footer.rights}</p>
          <div className="flex gap-6">
            <Link href="/philosophie" className="hover:text-gold">
              {t.nav.philosophy}
            </Link>
            <Link href="/univers" className="hover:text-gold">
              {t.nav.universe}
            </Link>
            <a href="mailto:mbayisoleil10@gmail.com" className="hover:text-gold">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
