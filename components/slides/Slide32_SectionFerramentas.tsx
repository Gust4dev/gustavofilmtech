import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

export const Slide32_SectionFerramentas: React.FC = () => {
  return (
    <SlideWrapper className="bg-white" showFlare>
      <div className="absolute top-[-6vmin] right-[-4vmin] w-[50vmin] h-[50vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />

      <motion.img
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.3 }}
        src="/images/logoname.png"
        alt=""
        className="absolute right-0 h-[85%] object-contain pointer-events-none select-none"
      />

      <div className="relative z-10 container mx-auto px-[5vmin] text-center">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Seção 08
          </span>
        </TextReveal>

        <TextReveal delay={0.25}>
          <h2
            className="font-display font-black text-gray-900 mt-[2vmin] leading-none"
            style={{ fontSize: 'clamp(26px, 6.5vmin, 80px)' }}
          >
            Materiais para Aplicação<br />
            <span className="text-gray-500" style={{ fontSize: 'clamp(20px, 5vmin, 60px)' }}>
              de PPF e Envelopamento
            </span>
          </h2>
        </TextReveal>

        <TextReveal delay={0.45}>
          <div className="w-[12vmin] h-[0.5vmin] bg-brand-red mx-auto mt-[3vmin] rounded-full" />
        </TextReveal>
      </div>
    </SlideWrapper>
  );
};
