import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { usePrint } from '../PrintContext';
import { SlideProps } from '../../types';

export const Slide_PW_Target: React.FC<SlideProps> = () => {
  const { isPrinting } = usePrint();
  return (
    <SlideWrapper className="bg-white overflow-hidden" showFlare>
      <div className="container mx-auto px-[5vmin] h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div>
             <TextReveal delay={0.1}>
               <h4 className="text-brand-red font-bold uppercase tracking-widest mb-4">Público-Alvo</h4>
               <h2 className="text-gray-900 font-black text-5xl md:text-7xl uppercase leading-tight mb-8">
                 Para quem é o <br/>Private Wrap?
               </h2>
             </TextReveal>
             
             <div className="space-y-6">
               {[
                 "Proprietários de veículos Super Sport e Luxury.",
                 "Colecionadores que exigem originalidade preservada.",
                 "Investidores automotivos focados em valor de revenda.",
                 "Entusiastas que não aceitam 'bom o suficiente'."
               ].map((text, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.4 + (i * 0.1) }}
                   className="flex items-center gap-4 text-gray-500 text-lg md:text-xl"
                 >
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                   {text}
                 </motion.div>
               ))}
             </div>
           </div>

           <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className={`aspect-square rounded-full border border-brand-red/10 flex items-center justify-center ${isPrinting ? 'p-4' : 'p-12'}`}
              >
                <div className={`w-full h-full rounded-full border border-brand-red/20 flex items-center justify-center ${isPrinting ? 'p-4' : 'p-12'}`}>
                   <div className={`w-full h-full rounded-full bg-brand-red flex flex-col items-center justify-center text-center ${isPrinting ? 'p-4' : 'p-8'} shadow-[0_0_50px_rgba(239,68,68,0.2)]`}>
                      <span className={`text-white font-black leading-none ${isPrinting ? 'text-4xl' : 'text-6xl md:text-8xl'}`}>0.1%</span>
                      <span className={`text-white/80 font-bold uppercase tracking-widest mt-2 ${isPrinting ? 'text-xs' : 'text-sm'}`}>Do Mercado Automotivo</span>
                   </div>
                </div>
              </motion.div>
              
              {/* Floating accents */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 blur-2xl rounded-full"
              />
           </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide_PW_Target;
