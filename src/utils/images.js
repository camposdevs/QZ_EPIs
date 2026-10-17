// Carrega tudo de src/assets automaticamente. A chave é o caminho sem extensão:
// "produtos/bota-nobuck-marluvas", "marcas/marluvas", "lojas/mutinga", "hero", "faixa", "logo".
const files = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const index = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.replace('../assets/', '').replace(/\.[^.]+$/, ''), url]),
);

export const getImage = (key) => index[key] ?? null;
