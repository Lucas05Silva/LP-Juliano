"use client";

import { motion } from "framer-motion";
import { revealOnScroll } from "@/lib/animations";

interface SectionHeaderProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone: "dark" | "light";
  // Varia só o detalhe decorativo do eyebrow entre seções, mantendo a tipografia
  ornament?: "sides" | "below" | "none" | "quote" | "question";
  className?: string;
}

function Ornament({ ornament, isDark }: { ornament: SectionHeaderProps["ornament"]; isDark: boolean }) {
  const line = `block h-px w-10 ${isDark ? "bg-brand-gold/30" : "bg-brand-gold/60"}`;

  if (ornament === "below") return <span aria-hidden="true" className={`${line} h-[1.5px]`} />;
  if (ornament === "quote") {
    return (
      <span aria-hidden="true" className="font-display text-[40px] font-semibold leading-[0.5] tracking-normal text-brand-gold/50">
        &ldquo;
      </span>
    );
  }
  if (ornament === "question") {
    return (
      <span
        aria-hidden="true"
        className="flex size-[22px] items-center justify-center rounded-full border border-brand-gold/30 font-display text-[13px] font-semibold leading-none tracking-normal"
      >
        ?
      </span>
    );
  }
  return null;
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  subtitle,
  tone,
  ornament = "sides",
  className = "mb-14",
}: SectionHeaderProps) {
  const isDark = tone === "dark";
  const sideLine = `block h-px w-10 ${isDark ? "bg-brand-gold/30" : "bg-brand-gold/60"}`;
  const layout = {
    sides: "gap-4",
    below: "flex-col gap-3",
    none: "",
    quote: "flex-col gap-1",
    question: "gap-2.5",
  }[ornament];

  return (
    <header className={`mx-auto max-w-[640px] text-center ${className}`}>
      <motion.div
        {...revealOnScroll}
        className={`mb-4 flex items-center justify-center font-body text-[11px] font-semibold uppercase tracking-[0.18em] ${layout} ${
          isDark ? "text-brand-gold" : "text-brand-gold-deep"
        }`}
      >
        {ornament === "sides" && <span aria-hidden="true" className={sideLine} />}
        {(ornament === "quote" || ornament === "question") && <Ornament ornament={ornament} isDark={isDark} />}
        <p>{eyebrow}</p>
        {ornament === "sides" && <span aria-hidden="true" className={sideLine} />}
        {ornament === "below" && <Ornament ornament={ornament} isDark={isDark} />}
      </motion.div>

      <motion.h2
        {...revealOnScroll}
        custom={0.1}
        id={id}
        className={`font-display text-[32px] font-light italic leading-[1.2] sm:text-[38px] lg:text-[44px] ${
          isDark ? "text-brand-cream" : "text-brand-bg"
        } ${subtitle ? "mb-4" : ""}`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          {...revealOnScroll}
          custom={0.15}
          className={`mx-auto max-w-[540px] font-body text-[15px] leading-[1.7] sm:text-base ${
            isDark ? "text-brand-cream/50" : "text-brand-muted"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  );
}
