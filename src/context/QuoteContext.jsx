import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';

const STORAGE_KEY = 'qz-orcamento-v1';
const QuoteContext = createContext(null);

const load = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const clamp = (n) => Math.max(1, Math.min(999, n));

function reducer(items, action) {
  switch (action.type) {
    case 'add': {
      const { product, size, qty } = action;
      const id = `${product.slug}|${size ?? ''}`;
      if (items.some((i) => i.id === id)) {
        return items.map((i) => (i.id === id ? { ...i, qty: clamp(i.qty + qty) } : i));
      }
      return [...items, { id, slug: product.slug, name: product.name, cat: product.cat, size: size ?? null, qty: clamp(qty) }];
    }
    case 'qty':
      return items.map((i) => (i.id === action.id ? { ...i, qty: clamp(action.qty) } : i));
    case 'remove':
      return items.filter((i) => i.id !== action.id);
    case 'clear':
      return [];
    default:
      return items;
  }
}

export function QuoteProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], load);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* sem armazenamento: a lista só vale nesta visita */
    }
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      add: (product, size, qty = 1) => {
        dispatch({ type: 'add', product, size, qty });
        setNotice(`${product.name} adicionado ao orçamento`);
      },
      setQty: (id, qty) => dispatch({ type: 'qty', id, qty }),
      remove: (id) => dispatch({ type: 'remove', id }),
      clear: () => dispatch({ type: 'clear' }),
      drawerOpen,
      openDrawer: () => {
        setNotice(null);
        setDrawerOpen(true);
      },
      closeDrawer: () => setDrawerOpen(false),
      notice,
      clearNotice: () => setNotice(null),
    }),
    [items, drawerOpen, notice],
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export const useQuote = () => useContext(QuoteContext);
