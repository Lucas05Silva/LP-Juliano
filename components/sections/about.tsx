"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { CameraIcon } from "@/components/icons";
import { revealOnScroll } from "@/lib/animations";
import { ABOUT, SITE } from "@/lib/constants";

function Portrait() {
  return (
    <motion.div
      {...revealOnScroll}
      custom={0}
      className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:mx-0 lg:max-w-[420px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden translate-x-4 translate-y-4 rounded-card border border-brand-gold/40 lg:block"
      />

      <div className="group relative aspect-[3/4] overflow-hidden rounded-card border-[3px] border-brand-cream-dark bg-brand-cream-dark shadow-[0_20px_60px_rgba(15,16,20,0.12)] transition-[transform,box-shadow] duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_28px_80px_rgba(15,16,20,0.18)]">
        {ABOUT.photo ? (
          <Image
            src={ABOUT.photo}
            alt={`${SITE.name}, fotógrafo profissional`}
            fill
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 340px, 280px"
            className="object-cover"
          />
        ) : (
          // TODO: Substituir por foto real do Juliano (ABOUT.photo em lib/constants.ts)
          <div
            role="img"
            aria-label={`${SITE.name}, fotógrafo profissional`}
            className="flex size-full flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_50%_40%,rgba(201,169,110,0.12)_0%,transparent_70%)]"
          >
            <CameraIcon size={48} className="text-brand-gold/40" />
            <span className="font-body text-xs text-brand-gold-deep/50">Foto do Juliano</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-brand-cream pb-40 pt-44 sm:pb-48 sm:pt-52 lg:pb-56 lg:pt-60"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,rgba(201,169,110,0.10)_0%,transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="fade-from-dark absolute inset-x-0 top-0 -z-10 h-40 sm:h-48 lg:h-56"
      />
      <div
        aria-hidden="true"
        className="fade-to-dark absolute inset-x-0 bottom-0 -z-10 h-32 sm:h-40 lg:h-48"
      />

      <Container className="grid items-center gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-20 xl:gap-28">
        <Portrait />

        <div className="mx-auto w-full max-w-[540px] lg:mx-0">
          <motion.p
            {...revealOnScroll}
            custom={0.1}
            className="mb-4 inline-flex items-center gap-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold-deep"
          >
            <span aria-hidden="true" className="h-[1.5px] w-10 bg-brand-gold/60" />
            {ABOUT.eyebrow}
          </motion.p>

          <motion.h2
            {...revealOnScroll}
            custom={0.15}
            id="about-heading"
            className="mb-6 max-w-[500px] font-display text-[32px] font-light italic leading-[1.2] text-brand-bg sm:text-[38px] lg:text-[44px]"
          >
            {ABOUT.title}
          </motion.h2>

          <motion.div
            {...revealOnScroll}
            custom={0.2}
            className="space-y-5 font-body text-[15px] leading-[1.8] text-brand-ink sm:text-base"
          >
            {ABOUT.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.dl
            {...revealOnScroll}
            custom={0.3}
            className="mt-9 grid grid-cols-3 gap-5 border-t border-brand-cream-dark pt-8 sm:flex sm:gap-0"
          >
            {ABOUT.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse gap-1.5 sm:border-l sm:border-brand-cream-dark sm:px-8 sm:first:border-l-0 sm:first:pl-0"
              >
                <dt className="font-body text-[10px] font-medium uppercase leading-snug tracking-[0.08em] text-brand-muted sm:text-xs">
                  {stat.label}
                </dt>
                <dd className="font-display text-[28px] font-semibold leading-none lining-nums text-brand-gold-deep sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.p
            {...revealOnScroll}
            custom={0.4}
            className="mt-7 font-display text-xl font-light italic text-brand-gold-deep/80"
          >
            {SITE.name}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
