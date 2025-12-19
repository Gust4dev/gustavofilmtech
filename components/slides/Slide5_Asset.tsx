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
      <div className="container mx-auto px-[5vmin] h-full flex flex-col justify-center">
        
        <div className="text-center mb-[6vmin]">
          <TextReveal delay={0.1}>
            <span className="text-brand-red font-bold uppercase tracking-widest"
                  style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}>
              Valuation
            </span>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 className="font-display font-black text-gray-900 mt-[1vmin]"
                style={{ fontSize: 'clamp(32px, 8vmin, 100px)' }}>
              O PATAMAR ATUAL
            </h2>
            <p className="text-gray-500 mt-[2vmin]"
               style={{ fontSize: 'clamp(16px, 2.5vmin, 32px)' }}>
              Uma base sólida construída com excelência.
            </p>
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vmin] md:gap-x-[4vmin] max-w-[80vmin] mx-auto w-full">
          {assets.map((item, index) => (
            <TextReveal key={index} delay={0.3 + (index * 0.1)} className="w-full">
              <div className="flex items-center gap-[2vmin] p-[2vmin] bg-white shadow-sm border border-gray-100 hover:border-brand-red/50 hover:shadow-md transition-all duration-300 rounded-lg group">
                <CheckCircle2 className="text-brand-red group-hover:scale-110 transition-transform" 
                              style={{ width: '3vmin', height: '3vmin' }}
                />
                <span className="font-semibold text-gray-800"
                      style={{ fontSize: 'clamp(14px, 2vmin, 24px)' }}>
                  {item}
                </span>
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
