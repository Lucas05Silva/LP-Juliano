import type { Variants } from "framer-motion";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE_OUT_EXPO },
  }),
};

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT_EXPO },
  }),
};

export const revealOnScroll = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-100px" },
  variants: scrollReveal,
} as const;

export const scaleFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

export const navSlideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

export const mobileMenu: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE_OUT_EXPO,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease: "easeIn" } },
};

export const mobileMenuItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT_EXPO } },
};
