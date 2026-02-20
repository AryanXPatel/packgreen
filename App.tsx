import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pack-bg selection:bg-pack-green selection:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
