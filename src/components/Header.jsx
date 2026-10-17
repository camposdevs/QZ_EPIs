import { useState } from 'react';
import {
  AppBar, Box, Button, Drawer, IconButton, List, ListItemButton, ListItemText, Stack, Toolbar, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useActiveSection from '../hooks/useActiveSection';
import { getImage } from '../utils/images';
import { waLink, GENERIC_MESSAGE } from '../utils/whatsapp';

const NAV = [
  { id: 'inicio', label: 'Início' },
  { id: 'catalogo', label: 'Produtos' },
  { id: 'lojas', label: 'Lojas' },
  { id: 'contato', label: 'Contato' },
];
const IDS = NAV.map((n) => n.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);
  const logo = getImage('logo');

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ bgcolor: 'rgba(14,12,9,0.86)', backgroundImage: 'none', backdropFilter: 'blur(12px)', borderBottom: 1, borderColor: 'divider' }}
    >
      <Toolbar sx={{ gap: 2, minHeight: 72, maxWidth: 1200, width: 1, mx: 'auto' }}>
        <Stack component="a" href="#inicio" direction="row" alignItems="center" spacing={1.5} sx={{ mr: 'auto', textDecoration: 'none', color: 'text.primary' }}>
          {logo && <Box component="img" src={logo} alt="" sx={{ width: 44, height: 44, borderRadius: 1.5 }} />}
          <Typography variant="h4" component="span">QZ EPIs</Typography>
        </Stack>

        <Stack component="nav" aria-label="Seções" direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {NAV.map(({ id, label }) => (
            <Button key={id} href={`#${id}`} color="inherit" aria-current={active === id ? 'true' : undefined}
              sx={{ borderRadius: 999, bgcolor: active === id ? 'soft.main' : 'transparent', color: active === id ? 'primary.dark' : 'text.primary' }}>
              {label}
            </Button>
          ))}
        </Stack>

        <Button variant="contained" href={waLink(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer" sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
          Pedir orçamento
        </Button>
        <IconButton aria-label="Abrir menu" onClick={() => setOpen(true)} sx={{ display: { md: 'none' }, bgcolor: 'soft.main' }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 'min(320px, 88vw)', p: 2 } }}>
        <IconButton aria-label="Fechar menu" onClick={() => setOpen(false)} sx={{ alignSelf: 'flex-end' }}><CloseIcon /></IconButton>
        <List>
          {NAV.map(({ id, label }) => (
            <ListItemButton key={id} component="a" href={`#${id}`} onClick={() => setOpen(false)} sx={{ borderRadius: 2, py: 1.75 }}>
              <ListItemText primary={label} primaryTypographyProps={{ variant: 'h4', component: 'span' }} />
            </ListItemButton>
          ))}
        </List>
        <Button variant="contained" size="large" href={waLink(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer" sx={{ mt: 2 }}>
          Pedir orçamento
        </Button>
      </Drawer>
    </AppBar>
  );
}
