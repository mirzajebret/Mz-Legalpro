import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PricelistPage from './pages/PricelistPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/pricelist" element={<PricelistPage />} />
          <Route path="/layanan/:id" element={<ServiceDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;