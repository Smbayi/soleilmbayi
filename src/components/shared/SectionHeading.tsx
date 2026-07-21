"use client";

import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <p className="mb-3 font-sans text-xs uppercase tracking-[0.28em] text-gold/80">
        {label}
      </p>
      <h2 className="font-display text-3xl leading-tight text-ivory md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
