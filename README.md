# QZ EPIs

Catálogo online da loja QZ EPIs (React + Material UI + Vite). Sem preços: cada produto leva ao WhatsApp com a mensagem pronta.

## Rodar no computador

Precisa do Node.js 20 ou mais novo (`node -v`).

```bash
npm install
npm run dev        # abre em http://localhost:5173
npm run build      # gera a pasta dist
npm run preview    # testa o build
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Produtos, categorias, tamanhos e mensagens do WhatsApp | `src/data/catalog.js` |
| Lojas (endereço, horário), marcas | `src/data/store.js` |
| Telefone exibido e Instagram | `src/config.js` |
| Cores, fontes, arredondamentos | `src/theme.js` |
| Fotos | `src/assets/` (lista de nomes em `FOTOS.md`) |

Pendências marcadas com "(preencher)": endereço e horário da Loja 2, especificações e número do CA de cada produto.

## Variável de ambiente

`VITE_WHATSAPP_NUMBER`: número do WhatsApp com DDI e DDD, só dígitos (ex.: `5511930911928`).
Local: copie `.env.example` para `.env`. Na Netlify: Site configuration > Environment variables.
Se a variável não existir, o site usa o número padrão de `src/config.js`.
