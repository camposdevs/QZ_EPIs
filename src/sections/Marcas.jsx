import { Box, Card, Typography } from '@mui/material';
import Section from '../components/Section';
import { BRANDS } from '../data/store';
import { getImage } from '../utils/images';
import { slugify } from '../data/catalog';

// Logo de cada marca: src/assets/marcas/<nome-da-marca>.png (ex.: marluvas.png)
export default function Marcas() {
  return (
    <Section title="Marcas com que trabalhamos">
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 1.5 }}>
        {BRANDS.map((b) => {
          const logo = getImage(`marcas/${slugify(b)}`);
          return (
            <Card key={b} sx={{ height: 100, display: 'grid', placeItems: 'center', p: 2, bgcolor: logo ? '#f6f3ee' : 'background.paper' }}>
              {logo ? (
                <Box component="img" src={logo} alt={b} loading="lazy" sx={{ maxWidth: 1, maxHeight: 60, objectFit: 'contain' }} />
              ) : (
                <Typography variant="h4" component="p">{b}</Typography>
              )}
            </Card>
          );
        })}
      </Box>
    </Section>
  );
}
