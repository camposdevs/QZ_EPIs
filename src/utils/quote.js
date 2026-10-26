export const sizeLabel = (cat, size) => (size ? (cat === 'Pés' ? `nº ${size}` : `tam. ${size}`) : '');

// Monta a mensagem do orçamento que vai para o WhatsApp.
export function buildQuoteMessage({ items, nome, empresa, loja, notaFiscal, obs, livre }) {
  const linhas = ['Olá! Gostaria de um orçamento.', ''];
  if (items.length) {
    linhas.push('*Itens*');
    items.forEach((i, n) => {
      const partes = [i.name, sizeLabel(i.cat, i.size), `${i.qty} un.`].filter(Boolean);
      linhas.push(`${n + 1}. ${partes.join(' | ')}`);
    });
  } else if (livre) {
    linhas.push('*O que preciso*', livre);
  }
  linhas.push('', '*Dados*', `Nome: ${nome}`);
  if (empresa) linhas.push(`Empresa/CNPJ: ${empresa}`);
  if (loja) linhas.push(`Retirada: ${loja}`);
  if (notaFiscal) linhas.push('Nota fiscal: sim');
  if (obs) linhas.push(`Observações: ${obs}`);
  return linhas.join('\n');
}
