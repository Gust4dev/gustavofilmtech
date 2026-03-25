import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SlideProps } from '../../types';

export const Slide13_SectionMarcas: React.FC<SlideProps> = ({ sectionNumber }) => {
  return (
    <SlideWrapper className="bg-white" showFlare showLogo={false}>
      <div className="absolute top-[-6vmin] left-[-6vmin] w-[48vmin] h-[48vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />

      <motion.img
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.3 }}
        src="/images/logobranca.webp"
        alt=""
        className="absolute right-[-10vmin] h-[85%] object-contain pointer-events-none select-none"
      />

      <div className="relative z-10 container mx-auto px-[5vmin] text-center">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Seção {String(sectionNumber || 0).padStart(2, '0')}
          </span>
        </TextReveal>

        <TextReveal delay={0.25}>
          <h2
            className="font-display font-black text-gray-900 mt-[2vmin] leading-none"
            style={{ fontSize: 'clamp(36px, 9vmin, 110px)' }}
          >
            Marcas de<br />Contaminação
          </h2>
        </TextReveal>

        <TextReveal delay={0.45}>
          <div className="w-[12vmin] h-[0.5vmin] bg-brand-red mx-auto mt-[3vmin] rounded-full" />
        </TextReveal>
      </div>
    </SlideWrapper>
  );
};
