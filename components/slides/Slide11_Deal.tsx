import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Slide11_Deal: React.FC = () => {
  return (
    <SlideWrapper className="bg-gray-50 overflow-hidden">
      
      {/* Background Decorativo (Papel Moeda Digital) */}
      <div className="absolute inset-0 pointer-events-none opacity-40" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />
      
      {/* Luz de Fundo (Glow) */}
      <div className="absolute top-[-20%] right-[-10%] w-[80vh] h-[80vh] bg-gradient-to-br from-red-50 to-transparent rounded-full blur-[150px] opacity-60" />

      <div className="w-full h-full flex flex-col items-center justify-center p-[4vmin] relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Header */}
        <div className="text-center mb-[6vmin] shrink-0">
            <TextReveal>
                <div className="inline-block px-[2vmin] py-[0.5vmin] bg-white border border-gray-200 rounded-full shadow-sm mb-[2vmin]">
                    <span className="text-gray-500 font-bold uppercase tracking-[0.2em]" style={{ fontSize: 'clamp(8px, 1vmin, 12px)' }}>
                        A Proposta
                    </span>
                </div>
            </TextReveal>
            <TextReveal delay={0.1}>
                <h2 className="font-black text-gray-900 tracking-tight leading-none"
                    style={{ fontSize: 'clamp(40px, 10vmin, 120px)' }}>
                    Valuation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Deal</span>
                </h2>
            </TextReveal>
        </div>

        <div className="w-full max-w-[100vmin] flex flex-col gap-[3vmin]">
            
            {/* GRID DE VALUATION (Cartões Brancos) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
                
                {/* 1. Valuation Atual */}
                <TextReveal delay={0.2} className="h-full">
                    <div className="bg-white p-[3vmin] rounded-2xl shadow-xl border border-gray-100 h-full relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-gray-900 transition-colors" />
                        
                        <div className="flex justify-between items-start mb-[3vmin]">
                            <div>
                                <p className="text-gray-400 font-bold uppercase tracking-widest mb-1" style={{ fontSize: 'clamp(10px, 1.2vmin, 14px)' }}>Cenário Atual</p>
                                <h3 className="font-bold text-gray-900" style={{ fontSize: 'clamp(20px, 3vmin, 40px)' }}>Validado</h3>
                            </div>
                            <div className="p-[1.5vmin] bg-gray-50 rounded-xl text-gray-400">
                                <CheckCircle2 style={{ width: '3vmin', height: '3vmin' }} />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <span className="font-black text-gray-900 tracking-tighter"
                                  style={{ fontSize: 'clamp(32px, 6vmin, 80px)' }}>
                                R$ 9.6<span className="text-gray-400" style={{ fontSize: '0.6em' }}>M</span>
                            </span>
                            <p className="font-medium text-gray-500 bg-gray-100 inline-block px-[2vmin] py-[0.5vmin] rounded-md"
                               style={{ fontSize: 'clamp(12px, 1.5vmin, 20px)' }}>
                                Base: 8x Lucro Líquido (R$ 1.2M/ano)
                            </p>
                        </div>
                    </div>
                </TextReveal>

                {/* 2. Valuation Futuro */}
                <TextReveal delay={0.3} className="h-full">
                    <div className="bg-white p-[3vmin] rounded-2xl shadow-xl border border-gray-100 h-full relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                        <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex justify-between items-start mb-[3vmin] relative z-10">
                            <div>
                                <p className="text-red-400 font-bold uppercase tracking-widest mb-1" style={{ fontSize: 'clamp(10px, 1.2vmin, 14px)' }}>Projeção 2026</p>
                                <h3 className="font-bold text-red-700" style={{ fontSize: 'clamp(20px, 3vmin, 40px)' }}>Potencial</h3>
                            </div>
                            <div className="p-[1.5vmin] bg-red-100 rounded-xl text-red-600">
                                <TrendingUp style={{ width: '3vmin', height: '3vmin' }} />
                            </div>
                        </div>

                        <div className="space-y-1 relative z-10">
                            <span className="font-black text-gray-900 tracking-tighter"
                                  style={{ fontSize: 'clamp(32px, 6vmin, 80px)' }}>
                                R$ 24.0<span className="text-gray-400" style={{ fontSize: '0.6em' }}>M</span>
                            </span>
                            <p className="font-medium text-red-600 bg-red-50 inline-block px-[2vmin] py-[0.5vmin] rounded-md border border-red-100"
                               style={{ fontSize: 'clamp(12px, 1.5vmin, 20px)' }}>
                                Growth: +250% Valorização
                            </p>
                        </div>
                    </div>
                </TextReveal>

            </div>

            {/* O CHEQUE (THE ASK) */}
            <TextReveal delay={0.5}>
                <div className="relative w-full">
                    {/* Sombra Colorida Atrás */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 rounded-3xl blur-2xl opacity-20 transform translate-y-4" />
                    
                    <div className="relative bg-gray-900 rounded-3xl p-[4vmin] border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-[4vmin] overflow-hidden">
                        {/* Textura de Fundo do Cheque */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        
                        <div className="relative z-10 text-center md:text-left">
                            <p className="text-red-500 font-mono uppercase tracking-[0.2em] font-bold mb-[1vmin]"
                               style={{ fontSize: 'clamp(10px, 1.2vmin, 16px)' }}>
                                Investimento • Rodada Seed
                            </p>
                            <h3 className="font-black text-white tracking-tighter leading-none"
                                style={{ fontSize: 'clamp(48px, 12vmin, 140px)' }}>
                                500<span className="text-gray-500" style={{ fontSize: '0.6em' }}>k</span>
                            </h3>
                            <p className="text-gray-400 mt-2" style={{ fontSize: 'clamp(12px, 1.5vmin, 20px)' }}>
                                Aporte único para aceleração
                            </p>
                        </div>

                        <div className="relative z-10 h-full flex items-center">
                            <div className="w-px h-[10vmin] bg-gray-800 hidden md:block mx-[3vmin]" />
                            <div className="text-center md:text-left space-y-[1vmin]">
                                <DealPoint text="Caixa Estratégico" />
                                <DealPoint text="Expansão Uni Auto" />
                                <DealPoint text="Marketing de Escala" />
                            </div>
                        </div>

                        <div className="relative z-10 md:ml-[2vmin]">
                            <div className="w-[8vmin] h-[8vmin] rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                                <ArrowRight className="text-white -rotate-45 md:rotate-0" style={{ width: '4vmin', height: '4vmin' }} />
                            </div>
                        </div>

                    </div>
                </div>
            </TextReveal>

        </div>

      </div>
    </SlideWrapper>
  );
};

const DealPoint = ({ text }: { text: string }) => (
    <div className="flex items-center gap-[1.5vmin] text-white/90">
        <div className="w-[0.8vmin] h-[0.8vmin] rounded-full bg-red-500" />
        <span style={{ fontSize: 'clamp(12px, 1.5vmin, 20px)' }}>{text}</span>
    </div>
);