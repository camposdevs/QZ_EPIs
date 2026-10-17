import { createTheme } from '@mui/material/styles';

// Paleta preto e laranja da loja.
const colors = {
  brand: '#e8892b',
  brandLight: '#f0a04b',
  brandInk: '#1a1206',
  bg: '#0e0c09',
  paper: '#181410',
  soft: '#16120d',
  placeholder: '#261f16',
  text: '#f6efe4',
  muted: '#a79d8d',
  line: '#32291d',
  whatsapp: '#1faa59',
};

const display = '"Barlow Condensed", "Arial Narrow", Impact, sans-serif';
const body = '"Barlow", system-ui, sans-serif';
const heading = (fontSize) => ({
  fontFamily: display,
  fontWeight: 800,
  textTransform: 'uppercase',
  lineHeight: 0.95,
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
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: body,
    h1: heading('clamp(3.1rem, 8.5vw, 6.2rem)'),
    h2: heading('clamp(2.4rem, 5.5vw, 3.8rem)'),
    h3: heading('2.1rem'),
    h4: heading('1.55rem'),
    h5: { ...heading('1.25rem'), letterSpacing: '0.02em' },
    body1: { fontSize: '1.0625rem', lineHeight: 1.65 },
    body2: { fontSize: '0.95rem', lineHeight: 1.55 },
    button: { textTransform: 'none', fontWeight: 700, letterSpacing: 0 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth', scrollPaddingTop: '88px' },
        body: {
          backgroundImage: `radial-gradient(900px 500px at 85% -5%, rgba(232,137,43,.2), transparent 60%), radial-gradient(700px 500px at 0% 45%, rgba(232,137,43,.07), transparent 60%)`,
          backgroundAttachment: 'fixed',
        },
        '@media (prefers-reduced-motion: reduce)': { html: { scrollBehavior: 'auto' } },
      },
    },
    MuiPaper: { defaultProps: { elevation: 0 }, styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiCard: { defaultProps: { variant: 'outlined' }, styleOverrides: { root: { borderRadius: 20 } } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, padding: '11px 24px' },
        sizeLarge: { padding: '14px 28px', fontSize: '1rem' },
      },
    },
    MuiChip: { styleOverrides: { root: { fontWeight: 600, borderRadius: 999 } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 14 } } },
    MuiDialog: { styleOverrides: { paper: { borderRadius: 24 } } },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          minWidth: 52,
          height: 46,
          borderRadius: 12,
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
