import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/motion-provider";
import { cormorant, inter } from "@/lib/fonts";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Juliano Santos Fotografia | Casamentos e Debutantes",
  description:
    "Fotógrafo especialista em casamentos e debutantes em Cambé, Londrina e região. Eternizando seus melhores momentos com fotografia premium.",
  openGraph: {
    title: "Juliano Santos Fotografia",
    description: "Eternizando seus melhores momentos.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/hero-poster.jpg", width: 1280, height: 720, alt: "Juliano Santos Fotografia" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1014",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
