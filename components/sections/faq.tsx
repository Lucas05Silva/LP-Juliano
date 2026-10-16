"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionFade } from "@/components/ui/section-fade";
import { SectionHeader } from "@/components/ui/section-header";
import { WhatsAppIcon } from "@/components/icons";
import { revealOnScroll } from "@/lib/animations";
import { FAQ_ITEMS, SITE } from "@/lib/constants";

// TODO: Ativar só depois de trocar FAQ_ITEMS pelas perguntas reais do Juliano.
// Schema FAQPage com conteúdo placeholder indexado no Google pode ser penalizado.
const FAQ_SCHEMA_ENABLED = false;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative flex size-5 shrink-0 items-center justify-center">
      <span className="absolute h-px w-4 bg-brand-gold/70" />
      <span
        className={`absolute h-4 w-px bg-brand-gold/70 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "rotate-90 scale-y-0" : "rotate-0"
        }`}
      />
    </span>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden bg-brand-bg pb-40 pt-24 sm:pb-48 sm:pt-32 lg:pb-56 lg:pt-40"
    >
      {FAQ_SCHEMA_ENABLED && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_20%,rgba(201,169,110,0.05)_0%,transparent_50%)]"
      />
      <SectionFade to="cream" />

      <Container maxWidth="max-w-3xl">
        <SectionHeader
          id="faq-heading"
          tone="dark"
          ornament="question"
          eyebrow="Perguntas frequentes"
          title="Sem surpresas, só clareza"
          subtitle="As perguntas que todo mundo faz antes de fechar. Se a sua não estiver aqui, é só me chamar no WhatsApp."
          className="mb-12"
        />

        <motion.div {...revealOnScroll} custom={0.2} className="border-t border-brand-cream/[0.08]">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="border-b border-brand-cream/[0.08]">
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold/50"
                  >
                    <span
                      className={`font-body text-[15px] font-medium leading-snug transition-colors duration-300 group-hover:text-brand-gold sm:text-base ${
                        isOpen ? "text-brand-gold" : "text-brand-cream"
                      }`}
                    >
                      {item.question}
                    </span>
                    <PlusMinus open={isOpen} />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[90%] pb-6 font-body text-sm leading-relaxed text-brand-cream/60">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        <motion.div {...revealOnScroll} custom={0.1} className="mt-10 flex flex-col items-center gap-5">
          <p className="text-center font-body text-[15px] text-brand-cream/55">
            Ainda tem dúvidas? Fale comigo diretamente.
          </p>
          <Button
            href={SITE.whatsapp}
            icon={<WhatsAppIcon />}
            ariaLabel="Falar no WhatsApp (abre em nova aba)"
          >
            Falar no WhatsApp
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
