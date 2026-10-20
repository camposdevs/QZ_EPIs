import { Box, Button, Card, Container, Stack, TextField, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { INSTAGRAM, PHONE_LABEL } from '../config';
import { waLink, GENERIC_MESSAGE } from '../utils/whatsapp';

export default function Contato() {
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = `Olá! Gostaria de um orçamento.\nNome: ${f.get('nome')}\nProduto: ${f.get('produto')}\n${f.get('mensagem') || ''}`.trim();
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <Box component="section" id="contato" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 6 }, alignItems: 'start' }}>
          <Box>
            <Typography variant="h2" component="h2">Peça seu orçamento</Typography>
            <Typography color="text.secondary" sx={{ mt: 2, mb: 3.5, maxWidth: '44ch' }}>
              Conte o que você precisa e a gente responde no WhatsApp. Para empresas, mande os itens e as quantidades.
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              <Button size="large" variant="contained" color="whatsapp" startIcon={<WhatsAppIcon />} href={waLink(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer">
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
          <Card component="form" onSubmit={onSubmit} sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: 3, display: 'grid', gap: 2 }}>
            <TextField name="nome" label="Nome" required autoComplete="name" />
            <TextField name="produto" label="Qual produto você quer?" required />
            <TextField name="mensagem" label="Tamanho, quantidade, observações" multiline minRows={4} />
            <Button type="submit" size="large" variant="contained">Enviar no WhatsApp</Button>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
