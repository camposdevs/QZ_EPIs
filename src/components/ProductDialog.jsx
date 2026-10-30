import { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogContent, IconButton, Stack, ToggleButton, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Photo from './Photo';
import { getImage } from '../utils/images';
import { buildMessage, categoryLabel } from '../data/catalog';
import { waLink } from '../utils/whatsapp';
import { useQuote } from '../context/QuoteContext';

export default function ProductDialog({ product, onClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { add } = useQuote();
  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
  useEffect(() => {
    // Produto com um único tamanho já vem selecionado.
    setSize(product && product.sizes.length === 1 ? product.sizes[0] : null);
    setQty(1);
  }, [product]);

  const needSize = !!product && product.sizes.length > 0 && !size;

  const addToQuote = () => {
    add(product, size, qty);
    onClose();
  };

  return (
    <Dialog open={!!product} onClose={onClose} fullScreen={fullScreen} fullWidth maxWidth="md" aria-labelledby="produto-titulo">
      {product && (
        <DialogContent sx={{ p: { xs: 2.5, md: 4 } }}>
          <IconButton aria-label="Fechar" onClick={onClose} sx={{ position: 'absolute', top: 12, right: 12, bgcolor: 'soft.main', zIndex: 1 }}>
            <CloseIcon />
          </IconButton>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 4 }, pt: { xs: 5, md: 0 } }}>
            <Photo src={getImage(`produtos/${product.slug}`)} alt={product.name} label={product.name} path={`src/assets/produtos/${product.slug}.jpg`} ratio="1 / 1" radius={1} />
            <Box>
              <Typography variant="body2" color="primary.dark" fontWeight={600}>{categoryLabel(product.cat)}</Typography>
              <Typography id="produto-titulo" variant="h2" component="h2" sx={{ mt: 0.5, mb: 2.5, pr: 5 }}>{product.name}</Typography>
              {product.specs.length > 0 && (
                <Stack component="ul" spacing={1} sx={{ p: 0, m: 0, listStyle: 'none', color: 'text.secondary' }}>
                  {product.specs.map((s) => (
                    <Typography key={s} component="li" variant="body2" sx={{ display: 'flex', gap: 1.25, alignItems: 'baseline' }}>
                      <Box component="span" sx={{ width: 6, height: 6, bgcolor: 'primary.main', flexShrink: 0 }} />
                      {s}
                    </Typography>
                  ))}
                </Stack>
              )}
              {product.sizes.length > 0 && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="body2" fontWeight={700} sx={{ mb: 1.25 }}>Escolha o tamanho</Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1} role="group" aria-label="Tamanhos">
                    {product.sizes.map((s) => (
                      <ToggleButton key={s} value={s} selected={size === s} onChange={() => setSize(s)}>{s}</ToggleButton>
                    ))}
                  </Stack>
                </Box>
              )}

              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mt: 3 }}>
                <Typography variant="body2" fontWeight={700}>Quantidade</Typography>
                <Stack direction="row" alignItems="center" sx={{ border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <IconButton size="small" aria-label="Diminuir quantidade" onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={qty <= 1}><RemoveIcon fontSize="small" /></IconButton>
                  <Typography sx={{ minWidth: 34, textAlign: 'center', fontWeight: 700 }} aria-live="polite">{qty}</Typography>
                  <IconButton size="small" aria-label="Aumentar quantidade" onClick={() => setQty((q) => Math.min(999, q + 1))}><AddIcon fontSize="small" /></IconButton>
                </Stack>
              </Stack>

              <Stack spacing={1.25} sx={{ mt: 3 }}>
                <Button fullWidth size="large" variant="contained" startIcon={<PlaylistAddIcon />} disabled={needSize} onClick={addToQuote}>
                  {needSize ? 'Escolha um tamanho' : 'Adicionar ao orçamento'}
                </Button>
                <Button
                  fullWidth
                  size="large"
                  variant="outlined"
                  color="whatsapp"
                  startIcon={<WhatsAppIcon />}
                  disabled={needSize}
                  {...(!needSize && { href: waLink(buildMessage(product, size)), target: '_blank', rel: 'noopener noreferrer' })}
                >
                  Pedir só este no WhatsApp
                </Button>
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                Preço e estoque são confirmados no atendimento.
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      )}
    </Dialog>
  );
}
