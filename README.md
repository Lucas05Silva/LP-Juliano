# Juliano Santos Fotografia | Landing Page

Landing page do fotógrafo Juliano Santos (Cambé, Londrina e região · PR).

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · Framer Motion · TypeScript

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

## Deploy na Vercel

1. Em [vercel.com/new](https://vercel.com/new), importar o repositório `Lucas05Silva/LP-Juliano`.
2. Framework detectado automaticamente: **Next.js**. Não alterar build command nem output.
3. Nenhuma variável de ambiente é necessária. O domínio de produção é lido de
   `VERCEL_PROJECT_PRODUCTION_URL` (preenchida pela Vercel) para as metatags Open Graph.
4. Deploy. Cada push na `main` gera um novo deploy de produção.

## Estrutura

```
app/                  layout, página e estilos globais (paleta brand-* em globals.css)
components/layout/    navbar, footer
components/sections/  hero, sobre, serviços, portfólio, como funciona, depoimentos, FAQ, CTA
components/ui/        button, container, section-header, section-fade
lib/constants.ts      TODO o conteúdo da LP (textos, links, depoimentos, FAQ)
public/               vídeo e poster da hero, fotos
```

## Pendências de conteúdo (antes de divulgar)

Os textos atuais são placeholder. Os itens marcados com `// TODO` em `lib/constants.ts` precisam de dados reais:

- Bio, números e foto do Juliano (`ABOUT.photo`)
- Fotos do portfólio: salvar em `public/portfolio/` com os nomes de `PORTFOLIO_PHOTOS`
  (enquanto não existirem, a galeria mostra placeholders)
- Serviços, depoimentos e perguntas do FAQ reais
- Telefone e e-mail de contato (`CONTACT`)
- Depois de trocar o FAQ pelas perguntas reais, ativar `FAQ_SCHEMA_ENABLED` em
  `components/sections/faq.tsx` (schema FAQPage para o Google)
