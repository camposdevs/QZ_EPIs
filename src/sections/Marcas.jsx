import { Box, Card, Typography } from '@mui/material';
import Section from '../components/Section';
import { BRANDS } from '../data/store';
import { getImage, } from '../utils/images';
import { slugify } from '../data/catalog';

// Logo de cada marca: src/assets/marcas/<nome-da-marca>.png (ex.: marluvas.png)
export default function Marcas() {
  return (
    <Section title="Marcas com que trabalhamos">
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 1.5 }}>
        {BRANDS.map((b) => {
          const logo = getImage(`marcas/${slugify(b)}`);
          return (
            <Card key={b} sx={{ height: 110, display: 'grid', placeItems: 'center', p: 2, borderRadius: 2.5, bgcolor: logo ? '#f6f3ee' : 'background.paper' }}>
              {logo ? <Box component="img" src={logo} alt={b} loading="lazy" sx={{ maxWidth: 1, maxHeight: 64, objectFit: 'contain' }} /> : <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" component="p">{b}</Typography>
                  <Typography variant="caption" component="p" sx={{ color: 'primary.dark', fontFamily: 'ui-monospace, Menlo, Consolas, monospace', fontSize: 10.5, wordBreak: 'break-all' }}>{`src/assets/marcas/${slugify(b)}.png`}</Typography>
                </Box>}
            </Card>
          );
        })}
      </Box>
    </Section>
  );
}
