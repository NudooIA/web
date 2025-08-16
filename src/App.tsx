import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// 🔧 IMPORTACIONES CORRECTAS
import CookieBanner from './components/CookieBanner';        // ✅ Banner (componente)
import CookieManagement from './pages/CookieManagement';     // ✅ Página de configuración

import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <Solutions />
    <Stats />
    <Testimonials />
    <Footer />
    <WhatsAppFloat />
    {/* ❌ NO PONER EL BANNER AQUÍ - se mueve abajo */}
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-settings" element={<CookieManagement />} /> {/* ✅ NUEVA RUTA */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* ✅ BANNER FUERA DE RUTAS - se muestra globalmente cuando es necesario */}
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;