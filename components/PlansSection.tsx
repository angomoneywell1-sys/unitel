
import React from 'react';
import { Plan } from '../types';

const PLANS: Plan[] = [
  {
    id: '1',
    name: 'Unitel Mais 10GB',
    price: '5.000',
    data: '10GB de Internet',
    voice: '500 Minutos Unitel',
    description: 'Ideal para o dia a dia e redes sociais.',
    color: 'bg-blue-50',
    popular: false
  },
  {
    id: '2',
    name: 'Giga Mais 50GB',
    price: '15.000',
    data: '50GB de Internet',
    voice: 'Ilimitado Unitel',
    description: 'Para quem não quer parar de navegar e trabalhar.',
    color: 'bg-white',
    popular: true
  },
  {
    id: '3',
    name: 'Net Casa Fibra 50',
    price: '22.000',
    data: 'Ilimitado (50 Mbps)',
    voice: 'Sem Voz Incluída',
    description: 'A melhor internet para a sua família.',
    color: 'bg-orange-50',
    popular: false
  }
];

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  return (
    <div className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-unitel-blue shadow-2xl scale-105 z-10 bg-white' : 'border-slate-200 shadow-md bg-white'} transition-all hover-lift flex flex-col h-full`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-unitel-blue text-white px-4 py-1 rounded-full text-sm font-bold">
          MAIS POPULAR
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{plan.description}</p>
      </div>
      
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-unitel-blue">{plan.price}</span>
          <span className="text-slate-500 font-medium">AKZ /mês</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        <li className="flex items-center gap-3 text-slate-700">
          <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-semibold">{plan.data}</span>
        </li>
        <li className="flex items-center gap-3 text-slate-700">
           <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span>{plan.voice}</span>
        </li>
        <li className="flex items-center gap-3 text-slate-500 text-sm">
           <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span>Roaming Grátis (Portugal/Brasil)</span>
        </li>
      </ul>

      <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.popular ? 'bg-unitel-blue text-white hover:bg-blue-700 shadow-lg shadow-blue-200' : 'bg-slate-100 text-unitel-blue hover:bg-slate-200'}`}>
        Aderir Agora
      </button>
    </div>
  );
};

const PlansSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PLANS.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
};

export default PlansSection;
