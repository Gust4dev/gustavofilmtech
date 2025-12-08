import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

export const Slide4_Turn: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black">
      <div className="w-full h-full flex flex-col">
        
        {/* Top Image Split */}
        <div className="h-[45vh] w-full relative overflow-hidden">
           <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000" 
              alt="Filmtech Success" 
              className="w-full h-full object-cover object-center"
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
                O NASCIMENTO DA <span className="text-brand-red">FILMTECH</span>
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
