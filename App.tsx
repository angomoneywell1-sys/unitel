
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlansSection from './components/PlansSection';
import ServicesGrid from './components/ServicesGrid';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const Home: React.FC = () => (
  <main className="animate-in fade-in duration-700">
    <Hero />
    <section id="planos" className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-unitel-blue mb-4">Escolha o seu Plano</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Temos as melhores opções para mantê-lo conectado ao que mais importa.</p>
      </div>
      <PlansSection />
    </section>
    
    <section id="servicos" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-unitel-blue mb-4">Serviços Digitais</h2>
          <p className="text-slate-600">Mais do que uma operadora, o seu parceiro digital em Angola.</p>
        </div>
        <ServicesGrid />
      </div>
    </section>
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        <Navbar />
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
};

export default App;
