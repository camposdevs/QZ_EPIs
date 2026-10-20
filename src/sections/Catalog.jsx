import { useMemo, useState } from 'react';
import { Box, Card, CardActionArea, Chip, Stack, Typography } from '@mui/material';
import Section from '../components/Section';
import Photo from '../components/Photo';
import ProductDialog from '../components/ProductDialog';
import { CATEGORIES, PRODUCTS, categoryLabel } from '../data/catalog';
import { getImage } from '../utils/images';

const ALL = 'Todos';

export default function Catalog({ category, onCategory }) {
  const [selected, setSelected] = useState(null);
  const list = useMemo(() => PRODUCTS.filter((p) => category === ALL || p.cat === category), [category]);

  return (
    <Section id="catalogo" title="O que você procura?" subtitle="Toque no produto, escolha o tamanho e envie o pedido. Valores e disponibilidade a gente confirma no WhatsApp.">
      <Stack
        direction="row"
        gap={1}
        role="group"
        aria-label="Filtrar por linha"
        sx={{
          overflowX: 'auto',
          pb: 1,
          mb: 3,
          // Firefox
          scrollbarWidth: 'thin',
          scrollbarColor: '#32291d transparent',
          // Chrome / Edge / Safari
          '&::-webkit-scrollbar': { height: 6 },
          '&::-webkit-scrollbar-track': { background: 'transparent' },
          '&::-webkit-scrollbar-thumb': { background: '#32291d', borderRadius: 999 },
          '&::-webkit-scrollbar-thumb:hover': { background: '#e8892b' },
          '&::-webkit-scrollbar-button': { display: 'none' },
        }}
      >
        {[ALL, ...CATEGORIES].map((c) => (
          <Chip key={c} label={c === ALL ? ALL : categoryLabel(c)} clickable onClick={() => onCategory(c)} color={category === c ? 'primary' : 'default'} variant={category === c ? 'filled' : 'outlined'} sx={{ px: 0.5, height: 40, flexShrink: 0 }} />
        ))}
      </Stack>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 2 }}>
        {list.map((p) => (
          <Card key={p.slug} sx={{ display: 'flex', '&:hover': { borderColor: 'primary.main' }, transition: 'border-color .2s' }}>
            <CardActionArea
              onClick={() => setSelected(p)}
              sx={{ p: 1.25, display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start' }}
            >
              <Photo
                src={getImage(`produtos/${p.slug}`)}
                alt={p.name}
                label={p.name}
                path={`src/assets/produtos/${p.slug}.jpg`}
                ratio="1 / 1"
                radius={1.5}
                sx={{ flexShrink: 0 }}
              />
              <Box sx={{ px: 1.25, pt: 1.75, pb: 1, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography variant="body2" color="primary.dark" fontWeight={600}>{categoryLabel(p.cat)}</Typography>
                <Typography variant="h4" component="h3" sx={{ my: 0.75 }}>{p.name}</Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  sx={{ mt: 'auto', pt: 1, alignSelf: 'flex-start', textDecoration: 'underline', textDecorationColor: (t) => t.palette.primary.main, textUnderlineOffset: 4, textDecorationThickness: 2 }}
                >
                  Pedir no WhatsApp
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}