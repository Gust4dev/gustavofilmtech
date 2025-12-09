import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SmoothImage } from '../SmoothImage';
import { motion } from 'framer-motion';

export const Slide7_Partners: React.FC = () => {
  return (
    <SlideWrapper className="bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gray-50/50 pointer-events-none">
           <motion.div 
             animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 right-0 w-[60vh] h-[60vh] bg-brand-red/5 rounded-full blur-[100px]" 
           />
           <motion.div 
             animate={{ scale: [1, 1.1, 1], translate: [0, 20, 0] }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="absolute bottom-0 left-0 w-[70vh] h-[70vh] bg-gray-200/50 rounded-full blur-[120px]" 
           />
      </div>

      <div className="relative w-full h-full flex flex-col md:flex-row items-stretch z-10">
        
        {/* Title Overlay */}
        <div className="absolute top-8 left-0 w-full flex justify-center z-30 pointer-events-none">
             <TextReveal delay={0.5}>
                <div className="px-6 py-2 bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-full">
                    <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-black">
                        A Força da Parceria
                    </h4>
                </div>
            </TextReveal>
        </div>

        {/* Rodrigo Section */}
        <div className="w-full md:w-1/2 relative overflow-hidden border-r border-gray-200/50">
            {/* Image Auto-Pan */}
            <motion.div 
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1.0 }}
                transition={{ duration: 10, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                 <SmoothImage 
                    src="/images/Rodrigo.jpeg" 
                    alt="Rodrigo"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            </motion.div>

            {/* Content Fixed */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col justify-end h-full">
                <TextReveal delay={0.2}>
                    <div className="relative border-l-4 border-brand-red pl-6">
                        <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-2 tracking-tight">
                            Rodrigo
                        </h3>
                        <p className="text-white/60 font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-8">O Investidor</p>

                        <div className="space-y-4">
                             <div className="bg-white/10 backdrop-blur-md p-4 rounded-r-lg border-t border-b border-white/5 shadow-lg">
                                <p className="text-3xl md:text-5xl font-bold text-white mb-1">R$ 5.5 Mi</p>
                                <p className="text-white/60 text-xs uppercase tracking-wider">Faturamento / Mês</p>
                            </div>
                            
                            <div>
                                <p className="text-lg md:text-xl font-light text-white">Estrutura e Comercial</p>
                            </div>
                        </div>
                    </div>
                </TextReveal>
            </div>
        </div>

        {/* Wallisson Section */}
        <div className="w-full md:w-1/2 relative overflow-hidden">
             {/* Image Auto-Pan */}
             <motion.div 
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1.0 }}
                transition={{ duration: 10, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
            >
                 <SmoothImage 
                    src="/images/Wallisson.jpg" 
                    alt="Wallisson"
                    className="w-full h-full object-cover position-top"
                  />
                   {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            </motion.div>

            {/* Content Fixed */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col justify-end h-full">
                <TextReveal delay={0.4}>
                     <div className="relative border-l-4 border-brand-red pl-6">
                        <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-2 tracking-tight">
                            Wallisson
                        </h3>
                        <p className="text-white/60 font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-8">O Gestor</p>

                         <div className="space-y-4">
                             <div className="bg-white/10 backdrop-blur-md p-4 rounded-r-lg border-t border-b border-white/5 shadow-lg">
                                <p className="text-3xl md:text-5xl font-bold text-white mb-1">400 Pessoas</p>
                                <p className="text-white/60 text-xs uppercase tracking-wider">Sob Gestão Direta</p>
                            </div>
                            
                            <div>
                                <p className="text-lg md:text-xl font-light text-white">Cultura e Processos</p>
                            </div>
                        </div>
                    </div>
                </TextReveal>
            </div>
        </div>

      </div>
    </SlideWrapper>
  );
};
