import { Box, Card, CardActionArea, Typography } from '@mui/material';
import Section from '../components/Section';
import { CATEGORIES, PRODUCTS, categoryLabel } from '../data/catalog';

export default function Linhas({ onPick }) {
  return (
    <Section id="linhas" title="Linhas de proteção" subtitle="Escolha uma linha para ver os produtos." sx={{ pt: { xs: 2, md: 4 } }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 1.5 }}>
        {CATEGORIES.map((c) => {
          const total = PRODUCTS.filter((p) => p.cat === c).length;
          return (
            <Card key={c} sx={{ borderLeft: 3, borderLeftColor: 'primary.main', '&:hover': { borderColor: 'primary.main', bgcolor: 'soft.main' }, transition: 'background-color .2s' }}>
              <CardActionArea onClick={() => onPick(c)} sx={{ p: 2.25, minHeight: 92, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <Typography variant="h5" component="p">{categoryLabel(c)}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{total} {total === 1 ? 'item' : 'itens'}</Typography>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </Section>
  );
}
