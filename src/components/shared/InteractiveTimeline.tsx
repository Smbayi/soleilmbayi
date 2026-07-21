"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

export function InteractiveTimeline() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-2xl border border-white/8 bg-panel/60 p-5 md:p-8">
      <div className="flex flex-wrap gap-2">
        {t.journey.items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs transition md:text-sm",
              active === i
                ? "border-gold bg-gold/15 text-gold"
                : "border-white/10 text-ivory/60 hover:border-gold/30 hover:text-ivory"
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-6"
      >
        <p className="text-xs uppercase tracking-[0.24em] text-gold">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(t.journey.items.length).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-display text-2xl text-ivory md:text-3xl">
          {t.journey.items[active].title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {t.journey.items[active].desc}
        </p>
      </motion.div>
    </div>
  );
}
