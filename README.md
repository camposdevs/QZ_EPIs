<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:e8892b,100:f0a04b&height=200&section=header&text=QZ%20EPIs&fontSize=60&fontColor=1a1206&fontAlignY=38&desc=Equipamentos%20de%20Prote%C3%A7%C3%A3o%20Individual&descAlignY=58&descSize=22&descColor=3a2410" width="100%" />

**Um catálogo online simples, rápido e direto ao ponto: o cliente escolhe o produto e fala com a loja pelo WhatsApp.**

Site de catálogo da QZ EPIs, loja de Equipamentos de Proteção Individual em Osasco, SP, com produtos por categoria, tamanhos, marcas, lojas, contato e pedido pelo WhatsApp com a mensagem já pronta.

<br>

[![Ver site](https://img.shields.io/badge/🌐_Ver_site-e8892b?style=for-the-badge)](https://qzepis.netlify.app/)

![React](https://img.shields.io/badge/React-18-20232a?style=flat-square&logo=react&logoColor=61dafb)
![Material UI](https://img.shields.io/badge/Material_UI-6-007fff?style=flat-square&logo=mui&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-deploy-00c7b7?style=flat-square&logo=netlify&logoColor=white)

</div>

---

## Tecnologias

- [React 18](https://react.dev/)
- [Material UI 6](https://mui.com/) (com Emotion e ícones)
- [Vite 6](https://vite.dev/)
- Fontes [Barlow](https://fontsource.org/fonts/barlow) e [Barlow Condensed](https://fontsource.org/fonts/barlow-condensed) via Fontsource
- Deploy na [Netlify](https://www.netlify.com/)

## Funcionalidades

- Catálogo com filtro por categoria: Pés, Mãos, Vestuário, Cabeça, Visual, Auditiva e Altura
- Janela de detalhes do produto com escolha de tamanho/número
- Botão que abre o WhatsApp com a mensagem pronta (produto + tamanho)
- Botão flutuante de WhatsApp em todas as páginas
- Seções de lojas (endereço e horário), marcas, como pedir e contato (WhatsApp e Instagram)
- Fotos carregadas automaticamente pelo nome do arquivo; se a foto não existir, aparece um espaço reservado
- Layout responsivo, em português (pt-BR)

## Variável de ambiente

| Variável | Descrição | Exemplo |
| --- | --- | --- |
| `VITE_WHATSAPP_NUMBER` | Número do WhatsApp com DDI e DDD, só dígitos | `5511930911928` |

- **Netlify:** Site configuration > Environment variables.
- Se a variável não existir, o site usa o número padrão definido em `src/config.js`.

## Estrutura do projeto

```
QZ_EPIs/
├── public/               # Favicon
├── src/
│   ├── assets/           # Fotos (logo, balcao, faixa, lojas, marcas, produtos)
│   ├── components/       # Header, Footer, Photo, Section, ProductDialog, WhatsAppFab
│   ├── data/
│   │   ├── catalog.js    # Produtos, categorias, tamanhos e mensagens
│   │   └── store.js      # Dados das lojas e marcas
│   ├── hooks/            # useActiveSection
│   ├── sections/         # Hero, Linhas, Faixa, Catalog, ComoPedir, Marcas, Lojas, Contato
│   ├── utils/
│   │   ├── images.js     # Carrega as fotos de src/assets pelo nome
│   │   └── whatsapp.js   # Monta o link wa.me com a mensagem
│   ├── App.jsx
│   ├── config.js         # Telefone, Instagram, marcas e lojas
│   ├── theme.js          # Tema do Material UI
│   └── main.jsx
├── FOTOS.md              # Lista de nomes de arquivo de cada foto
├── index.html
├── netlify.toml
└── vite.config.js
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Produtos, categorias, tamanhos e mensagens do WhatsApp | `src/data/catalog.js` |
| Lojas (endereço, horário) e marcas | `src/data/store.js` e `src/config.js` |
| Telefone exibido e Instagram | `src/config.js` |
| Cores, fontes e arredondamentos | `src/theme.js` |
| Fotos | `src/assets/` (nomes em `FOTOS.md`) |

### Adicionar um produto

Em `src/data/catalog.js`, inclua uma linha na lista `PRODUCTS`:

```js
item('Pés', 'Bota Exemplo Marluvas', NUMEROS, {
  mensagem: 'Olá! Tenho interesse na Bota Exemplo Marluvas, número {tamanho}. Tem disponível? Qual o valor?',
}),
```

- O primeiro argumento é a categoria; o segundo, o nome; o terceiro, a lista de tamanhos (`NUMEROS`, `ROUPA`, `LUVA` ou `[]` para produtos sem tamanho).
- Use `{tamanho}` na mensagem onde o tamanho escolhido deve entrar.
- Para trocar as especificações, adicione `specs: ['linha 1', 'linha 2']` junto da mensagem.
- Se `mensagem` for omitida, vale o texto padrão da categoria.

### Adicionar fotos

O site encontra a foto pelo nome do arquivo (sem a extensão), aceitando `.jpg`, `.jpeg`, `.png`, `.webp` e `.svg`. O nome do arquivo de um produto é o nome dele em minúsculas, sem acentos e com hifens (ex.: `Bota Nobuck Bracol` vira `bota-nobuck-bracol.jpeg`).

| Tipo | Pasta | Exemplo |
| --- | --- | --- |
| Geral | `src/assets/` | `balcao.jpg` (1200 x 960 px), `faixa.jpg` (1600 x 700 px), `logo.png` |
| Lojas | `src/assets/lojas/` | `mutinga.jpeg` |
| Marcas | `src/assets/marcas/` | `marluvas.png` |
| Produtos | `src/assets/produtos/` | `luva-orange.jpeg` |

A lista completa de nomes está em [`FOTOS.md`](FOTOS.md).

## Deploy na Netlify

O projeto já inclui o `netlify.toml`:

- Comando de build: `npm run build`
- Pasta publicada: `dist`
- Node: 20

Basta conectar o repositório na Netlify e definir a variável `VITE_WHATSAPP_NUMBER`. O site está no ar em [qzepis.netlify.app](https://qzepis.netlify.app/).

## Pendências

Itens marcados com "(preencher)" no código:

- [ ] Endereço, bairro e horário da Loja 2
- [ ] Horário da Loja 1 (Mutinga)
- [ ] Especificações e número do CA de cada produto
- [ ] Fotos que ainda faltam (veja `FOTOS.md`)

## Contato

- WhatsApp: (11) 93091-1928
- Instagram: [@quinzeiro.epi](https://instagram.com/quinzeiro.epi)
- Loja 1: Av. Presidente Médici, 1600, Mutinga, Osasco, SP