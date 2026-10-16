"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ImageIcon, InstagramIcon } from "@/components/icons";
import { Lightbox } from "@/components/lightbox";
import { revealOnScroll } from "@/lib/animations";
import {
  CATEGORY_LABEL,
  PHOTO_FILTERS,
  PORTFOLIO_PHOTOS,
  SITE,
  type PhotoCategory,
} from "@/lib/constants";

type Photo = (typeof PORTFOLIO_PHOTOS)[number];

// Bento de 3 colunas: padrão de 6 que fecha 3 linhas sem buracos (tall · normal · tall / wide · normal).
// grid-flow-dense cobre quantidades que não fecham o padrão (ex.: 7 ou 8 fotos).
const BENTO = ["lg:row-span-2", "", "lg:row-span-2", "", "lg:col-span-2", ""];

function tileClasses(index: number, isBento: boolean) {
  const tabletAspect = Math.floor(index / 2) % 2 === 0 ? "sm:aspect-[3/4]" : "sm:aspect-[4/3]";
  const desktop = isBento ? `lg:aspect-auto ${BENTO[index % BENTO.length]}` : "lg:aspect-[3/4]";
  return `aspect-[3/4] ${tabletAspect} ${desktop}`;
}

function PhotoPlaceholder({ photo, large = false }: { photo: Photo; large?: boolean }) {
  return (
    // TODO: Substituir por fotos reais do Juliano
    <div className="flex size-full flex-col items-center justify-center gap-3 bg-[linear-gradient(145deg,#e8e0d4_0%,#d4cec5_100%)] px-4 text-center">
      <ImageIcon size={large ? 48 : 32} className="text-brand-gold/50" />
      <span className="font-body text-[11px] text-brand-gold-deep/60">{photo.title}</span>
    </div>
  );
}

function PhotoMedia({
  photo,
  hasImage,
  sizes,
  large,
}: {
  photo: Photo;
  hasImage: boolean;
  sizes: string;
  large?: boolean;
}) {
  if (!hasImage) return <PhotoPlaceholder photo={photo} large={large} />;
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      className={large ? "object-contain" : "object-cover transition-transform duration-700 ease-out group-hover:scale-105"}
    />
  );
}

function Filters({
  active,
  onChange,
}: {
  active: PhotoCategory;
  onChange: (id: PhotoCategory) => void;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (i + step + PHOTO_FILTERS.length) % PHOTO_FILTERS.length;
    onChange(PHOTO_FILTERS[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className="-mx-4 mb-12 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
      <div
        role="tablist"
        aria-label="Filtrar portfólio por categoria"
        className="mx-auto flex w-max items-center gap-2 sm:w-auto sm:flex-wrap sm:justify-center"
      >
        {PHOTO_FILTERS.map((filter, i) => {
          const isActive = filter.id === active;
          return (
            <button
              key={filter.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`filter-${filter.id}`}
              aria-selected={isActive}
              aria-controls="portfolio-grid"
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(filter.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`relative isolate whitespace-nowrap rounded-full border px-5 py-2 font-body text-[13px] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold/60 ${
                isActive
                  ? "border-brand-bg text-brand-cream"
                  : "border-brand-cream-dark text-brand-muted hover:border-brand-gold/40 hover:text-brand-ink"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="portfolio-filter-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-full bg-brand-bg"
                />
              )}
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function PortfolioGallery({ availableIds }: { availableIds: number[] }) {
  const [filter, setFilter] = useState<PhotoCategory>("todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = useMemo(
    () => PORTFOLIO_PHOTOS.filter((p) => filter === "todos" || p.category === filter),
    [filter],
  );
  const hasImage = (photo: Photo) => availableIds.includes(photo.id);
  const isBento = filter === "todos";
  const cols = Math.min(photos.length, 3);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative isolate overflow-hidden bg-brand-cream pb-40 pt-24 sm:pb-48 sm:pt-32 lg:pb-56 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_25%,rgba(201,169,110,0.10)_0%,transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="fade-to-dark pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 sm:h-40 lg:h-48"
      />

      <Container>
        <header className="mx-auto mb-10 max-w-[640px] text-center">
          <motion.div {...revealOnScroll} className="mb-4 flex flex-col items-center gap-3">
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold-deep">
              Portfólio
            </p>
            <span aria-hidden="true" className="h-[1.5px] w-10 bg-brand-gold/60" />
          </motion.div>

          <motion.h2
            {...revealOnScroll}
            custom={0.1}
            id="portfolio-heading"
            className="mb-4 font-display text-[32px] font-light italic leading-[1.2] text-brand-bg sm:text-[38px] lg:text-[44px]"
          >
            Veja com seus próprios olhos
          </motion.h2>

          <motion.p
            {...revealOnScroll}
            custom={0.15}
            className="mx-auto max-w-[560px] font-body text-[15px] leading-[1.7] text-brand-muted sm:text-base"
          >
            Uma seleção dos trabalhos mais recentes. Cada imagem fala por si.
          </motion.p>
        </header>

        <motion.div {...revealOnScroll} custom={0.2}>
          <LayoutGroup>
            <Filters active={filter} onChange={setFilter} />
          </LayoutGroup>

          <motion.ul
            layout
            id="portfolio-grid"
            role="tabpanel"
            aria-labelledby={`filter-${filter}`}
            style={{ "--cols": cols } as React.CSSProperties}
            className={`mx-auto grid grid-cols-2 gap-3 sm:gap-4 ${
              isBento
                ? "lg:grid-cols-3 lg:auto-rows-[280px] lg:grid-flow-row-dense"
                : "lg:max-w-[calc(var(--cols)*33.333%)] lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"
            }`}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {photos.map((photo, i) => (
                <motion.li
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className={tileClasses(i, isBento)}
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Ampliar foto: ${photo.alt}`}
                    className="group relative block size-full cursor-pointer overflow-hidden rounded-card shadow-[0_8px_30px_rgba(15,16,20,0.06)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
                  >
                    <PhotoMedia
                      photo={photo}
                      hasImage={hasImage(photo)}
                      sizes={isBento && i % BENTO.length === 4 ? "(min-width: 1024px) 66vw, 50vw" : "(min-width: 1024px) 33vw, 50vw"}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 translate-y-4 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:p-5"
                    >
                      <span className="block font-body text-sm font-medium text-white">{photo.title}</span>
                      <span className="mt-1 block font-body text-xs text-white/70">
                        {CATEGORY_LABEL[photo.category]}
                      </span>
                    </span>
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </motion.div>

        <motion.div {...revealOnScroll} custom={0.1} className="mt-12 flex justify-center">
          <Button
            href={SITE.instagram}
            variant="outline-dark"
            icon={<InstagramIcon />}
            ariaLabel="Ver mais fotos no Instagram (abre em nova aba)"
          >
            Ver mais no Instagram
          </Button>
        </motion.div>
      </Container>

      <Lightbox
        items={photos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
        renderItem={(photo) => (
          <div
            className={`relative mx-auto h-full w-full overflow-hidden ${
              hasImage(photo) ? "" : "max-w-[min(90vw,calc(78vh*0.75))] rounded-card"
            }`}
          >
            <PhotoMedia photo={photo} hasImage={hasImage(photo)} sizes="90vw" large />
          </div>
        )}
        renderCaption={(photo) => (
          <>
            <p className="font-display text-xl font-light italic text-white">{photo.title}</p>
            <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-white/50">
              {CATEGORY_LABEL[photo.category]}
            </p>
          </>
        )}
      />
    </section>
  );
}
