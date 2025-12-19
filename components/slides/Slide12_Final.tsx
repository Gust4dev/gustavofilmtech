import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { ArrowRight } from 'lucide-react';

export const Slide12_Final: React.FC = () => {
    
  const handleWhatsappClick = () => {
    window.open('https://wa.me/556292746409', '_blank');
  };

  return (
    <SlideWrapper className="bg-brand-black">
      <div className="w-full h-full flex flex-col items-center justify-center p-[4vmin] relative overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[20vmin] bg-gradient-to-b from-brand-red to-transparent" />
        
        <TextReveal>
            <h2 className="font-display font-bold text-white text-center mb-[6vmin] tracking-tight"
                style={{ fontSize: 'clamp(40px, 12vmin, 160px)' }}>
                Vamos assinar?
            </h2>
        </TextReveal>

        <TextReveal delay={0.2}>
            <button 
                onClick={handleWhatsappClick}
                className="group relative inline-flex items-center gap-[2vmin] px-[6vmin] py-[3vmin] bg-brand-red text-white overflow-hidden transition-all duration-300 hover:bg-red-700 hover:scale-105 rounded-lg"
            >
                <span className="relative z-10 font-bold uppercase tracking-widest leading-none"
                      style={{ fontSize: 'clamp(14px, 2vmin, 28px)' }}>
                  Falar com Gustavo
                </span>
                <ArrowRight className="transform group-hover:translate-x-1 transition-transform" style={{ width: '3vmin', height: '3vmin' }} />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            </button>
        </TextReveal>

        <div className="absolute bottom-[6vmin] text-center">
            <TextReveal delay={0.4}>
                <p className="text-gray-500 font-mono uppercase tracking-[0.3em]"
                   style={{ fontSize: 'clamp(8px, 1vmin, 14px)' }}>
                  FilmTech © 2025
                </p>
                <p className="text-gray-600 mt-[1vmin]"
                   style={{ fontSize: 'clamp(8px, 1vmin, 12px)' }}>
                  Confidencial
                </p>
            </TextReveal>
        </div>

      </div>
    </SlideWrapper>
  );
};
