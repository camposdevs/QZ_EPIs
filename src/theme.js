import { createTheme } from '@mui/material/styles';

// Paleta preto e laranja da loja.
const colors = {
  brand: '#e8892b',
  brandLight: '#f0a04b',
  brandInk: '#1a1206',
  bg: '#0e0c09',
  paper: '#16120e',
  soft: '#120f0b',
  placeholder: '#261f16',
  text: '#f6efe4',
  muted: '#a79d8d',
  line: '#2e261b',
  whatsapp: '#1faa59',
};

const display = '"Barlow Condensed", "Arial Narrow", Impact, sans-serif';
const body = '"Barlow", system-ui, sans-serif';
const heading = (fontSize) => ({
  fontFamily: display,
  fontWeight: 800,
  textTransform: 'uppercase',
  lineHeight: 1,
  letterSpacing: '0.005em',
  fontSize,
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: colors.brand, dark: colors.brandLight, contrastText: colors.brandInk },
    ink: { main: colors.text, contrastText: colors.bg },
    whatsapp: { main: colors.whatsapp, contrastText: '#ffffff' },
    soft: { main: colors.soft },
    placeholder: { main: colors.placeholder },
    background: { default: colors.bg, paper: colors.paper },
    text: { primary: colors.text, secondary: colors.muted },
    divider: colors.line,
  },
  // Cantos pouco arredondados: visual de catálogo técnico, sem cara de template.
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: body,
    h1: heading('clamp(2.4rem, 5.6vw, 4.2rem)'),
    h2: heading('clamp(1.9rem, 4vw, 2.8rem)'),
    h3: heading('1.7rem'),
    h4: heading('1.4rem'),
    h5: { ...heading('1.15rem'), letterSpacing: '0.02em' },
    body1: { fontSize: '1.0625rem', lineHeight: 1.65 },
    body2: { fontSize: '0.95rem', lineHeight: 1.55 },
    button: { textTransform: 'none', fontWeight: 700, letterSpacing: '0.01em' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth', scrollPaddingTop: '96px' },
        '@media (prefers-reduced-motion: reduce)': { html: { scrollBehavior: 'auto' } },
      },
    },
    MuiPaper: { defaultProps: { elevation: 0 }, styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiCard: { defaultProps: { variant: 'outlined' }, styleOverrides: { root: { borderRadius: 4 } } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 4, padding: '10px 20px' },
        sizeLarge: { padding: '13px 26px', fontSize: '1rem' },
      },
    },
    MuiChip: { styleOverrides: { root: { fontWeight: 600, borderRadius: 4 } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 4 } } },
    MuiDialog: { styleOverrides: { paper: { borderRadius: 6 } } },
    MuiDrawer: { styleOverrides: { paper: { backgroundImage: 'none' } } },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          minWidth: 52,
          height: 44,
          borderRadius: 4,
          border: `1px solid ${colors.line}`,
          color: colors.text,
          fontWeight: 700,
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: colors.brand,
            borderColor: colors.brand,
            color: colors.brandInk,
          },
        },
      },
    },
  },
});

export default theme;
