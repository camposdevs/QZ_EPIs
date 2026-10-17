import { Box, Card, CardActionArea, Typography } from '@mui/material';
import Section from '../components/Section';
import { CATEGORIES, PRODUCTS, categoryLabel } from '../data/catalog';

export default function Linhas({ onPick }) {
  return (
    <Section id="linhas" title="Da cabeça aos pés" subtitle="Escolha uma linha de proteção para ver os produtos." sx={{ pt: { xs: 2, md: 4 } }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 1.5 }}>
        {CATEGORIES.map((c) => {
          const total = PRODUCTS.filter((p) => p.cat === c).length;
          return (
            <Card key={c} sx={{ '&:hover': { borderColor: 'primary.main' }, transition: 'border-color .2s' }}>
              <CardActionArea onClick={() => onPick(c)} sx={{ p: 2.5 }}>
                <Typography variant="h4" component="p">{categoryLabel(c)}</Typography>
                <Typography variant="body2" color="text.secondary">{total} {total === 1 ? 'item' : 'itens'}</Typography>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </Section>
  );
}