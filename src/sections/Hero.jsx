import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import Photo from '../components/Photo';
import { getImage } from '../utils/images';
import { waLink, GENERIC_MESSAGE } from '../utils/whatsapp';
import { PRODUCTS } from '../data/catalog';
import { STORES } from '../data/store';

const FACTS = [
  { value: STORES.length, label: 'lojas em Osasco' },
  { value: PRODUCTS.length, label: 'produtos no catálogo' },
  { value: 'Seg a sex', label: 'atendimento' },
];

export default function Hero() {
  return (
    <Box component="section" id="inicio" sx={{ pt: { xs: 4, md: 7 }, pb: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
          <Box>
            <Typography variant="h1" component="h1">Equipamentos de proteção para quem trabalha de verdade</Typography>
            <Typography color="text.secondary" sx={{ mt: 3, mb: 4, maxWidth: '46ch', fontSize: '1.15rem' }}>
              Botas, luvas, capacetes, óculos e mais, em duas lojas em Osasco. Escolha o produto e o tamanho e continue o atendimento no WhatsApp.
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              <Button size="large" variant="contained" href="#catalogo">Ver produtos</Button>
              <Button size="large" variant="outlined" color="ink" href={waLink(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer">Falar com a loja</Button>
            </Stack>
          </Box>
          <Photo src={getImage('hero')} alt="Fachada da loja QZ EPIs" label="Fachada ou balcão da loja (1200 × 960 px)" path="src/assets/hero.jpg" ratio="5 / 4" radius={3} />
        </Box>

        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 2, md: 5 }} sx={{ mt: { xs: 4, md: 7 }, pt: 3, borderTop: 1, borderColor: 'divider' }}>
          {FACTS.map(({ value, label }) => (
            <Box key={label}>
              <Typography variant="h3" component="p">{value}</Typography>
              <Typography variant="body2" color="text.secondary">{label}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
