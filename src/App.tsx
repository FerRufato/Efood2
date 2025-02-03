import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { GlobalCss } from './styles';

import Home from './pages/Home';
import Categories from './pages/Categories';
import Product from './pages/Product';
import Footer from './components/Footer';
import Header from './components/Header';
import PresentationImage from './components/PresentationImage';

function App() {
  const location = useLocation();

  // Se a rota for exatamente "/", não exibe o header e o banner
  const exibirHeader = location.pathname !== '/';

  return (
    <>
      <GlobalCss />

      {exibirHeader && (
        <>
          <Header />
          <PresentationImage />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
