import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { ArrowRight } from 'lucide-react';

export const Slide12_Final: React.FC = () => {
    
  const handleWhatsappClick = () => {
    window.open('https://wa.me/556292746409', '_blank');
  };

  return (
    <SlideWrapper className="bg-brand-black">
      <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-brand-red to-transparent" />
        
        <TextReveal>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white text-center mb-12 tracking-tight">
                Vamos assinar?
            </h2>
        </TextReveal>

        <TextReveal delay={0.2}>
            <button 
                onClick={handleWhatsappClick}
                className="group relative inline-flex items-center gap-4 px-12 py-6 bg-brand-red text-white overflow-hidden transition-all duration-300 hover:bg-red-700 hover:scale-105"
            >
                <span className="relative z-10 text-xl font-bold uppercase tracking-widest">Falar com Gustavo</span>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            </button>
        </TextReveal>

        <div className="absolute bottom-12 text-center">
            <TextReveal delay={0.4}>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">FilmTech © 2025</p>
                <p className="text-gray-600 text-[10px] mt-2">Confidencial</p>
            </TextReveal>
        </div>

      </div>
    </SlideWrapper>
  );
};
