import { Avatar, Box, Card, Typography } from '@mui/material';
import Section from '../components/Section';

const STEPS = [
  { title: 'Escolha o item', text: 'Navegue pelo catálogo e toque no produto.' },
  { title: 'Selecione o tamanho', text: 'Quando o produto tiver numeração.' },
  { title: 'Envie no WhatsApp', text: 'A mensagem já vai pronta. É só continuar a conversa.' },
];

export default function ComoPedir() {
  return (
    <Section soft title="Como pedir">
      <Box component="ol" sx={{ p: 0, m: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
        {STEPS.map((s, i) => (
          <Card component="li" key={s.title} sx={{ p: 3, borderRadius: 3 }}>
            <Avatar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', fontFamily: 'inherit', fontWeight: 800, mb: 2.5 }}>{i + 1}</Avatar>
            <Typography variant="h4" component="h3" sx={{ mb: 1 }}>{s.title}</Typography>
            <Typography variant="body2" color="text.secondary">{s.text}</Typography>
          </Card>
        ))}
      </Box>
    </Section>
  );
}
