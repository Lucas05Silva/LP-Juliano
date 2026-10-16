interface SectionFadeProps {
  to: "dark" | "cream";
}

export function SectionFade({ to }: SectionFadeProps) {
  return (
    <div
      aria-hidden="true"
      className={`${to === "dark" ? "fade-to-dark" : "fade-to-cream"} pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 sm:h-40 lg:h-48`}
    />
  );
}
