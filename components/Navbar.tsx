
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 gradient-unitel rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
             <span className="text-white font-bold text-xl italic">U</span>
          </div>
          <span className="text-2xl font-bold text-unitel-blue tracking-tight">UNITEL <span className="text-orange-500">NEXT</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium">
          <a href="#planos" className="text-slate-600 hover:text-unitel-blue transition-colors">Planos</a>
          <a href="#servicos" className="text-slate-600 hover:text-unitel-blue transition-colors">Serviços</a>
          <a href="#roaming" className="text-slate-600 hover:text-unitel-blue transition-colors">Roaming</a>
          <a href="#ajuda" className="text-slate-600 hover:text-unitel-blue transition-colors">Suporte</a>
          <button className="bg-unitel-orange text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all hover:shadow-md active:scale-95">
            Minha Unitel
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-unitel-blue p-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
           </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 flex flex-col p-4 gap-4 animate-in slide-in-from-top duration-300">
          <a href="#planos" onClick={() => setIsOpen(false)} className="text-slate-600 py-2">Planos</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="text-slate-600 py-2">Serviços</a>
          <a href="#suporte" onClick={() => setIsOpen(false)} className="text-slate-600 py-2">Suporte</a>
          <button className="bg-unitel-orange text-white px-6 py-3 rounded-xl">Minha Unitel</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
