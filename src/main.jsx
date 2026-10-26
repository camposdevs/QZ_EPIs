import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@fontsource/barlow/600.css';
import '@fontsource/barlow-condensed/600.css';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/barlow-condensed/800.css';
import theme from './theme';
import App from './App';
import { QuoteProvider } from './context/QuoteContext';
import { initAnalytics } from './utils/analytics';

initAnalytics();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuoteProvider>
        <App />
      </QuoteProvider>
    </ThemeProvider>
  </StrictMode>,
);
