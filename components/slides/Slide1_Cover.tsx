import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide1_Cover: React.FC = () => {
  return (
    <SlideWrapper className="bg-black">
      {/* Background - Simulating Video Loop with High Res Image */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col h-full justify-center">
        
        <TextReveal delay={0.1}>
          <div className="mb-8 flex justify-center">
            <div className="border-2 border-white px-4 py-1 text-sm tracking-[0.3em] font-display uppercase">
              FilmTech
            </div>
          </div>
        </TextReveal>

        <TextReveal delay={0.3}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[0.9] mb-6">
            DA FORÇA <span className="text-brand-red">DA MÃO</span><br />
            À FORÇA <span className="text-brand-red">DA INTELIGÊNCIA.</span>
          </h1>
        </TextReveal>

        <TextReveal delay={0.5}>
          <p className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
            A evolução de uma marca referência para um ecossistema de escala nacional.
          </p>
        </TextReveal>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Role para começar</span>
          <ChevronDown className="animate-bounce text-brand-red w-6 h-6" />
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
