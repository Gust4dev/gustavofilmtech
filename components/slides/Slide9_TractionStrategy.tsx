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
      <div className="absolute top-[3vmin] md:top-12 w-full text-center z-10 px-[4vmin]">
        <TextReveal>
            <h2 className="font-black text-gray-900 uppercase tracking-tight mb-[1vmin]"
                style={{ fontSize: 'clamp(24px, 5vmin, 64px)' }}>
            Motor de <span className="text-brand-red">Vendas & Tração</span>
            </h2>
        </TextReveal>
        <TextReveal delay={0.2}>
            <p className="text-gray-500 font-bold tracking-[0.2em] uppercase"
               style={{ fontSize: 'clamp(10px, 1.2vmin, 18px)' }}>
            Do Desconhecido ao Cliente Fiel
            </p>
        </TextReveal>
      </div>

      {/* Funnel Container */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-[2vmin] md:gap-[4vmin] w-full max-w-[95vmin] px-[2vmin] mt-[10vmin] md:mt-[15vmin] h-[75%] md:h-auto overflow-y-auto md:overflow-visible custom-scrollbar">
        {FUNNEL_STAGES.map((stage, index) => (
          <div key={stage.id} className="relative flex-1 flex flex-col md:contents group min-h-min">
            
            {/* Arrow Connector (Mobile: Down, Desktop: Right) */}
            {index < FUNNEL_STAGES.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 left-[33%] -translate-y-1/2 z-0 transform translate-x-1/2">
                 <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 0.3, x: 0 }}
                   transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                 >
                    <ArrowRight className="text-gray-300" style={{ width: '4vmin', height: '4vmin' }} />
                 </motion.div>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, type: "spring", bounce: 0.4 }}
              className={`
                flex-1 relative flex flex-col p-[3vmin] rounded-3xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                ${stage.bg} ${stage.border}
              `}
            >
              {/* Header Card */}
              <div className="flex items-center gap-[2vmin] mb-[2vmin]">
                <div className={`p-[1.5vmin] rounded-2xl bg-white shadow-sm ${stage.color}`}>
                  <stage.icon style={{ width: '3.5vmin', height: '3.5vmin' }} />
                </div>
                <div>
                    <h3 className={`font-black uppercase tracking-tight ${stage.color}`}
                        style={{ fontSize: 'clamp(18px, 2.5vmin, 36px)' }}>
                        {stage.title}
                    </h3>
                    <p className="font-bold text-gray-400 uppercase tracking-wider"
                       style={{ fontSize: 'clamp(10px, 1.2vmin, 16px)' }}>
                        {stage.subtitle}
                    </p>
                </div>
              </div>

              {/* Content List */}
              <div className="space-y-[1.5vmin] mb-[3vmin] flex-grow">
                {stage.content.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/60 p-[1vmin] rounded-lg">
                        <CheckCircle2 className={stage.color} style={{ width: '2vmin', height: '2vmin' }} />
                        <span className="font-bold text-gray-700"
                              style={{ fontSize: 'clamp(12px, 1.5vmin, 20px)' }}>
                          {item}
                        </span>
                    </div>
                ))}
              </div>

              {/* Key Takeaway Box */}
              <div className="bg-white p-[2vmin] rounded-xl shadow-sm border border-gray-100 mt-auto">
                <p className="text-gray-600 font-medium italic leading-relaxed"
                   style={{ fontSize: 'clamp(10px, 1.2vmin, 16px)' }}>
                    "{stage.keyTakeaway}"
                </p>
              </div>
              
              {/* Step Number Badge */}
              <div className="absolute -top-[1.5vmin] -right-[1.5vmin] w-[4vmin] h-[4vmin] rounded-full bg-gray-900 text-white flex items-center justify-center font-black shadow-md"
                   style={{ fontSize: '1.5vmin' }}>
                {stage.id}
              </div>

            </motion.div>
          </div>
        ))}
      </div>

    </SlideWrapper>
  );
};
