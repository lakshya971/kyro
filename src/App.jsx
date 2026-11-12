import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Development from './pages/Development';
import AiWorkflows from './pages/AiWorkflows';
import Analytics from './pages/Analytics';

import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-surface text-body-text selection:bg-surface-bright selection:text-ink">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/development" element={<Development />} />
            <Route path="/ai-workflows" element={<AiWorkflows />} />
            <Route path="/analytics" element={<Analytics />} />
           
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
