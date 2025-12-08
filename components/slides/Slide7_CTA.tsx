import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SmoothImage } from '../SmoothImage';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Slide7Props {
  onFinish?: () => void;
}

export const Slide7_CTA: React.FC<Slide7Props> = ({ onFinish }) => {
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
             {/* Simple Red CTA Button */}
             <motion.button 
                onClick={onFinish}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 text-xl font-bold rounded-none shadow-2xl transition-shadow hover:shadow-red-500/50"
             >
                INICIAR PARCERIA
                <ArrowRight className="w-6 h-6" />
             </motion.button>
             
           
           </TextReveal>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative order-1 md:order-2">
          <SmoothImage 
            src="/images/imagem5.jpeg" 
            alt="Founder Portrait" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:bg-gradient-to-r md:from-white" />
        </div>

      </div>
    </SlideWrapper>
  );
};
