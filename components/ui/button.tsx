"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "filled" | "outline" | "outline-dark";
  size?: "default" | "large";
  className?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-button font-body font-medium no-underline transition-[background-color,border-color,box-shadow,color] duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold/50";

const variants = {
  filled:
    "bg-brand-gold text-brand-bg hover:bg-brand-gold-hover hover:shadow-[0_4px_20px_rgba(201,169,110,0.3)]",
  outline:
    "border border-brand-cream/20 bg-transparent text-brand-cream hover:border-brand-cream/40 hover:bg-brand-cream/5",
  "outline-dark":
    "border border-brand-bg/15 bg-transparent text-brand-bg hover:border-brand-gold/60 hover:bg-brand-bg/[0.03]",
};

const sizes = {
  default: "px-6 py-3 text-sm",
  large: "px-8 py-4 text-base",
};

export function Button({
  href,
  children,
  variant = "filled",
  size = "default",
  className = "",
  icon,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && <span className="flex shrink-0">{icon}</span>}
      {children}
    </motion.a>
  );
}
