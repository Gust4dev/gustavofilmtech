import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SmoothImage } from '../SmoothImage';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide1_Cover: React.FC = () => {
  return (
    <SlideWrapper className="bg-black">
      {/* Background - Simulating Video Loop with High Res Image */}
      <div className="absolute inset-0 z-0 opacity-60">
        <SmoothImage 
          src="/images/imagem1.JPG" 
          alt="Luxury Car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col h-full justify-center">
        
        <TextReveal delay={0.1}>
          <div className="mb-8 flex justify-center">
            <div className="border-2 border-white px-4 py-1 text-sm tracking-[0.3em] font-display uppercase">
              FilmTech
            </div>
          </div>
        </TextReveal>

        <TextReveal delay={0.3}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[0.9] mb-6">
            DA FORÇA <span className="text-brand-red">DA MÃO</span><br />
            À FORÇA <span className="text-brand-red">DA INTELIGÊNCIA.</span>
          </h1>
        </TextReveal>

        <TextReveal delay={0.5}>
          <p className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
            A evolução de uma marca referência para um ecossistema de escala nacional.
          </p>
        </TextReveal>


      </div>
    </SlideWrapper>
  );
};
