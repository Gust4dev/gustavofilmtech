import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SmoothImage } from '../SmoothImage';

export const Slide3_Struggle: React.FC = () => {
  const [isGrayscale, setIsGrayscale] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsGrayscale(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SlideWrapper className="bg-gray-200 overflow-hidden relative">
      
      {/* Background Ambience (Blur) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-red/10 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-gray-400/20 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      {/* Stronger Noise Overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center h-full relative z-10">
        
        <div className="order-2 md:order-1">
           <TextReveal delay={0.2}>
            <div className="inline-block bg-brand-red px-3 py-1 mb-6 shadow-lg">
              <span className="text-white font-bold uppercase text-sm tracking-widest">A Escola da Resiliência</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-black mb-6 leading-tight">
              A ERA DOS <br/>
              <span className="text-gray-400 line-through decoration-brand-red decoration-4 opacity-60">R$ 90,00</span>
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.4}>
             <h3 className="text-2xl font-bold text-gray-800 mb-4">Manaus - Gustavo Adesivos</h3>
             <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
               Foram 7 anos construindo nome e aplicando películas de R$ 90,00. Mas quem sonha grande não cabe em limitações.
             </p>
             <p className="text-black font-semibold text-xl border-l-4 border-brand-red pl-4 italic">
               Manaus ficou pequena para a visão de futuro que eu carregava.
             </p>
          </TextReveal>
        </div>

        <div className="order-1 md:order-2 h-[300px] md:h-[500px] relative">
          <TextReveal delay={0.4} className="h-full w-full">
            <div className="w-full h-full relative p-4">
              {/* Decorative Border Frame */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-brand-red/30 z-0" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-black/10 z-0" />
              
              <SmoothImage 
                src="/images/imagem3.jpeg" 
                alt="Early Days Workshop" 
                className={`w-full h-full object-cover transition-all duration-1000 relative z-10 shadow-2xl ${isGrayscale ? 'grayscale contrast-125' : 'grayscale-0'}`}
              />
            </div>
          </TextReveal>
        </div>

      </div>
    </SlideWrapper>
  );
};
