import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import Hero from './sections/Hero';
import Linhas from './sections/Linhas';
import Faixa from './sections/Faixa';
import Catalog from './sections/Catalog';
import ComoPedir from './sections/ComoPedir';
import Marcas from './sections/Marcas';
import Lojas from './sections/Lojas';
import Contato from './sections/Contato';

export default function App() {
  const [category, setCategory] = useState('Todos');

  const pickCategory = (c) => {
    setCategory(c);
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Linhas onPick={pickCategory} />
        <Faixa />
        <Catalog category={category} onCategory={setCategory} />
        <ComoPedir />
        <Marcas />
        <Lojas />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
