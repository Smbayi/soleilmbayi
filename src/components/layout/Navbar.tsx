"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#hero", key: "home" as const },
  { href: "/#about", key: "about" as const },
  { href: "/#projects", key: "projects" as const },
  { href: "/#vision", key: "vision" as const },
  { href: "/philosophie", key: "philosophy" as const },
  { href: "/#contact", key: "contact" as const },
];

export function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-ink/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="section-shell flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group flex items-center gap-3 focus-ring rounded-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-sm text-gold transition group-hover:bg-gold/20">
            S.
          </span>
          <span className="hidden font-display text-sm tracking-wide text-ivory sm:block">
            Soleil Mbayi
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-ivory/70 transition hover:text-gold"
              >
                {t.nav[link.key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="flex rounded-md border border-white/10 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setLocale("fr")}
              className={cn(
                "rounded px-2 py-1 transition",
                locale === "fr" ? "bg-gold text-ink" : "text-ivory/60 hover:text-ivory"
              )}
              aria-label="Français"
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(
                "rounded px-2 py-1 transition",
                locale === "en" ? "bg-gold text-ink" : "text-ivory/60 hover:text-ivory"
              )}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href="/univers">{t.nav.universe}</Link>
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-ivory lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-16 z-30 bg-ink/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="section-shell flex flex-col gap-2 py-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-4 font-display text-2xl text-ivory"
                  >
                    {t.nav[link.key]}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-4">
                <Button asChild className="w-full" onClick={() => setOpen(false)}>
                  <Link href="/univers">{t.nav.universe}</Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
