import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Check, Zap, Rocket, ShieldCheck } from 'lucide-react';

const DELIVERABLES = [
  {
    title: "Diagnóstico & Setup",
    desc: "Imersão completa no negócio, configuração de CRM e definição de KPIs.",
    icon: Zap,
    delay: 0.1
  },
  {
    title: "Implementação Growth",
    desc: "Execução dos 8 Pilares (Tráfego, Vendas, Tech) com time dedicado.",
    icon: Rocket,
    delay: 0.2
  },
  {
    title: "Acompanhamento Full",
    desc: "Reuniões semanais de performance e otimização contínua de ROI.",
    icon: ShieldCheck,
    delay: 0.3
  }
];

export const Slide11_Deal: React.FC = () => {
  return (
    <SlideWrapper className="bg-gray-900 text-white overflow-hidden flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full px-6 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Lado Esquerdo: A Promessa */}
        <div className="w-full md:w-1/2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              O Modelo de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-600">
                Parceria
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-4 border-brand-red pl-6">
              Não somos uma agência que entrega posts. Somos um braço estratégico de crescimento dentro da sua operação.
            </p>
            
            {/* Box de Destaque - O Deal */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                    Formato de Atuação
                </h3>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                        <Check className="text-brand-red" size={20} />
                        <span>Fee Mensal (Gestão & Tecnologia)</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                        <Check className="text-brand-red" size={20} />
                        <span>Success Fee (Variável sobre Crescimento)</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                        <Check className="text-brand-red" size={20} />
                        <span>Exclusividade de Área (Sob consulta)</span>
                    </li>
                </ul>
            </div>
          </motion.div>
        </div>

        {/* Lado Direito: Os Entregáveis (Cards) */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
            {DELIVERABLES.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.delay, duration: 0.5 }}
                    className="bg-white text-gray-900 p-6 rounded-2xl shadow-2xl flex items-start gap-4 hover:scale-105 transition-transform duration-300"
                >
                    <div className="p-3 bg-gray-100 rounded-xl shrink-0">
                        <item.icon size={24} className="text-brand-red" />
                    </div>
                    <div>
                        <h4 className="text-xl font-black uppercase mb-1">{item.title}</h4>
                        <p className="text-gray-600 font-medium text-sm leading-snug">
                            {item.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </SlideWrapper>
  );
};