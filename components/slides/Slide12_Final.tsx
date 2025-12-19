import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export const Slide12_Final: React.FC = () => {
  // Variantes de animação para entrada suave
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    // Mudamos para fundo escuro para dar um ar mais "premium/luxury" no encerramento
    <SlideWrapper className="bg-gray-950 overflow-hidden flex items-center justify-center">
      
      {/* Background Abstrato (Luzes sutis) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-red/10 rounded-full blur-[120px] opacity-40" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="relative z-10 text-center w-full px-6 flex flex-col items-center"
      >
        
        {/* Título Final de Impacto */}
        <motion.h2 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none"
        >
          Vamos <br/>
          <span className="text-brand-red -mt-2 block">
            Escalar.
          </span>
        </motion.h2>

        {/* Linha Separadora Elegante */}
        <motion.div 
            variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent mb-16"
        />

        {/* Bloco dos Instagrams (Lado a Lado) */}
        <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full"
        >
            {/* Perfil Pessoal */}
            <div className="flex flex-col items-center group">
                <div className="p-4 bg-white/5 rounded-full mb-4 border-2 border-white/10 group-hover:border-brand-red/50 transition-colors">
                    <Instagram size={48} className="text-white group-hover:text-brand-red transition-colors" />
                </div>
                <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">Founder</span>
                <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    @gustavo_filmtech
                </span>
            </div>

            {/* Divisor Vertical (Apenas Desktop) */}
            <div className="hidden md:block w-px h-24 bg-white/10" />

            {/* Perfil da Empresa */}
            <div className="flex flex-col items-center group">
                 <div className="p-4 bg-white/5 rounded-full mb-4 border-2 border-white/10 group-hover:border-brand-red/50 transition-colors">
                    <Instagram size={48} className="text-white group-hover:text-brand-red transition-colors" />
                </div>
                <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">Company</span>
                <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    @filmtech_luxury
                </span>
            </div>
        </motion.div>
        
      </motion.div>
    </SlideWrapper>
  );
};