"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionFade } from "@/components/ui/section-fade";
import { SectionHeader } from "@/components/ui/section-header";
import {
  CalendarCheckIcon,
  CameraIcon,
  GiftIcon,
  MessageCircleIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { revealOnScroll } from "@/lib/animations";
import { SITE, STEPS, type StepIcon } from "@/lib/constants";

const ICONS: Record<StepIcon, ComponentType<{ size?: number; className?: string }>> = {
  message: MessageCircleIcon,
  calendar: CalendarCheckIcon,
  camera: CameraIcon,
  gift: GiftIcon,
};

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="how-it-works-heading"
      className="relative isolate overflow-hidden bg-brand-bg pb-40 pt-24 sm:pb-48 sm:pt-32 lg:pb-56 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_30%,rgba(201,169,110,0.05)_0%,transparent_50%)]"
      />
      <SectionFade to="cream" />

      <Container>
        <SectionHeader
          id="how-it-works-heading"
          tone="dark"
          ornament="none"
          eyebrow="Como funciona"
          title="Simples assim, do contato à entrega"
          subtitle="Sem burocracia, sem complicação. Quatro passos e você já pode relaxar."
          className="mb-14 lg:mb-16"
        />

        <div className="relative mx-auto max-w-md lg:max-w-none">
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute left-[12.5%] right-[12.5%] top-9 hidden h-px origin-left bg-[linear-gradient(to_right,rgba(201,169,110,0.15),rgba(201,169,110,0.4)_50%,rgba(201,169,110,0.15))] lg:block"
          />

          <ol className="relative flex flex-col lg:grid lg:grid-cols-4">
            {STEPS.map((step, i) => {
              const Icon = ICONS[step.icon];
              const isLast = i === STEPS.length - 1;
              return (
                <motion.li
                  key={step.number}
                  {...revealOnScroll}
                  custom={i * 0.15}
                  className="group flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:px-4 lg:text-center"
                >
                  <div className="flex flex-col items-center lg:mb-6">
                    <span
                      aria-hidden="true"
                      className="flex size-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-brand-gold/30 bg-brand-card font-display text-xl font-semibold lining-nums text-brand-gold transition-colors duration-[400ms] group-hover:border-brand-gold group-hover:bg-[color-mix(in_srgb,var(--color-brand-gold)_10%,var(--color-brand-card))] lg:size-[72px] lg:text-2xl"
                    >
                      {step.number}
                    </span>
                    {!isLast && <span aria-hidden="true" className="my-2 w-px flex-1 bg-brand-gold/15 lg:hidden" />}
                  </div>

                  <div className={`pt-2.5 lg:pt-0 ${isLast ? "" : "pb-10 lg:pb-0"}`}>
                    <Icon size={28} className="mb-4 hidden text-brand-gold/60 [stroke-width:1.5] lg:mx-auto lg:block" />
                    <h3 className="mb-2 font-display text-[22px] font-normal leading-tight text-brand-cream">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm leading-[1.6] text-brand-cream/55 lg:mx-auto lg:max-w-[220px]">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <motion.div {...revealOnScroll} custom={0.5} className="mt-14 flex justify-center">
          <Button
            href={SITE.whatsapp}
            size="large"
            icon={<WhatsAppIcon />}
            ariaLabel="Dê o primeiro passo: fale pelo WhatsApp (abre em nova aba)"
          >
            Dê o Primeiro Passo
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
