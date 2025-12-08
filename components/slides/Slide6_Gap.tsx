import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { TrendingUp, BrainCircuit, Landmark } from 'lucide-react';

export const Slide6_Gap: React.FC = () => {
  return (
    <SlideWrapper className="bg-black text-white">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        
        <TextReveal delay={0.2}>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
             O CAMINHO ATÉ AQUI FOI <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-800">NA FORÇA DA MÃO.</span>
          </h2>
        </TextReveal>

        <TextReveal delay={0.4}>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            Crescemos na intuição, no suor e na coragem. Mas escalar para <span className="text-white font-bold">R$ 500 Mil/Mês</span> e nacionalizar a marca exige mais.
          </p>
        </TextReveal>

        <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
          <GapCard 
            icon={<BrainCircuit className="w-10 h-10 text-brand-red" />}
            title="Gestão & Governança"
            delay={0.6}
          />
          <GapCard 
            icon={<TrendingUp className="w-10 h-10 text-brand-red" />}
            title="Inteligência Comercial"
            delay={0.7}
          />
          <GapCard 
            icon={<Landmark className="w-10 h-10 text-brand-red" />}
            title="Capital Estratégico"
            delay={0.8}
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

const GapCard = ({ icon, title, delay }: { icon: React.ReactNode, title: string, delay: number }) => (
  <TextReveal delay={delay} className="w-full">
    <div className="flex flex-col items-center p-8 bg-zinc-900/50 border border-zinc-800 hover:border-brand-red transition-colors duration-300 rounded-xl h-full">
      <div className="mb-6 p-4 bg-black rounded-full border border-zinc-800">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-display uppercase tracking-wide">{title}</h3>
    </div>
  </TextReveal>
);
