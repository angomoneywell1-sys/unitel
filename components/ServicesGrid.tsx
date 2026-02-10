
import React from 'react';

const SERVICES = [
  {
    title: 'Unitel Money',
    description: 'Pague contas, envie e receba dinheiro diretamente pelo seu telemóvel de forma rápida e segura.',
    icon: '💰',
    color: 'bg-emerald-100'
  },
  {
    title: 'Unitel Video',
    description: 'O melhor entretenimento angolano e internacional na palma da sua mão, onde quer que esteja.',
    icon: '🎬',
    color: 'bg-purple-100'
  },
  {
    title: 'Roaming Unitel',
    description: 'Mantenha-se ligado em mais de 100 países com as tarifas mais competitivas do mercado.',
    icon: '🌍',
    color: 'bg-sky-100'
  },
  {
    title: 'Net Casa',
    description: 'Fibra óptica de alta velocidade para que toda a família possa jogar, ver filmes e trabalhar sem limites.',
    icon: '🏠',
    color: 'bg-orange-100'
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {SERVICES.map((service, idx) => (
        <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group hover-lift">
          <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {service.description}
          </p>
          <div className="mt-6 flex items-center text-unitel-blue font-semibold text-sm cursor-pointer hover:underline">
            Saber mais 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
