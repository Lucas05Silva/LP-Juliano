"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CameraIcon, ChevronDownIcon, MapPinIcon, StarIcon, WhatsAppIcon } from "@/components/icons";
import { heroFadeUp, scaleFadeIn } from "@/lib/animations";
import { CTA_LABEL, HERO, SITE } from "@/lib/constants";

const OVERLAY = `linear-gradient(
  to bottom,
  rgba(15, 16, 20, 0.40) 0%,
  rgba(15, 16, 20, 0.50) 40%,
  rgba(15, 16, 20, 0.75) 75%,
  rgba(15, 16, 20, 1.00) 100%
)`;

function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion) video.pause();
    else video.play().catch(() => {});
  }, [reduceMotion]);

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-brand-bg bg-[radial-gradient(ellipse_at_50%_30%,rgba(201,169,110,0.05)_0%,transparent_70%)]"
      />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
        // No mobile (retrato) só ~1/4 da largura do vídeo 16:9 aparece; enquadra a lente da câmera
        className="absolute inset-0 size-full object-cover max-md:object-[82%_50%]"
      >
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div aria-hidden="true" className="absolute inset-0 z-[1]" style={{ background: OVERLAY }} />
      {/* Escurecimento extra só no mobile: a lente em close fica mais clara atrás do texto */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] bg-brand-bg/20 md:hidden" />
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 z-[1] opacity-[0.07] mix-blend-overlay" />
    </>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 z-[2] hidden -translate-x-1/2 md:block">
      <motion.a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="flex flex-col items-center gap-2 text-brand-cream/30 transition-colors duration-300 hover:text-brand-cream/60 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/50"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex"
        >
          <ChevronDownIcon />
        </motion.span>
      </motion.a>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Apresentação"
      className="relative isolate min-h-svh overflow-hidden"
    >
      <HeroBackground />

      <Container className="relative z-[2] flex min-h-svh items-center justify-center pb-16 pt-20 text-center">
        <div className="flex w-full flex-col items-center">
          <motion.p
            variants={scaleFadeIn}
            custom={0.2}
            initial="hidden"
            animate="visible"
            className="mb-7 inline-flex items-center gap-1.5 rounded-full border-[0.5px] border-brand-gold/20 bg-brand-gold/10 px-[18px] py-1.5 font-body text-[11px] font-medium uppercase tracking-[0.12em] text-brand-gold backdrop-blur-sm"
          >
            <MapPinIcon className="shrink-0" />
            {SITE.location}
          </motion.p>

          <motion.h1
            variants={heroFadeUp}
            custom={0.4}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-5 max-w-[700px] font-display text-[36px] font-light italic leading-[1.1] tracking-[0.02em] text-brand-cream [text-shadow:0_2px_30px_rgba(15,16,20,0.5)] min-[375px]:text-[40px] md:text-[56px] lg:text-[72px]"
          >
            Eternizando seus
            <br />
            <span className="text-brand-gold">melhores</span> momentos.
          </motion.h1>

          <motion.p
            variants={heroFadeUp}
            custom={0.6}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-9 max-w-[520px] font-body text-[15px] leading-[1.7] text-brand-cream/60 md:text-base"
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            variants={heroFadeUp}
            custom={0.8}
            initial="hidden"
            animate="visible"
            className="flex w-full flex-col items-stretch gap-4 min-[480px]:w-auto min-[480px]:flex-row min-[480px]:items-center"
          >
            <Button
              href={SITE.whatsapp}
              size="large"
              icon={<WhatsAppIcon />}
              ariaLabel={`${CTA_LABEL} pelo WhatsApp (abre em nova aba)`}
            >
              {CTA_LABEL}
            </Button>
            <Button href="#portfolio" variant="outline" size="large" icon={<CameraIcon />}>
              Ver Portfólio
            </Button>
          </motion.div>

          <motion.p
            variants={heroFadeUp}
            custom={1.0}
            initial="hidden"
            animate="visible"
            className="mt-8 text-balance font-body text-xs text-brand-cream/30"
          >
            <StarIcon className="mr-2 inline-block -translate-y-px align-middle text-brand-gold/40" />
            {HERO.socialProof}
          </motion.p>
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
