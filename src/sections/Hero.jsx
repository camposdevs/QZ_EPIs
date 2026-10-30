import { Box, Button, Container, Typography } from '@mui/material';
import Photo from '../components/Photo';
import { getImage } from '../utils/images';
import { waLink, GENERIC_MESSAGE } from '../utils/whatsapp';
import { useQuote } from '../context/QuoteContext';
import { STORES } from '../data/store';
import { PHONE_LABEL } from '../config';

export default function Hero() {
  const { openDrawer } = useQuote();

  return (
    <Box component="section" id="inicio" sx={{ pt: { xs: 4, md: 7 }, pb: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' }, gap: { xs: 4, md: 7 }, alignItems: 'center' }}>
          <Box>
            <Typography variant="h1" component="h1">Equipamentos de proteção individual em Osasco</Typography>
            <Typography color="text.secondary" sx={{ mt: 3, mb: 4, maxWidth: '48ch', fontSize: '1.1rem' }}>
              Botas, luvas, capacetes, óculos, protetores e mais, em duas lojas. Escolha os produtos, monte seu orçamento e finalize pelo WhatsApp.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              <Button size="large" variant="contained" href="#catalogo">Ver produtos</Button>
              <Button size="large" variant="outlined" color="ink" onClick={openDrawer}>Montar orçamento</Button>
              <Button size="large" variant="outlined" color="ink" href={waLink(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </Button>
            </Box>
          </Box>
          <Photo
            priority
            src={getImage('balcao')}
            alt="Profissional usando capacete, protetor auricular, óculos e colete de segurança"
            label="Foto de destaque, em pé (1200 × 1600 px)"
            path="src/assets/balcao.jpg"
            ratio="3 / 4"
            radius={1}
          />
        </Box>

        <Box sx={{ mt: { xs: 5, md: 8 }, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, borderTop: 1, borderColor: 'divider' }}>
          {[...STORES.map((s) => ({ titulo: `Loja ${s.nome}`, texto: s.endereco })), { titulo: 'WhatsApp', texto: PHONE_LABEL }].map((info, i) => (
            <Box key={info.titulo} sx={{ py: 2.25, pr: 2, pl: { md: i === 0 ? 0 : 3 }, borderLeft: { md: i === 0 ? 0 : 1 }, borderTop: { xs: i === 0 ? 0 : 1, md: 0 }, borderColor: 'divider' }}>
              <Typography variant="body2" color="text.secondary">{info.titulo}</Typography>
              <Typography fontWeight={600}>{info.texto}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
