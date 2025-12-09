import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SmoothImage } from '../SmoothImage';

export const Slide2_Origin: React.FC = () => {
  return (
    <SlideWrapper className="bg-brand-dark">
      <div className="w-full h-full flex flex-col md:flex-row">
        
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
          <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <SmoothImage 
            src="/images/imagem2.jpeg" 
            alt="Tomé-Açu 2011"
            className="w-full h-full object-cover transition-transform duration-[2s] scale-100 group-hover:scale-110"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <span className="text-8xl font-display font-bold text-white/10 select-none">2011</span>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-20 bg-brand-black text-white relative">
          <div className="absolute top-0 left-0 w-2 h-32 bg-brand-red md:block hidden" />
          
          <TextReveal delay={0.2}>
            <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2">A Origem</h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Onde Tudo <br/>Começou
            </h2>
          </TextReveal>

          <TextReveal delay={0.4}>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 border-l-2 border-brand-red/30 pl-6">
              "Tomé-Açu, Pará. Foi aqui que aprendi com o 'Cafa' a lição que guia a empresa até hoje: <strong className="text-white">O trabalho bem feito abre portas que o dinheiro não abre.</strong>"
            </p>
          </TextReveal>

          <TextReveal delay={0.6}>
            <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
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
