import { SPECS } from './specs';
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => String(a + i));
const NUMEROS = range(36, 46);
const ROUPA = ['P', 'M', 'G', 'GG'];
const LUVA = ['P', 'M', 'G'];
const SPEC_PADRAO = [];

export const slugify = (text) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// Mensagem padrão por categoria (usada só se o produto não tiver a sua própria `mensagem`).
// n = nome do produto, t = tamanho escolhido.
const MENSAGENS = {
  Pés: (n, t) => `Olá! Tenho interesse em ${n}, número ${t}. Tem disponível? Qual o valor?`,
  Mãos: (n, t) => `Olá! Tenho interesse em ${n}, tamanho ${t}. Tem disponível? Qual o valor?`,
  Vestuário: (n, t) => `Olá! Tenho interesse em ${n}${t ? `, tamanho ${t}` : ''}. Tem disponível? Qual o valor?`,
  Cabeça: (n) => `Olá! Tenho interesse em ${n}. Tem em estoque? Qual o valor?`,
  Visual: (n) => `Olá! Tenho interesse em ${n}. Tem em estoque? Qual o valor?`,
  Auditiva: (n) => `Olá! Tenho interesse em ${n}. Tem em estoque? Qual o valor?`,
  Altura: (n) => `Olá! Quero saber sobre ${n}. Tem em estoque? Qual o valor?`,
  Pele: (n) => `Olá! Tenho interesse em ${n}. Tem em estoque? Qual o valor?`,
  Meias: (n) => `Olá! Tenho interesse em ${n}. Tem em estoque? Qual o valor?`,
  Sinalização: (n) => `Olá! Quero saber sobre ${n}. Tem em estoque? Qual o valor?`,
};
const MENSAGEM_PADRAO = (n, t) => `Olá! Tenho interesse em ${n}${t ? `, tamanho ${t}` : ''}. Qual o valor?`;
export const buildMessage = (product, size) =>
  product.mensagem
    ? product.mensagem.replaceAll('{tamanho}', size ?? '').replaceAll('{produto}', product.name)
    : (MENSAGENS[product.cat] ?? MENSAGEM_PADRAO)(product.name, size);

const item = (cat, rawName, sizes = [], opts = {}) => {
  const name = rawName.trim();
  const slug = slugify(name);
  return { cat, name, sizes, slug, specs: opts.specs ?? SPECS[slug] ?? SPEC_PADRAO, mensagem: opts.mensagem };
};

// Mensagem de cada item do WhatsApp: edite o texto de cada produto abaixo.
// Use {tamanho} onde o tamanho escolhido deve entrar (itens sem tamanho ignoram).
// Para trocar as especificações de um item, adicione `specs: ['linha 1', 'linha 2']` junto da mensagem.
// Sem preços de propósito: o valor é confirmado no atendimento.
// A foto do produto é achada pelo nome do arquivo: src/assets/produtos/<slug>.jpg
export const PRODUCTS = [
  // Pés
  item('Pés', 'Bota Premier Marluvas', NUMEROS, {
    mensagem: 'Olá! Tenho interesse na Bota Premier Marluvas, número {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Pés', 'Bota Nobuck Marluvas com Velcro', NUMEROS, {
    mensagem: 'Olá! Tenho interesse na Bota Nobuck Marluvas com Velcro, número {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Pés', 'Bota Nobuck Marluvas', NUMEROS, {
    mensagem: 'Olá! Tenho interesse na Bota Nobuck Marluvas, número {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Pés', 'Bota Nobuck Bracol', NUMEROS, {
    mensagem: 'Olá! Tenho interesse na Bota Nobuck Bracol, número {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Pés', 'Bota Eletricista Marluvas', NUMEROS, {
    mensagem: 'Olá! Tenho interesse na Bota Eletricista Marluvas, número {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Pés', 'Bota de Borracha Preta Vulcaflex Cano Médio', NUMEROS, {
    mensagem: 'Olá! Tenho interesse na Bota de Borracha Preta Vulcaflex Cano Médio, número {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Pés', 'Bota de Borracha Branca Vulcaflex Cano Médio', NUMEROS, {
    mensagem: 'Olá! Tenho interesse na Bota de Borracha Branca Vulcaflex Cano Médio, número {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Pés', 'Bota de Bico de PVC Vulcaflex', NUMEROS, {
    mensagem: 'Olá! Tenho interesse na Bota de Bico de PVC Vulcaflex, número {tamanho}. Tem disponível? Qual o valor?',
  }),

  // Vestuário
  item('Vestuário', 'Colete Refletivo', [], {
    mensagem: 'Olá! Tenho interesse no Colete Refletivo. Tem em estoque? Qual o valor?',
  }),
  item('Vestuário', 'Capa de Chuva Amarela', ROUPA, {
    mensagem: 'Olá! Tenho interesse na Capa de Chuva Amarela, tamanho {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Vestuário', 'Cinta Ergonômica', ROUPA, {
    mensagem: 'Olá! Tenho interesse na Cinta Ergonômica, tamanho {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Vestuário', 'Capa de Chuva EVA', [], {
    mensagem: 'Olá! Tenho interesse na Capa de Chuva EVA. Tem em estoque? Qual o valor?',
  }),
  item('Vestuário', 'Conjunto Motociclista', ROUPA, {
    mensagem: 'Olá! Tenho interesse no Conjunto Motociclista, tamanho {tamanho}. Tem disponível? Qual o valor?',
  }),

  // Cabeça
  item('Cabeça', 'Capacete c/ Catraca Steelflex', [], {
    mensagem: 'Olá! Tenho interesse no Capacete c/ Catraca Steelflex. Tem em estoque? Qual o valor?',
  }),
  item('Cabeça', 'Capacete Camper Branco', [], {
    mensagem: 'Olá! Tenho interesse no Capacete Camper Branco. Tem em estoque? Qual o valor?',
  }),
  item('Cabeça', 'Capacete Camper Azul ', [], {
    mensagem: 'Olá! Tenho interesse no Capacete Camper Azul. Tem em estoque? Qual o valor?',
  }),
  item('Cabeça', 'Capacete Camper Laranja ', [], {
    mensagem: 'Olá! Tenho interesse no Capacete Camper Laranja. Tem em estoque? Qual o valor?',
  }),
  item('Cabeça', 'Capacete Camper Verde', [], {
    mensagem: 'Olá! Tenho interesse no Capacete Camper Verde. Tem em estoque? Qual o valor?',
  }),
  item('Cabeça', 'Capacete Camper Vermelho ', [], {
    mensagem: 'Olá! Tenho interesse no Capacete Camper Vermelho. Tem em estoque? Qual o valor?',
  }),
  item('Cabeça', 'Capacete Camper Marrom ', [], {
    mensagem: 'Olá! Tenho interesse no Capacete Camper Marrom. Tem em estoque? Qual o valor?',
  }),

  // Mãos
  item('Mãos', 'Luva Tátil Black', LUVA, {
    mensagem: 'Olá! Tenho interesse na Luva Tátil Black, tamanho {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Mãos', 'Luva Pigmentada', LUVA, {
    mensagem: 'Olá! Tenho interesse na Luva Pigmentada, tamanho {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Mãos', 'Luva Orange', LUVA, {
    mensagem: 'Olá! Tenho interesse na Luva Orange, tamanho {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Mãos', 'Luva Bicolor', LUVA, {
    mensagem: 'Olá! Tenho interesse na Luva Bicolor, tamanho {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Mãos', 'Luva Anti-Impacto', LUVA, {
    mensagem: 'Olá! Tenho interesse na Luva Anti-Impacto, tamanho {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Mãos', 'Luva de Vaqueta', LUVA, {
    mensagem: 'Olá! Tenho interesse na Luva de Vaqueta, tamanho {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Mãos', 'Luva Cut Smart', LUVA, {
    mensagem: 'Olá! Tenho interesse na Luva Cut Smart, tamanho {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Mãos', 'Luva Nitrílica', LUVA, {
    mensagem: 'Olá! Tenho interesse na Luva Nitrílica, tamanho {tamanho}. Tem disponível? Qual o valor?',
  }),
  item('Mãos', 'Luva de PVC Verde', [], {
    mensagem: 'Olá! Tenho interesse na Luva de PVC Verde. Tem em estoque? Qual o valor?',
  }),
  item('Mãos', 'Luva VdBNit Lona', LUVA, {
    mensagem: 'Olá! Tenho interesse na Luva VdBNit Lona, tamanho {tamanho}. Tem disponível? Qual o valor?',
  }),

  // Visual
  item('Visual', 'Óculos Incolor Steelflex', [], {
    mensagem: 'Olá! Tenho interesse no Óculos Incolor Steelflex. Tem em estoque? Qual o valor?',
  }),
  item('Visual', 'Óculos Fumê Steelflex', [], {
    mensagem: 'Olá! Tenho interesse no Óculos Fumê Steelflex. Tem em estoque? Qual o valor?',
  }),

  // Auditiva
  item('Auditiva', 'Protetor Auricular Tipo Concha Soft Slim', [], {
    mensagem: 'Olá! Tenho interesse no Protetor Auricular Tipo Concha Soft Slim. Tem em estoque? Qual o valor?',
  }),
  item('Auditiva', 'Protetor Auricular Tipo Concha Comfort Plus', [], {
    mensagem: 'Olá! Tenho interesse no Protetor Auricular Tipo Concha Comfort Plus. Tem em estoque? Qual o valor?',
  }),
  item('Auditiva', 'Protetor Auricular', [], {
    mensagem: 'Olá! Tenho interesse no Protetor Auricular. Tem em estoque? Qual o valor?',
  }),

  // Altura
  item('Altura', 'Cinto Paraquedista 1 ponto', [], {
    mensagem: 'Olá! Tenho interesse no Cinto Paraquedista 1 ponto. Tem em estoque? Qual o valor?',
  }),
  item('Altura', 'Talabarte Fita “Y”', [], {
    mensagem: 'Olá! Tenho interesse no Talabarte Fita “Y”. Tem em estoque? Qual o valor?',
  }),
  item('Altura', 'Cinto Paraquedista 4 Pontos', [], {
    mensagem: 'Olá! Tenho interesse no Cinto Paraquedista 4 Pontos. Tem em estoque? Qual o valor?',
  }),

  // Pele
  item('Pele', 'Protetor Solar 2kg FPS 30', [], {
    mensagem: 'Olá! Tenho interesse no Protetor Solar 2kg FPS 30. Tem em estoque? Qual o valor?',
  }),
  item('Pele', 'Protetor Solar 2kg FPS 60', [], {
    mensagem: 'Olá! Tenho interesse no Protetor Solar 2kg FPS 60. Tem em estoque? Qual o valor?',
  }),
  item('Pele', 'Desengraxante Para as Mãos Cover Hands', [], {
    mensagem: 'Olá! Tenho interesse no Desengraxante Para as Mãos Cover Hands. Tem em estoque? Qual o valor?',
  }),
  item('Pele', 'Creme Protetor Para a Pele Cover Hands', [], {
    mensagem: 'Olá! Tenho interesse no Creme Protetor Para a Pele Cover Hands. Tem em estoque? Qual o valor?',
  }),

  // Meias
  item('Pés', 'Meia Dallf Cano Curto', [], {
  mensagem: 'Olá! Tenho interesse na Meia Dallf Cano Curto. Tem disponível? Qual o valor?',
  }),
  item('Pés', 'Meia Dallf Fun Casual', [], {
    mensagem: 'Olá! Tenho interesse na Meia Dallf Fun Casual. Tem disponível? Qual o valor?',
  }),

  // Sinalização e Delimitação
  item('Sinalização', 'Pedestal Plástico Zebrado', [], {
    mensagem: 'Olá! Tenho interesse no Pedestal Plástico Zebrado. Tem em estoque? Qual o valor?',
  }),
  item('Sinalização', 'Cone de sinalização', [], {
    mensagem: 'Olá! Tenho interesse no Cone de sinalização. Tem em estoque? Qual o valor?',
  } )
];

export const CATEGORIES = [...new Set(PRODUCTS.map((p) => p.cat))];

// Nome exibido de cada categoria. As chaves (Pés, Mãos etc.) continuam
// iguais em PRODUCTS e MENSAGENS: elas são internas.
const CATEGORY_LABELS = {
  Pés: 'Proteção para os Pés',
  Mãos: 'Proteção para as Mãos',
  Cabeça: 'Proteção para a Cabeça',
  Altura: 'Trabalho em Altura',
  Auditiva: 'Proteção Auditiva',
  Visual: 'Proteção Visual',
  Vestuário: 'Proteção Corporal',
  Pele: 'Proteção para a Pele',
  Meias: 'Meias',
  Sinalização: 'Sinalização e Delimitação',
};
export const categoryLabel = (cat) => CATEGORY_LABELS[cat] ?? cat;