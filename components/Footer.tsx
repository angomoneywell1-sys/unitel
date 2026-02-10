
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-unitel rounded-lg flex items-center justify-center">
               <span className="text-white font-bold italic">U</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">UNITEL <span className="text-orange-500">NEXT</span></span>
          </div>
          <p className="text-sm leading-relaxed">
            Líder em telecomunicações em Angola, focada na inovação e na melhor experiência para o cliente.
          </p>
          <div className="flex gap-4">
            {['fb', 'tw', 'ig', 'li'].map(s => (
              <div key={s} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-unitel-blue transition-colors flex items-center justify-center cursor-pointer">
                <span className="uppercase text-xs font-bold text-white">{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Empresa</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-unitel-blue transition-colors">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-unitel-blue transition-colors">Carreiras</a></li>
            <li><a href="#" className="hover:text-unitel-blue transition-colors">Responsabilidade Social</a></li>
            <li><a href="#" className="hover:text-unitel-blue transition-colors">Imprensa</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Suporte</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-unitel-blue transition-colors">Centro de Ajuda</a></li>
            <li><a href="#" className="hover:text-unitel-blue transition-colors">Contactos</a></li>
            <li><a href="#" className="hover:text-unitel-blue transition-colors">Lojas Unitel</a></li>
            <li><a href="#" className="hover:text-unitel-blue transition-colors">Feedback</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Receba as últimas novidades e promoções.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Seu email" className="bg-slate-800 border-none rounded-xl px-4 py-2 w-full text-sm focus:ring-1 focus:ring-unitel-blue" />
            <button className="bg-unitel-blue text-white p-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; 2025 Unitel Next Angola. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacidade</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
