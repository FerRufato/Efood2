import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalCss } from './styles';

import Home from './pages/Home';
import Categories from './pages/Categories';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
