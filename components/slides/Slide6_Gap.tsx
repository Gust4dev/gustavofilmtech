import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { TrendingUp, BrainCircuit, Landmark, ArrowRight } from 'lucide-react';

export const Slide6_Gap: React.FC = () => {
  return (
    <SlideWrapper className="bg-white relative overflow-hidden">
      {/* Background Decorativo Sutil */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60vh] h-[60vh] bg-gray-50 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-red-50/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center relative z-10">
        
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
             O CAMINHO ATÉ AQUI FOI <br/>
             <span className="text-brand-red">NA FORÇA DA MÃO.</span>
          </h2>
          
          <div className="w-24 h-1.5 bg-gray-100 rounded-full mx-auto mb-8" />

          <p className="text-gray-500 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
            Crescemos na intuição, no suor e na coragem. <br className="hidden md:block" />
            Mas escalar para <span className="text-gray-900 font-bold bg-gray-100 px-2 py-0.5 rounded">R$ 500 Mil/Mês</span> exige mais.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
          <GapCard 
            icon={BrainCircuit}
            title="Gestão & Governança"
            subtitle="Estrutura para suportar o peso do crescimento."
            delay={0.2}
          />
          <GapCard 
            icon={TrendingUp}
            title="Inteligência Comercial"
            subtitle="Transformar demanda orgânica em vendas previsíveis."
            delay={0.4}
            isCenter={true} // Destaque sutil para o card do meio
          />
          <GapCard 
            icon={Landmark}
            title="Capital Estratégico"
            subtitle="Fôlego financeiro para acelerar sem riscos."
            delay={0.6}
          />
        </div>

        {/* Call to Action Visual (Seta indicando futuro) */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center gap-3 text-gray-400 text-xs font-bold tracking-[0.2em] uppercase"
        >
            <span>Próxima Fase</span>
            <ArrowRight size={16} className="text-brand-red animate-pulse" />
        </motion.div>

      </div>
    </SlideWrapper>
  );
};

// Componente do Card Refatorado
const GapCard = ({ icon: Icon, title, subtitle, delay, isCenter = false }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, type: "spring", stiffness: 100 }}
    whileHover={{ y: -8 }}
    className={`
        relative flex flex-col items-start p-8 rounded-3xl border transition-all duration-300 h-full group
        ${isCenter 
            ? 'bg-white border-brand-red/20 shadow-xl shadow-brand-red/5 z-10 scale-105' 
            : 'bg-white border-gray-100 shadow-lg hover:shadow-xl hover:border-gray-200'
        }
    `}
  >
    {/* Icon Wrapper */}
    <div className={`
        mb-6 p-4 rounded-2xl transition-colors duration-300
        ${isCenter ? 'bg-brand-red text-white' : 'bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white'}
    `}>
      <Icon size={32} strokeWidth={1.5} />
    </div>

    {/* Content */}
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
        {title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed font-medium">
        {subtitle}
    </p>

    {/* Decorative Bottom Line */}
    <div className={`
        absolute bottom-0 left-8 right-8 h-1 rounded-t-full transition-all duration-500
        ${isCenter ? 'bg-brand-red' : 'bg-transparent group-hover:bg-brand-red/20'}
    `} />
  </motion.div>
);