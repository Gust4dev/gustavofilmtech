import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SmoothImage } from '../SmoothImage';

export const Slide2_Origin: React.FC = () => {
  return (
    <SlideWrapper className="bg-brand-dark">
      <div className="w-full h-full flex flex-col md:flex-row">
        
        {/* Left Image Section - 40% height on mobile, 50% width on desktop */}
        <div className="w-full h-[40vh] md:w-1/2 md:h-full relative overflow-hidden group shrink-0">
          <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <SmoothImage 
            src="/images/imagem2.jpeg" 
            alt="Tomé-Açu 2011"
            className="w-full h-full object-cover transition-transform duration-[2s] scale-100 group-hover:scale-110"
          />
          <div className="absolute bottom-[2vmin] left-[2vmin] z-20">
            <span className="font-display font-bold text-white/10 select-none leading-none"
                  style={{ fontSize: 'clamp(60px, 15vmin, 200px)' }}>
              2011
            </span>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 flex-1 md:h-full flex flex-col justify-center px-[5vmin] md:px-[6vmin] bg-brand-black text-white relative">
          <div className="absolute top-0 left-0 w-[1vmin] h-[20vmin] bg-brand-red md:block hidden" />
          
          <TextReveal delay={0.2}>
            <h4 className="text-brand-red font-bold uppercase tracking-widest mb-[1vmin]"
                style={{ fontSize: 'clamp(12px, 2vmin, 18px)' }}>
              A Origem
            </h4>
            <h2 className="font-display font-bold mb-[3vmin] leading-tight"
                style={{ fontSize: 'clamp(32px, 6vmin, 80px)' }}>
              Onde Tudo <br/>Começou
            </h2>
          </TextReveal>

          <TextReveal delay={0.4}>
            <p className="text-gray-400 leading-relaxed mb-[4vmin] border-l-2 border-brand-red/30 pl-[2vmin]"
               style={{ fontSize: 'clamp(14px, 2vmin, 24px)' }}>
              "Tomé-Açu, Pará. Foi aqui que aprendi com o 'Cara' a lição que guia a empresa até hoje: <strong className="text-white">O trabalho bem feito abre portas que o dinheiro não abre.</strong>"
            </p>
          </TextReveal>

          <TextReveal delay={0.6}>
            <div className="flex items-center gap-[2vmin] text-gray-500 font-mono"
                 style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}>
              <span>BASE TÉCNICA</span>
              <span className="w-1 h-1 bg-brand-red rounded-full" />
              <span>VALORES INEGOCIÁVEIS</span>
            </div>
          </TextReveal>
        </div>

      </div>
    </SlideWrapper>
  );
};
