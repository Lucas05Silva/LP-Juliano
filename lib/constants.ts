/**
 * ═══════════════════════════════════════════════════════
 * NOTA SOBRE TEXTOS PLACEHOLDER
 * ═══════════════════════════════════════════════════════
 *
 * Todos os textos abaixo (bio, depoimentos, FAQ, steps)
 * são GENÉRICOS de propósito: servem para montar o layout.
 *
 * Ao substituir por conteúdo real do Juliano:
 * - Usar linguagem que o Juliano usa no dia a dia
 * - Incluir referências locais (Cambé, Londrina, norte do PR)
 * - Evitar clichês de fotografia ("eternizar momentos",
 *   "capturar emoções", "obra de arte")
 * - Preferir frases curtas e diretas
 * - Tom: profissional mas acessível (não formal demais)
 *
 * Itens marcados com // TODO precisam de dados reais.
 * ═══════════════════════════════════════════════════════
 */

export const SITE = {
  name: "Juliano Santos",
  title: "Fotografia & Videografia",
  tagline: "Eternizando seus melhores momentos.",
  location: "Cambé, Londrina e Região · PR",
  whatsapp: "https://api.whatsapp.com/message/F3MWONSYFYEIH1?autoload=1&app_absent=0",
  instagram: "https://www.instagram.com/julianosantosfotografia/",
  facebook: "https://www.facebook.com/julianosantosfotografia/",
  mklink: "https://mklink-juliano.vercel.app/",
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

export const HERO = {
  subheadline:
    "Fotógrafo especialista em casamentos, debutantes e ensaios. Transformo as emoções mais genuínas em memórias que duram para sempre.",
  // TODO: substituir pelos números reais do Juliano
  socialProof: "600+ casamentos fotografados · 8 anos de experiência",
} as const;

// TODO: bio, título e números reais do Juliano
export const ABOUT = {
  // TODO: foto em alta (retrato vertical, ~1200px de altura) — ex.: "/juliano-retrato.jpg"
  photo: null as string | null,
  eyebrow: "Sobre o fotógrafo",
  title: "Momentos reais, olhar de cinema",
  bio: [
    "Há mais de 8 anos, carrego minha câmera com a mesma paixão do primeiro dia. Cada casamento, cada debutante, cada ensaio é uma história única, e meu papel é garantir que nenhum detalhe, nenhuma emoção se perca no tempo.",
    "Minha abordagem combina fotojornalismo documental com direção artística sutil. Não crio poses artificiais. Capturo momentos reais com olhar cinematográfico. O resultado são imagens que você vai querer emoldurar, compartilhar e revisitar por décadas.",
  ],
  stats: [
    { value: "8+", label: "Anos de experiência" },
    { value: "600+", label: "Casamentos fotografados" },
    { value: "100%", label: "Satisfação garantida" },
  ],
} as const;

export type ServiceIcon = "rings" | "crown" | "camera";

// TODO: Dados e preços reais do Juliano
export const SERVICES = [
  {
    id: "casamentos",
    icon: "rings",
    title: "Casamentos",
    description:
      "Cobertura fotográfica completa do seu grande dia. Do making of à festa, cada emoção registrada com sensibilidade e arte.",
    features: [
      "Cobertura de 10+ horas",
      "Making of noiva e noivo",
      "Cerimônia e recepção completas",
      "300+ fotos editadas e tratadas",
      "Álbum digital em alta resolução",
    ],
    featured: false,
  },
  {
    id: "debutantes",
    icon: "crown",
    title: "Debutantes",
    description:
      "Seu debut merece ser fotografado como um editorial de moda. Ensaio pré-festa + cobertura completa da celebração.",
    features: [
      "Ensaio pré-festa em locação",
      "Cobertura da festa completa",
      "200+ fotos editadas e tratadas",
      "Álbum digital personalizado",
      "Preview no mesmo dia",
    ],
    featured: true,
  },
  {
    id: "ensaios",
    icon: "camera",
    title: "Ensaios",
    description:
      "Ensaios externos e em estúdio para casais, famílias, gestantes e retratos pessoais. Sua melhor versão em imagens.",
    features: [
      "Sessão de 1-2 horas",
      "Locação a combinar",
      "50+ fotos editadas",
      "Direção de poses natural",
      "Entrega em até 15 dias",
    ],
    featured: false,
  },
] as const satisfies readonly {
  id: string;
  icon: ServiceIcon;
  title: string;
  description: string;
  features: readonly string[];
  featured: boolean;
}[];

export type PhotoCategory = "todos" | "casamentos" | "debutantes" | "ensaios";

export const PHOTO_FILTERS: readonly { id: PhotoCategory; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "casamentos", label: "Casamentos" },
  { id: "debutantes", label: "Debutantes" },
  { id: "ensaios", label: "Ensaios" },
];

export const CATEGORY_LABEL: Record<Exclude<PhotoCategory, "todos">, string> = {
  casamentos: "Casamento",
  debutantes: "Debutante",
  ensaios: "Ensaio",
};

// TODO: Substituir por fotos reais do Juliano — basta salvar os arquivos em public/portfolio/
// com estes nomes; enquanto não existirem, a galeria mostra placeholders.
export const PORTFOLIO_PHOTOS = [
  {
    id: 1,
    src: "/portfolio/casamento-01.jpg",
    alt: "Casamento ao pôr do sol, noivos abraçados",
    title: "Marina & Rafael",
    category: "casamentos",
  },
  {
    id: 2,
    src: "/portfolio/debutante-01.jpg",
    alt: "Debutante com vestido rosa em jardim",
    title: "Ana Clara · 15 anos",
    category: "debutantes",
  },
  {
    id: 3,
    src: "/portfolio/ensaio-01.jpg",
    alt: "Ensaio de casal em campo de lavanda",
    title: "Ensaio Pré-Wedding",
    category: "ensaios",
  },
  {
    id: 4,
    src: "/portfolio/casamento-02.jpg",
    alt: "Troca de alianças na cerimônia",
    title: "Beatriz & Lucas",
    category: "casamentos",
  },
  {
    id: 5,
    src: "/portfolio/debutante-02.jpg",
    alt: "Debutante na pista de dança",
    title: "Julia · 15 anos",
    category: "debutantes",
  },
  {
    id: 6,
    src: "/portfolio/casamento-03.jpg",
    alt: "Noiva se preparando no making of",
    title: "Fernanda & Pedro",
    category: "casamentos",
  },
] as const satisfies readonly {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: Exclude<PhotoCategory, "todos">;
}[];

export type StepIcon = "message" | "calendar" | "camera" | "gift";

// TODO: Ajustar textos com informações reais do Juliano
export const STEPS = [
  {
    number: 1,
    icon: "message",
    title: "Contato",
    description:
      "Envie uma mensagem pelo WhatsApp ou formulário. Respondo em até 2 horas com todas as informações.",
  },
  {
    number: 2,
    icon: "calendar",
    title: "Reunião de Alinhamento",
    description:
      "Marcamos uma conversa para entender sua visão, definir detalhes e montar o pacote ideal para você.",
  },
  {
    number: 3,
    icon: "camera",
    title: "O Grande Dia",
    description:
      "No dia do evento, cuido de tudo. Você só precisa viver o momento. Eu registro cada emoção.",
  },
  {
    number: 4,
    icon: "gift",
    title: "Entrega das Fotos",
    description:
      "Em até 30 dias, você recebe o álbum digital completo, editado e tratado com carinho.",
  },
] as const satisfies readonly { number: number; icon: StepIcon; title: string; description: string }[];

// TODO: Substituir por depoimentos reais do Juliano
export const TESTIMONIALS = [
  {
    id: 1,
    text: "O Juliano superou todas as nossas expectativas. Cada foto é uma obra de arte. Ele capturou momentos que nem percebemos durante a cerimônia. Recomendo de olhos fechados!",
    name: "Marina Silva",
    role: "Noiva · Casamento 2024",
    initials: "MS",
    rating: 5,
  },
  {
    id: 2,
    text: "Meu debut ficou perfeito nas fotos! O Juliano tem uma sensibilidade incrível para capturar emoções. O ensaio pré-festa foi a melhor decisão que tomei.",
    name: "Ana Clara Souza",
    role: "Debutante · 2024",
    initials: "AC",
    rating: 5,
  },
  {
    id: 3,
    text: "Profissional excepcional. Discreto durante a cerimônia, atencioso com todos os detalhes e extremamente pontual. As fotos ficaram emocionantes. Choramos ao ver o álbum.",
    name: "Camila & Bruno",
    role: "Noivos · Casamento 2023",
    initials: "CB",
    rating: 5,
  },
  {
    id: 4,
    text: "Fizemos o ensaio de família e ficou lindo. O Juliano consegue deixar todo mundo à vontade, até as crianças colaboraram! Fotos naturais e cheias de carinho.",
    name: "Patrícia Mendes",
    role: "Ensaio Família · 2024",
    initials: "PM",
    rating: 5,
  },
] as const;

// TODO: Substituir por perguntas reais do Juliano
export const FAQ_ITEMS = [
  {
    question: "Qual o valor dos seus pacotes de fotografia?",
    answer:
      "Cada evento é único, por isso trabalho com orçamentos personalizados. O valor varia de acordo com o tipo de evento, duração da cobertura e serviços extras. Entre em contato pelo WhatsApp para receber uma proposta sob medida, sem compromisso.",
  },
  {
    question: "Com quanta antecedência preciso reservar a data?",
    answer:
      "Recomendo pelo menos 6 meses de antecedência para casamentos e 3 meses para debutantes e ensaios. Datas populares (como sábados entre setembro e março) costumam esgotar rápido. Entre em contato o quanto antes para garantir sua data.",
  },
  {
    question: "Como funciona a entrega das fotos?",
    answer:
      "As fotos são entregues em uma galeria online privada em alta resolução, com link exclusivo para download. O prazo médio é de 30 dias para casamentos e 15 dias para ensaios. Você também recebe um preview com as melhores fotos em até 48 horas após o evento.",
  },
  {
    question: "Você atende em outras cidades além de Cambé e Londrina?",
    answer:
      "Sim! Atendo em toda a região metropolitana de Londrina, norte do Paraná e também aceito eventos em outras cidades e estados mediante consulta. O deslocamento é combinado previamente e pode ter um custo adicional dependendo da distância.",
  },
  {
    question: "Posso escolher as fotos que serão editadas?",
    answer:
      "Sim. Após a curadoria inicial, disponibilizo todas as fotos aprovadas em uma galeria de seleção. Você pode marcar suas favoritas para tratamento especial. Todas as fotos do pacote recebem edição profissional completa: cor, luz, enquadramento e retoques.",
  },
  {
    question: "O que acontece se chover no dia do evento externo?",
    answer:
      "Chuva não é problema! Na verdade, algumas das fotos mais lindas nascem em dias nublados ou chuvosos! Tenho experiência em adaptar o ensaio a qualquer condição climática. Se preferir, podemos remarcar sem custo adicional.",
  },
] as const;

// TODO: Dados reais de contato do Juliano (telefone, e-mail) e URL da FlowSys LT
export const CONTACT = {
  phoneLabel: "Fale pelo WhatsApp",
  email: "contato@julianosantos.com.br",
  copyrightYear: 2026,
  credit: { name: "FlowSys LT", url: null as string | null },
} as const;

export const CTA_LABEL = "Solicite um Orçamento";
