import { Box, Card, Chip, Link, Typography } from '@mui/material';
import Section from '../components/Section';
import Photo from '../components/Photo';
import { STORES } from '../data/store';
import { PHONE_LABEL } from '../config';
import { getImage } from '../utils/images';

const routeUrl = (s) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${s.endereco}, ${s.cidade}`)}`;

export default function Lojas() {
  return (
    <Section id="lojas" soft title="Nossas lojas" subtitle="Venha experimentar o calçado e tirar dúvidas pessoalmente.">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
        {STORES.map((s) => (
          <Card key={s.slug} sx={{ p: 1.25, borderRadius: 3 }}>
            <Photo src={getImage(`lojas/${s.slug}`)} alt={`Loja ${s.nome}`} label={`Loja ${s.nome}`} path={`src/assets/lojas/${s.slug}.jpg`} ratio="16 / 10" radius={2} />
            <Box sx={{ p: { xs: 2, md: 2.5 } }}>
              <Chip label={s.tag} size="small" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }} />
              <Typography variant="h3" component="h3" sx={{ mt: 1.75, mb: 1 }}>{s.nome}</Typography>
              <Typography>{s.endereco}<br />{s.cidade}</Typography>
              <Typography color="text.secondary" sx={{ my: 1.5 }}>{s.horario}<br />WhatsApp {PHONE_LABEL}</Typography>
              <Link href={routeUrl(s)} target="_blank" rel="noopener noreferrer" color="text.primary" fontWeight={700} underline="always" sx={{ textDecorationColor: (t) => t.palette.primary.main, textDecorationThickness: 3, textUnderlineOffset: 5 }}>
                Como chegar
              </Link>
            </Box>
          </Card>
        ))}
      </Box>
    </Section>
  );
}
