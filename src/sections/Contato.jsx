import { Box, Button, Card, Container, Stack, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import QuoteForm from '../components/QuoteForm';
import { INSTAGRAM, PHONE_LABEL } from '../config';
import { waLink, GENERIC_MESSAGE } from '../utils/whatsapp';

const PASSOS = [
  'Escolha os produtos no catálogo e o tamanho de cada um.',
  'Adicione à lista de orçamento, com a quantidade.',
  'Preencha seus dados e envie. A lista chega pronta no nosso WhatsApp.',
];

export default function Contato() {
  return (
    <Box component="section" id="contato" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 6fr' }, gap: { xs: 4, md: 7 }, alignItems: 'start' }}>
          <Box>
            <Typography variant="h2" component="h2">Peça seu orçamento</Typography>
            <Typography color="text.secondary" sx={{ mt: 2, mb: 3, maxWidth: '44ch' }}>
              Para uma pessoa ou para a empresa. Informe o que precisa e retornamos com valores e prazo.
            </Typography>
            <Stack component="ol" spacing={1.25} sx={{ p: 0, pl: 2.5, m: 0, mb: 4, color: 'text.secondary' }}>
              {PASSOS.map((p) => (<Typography key={p} component="li" variant="body2">{p}</Typography>))}
            </Stack>
            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              <Button size="large" variant="outlined" color="whatsapp" startIcon={<WhatsAppIcon />} href={waLink(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer">
                {PHONE_LABEL}
              </Button>
              <Button
                size="large"
                variant="contained"
                startIcon={<InstagramIcon />}
                href={`https://instagram.com/${INSTAGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  '&:hover': { filter: 'brightness(1.12)' },
                }}
              >
                @{INSTAGRAM}
              </Button>
            </Stack>
          </Box>
          <Card sx={{ p: { xs: 2.5, md: 3.5 } }}>
            <QuoteForm />
          </Card>
        </Box>
      </Container>
    </Box>
  );
}