// Google Analytics 4 (opcional). Só liga se existir a variável VITE_GA_ID (ex.: G-XXXXXXXXXX).
const GA_ID = import.meta.env.VITE_GA_ID;

export function initAnalytics() {
  if (!GA_ID || window.gtag) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
}

// Registra um evento (ex.: clique no WhatsApp). Sem a variável, não faz nada.
export function track(name, params = {}) {
  if (typeof window.gtag === 'function') window.gtag('event', name, params);
}
