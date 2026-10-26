import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { INSTAGRAM, PHONE_LABEL } from '../config';
import { STORES } from '../data/store';
import { track } from '../utils/analytics';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'soft.main', borderTop: 1, borderColor: 'divider', py: 5, pb: 'calc(40px + env(safe-area-inset-bottom, 0px))' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={3}>
          <Box>
            <Typography variant="h4">QZ EPI</Typography>
            <Typography variant="body2" color="text.secondary">Loja de equipamentos de segurança de uso individual.</Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 6 }}>
            {STORES.map((s) => (
              <Typography key={s.slug} variant="body2" color="text.secondary">
                <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>Loja {s.nome}</Box><br />
                {s.endereco}<br />
                {s.cidade}
              </Typography>
            ))}
            <Typography variant="body2" color="text.secondary">
              <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>Contato</Box><br />
              WhatsApp {PHONE_LABEL}<br />
              <Link href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" color="primary.main" underline="hover" onClick={() => track('instagram_click', { origem: 'rodape' })}>
                @{INSTAGRAM}
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
