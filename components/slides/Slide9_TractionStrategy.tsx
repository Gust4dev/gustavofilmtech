import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Magnet, RefreshCw, Trophy, ArrowRight, UserCheck, Headset, CheckCircle2 } from 'lucide-react';

const FUNNEL_STAGES = [
  {
    id: 1,
    title: 'Atração',
    subtitle: 'O Imã',
    icon: Magnet,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    border: 'border-blue-200',
    content: ['Tráfego Pago (Ads)', 'Posicionamento de Autoridade'],
    keyTakeaway: 'Geramos demanda qualificada, não apenas curiosos.',
  },
  {
    id: 2,
    title: 'Conversão',
    subtitle: 'A Engenharia',
    icon: UserCheck,
    color: 'text-brand-red',
    bg: 'bg-red-50',
    border: 'border-red-200',
    content: ['Pré-venda (SDR)', 'Executivos de Fechamento'],
    keyTakeaway: 'Scripts validados e CRM auditável. Sem improviso.',
  },
  {
    id: 3,
    title: 'Retenção',
    subtitle: 'O Lucro',
    icon: RefreshCw,
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
    border: 'border-emerald-200',
    content: ['Onboarding de Elite', 'Esteira de Produtos (Upsell)'],
    keyTakeaway: 'Transformamos clientes em recorrentes.',
  },
];

export const Slide9_TractionStrategy: React.FC = () => {
  return (
    <SlideWrapper className="bg-white overflow-hidden flex flex-col items-center justify-center">
      {/* Header */}
      <div className="absolute top-8 md:top-12 w-full text-center z-10 px-6">
        <TextReveal>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-2">
            Motor de <span className="text-brand-red">Vendas & Tração</span>
            </h2>
        </TextReveal>
        <TextReveal delay={0.2}>
            <p className="text-gray-500 text-sm font-bold tracking-[0.2em] uppercase">
            Do Desconhecido ao Cliente Fiel
            </p>
        </TextReveal>
      </div>

      {/* Funnel Container */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-8 w-full max-w-6xl px-4 md:px-8 mt-16 md:mt-24">
        {FUNNEL_STAGES.map((stage, index) => (
          <div key={stage.id} className="relative flex-1 flex md:contents group">
            
            {/* Arrow Connector (Mobile: Down, Desktop: Right) */}
            {index < FUNNEL_STAGES.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 left-[33%] -translate-y-1/2 z-0 transform translate-x-1/2">
                 <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 0.3, x: 0 }}
                   transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                 >
                    <ArrowRight size={40} className="text-gray-300" />
                 </motion.div>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, type: "spring", bounce: 0.4 }}
              className={`
                flex-1 relative flex flex-col p-6 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                ${stage.bg} ${stage.border}
              `}
            >
              {/* Header Card */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-white shadow-sm ${stage.color}`}>
                  <stage.icon size={28} />
                </div>
                <div>
                    <h3 className={`text-xl font-black uppercase tracking-tight ${stage.color}`}>
                        {stage.title}
                    </h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {stage.subtitle}
                    </p>
                </div>
              </div>

              {/* Content List */}
              <div className="space-y-3 mb-8 flex-grow">
                {stage.content.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/60 p-2 rounded-lg">
                        <CheckCircle2 size={16} className={stage.color} />
                        <span className="text-sm font-bold text-gray-700">{item}</span>
                    </div>
                ))}
              </div>

              {/* Key Takeaway Box */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mt-auto">
                <p className="text-xs text-gray-600 font-medium italic leading-relaxed">
                    "{stage.keyTakeaway}"
                </p>
              </div>
              
              {/* Step Number Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-sm shadow-md">
                {stage.id}
              </div>

            </motion.div>
          </div>
        ))}
      </div>

    </SlideWrapper>
  );
};
