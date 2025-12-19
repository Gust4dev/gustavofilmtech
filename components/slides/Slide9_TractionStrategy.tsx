import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Magnet, Filter, Repeat, ArrowRight, Zap, Target, Users } from 'lucide-react';

const FUNNEL_STEPS = [
  {
    id: 'attraction',
    title: 'Atração (Ads)',
    icon: Magnet,
    color: 'from-blue-500 to-blue-600',
    stats: '+2MM',
    label: 'Impressões/mês',
    description: 'Tráfego qualificado via Meta & Google Ads com criativos de alta conversão.'
  },
  {
    id: 'conversion',
    title: 'Conversão (Vendas)',
    icon: Filter,
    color: 'from-brand-red to-red-600',
    stats: '35%',
    label: 'Taxa de Agendamento',
    description: 'SDRs e Closers treinados para filtrar curiosos e fechar negócios de alto ticket.'
  },
  {
    id: 'retention',
    title: 'Retenção (LTV)',
    icon: Repeat,
    color: 'from-emerald-500 to-emerald-600',
    stats: '12x',
    label: 'Recorrência Anual',
    description: 'Onboarding premium e esteira de produtos para maximizar o valor do cliente.'
  }
];

export const Slide9_TractionStrategy: React.FC = () => {
  return (
    <SlideWrapper className="bg-white overflow-hidden flex flex-col">
      {/* Header */}
      <div className="pt-10 px-6 text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-2"
        >
          O Motor de <span className="text-brand-red">Tração</span>
        </motion.h2>
        <p className="text-gray-500 text-sm font-bold tracking-[0.2em] uppercase">
          Como transformamos desconhecidos em clientes fiéis
        </p>
      </div>

      {/* Funnel Container */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 px-4 md:px-12 relative">
        
        {/* Background Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-20 right-20 h-2 bg-gray-100 -z-10 rounded-full overflow-hidden">
             <motion.div 
                className="h-full bg-gradient-to-r from-blue-100 via-brand-red/20 to-emerald-100"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
             />
        </div>

        {FUNNEL_STEPS.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Card do Passo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative w-full md:w-1/3 max-w-sm group"
            >
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xl relative overflow-hidden h-full flex flex-col">
                {/* Topo com Ícone */}
                <div className={`
                    absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.color} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110
                `} />
                
                <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                        <step.icon size={28} />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 uppercase">{step.title}</h3>
                </div>

                {/* KPI Principal */}
                <div className="mb-4">
                    <div className="text-4xl font-black text-gray-900">{step.stats}</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{step.label}</div>
                </div>

                {/* Descrição */}
                <p className="text-gray-600 font-medium leading-relaxed text-sm">
                    {step.description}
                </p>
                
                {/* Indicador de Passo */}
                <div className="mt-auto pt-4 flex justify-end opacity-20 text-4xl font-black text-gray-300">
                    0{index + 1}
                </div>
              </div>
            </motion.div>

            {/* Seta (Apenas Desktop e não no último) */}
            {index < FUNNEL_STEPS.length - 1 && (
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.2) }}
                    className="hidden md:flex text-gray-300"
                >
                    <ArrowRight size={32} />
                </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </SlideWrapper>
  );
};