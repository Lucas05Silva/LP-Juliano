"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CameraIcon, CheckIcon, CrownIcon, RingsIcon, WhatsAppIcon } from "@/components/icons";
import { revealOnScroll } from "@/lib/animations";
import { SERVICES, SITE, type ServiceIcon } from "@/lib/constants";

type Service = (typeof SERVICES)[number];

const ICONS: Record<ServiceIcon, ComponentType<{ size?: number; className?: string }>> = {
  rings: RingsIcon,
  crown: CrownIcon,
  camera: CameraIcon,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICONS[service.icon];
  const isLast = index === SERVICES.length - 1;

  return (
    <motion.article
      {...revealOnScroll}
      custom={0.1 * (index + 1)}
      aria-labelledby={`service-${service.id}`}
      aria-describedby={service.featured ? `service-${service.id}-badge` : undefined}
      className={`relative flex flex-col rounded-card border p-7 transition-[translate,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-brand-gold/20 hover:shadow-[0_16px_48px_rgba(201,169,110,0.08)] sm:p-8 lg:p-9 ${
        service.featured
          ? "border-brand-gold/30 bg-[linear-gradient(135deg,rgba(201,169,110,0.08)_0%,#1a1b21_50%)] hover:border-brand-gold/50"
          : "border-brand-cream/[0.06] bg-brand-card"
      } ${isLast ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-12px)] lg:col-span-1 lg:w-auto" : ""}`}
    >
      {service.featured && (
        <span
          id={`service-${service.id}-badge`}
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-brand-gold px-4 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-bg shadow-[0_4px_16px_rgba(201,169,110,0.25)]"
        >
          Mais popular
        </span>
      )}

      <div className="mb-6 flex size-[72px] items-center justify-center rounded-2xl bg-brand-gold/[0.06] ring-1 ring-inset ring-brand-gold/10">
        <Icon size={36} className="text-brand-gold [stroke-width:1.5]" />
      </div>

      <h3 id={`service-${service.id}`} className="mb-3 font-display text-[26px] font-normal leading-tight text-brand-cream">
        {service.title}
      </h3>

      <p className="mb-6 font-body text-sm leading-[1.7] text-brand-cream/55">{service.description}</p>

      <div aria-hidden="true" className="mb-6 h-px w-full bg-brand-cream/[0.08]" />

      <ul className="mb-7 flex grow flex-col gap-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 font-body text-sm text-brand-cream/70">
            <CheckIcon className="mt-0.5 shrink-0 text-brand-gold" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href={SITE.whatsapp}
        variant={service.featured ? "filled" : "outline"}
        icon={<WhatsAppIcon size={14} />}
        ariaLabel={`Solicitar orçamento de ${service.title} pelo WhatsApp (abre em nova aba)`}
        className="w-full"
      >
        Solicitar Orçamento
      </Button>
    </motion.article>
  );
}

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-brand-bg pb-40 pt-24 sm:pb-48 sm:pt-32 lg:pb-56 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,169,110,0.05)_0%,transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(201,169,110,0.035)_0%,transparent_40%)]"
      />
      <div
        aria-hidden="true"
        className="fade-to-cream pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 sm:h-40 lg:h-48"
      />

      <Container>
        <header className="mx-auto mb-14 max-w-[640px] text-center">
          <motion.p
            {...revealOnScroll}
            className="mb-4 inline-flex items-center gap-4 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold"
          >
            <span aria-hidden="true" className="h-px w-10 bg-brand-gold/30" />
            Nossos serviços
            <span aria-hidden="true" className="h-px w-10 bg-brand-gold/30" />
          </motion.p>

          <motion.h2
            {...revealOnScroll}
            custom={0.1}
            id="services-heading"
            className="mb-4 font-display text-[32px] font-light italic leading-[1.2] text-brand-cream sm:text-[38px] lg:text-[44px]"
          >
            Escolha a cobertura ideal
          </motion.h2>

          <motion.p
            {...revealOnScroll}
            custom={0.15}
            className="mx-auto max-w-[560px] font-body text-[15px] leading-[1.7] text-brand-cream/50 sm:text-base"
          >
            Pacotes pensados para cada tipo de evento. Tudo personalizado para que você não precise
            se preocupar com nada no grande dia.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.p
          {...revealOnScroll}
          custom={0.4}
          className="mx-auto mt-10 max-w-[480px] text-center font-body text-sm leading-relaxed text-brand-cream/50"
        >
          Cada serviço é personalizado de acordo com suas necessidades. Entre em contato para um
          orçamento sob medida.
        </motion.p>
      </Container>
    </section>
  );
}
