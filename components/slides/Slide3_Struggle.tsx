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

      <div className="container mx-auto px-[5vmin] flex flex-col md:grid md:grid-cols-2 gap-[5vmin] items-center h-full relative z-10 justify-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 w-full relative z-10">
           <TextReveal delay={0.2}>
            <div className="inline-block bg-brand-red px-[2vmin] py-[0.5vmin] mb-[3vmin] shadow-lg">
              <span className="text-white font-bold uppercase tracking-widest"
                    style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}>
                A Escola da Resiliência
              </span>
            </div>
            <h2 className="font-display font-bold text-black mb-[3vmin] leading-tight"
                style={{ fontSize: 'clamp(32px, 6vmin, 80px)' }}>
              A ERA DOS <br/>
              <span className="text-gray-400 line-through decoration-brand-red decoration-4 opacity-60">R$ 90,00</span>
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.4}>
             <h3 className="font-bold text-gray-800 mb-[2vmin]"
                 style={{ fontSize: 'clamp(18px, 3vmin, 32px)' }}>
               Manaus - Gustavo Adesivos
             </h3>
             <p className="text-gray-600 leading-relaxed mb-[3vmin] font-medium"
                style={{ fontSize: 'clamp(14px, 2vmin, 24px)' }}>
               Foram 7 anos construindo nome e aplicando películas de R$ 90,00. Mas quem sonha grande não cabe em limitações.
             </p>
             <p className="text-black font-semibold border-l-4 border-brand-red pl-[2vmin] italic"
                style={{ fontSize: 'clamp(16px, 2.5vmin, 28px)' }}>
               Manaus ficou pequena para a visão de futuro que eu carregava.
             </p>
          </TextReveal>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 w-full h-[30vh] md:h-[60vmin] relative">
          <TextReveal delay={0.4} className="h-full w-full">
            <div className="w-full h-full relative p-[2vmin]">
              {/* Decorative Border Frame */}
              <div className="absolute top-0 right-0 w-[10vmin] h-[10vmin] border-t-4 border-r-4 border-brand-red/30 z-0" />
              <div className="absolute bottom-0 left-0 w-[10vmin] h-[10vmin] border-b-4 border-l-4 border-black/10 z-0" />
              
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
