import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { INSTAGRAM, PHONE_LABEL } from '../config';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'soft.main', borderTop: 1, borderColor: 'divider', py: 5, pb: 'calc(40px + env(safe-area-inset-bottom, 0px))' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2}>
          <Box>
            <Typography variant="h4">QZ EPIs</Typography>
            <Typography variant="body2" sx={{ opacity: 0.75 }}>Loja de equipamentos de segurança de uso individual.</Typography>
          </Box>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Instagram{' '}
            <Link href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" color="primary.main" underline="hover">@{INSTAGRAM}</Link>
            <br />
            WhatsApp {PHONE_LABEL}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
