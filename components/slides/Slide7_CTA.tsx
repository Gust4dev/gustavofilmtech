import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide7_CTA: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black">
      <div className="w-full h-full flex flex-col md:flex-row">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-12 order-2 md:order-1 relative z-20 bg-white">
           <TextReveal delay={0.2}>
             <h2 className="text-4xl md:text-5xl font-black font-display mb-6 leading-tight">
               CHEGUEI ATÉ AQUI <span className="text-brand-red">SOZINHO.</span> <br/>
               O PRÓXIMO PASSO É <span className="underline decoration-brand-red decoration-4 underline-offset-4">EM PARCERIA.</span>
             </h2>
           </TextReveal>

           <TextReveal delay={0.4}>
             <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
               "A FILMTECH já lucra muito, mas pode lucrar muito mais com a estrutura certa. Vamos construir a fase da Inteligência juntos?"
             </p>
           </TextReveal>

           <TextReveal delay={0.6}>
             <motion.a 
                href="https://wa.me/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-brand-black text-white px-8 py-5 text-lg font-bold rounded-none hover:bg-brand-red transition-colors duration-300 shadow-xl"
             >
               AVANÇAR PARA NEGOCIAÇÃO
               <ArrowRight className="w-5 h-5" />
             </motion.a>
           </TextReveal>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative order-1 md:order-2">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000" 
            alt="Founder Portrait" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:bg-gradient-to-r md:from-white" />
        </div>

      </div>
    </SlideWrapper>
  );
};
