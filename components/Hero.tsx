
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-slate-900">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-orange-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8 animate-in slide-in-from-left duration-1000">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-md">
            🚀 Nova Era da Conectividade em Angola
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Vá Mais Longe com a <span className="text-orange-500">Unitel Next</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-lg">
            Experimente a rede 5G mais rápida do país com planos personalizados para o seu estilo de vida digital.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-unitel-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
              Descubra os Planos
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-md transition-all">
              Unitel Money
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative animate-in zoom-in duration-1000">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img 
              src="https://picsum.photos/seed/telecom/800/600" 
              alt="Connected life" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 font-bold">Cobertura 5G Ativa</p>
                <p className="text-slate-600 text-sm">Luanda, Benguela, Lubango e mais...</p>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 gradient-unitel rounded-full blur-2xl opacity-60"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-400 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
