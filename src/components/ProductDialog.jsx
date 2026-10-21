import { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogContent, IconButton, Stack, ToggleButton, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Photo from './Photo';
import { getImage } from '../utils/images';
import { buildMessage, categoryLabel } from '../data/catalog';
import { waLink } from '../utils/whatsapp';

export default function ProductDialog({ product, onClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [size, setSize] = useState(null);
  useEffect(() => setSize(null), [product]);

  const needSize = !!product && product.sizes.length > 0 && !size;

  return (
    <Dialog open={!!product} onClose={onClose} fullScreen={fullScreen} fullWidth maxWidth="md" aria-labelledby="produto-titulo">
      {product && (
        <DialogContent sx={{ p: { xs: 2.5, md: 4 } }}>
          <IconButton aria-label="Fechar" onClick={onClose} sx={{ position: 'absolute', top: 12, right: 12, bgcolor: 'soft.main', zIndex: 1 }}>
            <CloseIcon />
          </IconButton>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 4 }, pt: { xs: 5, md: 0 } }}>
            <Photo src={getImage(`produtos/${product.slug}`)} alt={product.name} label={product.name} path={`src/assets/produtos/${product.slug}.jpg`} ratio="1 / 1" radius={2} />
            <Box>
              <Typography variant="body2" color="primary.dark" fontWeight={600}>{categoryLabel(product.cat)}</Typography>
              <Typography id="produto-titulo" variant="h2" component="h2" sx={{ mt: 0.5, mb: 2.5, pr: 5 }}>{product.name}</Typography>
              {product.specs.length > 0 && (
                <Stack component="ul" spacing={1} sx={{ p: 0, m: 0, listStyle: 'none', color: 'text.secondary' }}>
                  {product.specs.map((s) => (
                    <Typography key={s} component="li" variant="body2" sx={{ display: 'flex', gap: 1.25, alignItems: 'baseline' }}>
                      <Box component="span" sx={{ width: 8, height: 8, borderRadius: 0.5, bgcolor: 'primary.main', flexShrink: 0 }} />
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
              <Button
                fullWidth size="large" variant="contained" color="whatsapp" startIcon={<WhatsAppIcon />} disabled={needSize}
                sx={{ mt: 3.5 }}
                {...(!needSize && { href: waLink(buildMessage(product, size)), target: '_blank', rel: 'noopener noreferrer' })}
              >
                {needSize ? 'Escolha um tamanho' : 'Pedir no WhatsApp'}
              </Button>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, textAlign: 'center' }}>
                Preço e estoque são confirmados no atendimento.
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      )}
    </Dialog>
  );
}