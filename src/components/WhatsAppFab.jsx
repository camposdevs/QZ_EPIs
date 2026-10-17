import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { waLink, GENERIC_MESSAGE } from '../utils/whatsapp';

export default function WhatsAppFab() {
  return (
    <Fab
      variant="extended"
      color="inherit"
      href={waLink(GENERIC_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      sx={{ position: 'fixed', right: 16, bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))', zIndex: 'fab', gap: 1, px: 3, boxShadow: 'none', border: 1, borderColor: 'rgba(0,0,0,0.25)', bgcolor: 'whatsapp.main', color: 'whatsapp.contrastText', '&:hover': { bgcolor: 'whatsapp.dark' } }}
    >
      <WhatsAppIcon /> WhatsApp
    </Fab>
  );
}
