import { Box, Typography } from '@mui/material';

// Mostra a foto se ela existir em src/assets; senão, um espaço tracejado indicando onde ela entra.
export default function Photo({ src, alt, label, path, ratio = '4 / 3', radius = 2, sx, priority = false }) {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: ratio,
        borderRadius: radius,
        bgcolor: 'placeholder.main',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        p: 2,
        ...(!src && { border: '2px dashed', borderColor: 'primary.main' }),
        ...sx,
      }}
    >
      {src ? (
        <Box
          component="img"
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : undefined}
          sx={{ position: 'absolute', inset: 0, width: 1, height: 1, objectFit: 'cover' }}
        />
      ) : (
        <Box>
          <Typography variant="h5" color="primary.dark">
            Foto
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
          {path && (
            <Typography variant="caption" component="p" sx={{ mt: 1, color: 'primary.dark', wordBreak: 'break-all', fontFamily: 'ui-monospace, Menlo, Consolas, monospace', fontSize: 11, lineHeight: 1.4 }}>
              {path}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
}
