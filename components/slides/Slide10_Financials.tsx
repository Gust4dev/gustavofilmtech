import React, { useEffect, useState } from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { motion } from 'framer-motion';

export const Slide10_Financials: React.FC = () => {
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    // Determine when to trigger animation based on visibility if needed, 
    // but SlideWrapper mounts/unmounts so useEffect is fine.
    const timer = setTimeout(() => setAnimateBars(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SlideWrapper className="bg-gray-50">
      <div className="w-full h-full flex flex-col justify-center px-8 md:px-32 relative">
        
        <TextReveal>
            <h4 className="text-brand-red font-bold uppercase tracking-widest mb-12">O Bloco Financeiro</h4>
        </TextReveal>

        <div className="flex flex-col md:flex-row gap-16 items-end h-[60vh] max-w-6xl w-full">
            
            {/* Legend / Context */}
            <div className="flex-1 pb-12">
                 <TextReveal delay={0.2}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-8 leading-tight">
                        Projeção de <br/>Faturamento
                    </h2>
                    <p className="text-xl text-gray-600 mb-4">
                        Consolidando serviços de alto ticket e escala digital.
                    </p>
                    <div className="text-5xl md:text-6xl font-bold text-brand-red">
                        R$ 1 Milhão<span className="text-2xl text-gray-400 font-normal">/mês</span>
                    </div>
                 </TextReveal>
            </div>

            {/* Chart Area */}
            <div className="flex-1 h-full flex items-end gap-8 relative pb-12 border-b border-gray-300">
                
                {/* Bar 1: Presencial */}
                <div className="w-1/3 h-full flex flex-col justify-end group">
                    <div className="mb-4 text-center opacity-0 transition-opacity duration-500 delay-[1000ms]" style={{ opacity: animateBars ? 1 : 0 }}>
                        <span className="font-bold text-black text-xl">R$ 240k</span>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Presencial</p>
                    </div>
                    <motion.div 
                        className="w-full bg-gray-300 rounded-t-sm relative overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: animateBars ? '30%' : 0 }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                    >
                         <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                </div>

                {/* Bar 2: Online (Digital) */}
                <div className="w-1/3 h-full flex flex-col justify-end group">
                     <div className="mb-4 text-center opacity-0 transition-opacity duration-500 delay-[1200ms]" style={{ opacity: animateBars ? 1 : 0 }}>
                        <span className="font-bold text-black text-xl">R$ 600k</span>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Online</p>
                    </div>
                     <motion.div 
                        className="w-full bg-brand-red rounded-t-sm relative overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: animateBars ? '75%' : 0 }}
                        transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }}
                    >
                        <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                </div>

                {/* Line: Total Potential */}
                <div className="absolute top-[10%] left-0 w-full border-t-2 border-dashed border-gray-400 z-0 flex items-center">
                     <div className="bg-gray-50 pr-4 text-gray-400 font-mono text-xs font-bold -mt-8 ml-2">POTENCIAL TOTAL</div>
                </div>

            </div>
        </div>

      </div>
    </SlideWrapper>
  );
};
