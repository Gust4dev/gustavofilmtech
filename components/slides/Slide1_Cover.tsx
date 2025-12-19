import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SmoothImage } from '../SmoothImage';

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
        {/* Dark Overlay for Readability - Static */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-[4vmin] text-center text-white flex flex-col h-full justify-center">
        
        <TextReveal delay={0.1}>
          <div className="mb-[4vmin] flex justify-center">
            <div className="border-2 border-white px-[2vmin] py-[0.5vmin] font-display uppercase drop-shadow-md backdrop-blur-sm bg-black/10"
                 style={{ fontSize: 'clamp(10px, 1.5vmin, 20px)', letterSpacing: '0.3em' }}>
              <span className="text-brand-red drop-shadow-md">F</span>ilmTech
            </div>
          </div>
        </TextReveal>

        <TextReveal delay={0.3}>
          <h1 className="font-black font-display tracking-tight leading-[0.9] mb-[3vmin] drop-shadow-2xl"
              style={{ fontSize: 'clamp(32px, 10vmin, 140px)' }}>
            DA FORÇA <span className="text-brand-red">DA MÃO</span><br />
            À FORÇA <span className="text-brand-red">DA INTELIGÊNCIA.</span>
          </h1>
        </TextReveal>

        <TextReveal delay={0.5}>
          <p className="text-gray-200 font-light max-w-[80vmin] mx-auto drop-shadow-xl bg-black/20 p-[1vmin] rounded-lg backdrop-blur-sm"
             style={{ fontSize: 'clamp(14px, 2.5vmin, 32px)' }}>
            A evolução de uma marca referência para um ecossistema de escala nacional.
          </p>
        </TextReveal>

      </div>
    </SlideWrapper>
  );
};
