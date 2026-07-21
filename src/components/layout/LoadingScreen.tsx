"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";

export function LoadingScreen() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("soleil-loaded");
    if (seen) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("soleil-loaded", "1");
    }, 2600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          aria-live="polite"
          role="status"
        >
          <div className="relative flex w-full max-w-md flex-col items-center px-6">
            <svg
              viewBox="0 0 320 220"
              className="h-auto w-full max-w-sm"
              aria-hidden
            >
              <defs>
                <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#dbb84a" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#c9a227" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0d6e4f" />
                  <stop offset="100%" stopColor="#8c6239" />
                </linearGradient>
              </defs>
              <circle
                cx="160"
                cy="78"
                r="54"
                fill="url(#sunGlow)"
                className="animate-rise-sun animate-pulse-glow"
              />
              <circle
                cx="160"
                cy="78"
                r="22"
                fill="#c9a227"
                className="animate-rise-sun"
              />
              <path
                d="M48 168c18-28 38-46 62-52 20-5 34 6 52 4 16-2 28-16 46-14 22 2 40 22 54 40 2 3 4 6 6 10H48z"
                fill="url(#land)"
                opacity="0.95"
              />
              <path
                d="M70 176c24-18 48-28 74-26 22 2 36 14 56 12 18-2 34-14 52-8 8 3 14 8 20 14H70z"
                fill="#6b1e2a"
                opacity="0.35"
              />
            </svg>
            <motion.p
              className="mt-6 text-center font-serif text-xl text-ivory/90 md:text-2xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t.loading.line}
            </motion.p>
            <motion.div
              className="mt-8 h-px w-40 origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 1.2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
