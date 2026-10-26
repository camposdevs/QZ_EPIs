import { Box, Button, Drawer, IconButton, Snackbar, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useQuote } from '../context/QuoteContext';
import QuoteForm from './QuoteForm';

// Painel lateral "Meu orçamento" + aviso quando um item é adicionado.
export default function QuoteDrawer() {
  const { drawerOpen, openDrawer, closeDrawer, notice, clearNotice } = useQuote();

  return (
    <>
      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer} PaperProps={{ sx: { width: 'min(480px, 100vw)' } }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h3" component="h2">Meu orçamento</Typography>
          <IconButton aria-label="Fechar orçamento" onClick={closeDrawer}><CloseIcon /></IconButton>
        </Stack>
        <Box sx={{ p: 2.5, overflowY: 'auto' }}>
          <QuoteForm />
        </Box>
      </Drawer>

      <Snackbar
        open={Boolean(notice)}
        autoHideDuration={4000}
        onClose={(_, reason) => reason !== 'clickaway' && clearNotice()}
        message={notice}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        action={
          <Button
            size="small"
            color="primary"
            onClick={() => {
              clearNotice();
              openDrawer();
            }}
          >
            Ver orçamento
          </Button>
        }
      />
    </>
  );
}
