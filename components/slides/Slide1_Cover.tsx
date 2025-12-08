import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SmoothImage } from '../SmoothImage';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide1_Cover: React.FC = () => {
  return (
    <SlideWrapper className="bg-black">
      {/* Background - Simulating Video Loop with High Res Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <SmoothImage 
          src="/images/imagem1.JPG" 
          alt="Luxury Car" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dark Overlay for Readability - Smooth Fade In */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
          className="absolute inset-0 bg-black/40" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col h-full justify-center">
        
        <TextReveal delay={0.1}>
          <div className="mb-8 flex justify-center">
            <div className="border-2 border-white px-4 py-1 text-sm tracking-[0.3em] font-display uppercase drop-shadow-md backdrop-blur-sm bg-black/10">
              <span className="text-brand-red drop-shadow-md">F</span>ilmTech
            </div>
          </div>
        </TextReveal>

        <TextReveal delay={0.3}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[0.9] mb-6 drop-shadow-2xl">
            DA FORÇA <span className="text-brand-red">DA MÃO</span><br />
            À FORÇA <span className="text-brand-red">DA INTELIGÊNCIA.</span>
          </h1>
        </TextReveal>

        <TextReveal delay={0.5}>
          <p className="text-lg md:text-2xl text-gray-200 font-light max-w-3xl mx-auto drop-shadow-xl bg-black/20 p-2 rounded-lg backdrop-blur-sm">
            A evolução de uma marca referência para um ecossistema de escala nacional.
          </p>
        </TextReveal>


      </div>
    </SlideWrapper>
  );
};
