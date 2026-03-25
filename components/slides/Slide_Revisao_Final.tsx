import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { Star } from 'lucide-react';

export const Slide_Revisao_Final: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black overflow-hidden" showFlare showLogo>
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[url('/images/imagem1.webp')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />
      
      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center items-center text-center">
        <TextReveal delay={0.1}>
          <div className="flex gap-2 mb-8 justify-center">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-8 h-8 fill-brand-red text-brand-red" />)}
          </div>
          <h2 className="font-display font-black text-6xl md:text-9xl uppercase leading-none mb-8 text-gray-900">
            Qualidade <br/><span className="text-brand-red italic">Incomparável</span>
          </h2>
        </TextReveal>

        <TextReveal delay={0.4}>
          <p className="text-gray-500 text-2xl md:text-3xl max-w-3xl leading-relaxed italic border-l-4 border-brand-red pl-8 text-left">
            "Não entregamos apenas proteção. Entregamos a tranquilidade de saber que seu investimento está nas mãos dos melhores."
          </p>
        </TextReveal>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '20vmin' }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-1 bg-brand-red mt-12"
        />
      </div>
    </SlideWrapper>
  );
};

export default Slide_Revisao_Final;
