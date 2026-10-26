import { useState } from 'react';
import {
  AppBar, Badge, Box, Button, Drawer, IconButton, List, ListItemButton, ListItemText, Stack, Toolbar, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ListAltIcon from '@mui/icons-material/ListAlt';
import useActiveSection from '../hooks/useActiveSection';
import { useQuote } from '../context/QuoteContext';
import { getImage } from '../utils/images';

const NAV = [
  { id: 'inicio', label: 'Início' },
  { id: 'catalogo', label: 'Produtos' },
  { id: 'lojas', label: 'Lojas' },
  { id: 'contato', label: 'Orçamento' },
];
const IDS = NAV.map((n) => n.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);
  const { count, openDrawer } = useQuote();
  const logo = getImage('logo');

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ bgcolor: 'rgba(14,12,9,0.94)', backgroundImage: 'none', backdropFilter: 'blur(12px)', borderBottom: 1, borderColor: 'divider' }}
    >
      <Toolbar sx={{ gap: 2, minHeight: 68, maxWidth: 1200, width: 1, mx: 'auto' }}>
        <Stack component="a" href="#inicio" direction="row" alignItems="center" spacing={1.5} sx={{ mr: 'auto', textDecoration: 'none', color: 'text.primary' }}>
          {logo && <Box component="img" src={logo} alt="" sx={{ width: 42, height: 42, borderRadius: 0.5 }} />}
          <Typography variant="h4" component="span">QZ EPI</Typography>
        </Stack>

        <Stack component="nav" aria-label="Seções" direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {NAV.map(({ id, label }) => (
            <Button key={id} href={`#${id}`} color="inherit" aria-current={active === id ? 'true' : undefined}
              sx={{ color: active === id ? 'primary.main' : 'text.primary', borderBottom: 2, borderColor: active === id ? 'primary.main' : 'transparent', borderRadius: 0, px: 1.5 }}>
              {label}
            </Button>
          ))}
        </Stack>

        <Button variant="contained" startIcon={<ListAltIcon />} onClick={openDrawer} sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
          Meu orçamento{count > 0 ? ` (${count})` : ''}
        </Button>
        <IconButton aria-label={`Abrir meu orçamento${count > 0 ? `, ${count} itens` : ''}`} onClick={openDrawer} sx={{ display: { md: 'none' }, bgcolor: 'soft.main' }}>
          <Badge badgeContent={count} color="primary"><ListAltIcon /></Badge>
        </IconButton>
        <IconButton aria-label="Abrir menu" onClick={() => setOpen(true)} sx={{ display: { md: 'none' }, bgcolor: 'soft.main' }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 'min(320px, 88vw)', p: 2 } }}>
        <IconButton aria-label="Fechar menu" onClick={() => setOpen(false)} sx={{ alignSelf: 'flex-end' }}><CloseIcon /></IconButton>
        <List>
          {NAV.map(({ id, label }) => (
            <ListItemButton key={id} component="a" href={`#${id}`} onClick={() => setOpen(false)} sx={{ borderRadius: 1, py: 1.75 }}>
              <ListItemText primary={label} primaryTypographyProps={{ variant: 'h4', component: 'span' }} />
            </ListItemButton>
          ))}
        </List>
        <Button variant="contained" size="large" startIcon={<ListAltIcon />} onClick={() => { setOpen(false); openDrawer(); }} sx={{ mt: 2 }}>
          Meu orçamento{count > 0 ? ` (${count})` : ''}
        </Button>
      </Drawer>
    </AppBar>
  );
}
