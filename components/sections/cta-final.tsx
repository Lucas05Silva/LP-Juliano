"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionFade } from "@/components/ui/section-fade";
import { HeartIcon, InstagramIcon, SparkleIcon, WhatsAppIcon } from "@/components/icons";
import { revealOnScroll } from "@/lib/animations";
import { SITE } from "@/lib/constants";

export function CTAFinal() {
  return (
    <section
      id="contato"
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-brand-cream pb-40 pt-24 sm:pb-48 sm:pt-32 lg:pb-56 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,169,110,0.14)_0%,transparent_55%)]"
      />
      <span aria-hidden="true" className="absolute inset-y-0 left-[15%] -z-10 hidden w-px bg-brand-gold/15 lg:block" />
      <span aria-hidden="true" className="absolute inset-y-0 right-[15%] -z-10 hidden w-px bg-brand-gold/15 lg:block" />
      <SectionFade to="dark" />

      <Container maxWidth="max-w-4xl">
        <motion.div
          {...revealOnScroll}
          className="relative mx-auto max-w-[720px] overflow-hidden rounded-[32px] border border-brand-gold/15 bg-brand-bg bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,169,110,0.12)_0%,transparent_60%)] px-6 py-10 text-center shadow-[0_0_0_1px_rgba(201,169,110,0.1),0_24px_80px_rgba(15,16,20,0.3),inset_0_1px_0_rgba(201,169,110,0.08)] sm:px-12 sm:py-14"
        >
          <span aria-hidden="true" className="pointer-events-none absolute -left-16 -top-16 size-48 rounded-full bg-brand-gold/[0.08] blur-3xl" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-16 size-56 rounded-full bg-brand-gold/[0.06] blur-3xl" />

          <motion.div {...revealOnScroll} custom={0.1} className="relative">
            <div className="mx-auto mb-7 flex size-16 animate-float items-center justify-center rounded-full border border-brand-gold/15 bg-brand-gold/5">
              <HeartIcon size={30} className="text-brand-gold/70 [stroke-width:1.5]" />
            </div>
          </motion.div>

          <motion.h2
            {...revealOnScroll}
            custom={0.2}
            id="cta-heading"
            className="relative mx-auto mb-4 max-w-[480px] font-display text-[30px] font-light italic leading-[1.2] text-brand-cream sm:text-[40px]"
          >
            Pronto para eternizar seus momentos?
          </motion.h2>

          <motion.p
            {...revealOnScroll}
            custom={0.3}
            className="relative mx-auto mb-8 max-w-[440px] font-body text-[15px] leading-[1.7] text-brand-cream/60"
          >
            Entre em contato e vamos conversar sobre como transformar seus momentos mais especiais em
            memórias que duram para sempre. Sem compromisso.
          </motion.p>

          <motion.div
            {...revealOnScroll}
            custom={0.4}
            className="relative flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Button
              href={SITE.whatsapp}
              size="large"
              icon={<WhatsAppIcon size={18} />}
              ariaLabel="Solicitar orçamento grátis pelo WhatsApp (abre em nova aba)"
              className="animate-pulse-glow"
            >
              Solicitar Orçamento Grátis
            </Button>
            <Button
              href={SITE.instagram}
              variant="outline"
              size="large"
              icon={<InstagramIcon />}
              ariaLabel="Ver portfólio no Instagram (abre em nova aba)"
            >
              Ver Portfólio no Instagram
            </Button>
          </motion.div>

          <motion.p
            {...revealOnScroll}
            custom={0.5}
            className="relative mt-6 inline-flex items-center gap-2 font-body text-xs text-brand-cream/50"
          >
            <SparkleIcon className="text-brand-gold/60" />
            WhatsApp · respondo em até 2 horas
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
