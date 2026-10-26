import { Box, Button, Checkbox, FormControlLabel, IconButton, MenuItem, Stack, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useQuote } from '../context/QuoteContext';
import { STORES } from '../data/store';
import { getImage } from '../utils/images';
import { buildQuoteMessage, sizeLabel } from '../utils/quote';
import { waLink } from '../utils/whatsapp';
import { track } from '../utils/analytics';

export default function QuoteForm() {
  const { items, count, setQty, remove, clear } = useQuote();

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = buildQuoteMessage({
      items,
      nome: f.get('nome'),
      empresa: f.get('empresa'),
      loja: f.get('loja'),
      notaFiscal: f.get('nota') === 'sim',
      obs: f.get('obs'),
      livre: f.get('livre'),
    });
    track('quote_sent', { itens: items.length, unidades: count, loja: f.get('loja') || 'sem preferência' });
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ display: 'grid', gap: 2 }}>
      <Box>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: 1 }}>
          <Typography variant="h5" component="h3">Itens do orçamento</Typography>
          {items.length > 0 && (
            <Button size="small" color="inherit" onClick={clear} sx={{ color: 'text.secondary', minWidth: 0, p: 0.5 }}>Limpar lista</Button>
          )}
        </Stack>

        {items.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            Sua lista está vazia. Adicione produtos pelo catálogo ou descreva o que você precisa abaixo.
          </Typography>
        ) : (
          <Stack divider={<Box sx={{ borderTop: 1, borderColor: 'divider' }} />} sx={{ border: 1, borderColor: 'divider', borderRadius: 1 }}>
            {items.map((i) => {
              const img = getImage(`produtos/${i.slug}`);
              return (
                <Stack key={i.id} direction="row" spacing={1.5} alignItems="center" sx={{ p: 1.25 }}>
                  <Box sx={{ width: 52, height: 52, flexShrink: 0, borderRadius: 0.5, overflow: 'hidden', bgcolor: 'placeholder.main' }}>
                    {img && <Box component="img" src={img} alt="" sx={{ width: 1, height: 1, objectFit: 'cover' }} />}
                  </Box>
                  <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                    <Typography variant="body2" fontWeight={600} sx={{ lineHeight: 1.3 }}>{i.name}</Typography>
                    {i.size && <Typography variant="caption" color="text.secondary">{sizeLabel(i.cat, i.size)}</Typography>}
                  </Box>
                  <Stack direction="row" alignItems="center">
                    <IconButton size="small" aria-label={`Diminuir quantidade de ${i.name}`} onClick={() => setQty(i.id, i.qty - 1)} disabled={i.qty <= 1}><RemoveIcon fontSize="small" /></IconButton>
                    <Typography sx={{ minWidth: 26, textAlign: 'center', fontWeight: 700 }} aria-live="polite">{i.qty}</Typography>
                    <IconButton size="small" aria-label={`Aumentar quantidade de ${i.name}`} onClick={() => setQty(i.id, i.qty + 1)}><AddIcon fontSize="small" /></IconButton>
                  </Stack>
                  <IconButton size="small" aria-label={`Remover ${i.name}`} onClick={() => remove(i.id)}><DeleteOutlineIcon fontSize="small" /></IconButton>
                </Stack>
              );
            })}
          </Stack>
        )}
      </Box>

      {items.length === 0 && (
        <TextField name="livre" label="O que você precisa?" required multiline minRows={3} placeholder="Ex.: 10 capacetes brancos e 5 pares de bota número 42" />
      )}

      <Typography variant="h5" component="h3" sx={{ mt: 1 }}>Seus dados</Typography>
      <TextField name="nome" label="Nome" required autoComplete="name" />
      <TextField name="empresa" label="Empresa ou CNPJ (opcional)" autoComplete="organization" />
      <TextField select name="loja" label="Retirar em" defaultValue="" InputLabelProps={{ shrink: true }} SelectProps={{ displayEmpty: true }}>
        <MenuItem value="">Sem preferência</MenuItem>
        {STORES.map((s) => (
          <MenuItem key={s.slug} value={`Loja ${s.nome}`}>{`Loja ${s.nome}, ${s.endereco}`}</MenuItem>
        ))}
      </TextField>
      <FormControlLabel control={<Checkbox name="nota" value="sim" />} label="Preciso de nota fiscal" />
      <TextField name="obs" label="Observações (opcional)" multiline minRows={2} />

      <Button type="submit" size="large" variant="contained" color="whatsapp" startIcon={<WhatsAppIcon />}>
        Enviar orçamento no WhatsApp
      </Button>
      <Typography variant="caption" color="text.secondary">
        Sua lista segue pronta na conversa. Preço, estoque e prazo são confirmados no atendimento.
      </Typography>
    </Box>
  );
}
