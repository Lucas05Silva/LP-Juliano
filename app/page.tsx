import { BackToTop } from "@/components/back-to-top";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { CTAFinal } from "@/components/sections/cta-final";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Portfolio } from "@/components/sections/portfolio";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[70] rounded-button bg-brand-gold px-4 py-2 font-body text-sm font-medium text-brand-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
