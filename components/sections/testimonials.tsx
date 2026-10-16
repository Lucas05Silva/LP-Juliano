"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionFade } from "@/components/ui/section-fade";
import { SectionHeader } from "@/components/ui/section-header";
import { StarIcon } from "@/components/icons";
import { revealOnScroll } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";

const DESKTOP_LIMIT = 3;

type Testimonial = (typeof TESTIMONIALS)[number];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-brand-cream-dark bg-white p-6 shadow-[0_4px_24px_rgba(15,16,20,0.04)] transition-[translate,box-shadow] duration-500 ease-out sm:p-8 lg:hover:-translate-y-1 lg:hover:shadow-[0_16px_48px_rgba(15,16,20,0.08)]">
      <span aria-hidden="true" className="mb-2 block font-display text-[64px] font-semibold leading-[0.8] text-brand-gold/40">
        &ldquo;
      </span>

      <blockquote className="mb-6 grow font-display text-[20px] font-normal italic leading-[1.55] text-brand-ink">
        <p>{testimonial.text}</p>
      </blockquote>

      <span aria-hidden="true" className="mb-5 block h-px w-10 bg-brand-gold/40" />

      <figcaption className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 font-body text-sm font-semibold text-brand-gold-deep"
        >
          {testimonial.initials}
        </span>
        <span className="min-w-0">
          <cite className="block font-body text-sm font-semibold not-italic text-brand-bg">{testimonial.name}</cite>
          <span className="block font-body text-xs text-brand-muted">{testimonial.role}</span>
        </span>
      </figcaption>

      <div
        role="img"
        aria-label={`Avaliação ${testimonial.rating} de 5 estrelas`}
        className="mt-4 flex gap-0.5 text-brand-gold"
      >
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} size={14} className={i < testimonial.rating ? "" : "opacity-25"} />
        ))}
      </div>
    </figure>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const slideWidth = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return 0;
    return first.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0");
  };

  const onScroll = () => {
    const width = slideWidth();
    if (!width || !trackRef.current) return;
    setActive(Math.round(trackRef.current.scrollLeft / width));
  };

  const goTo = (index: number) => {
    trackRef.current?.scrollTo({ left: index * slideWidth(), behavior: "smooth" });
  };

  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-brand-cream pb-40 pt-24 sm:pb-48 sm:pt-32 lg:pb-56 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,rgba(201,169,110,0.10)_0%,transparent_55%)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-[10%] -z-10 hidden select-none font-display text-[300px] font-semibold leading-none text-brand-gold/10 lg:block"
      >
        &rdquo;
      </span>
      <SectionFade to="dark" />

      <Container>
        <SectionHeader
          id="testimonials-heading"
          tone="light"
          ornament="quote"
          eyebrow="Depoimentos"
          title="O que dizem nossos clientes"
          subtitle="Quem confiou no nosso trabalho tem algo a dizer. Veja o que nossos clientes sentiram ao receber suas fotos."
        />

        <motion.div {...revealOnScroll} custom={0.2} role="region" aria-label="Depoimentos de clientes">
          <ul
            ref={trackRef}
            onScroll={onScroll}
            tabIndex={0}
            className="scrollbar-hide -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 pt-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/50 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:p-0"
          >
            {TESTIMONIALS.map((t, i) => (
              <li
                key={t.id}
                className={`w-[85%] shrink-0 snap-start sm:w-[400px] lg:w-auto ${i >= DESKTOP_LIMIT ? "lg:hidden" : ""}`}
              >
                <TestimonialCard testimonial={t} />
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-center gap-1 lg:hidden">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Depoimento ${i + 1} de ${TESTIMONIALS.length}`}
                aria-current={active === i}
                className="flex size-6 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-brand-gold/60"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    active === i ? "size-2 bg-brand-gold" : "size-1.5 bg-[#d4cec5]"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
