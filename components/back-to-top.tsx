"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUpIcon } from "@/components/icons";

const SHOW_AFTER = 600;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0 })}
          aria-label="Voltar ao topo"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-30 flex size-11 items-center justify-center rounded-full border border-brand-cream/10 bg-brand-card/90 text-brand-cream/60 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur transition-colors duration-300 hover:border-brand-gold/30 hover:bg-brand-card hover:text-brand-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold/60 sm:bottom-8 sm:right-8"
        >
          <ChevronUpIcon />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
