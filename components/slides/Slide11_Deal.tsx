import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

export const Slide11_Deal: React.FC = () => {
  return (
    <SlideWrapper className="bg-brand-dark">
      <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-20 text-white relative">
        
        {/* Background Texture */}
        <div className="absolute inset-0 bg-brand-black z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0" />
        
        <div className="relative z-10 w-full max-w-6xl">
            <TextReveal>
                <div className="text-center mb-16">
                    <h4 className="text-brand-red font-bold uppercase tracking-widest mb-4">Valuation & Deal</h4>
                    <h2 className="text-5xl md:text-7xl font-display font-bold">O Pedido</h2>
                </div>
            </TextReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16">
                
                {/* Left: Current Valuation */}
                <TextReveal delay={0.2} className="w-full">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-sm">
                        <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Valuation Atual</p>
                        <div className="text-4xl font-bold text-white mb-2">R$ 9.6M</div>
                        <p className="text-brand-red font-mono">(8x Lucro Líquido)</p>
                    </div>
                </TextReveal>

                 {/* Right: Future Valuation */}
                <TextReveal delay={0.4} className="w-full">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-sm">
                        <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Valuation Projetado</p>
                        <div className="text-4xl font-bold text-white mb-2">R$ 24.0M</div>
                        <p className="text-green-500 font-mono">Cenário Conservador</p>
                    </div>
                </TextReveal>
            </div>

            {/* The Cheque */}
            <TextReveal delay={0.6}>
                <div className="w-full bg-gradient-to-r from-brand-red/90 to-brand-red p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-brand-red/20 border border-white/10">
                    <div>
                        <p className="text-white/80 font-mono uppercase tracking-widest mb-2">Investimento Rodada Seed</p>
                        <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight">R$ 500.000</h3>
                    </div>
                    <div className="mt-8 md:mt-0 text-right">
                        <p className="text-white/90 text-lg md:text-xl font-medium max-w-xs leading-relaxed">
                            Aporte estratégico para aceleração de estrutura e vendas.
                        </p>
                    </div>
                </div>
            </TextReveal>
        </div>

      </div>
    </SlideWrapper>
  );
};
