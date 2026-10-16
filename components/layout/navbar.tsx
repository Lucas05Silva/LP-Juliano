"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppIcon } from "@/components/icons";
import { mobileMenu, mobileMenuItem, navSlideDown } from "@/lib/animations";
import { CTA_LABEL, NAV_LINKS, SITE } from "@/lib/constants";

const SCROLL_THRESHOLD = 50;
const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));
const LINE_EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

function useScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isScrolled;
}

function useActiveSection() {
  const [active, setActive] = useState<string>(SECTION_IDS[0]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#inicio"
      onClick={onClick}
      aria-label={`${SITE.name} Fotografia: voltar ao início`}
      className="group flex flex-col leading-none transition-opacity duration-300 hover:opacity-80 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/50"
    >
      <span className="font-display text-lg font-light tracking-[0.04em] text-brand-cream lg:text-xl">
        {SITE.name}
      </span>
      <span className="mt-1 font-body text-[8px] uppercase tracking-[0.25em] text-brand-gold/80">
        Fotografia
      </span>
    </a>
  );
}

function MenuToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  const line = `absolute left-1/2 h-px w-[22px] -translate-x-1/2 bg-brand-cream transition-all duration-300 ${LINE_EASE}`;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className="relative -mr-2.5 size-11 rounded-button focus-visible:outline-2 focus-visible:outline-brand-gold/50 lg:hidden"
    >
      <span className={`${line} ${isOpen ? "top-1/2 rotate-45" : "top-[15px]"}`} />
      <span className={`${line} top-1/2 ${isOpen ? "opacity-0" : "opacity-100"}`} />
      <span className={`${line} ${isOpen ? "top-1/2 -rotate-45" : "top-[28px]"}`} />
    </button>
  );
}

export function Navbar() {
  const isScrolled = useScrolled();
  const active = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);

  const showSurface = isScrolled && !isOpen;

  return (
    <>
      <motion.header
        variants={navSlideDown}
        initial="hidden"
        animate="visible"
        className={`fixed inset-x-0 top-0 z-50 border-b-[0.5px] transition-[background-color,border-color,backdrop-filter] duration-500 ${
          showSurface
            ? "border-white/[0.06] bg-brand-bg/80 backdrop-blur-[16px] backdrop-saturate-[180%]"
            : "border-transparent bg-transparent"
        }`}
      >
        <Container className="flex h-16 items-center justify-between lg:h-20">
          <Logo onClick={close} />

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "location" : undefined}
                      className={`inline-block font-body text-[13px] transition-all duration-300 ease-out hover:-translate-y-px hover:text-brand-cream focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/50 ${
                        isActive ? "font-medium text-brand-gold" : "font-normal text-brand-cream/70"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button
              href={SITE.whatsapp}
              ariaLabel={`${CTA_LABEL} pelo WhatsApp (abre em nova aba)`}
            >
              {CTA_LABEL}
            </Button>
          </div>

          <MenuToggle isOpen={isOpen} onClick={() => setIsOpen((v) => !v)} />
        </Container>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-brand-bg/95 px-6 backdrop-blur-[20px] lg:hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(201,169,110,0.07)_0%,transparent_65%)]"
            />

            <nav aria-label="Navegação mobile" className="relative">
              <ul className="flex flex-col items-center gap-6">
                {NAV_LINKS.map((link) => {
                  const isActive = active === link.href.slice(1);
                  return (
                    <motion.li key={link.href} variants={mobileMenuItem}>
                      <a
                        href={link.href}
                        onClick={close}
                        aria-current={isActive ? "location" : undefined}
                        className={`font-display text-[28px] font-light transition-colors duration-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/50 ${
                          isActive ? "italic text-brand-gold" : "text-brand-cream hover:text-brand-gold"
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <motion.span
              variants={mobileMenuItem}
              aria-hidden="true"
              className="relative my-10 h-px w-10 bg-brand-gold/30"
            />

            <motion.div variants={mobileMenuItem} className="relative">
              <Button
                href={SITE.whatsapp}
                size="large"
                onClick={close}
                icon={<WhatsAppIcon />}
                ariaLabel={`${CTA_LABEL} pelo WhatsApp (abre em nova aba)`}
              >
                {CTA_LABEL}
              </Button>
            </motion.div>

            <motion.p
              variants={mobileMenuItem}
              className="relative mt-8 font-body text-[11px] uppercase tracking-[0.2em] text-brand-cream/30"
            >
              {SITE.location}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
