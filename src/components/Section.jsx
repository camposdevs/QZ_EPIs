import { Box, Container, Typography } from '@mui/material';

export default function Section({ id, soft = false, title, subtitle, children, sx }) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 7, md: 10 }, bgcolor: soft ? 'soft.main' : 'transparent', ...sx }}>
      <Container maxWidth="lg">
        {title && (
          <Box sx={{ mb: { xs: 3.5, md: 5 }, maxWidth: 640 }}>
            <Typography variant="h2" component="h2">
              {title}
            </Typography>
            {subtitle && (
              <Typography color="text.secondary" sx={{ mt: 2 }}>
                {subtitle}
              </Typography>
            )}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
}
