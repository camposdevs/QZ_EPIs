import { Box, Button, Container, Typography } from '@mui/material';
import { getImage } from '../utils/images';

// Foto larga do interior ou do estoque da loja: src/assets/faixa.jpg (1600 × 700 px).
// Enquanto a foto não existir, a faixa não aparece no site.
export default function Faixa() {
  const src = getImage('faixa');
  if (!src) return null;

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: 'soft.main', minHeight: { xs: 300, md: 400 }, display: 'grid', alignItems: 'center', color: '#fff' }}>
      <Box component="img" src={src} alt="Interior da loja QZ EPI" loading="lazy" sx={{ position: 'absolute', inset: 0, width: 1, height: 1, objectFit: 'cover' }} />
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,12,9,.88), rgba(14,12,9,.25))' }} />
      <Container maxWidth="lg" sx={{ position: 'relative', py: 6 }}>
        <Typography variant="h2" component="h2" sx={{ maxWidth: 680, mb: 3 }}>Conheça toda a nossa linha de produtos</Typography>
        <Button size="large" variant="contained" href="#catalogo">Ver produtos</Button>
      </Container>
    </Box>
  );
}
