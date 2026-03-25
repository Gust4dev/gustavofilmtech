import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SlideProps } from '../../types';

export const Slide_Acabamento_Intro: React.FC<SlideProps> = ({ sectionNumber }) => {
  return (
    <SlideWrapper className="bg-white" showFlare>
      <div className="absolute top-[-6vmin] left-[-6vmin] w-[48vmin] h-[48vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />

      <motion.img
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.3 }}
        src="/images/logoname.webp"
        alt=""
        className="absolute right-0 h-[85%] object-contain pointer-events-none select-none"
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
            className="font-display font-black text-gray-900 mt-[2vmin] leading-none text-brand-red"
            style={{ fontSize: 'clamp(36px, 9vmin, 110px)' }}
          >
            Acabamento<br /><span className="text-gray-900">Final</span>
          </h2>
        </TextReveal>

        <TextReveal delay={0.45}>
          <div className="w-[12vmin] h-[0.5vmin] bg-brand-red mx-auto mt-[3vmin] rounded-full" />
        </TextReveal>
        
        <TextReveal delay={0.6}>
          <p className="text-gray-500 mt-8 text-xl max-w-2xl mx-auto italic font-medium leading-relaxed">
            "A diferença entre o bom e o excelente está no que os olhos não conseguem ver, mas a mão consegue sentir."
          </p>
        </TextReveal>
      </div>
    </SlideWrapper>
  );
};

export default Slide_Acabamento_Intro;
