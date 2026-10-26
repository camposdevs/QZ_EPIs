import { Box, Button, Card, Chip, Typography } from '@mui/material';
import DirectionsIcon from '@mui/icons-material/Directions';
import Section from '../components/Section';
import Photo from '../components/Photo';
import { STORES } from '../data/store';
import { PHONE_LABEL } from '../config';
import { getImage } from '../utils/images';
import { track } from '../utils/analytics';

const address = (s) => `${s.endereco}, ${s.cidade}`;
const routeUrl = (s) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address(s))}`;
const mapUrl = (s) => `https://www.google.com/maps?q=${encodeURIComponent(address(s))}&output=embed`;

export default function Lojas() {
  return (
    <Section id="lojas" soft title="Retire na loja" subtitle="Monte seu orçamento e escolha em qual loja retirar. Venha experimentar o calçado e tirar dúvidas pessoalmente.">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
        {STORES.map((s) => (
          <Card key={s.slug} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Photo src={getImage(`lojas/${s.slug}`)} alt={`Fachada da loja ${s.nome}`} label={`Loja ${s.nome}`} path={`src/assets/lojas/${s.slug}.jpg`} ratio="16 / 10" radius={0} sx={{ borderRadius: 0 }} />
            <Box sx={{ p: { xs: 2, md: 2.5 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <Chip label={s.tag} size="small" sx={{ alignSelf: 'flex-start', bgcolor: 'primary.main', color: 'primary.contrastText' }} />
              <Typography variant="h3" component="h3" sx={{ mt: 1.5, mb: 1 }}>{s.nome}</Typography>
              <Typography>{s.endereco}<br />{s.cidade}</Typography>
              <Typography color="text.secondary" sx={{ mt: 1.5 }}>{s.horario}<br />WhatsApp {PHONE_LABEL}</Typography>
              <Button
                variant="outlined"
                color="ink"
                startIcon={<DirectionsIcon />}
                href={routeUrl(s)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('como_chegar_click', { loja: s.nome })}
                sx={{ mt: 2, alignSelf: 'flex-start' }}
              >
                Como chegar
              </Button>
            </Box>
            <Box
              component="iframe"
              title={`Mapa da loja ${s.nome}`}
              src={mapUrl(s)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{ border: 0, width: 1, height: 240, display: 'block', borderTop: 1, borderColor: 'divider' }}
            />
          </Card>
        ))}
      </Box>
    </Section>
  );
}
