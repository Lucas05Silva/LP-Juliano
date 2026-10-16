import { Container } from "@/components/ui/container";
import { FacebookIcon, HeartIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { CONTACT, NAV_LINKS, SITE } from "@/lib/constants";

const FOOTER_LINKS = NAV_LINKS.filter((link) => link.href !== "#inicio");

const SOCIALS = [
  { label: "Instagram", href: SITE.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: SITE.facebook, Icon: FacebookIcon },
] as const;

const columnTitle =
  "mb-4 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-cream/80";
const focusRing =
  "focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/50";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-brand-bg pb-8 pt-16 sm:pt-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(201,169,110,0.05)_0%,transparent_50%)]"
      />

      <Container>
        <div className="grid gap-10 text-center lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12 lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <a href="#inicio" aria-label={`${SITE.name} Fotografia: voltar ao início`} className={`flex flex-col leading-none ${focusRing}`}>
              <span className="font-display text-[22px] font-light tracking-[0.04em] text-brand-cream">{SITE.name}</span>
              <span className="mt-1 font-body text-[8px] uppercase tracking-[0.25em] text-brand-gold/70">Fotografia</span>
            </a>
            <p className="mt-3 font-body text-[13px] text-brand-cream/55">{SITE.tagline}</p>

            <ul className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (abre em nova aba)`}
                    className="flex size-9 items-center justify-center rounded-[10px] border border-brand-cream/10 text-brand-cream/55 transition-colors duration-300 hover:border-brand-gold/30 hover:bg-brand-gold/5 hover:text-brand-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold/50"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <span aria-hidden="true" className="mx-auto block h-px w-10 bg-brand-cream/10 lg:hidden" />

          <nav aria-label="Rodapé">
            <p className={`${columnTitle} hidden lg:block`}>Navegação</p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 lg:flex-col lg:items-start">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`inline-block font-body text-sm text-brand-cream/55 transition-all duration-300 hover:text-brand-cream lg:hover:translate-x-1 ${focusRing}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <span aria-hidden="true" className="mx-auto block h-px w-10 bg-brand-cream/10 lg:hidden" />

          <div>
            <p className={`${columnTitle} hidden lg:block`}>Contato</p>
            <ul className="flex flex-col items-center gap-3 font-body text-sm text-brand-cream/55 lg:items-start">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-[3px] hidden shrink-0 text-brand-gold/50 lg:block" />
                {SITE.location}
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-2.5 transition-colors duration-300 hover:text-brand-cream ${focusRing}`}
                >
                  <PhoneIcon className="mt-[3px] hidden shrink-0 text-brand-gold/50 lg:block" />
                  {CONTACT.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className={`flex items-start gap-2.5 break-all transition-colors duration-300 hover:text-brand-cream ${focusRing}`}
                >
                  <MailIcon className="mt-[3px] hidden shrink-0 text-brand-gold/50 lg:block" />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6 mt-8 h-px w-full bg-brand-cream/[0.06] lg:mt-10" />

        <div className="flex flex-col items-center gap-2 text-center font-body text-xs text-brand-cream/50 lg:flex-row lg:justify-between lg:text-left">
          <p>
            © {CONTACT.copyrightYear} {SITE.name} Fotografia. Todos os direitos reservados.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Feito com <HeartIcon size={12} className="text-brand-gold/60" />
            <span className="sr-only">amor</span> por{" "}
            {/* TODO: Confirmar se o Juliano quer a marca FlowSys no footer */}
            {CONTACT.credit.url ? (
              <a
                href={CONTACT.credit.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 hover:text-brand-gold ${focusRing}`}
              >
                {CONTACT.credit.name}
              </a>
            ) : (
              CONTACT.credit.name
            )}
          </p>
        </div>
      </Container>
    </footer>
  );
}
