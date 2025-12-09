import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { CheckCircle2 } from 'lucide-react';

const assets = [
  "Marca consolidada",
  "Credibilidade nacional",
  "Reconhecimento no luxo",
  "Clientes de alto padrão",
  "Autoridade nas redes",
  "Método validado",
  "Educação escalável",
  "Resultado financeiro"
];

export const Slide5_Asset: React.FC = () => {
  return (
    <SlideWrapper className="bg-gray-50 text-black">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        
        <div className="text-center mb-16">
          <TextReveal delay={0.1}>
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Valuation</span>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-display font-black text-gray-900 mt-2">
              O PATAMAR ATUAL
            </h2>
            <p className="text-xl text-gray-500 mt-4">Uma base sólida construída com excelência.</p>
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 max-w-4xl mx-auto w-full">
          {assets.map((item, index) => (
            <TextReveal key={index} delay={0.3 + (index * 0.1)} className="w-full">
              <div className="flex items-center gap-4 p-4 bg-white shadow-sm border border-gray-100 hover:border-brand-red/50 hover:shadow-md transition-all duration-300 rounded-lg group">
                <CheckCircle2 className="w-6 h-6 text-brand-red group-hover:scale-110 transition-transform" />
                <span className="text-lg font-semibold text-gray-800">{item}</span>
              </div>
            </TextReveal>
          ))}
        </div>

        <div className="absolute top-0 right-0 h-full flex items-center pointer-events-none overflow-hidden">
           {/* Shadow Logo */}
           <motion.img 
             initial={{ opacity: 0, x: 100 }}
             animate={{ opacity: 0.02, x: 32 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             src="/images/logoname.png" 
             alt="" 
             className="absolute right-[-40px] blur-md scale-90 translate-y-4 h-[100%] object-contain" 
           />
           {/* Main Logo */}
           <motion.img 
             initial={{ opacity: 0, x: 100 }}
             animate={{ opacity: 0.05, x: 0 }}
             transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
             src="/images/logoname.png" 
             alt="Detail" 
             className="relative h-[90%] object-contain ml-20" 
           />
        </div>
      </div>
    </SlideWrapper>
  );
};
