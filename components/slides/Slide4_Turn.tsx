import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SmoothImage } from '../SmoothImage';

// CONFIGURAÇÃO DA IMAGEM (Dimensões e Posição)
const IMG_SCALE = 1.0; // Zoom da imagem (1.0 = normal, 1.2 = +20% zoom, etc)
const IMG_POS_X = 50;  // Posição Horizontal em % (0 = esquerda, 50 = centro, 100 = direita)
const IMG_POS_Y = 30;  // Posição Vertical em % (0 = topo, 50 = centro, 100 = baixo)

// CONFIGURAÇÃO DO LOGO 'F'
const LOGO_SIZE = '0.73em';     // Altura do logo (ex: 0.8em, 1.0em)
const LOGO_Y = '0px';          // Ajuste Vertical (ex: -5px sobe, 5px desce)
const LOGO_SCALE = 1.0;        // Zoom fino (ex: 1.1 aumenta 10%)

export const Slide4_Turn: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black">
      <div className="w-full h-full flex flex-col">
        
        {/* Top Image Split */}
        <div className="h-[45vh] w-full relative overflow-hidden">
           <SmoothImage 
              src="/images/imagem4.jpeg" 
              alt="Filmtech Success" 
              className="w-full h-full object-cover"
              style={{ 
                transform: `scale(${IMG_SCALE})`,
                objectPosition: `${IMG_POS_X}% ${IMG_POS_Y}%` 
              }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Bottom Content */}
        <div className="flex-1 container mx-auto px-6 flex flex-col justify-center relative -mt-12 z-10">
           <TextReveal delay={0.2}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-display font-bold text-brand-red">2019</span>
                <span className="text-xl font-bold uppercase tracking-wider">A Virada de Chave</span>
              </div>
           </TextReveal>

           <TextReveal delay={0.4}>
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                O NASCIMENTO DA <span className="text-brand-red inline-flex items-baseline">
                  <img 
                    src="/images/logoF.png" 
                    alt="F" 
                    className="self-baseline mr-[0.05em]"
                    style={{ 
                      height: LOGO_SIZE,
                      transform: `translateY(${LOGO_Y}) scale(${LOGO_SCALE})`
                    }}
                  />
                  ILMTECH
                </span>
              </h2>
           </TextReveal>

           <div className="grid md:grid-cols-2 gap-12">
             <TextReveal delay={0.6}>
               <p className="text-xl text-gray-800 leading-relaxed font-medium">
                 Mudança para Goiânia. O posicionamento mudou. Deixamos de faturar R$ 5.000/mês para nos tornarmos referência nacional em carros de luxo.
               </p>
             </TextReveal>
             
             <TextReveal delay={0.8}>
                <div className="bg-black text-white p-8 relative">
                   <div className="absolute -left-2 top-8 w-2 h-12 bg-brand-red" />
                   <p className="text-2xl font-display italic">
                     "Não vendemos apenas serviço. Vendemos Verdade, Bastidores e Autoridade."
                   </p>
                </div>
             </TextReveal>
           </div>
        </div>

      </div>
    </SlideWrapper>
  );
};
