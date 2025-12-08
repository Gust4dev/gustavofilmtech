import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SmoothImage } from '../SmoothImage';

export const Slide3_Struggle: React.FC = () => {
  const [isGrayscale, setIsGrayscale] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsGrayscale(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SlideWrapper className="bg-zinc-900">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Grain or texture overlay could go here */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center h-full relative z-10">
        
        <div className="order-2 md:order-1">
           <TextReveal delay={0.2}>
            <div className="inline-block bg-brand-red px-3 py-1 mb-6">
              <span className="text-white font-bold uppercase text-sm tracking-widest">A Escola da Resiliência</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              A ERA DOS <br/>
              <span className="text-gray-500 line-through decoration-brand-red decoration-4">R$ 90,00</span>
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.4}>
             <h3 className="text-2xl font-bold text-white mb-4">Manaus - Gustavo Adesivos</h3>
             <p className="text-gray-400 text-lg leading-relaxed mb-6">
               Foram 7 anos construindo nome e aplicando películas de R$ 90,00. Mas quem sonha grande não cabe em limitações.
             </p>
             <p className="text-white font-medium text-xl border-l-4 border-white pl-4">
               Manaus ficou pequena para a visão de futuro que eu carregava.
             </p>
          </TextReveal>
        </div>

        <div className="order-1 md:order-2 h-[300px] md:h-[500px] relative">
          <TextReveal delay={0.4} className="h-full w-full">
            <div className="w-full h-full relative p-4 border border-white/10">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-red/20 z-0" />
              <SmoothImage 
                src="/images/imagem3.jpeg" 
                alt="Early Days Workshop" 
                className={`w-full h-full object-cover transition-all duration-1000 relative z-10 shadow-2xl ${isGrayscale ? 'grayscale' : 'grayscale-0'}`}
              />
            </div>
          </TextReveal>
        </div>

      </div>
    </SlideWrapper>
  );
};
