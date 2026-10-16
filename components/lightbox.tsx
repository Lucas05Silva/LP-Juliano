"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/components/icons";

const SWIPE_THRESHOLD = 60;

const noopSubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

interface LightboxProps<T extends { id: number; title: string }> {
  items: readonly T[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
  renderItem: (item: T) => React.ReactNode;
  renderCaption: (item: T) => React.ReactNode;
}

const navButton =
  "flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-brand-gold/60";

export function Lightbox<T extends { id: number; title: string }>({
  items,
  index,
  onClose,
  onChange,
  renderItem,
  renderCaption,
}: LightboxProps<T>) {
  const isClient = useIsClient();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;
  const count = items.length;
  const item = isOpen ? items[index] : null;

  const go = (step: number) => {
    if (index === null) return;
    onChange((index + step + count) % count);
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
    else if (e.key === "Tab" && dialogRef.current) {
      const focusables = [...dialogRef.current.querySelectorAll<HTMLElement>("button")].filter(
        (el) => el.offsetParent !== null,
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) go(1);
    else if (info.offset.x > SWIPE_THRESHOLD) go(-1);
  };

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title}, foto ${index! + 1} de ${count}`}
          onKeyDown={onKeyDown}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 px-4 backdrop-blur-[8px]"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar galeria"
            className={`${navButton} absolute right-4 top-4 sm:right-6 sm:top-6`}
          >
            <CloseIcon size={20} />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none flex w-full flex-col items-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={item.id}
                drag={count > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.35}
                onDragEnd={onDragEnd}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="pointer-events-auto relative h-[62svh] max-h-[85vh] w-full max-w-[90vw] cursor-grab touch-pan-y active:cursor-grabbing sm:h-[78vh]"
              >
                {renderItem(item)}
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-auto mt-5 text-center" aria-live="polite">
              {renderCaption(item)}
              <p className="mt-2 font-body text-[11px] tracking-[0.2em] text-white/40">
                {index! + 1} / {count}
              </p>
            </div>
          </motion.div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Foto anterior"
                className={`${navButton} absolute bottom-6 left-[calc(50%-56px)] sm:bottom-auto sm:left-3 sm:top-1/2 sm:-translate-y-1/2 lg:left-8`}
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próxima foto"
                className={`${navButton} absolute bottom-6 right-[calc(50%-56px)] sm:bottom-auto sm:right-3 sm:top-1/2 sm:-translate-y-1/2 lg:right-8`}
              >
                <ChevronRightIcon />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
