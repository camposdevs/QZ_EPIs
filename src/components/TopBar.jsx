import { Box, Container, Link, Typography } from '@mui/material';
import { PHONE_LABEL } from '../config';
import { track } from '../utils/analytics';
import { waLink, GENERIC_MESSAGE } from '../utils/whatsapp';

export default function TopBar() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'space-between' }, gap: 2, py: 0.75 }}>
        <Typography variant="body2" fontWeight={600} sx={{ display: { xs: 'none', sm: 'block' } }}>
          Atendimento de segunda a sexta, em duas lojas em Osasco
        </Typography>
        <Link
          href={waLink(GENERIC_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="hover"
          variant="body2"
          fontWeight={700}
          onClick={() => track('whatsapp_click', { origem: 'barra_topo' })}
        >
          WhatsApp {PHONE_LABEL}
        </Link>
      </Container>
    </Box>
  );
}
