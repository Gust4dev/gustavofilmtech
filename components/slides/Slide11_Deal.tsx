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

      <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-20 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <TextReveal>
                <div className="inline-block px-4 py-1 bg-white border border-gray-200 rounded-full shadow-sm mb-4">
                    <span className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                        A Proposta
                    </span>
                </div>
            </TextReveal>
            <TextReveal delay={0.1}>
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-none">
                    Valuation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Deal</span>
                </h2>
            </TextReveal>
        </div>

        <div className="w-full max-w-6xl">
            
            {/* GRID DE VALUATION (Cartões Brancos) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                
                {/* 1. Valuation Atual */}
                <TextReveal delay={0.2} className="h-full">
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 h-full relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-gray-900 transition-colors" />
                        
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-1">Cenário Atual</p>
                                <h3 className="text-2xl font-bold text-gray-900">Validado</h3>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-xl text-gray-400">
                                <CheckCircle2 size={24} />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <span className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">R$ 9.6<span className="text-3xl text-gray-400">M</span></span>
                            <p className="text-sm font-small text-gray-500 bg-gray-100 inline-block px-5 py-1 rounded-md">
                                Base: 8x Lucro Líquido (R$ 1.2M/ano)
                            </p>
                        </div>
                    </div>
                </TextReveal>

                {/* 2. Valuation Futuro */}
                <TextReveal delay={0.3} className="h-full">
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 h-full relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                        <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div>
                                <p className="text-red-400 font-bold uppercase tracking-widest text-xs mb-1">Projeção 2026</p>
                                <h3 className="text-2xl font-bold text-red-700">Potencial</h3>
                            </div>
                            <div className="p-3 bg-red-100 rounded-xl text-red-600">
                                <TrendingUp size={24} />
                            </div>
                        </div>

                        <div className="space-y-1 relative z-10">
                            <span className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">R$ 24.0<span className="text-3xl text-gray-400">M</span></span>
                            <p className="text-sm font-small text-red-600 bg-red-50 inline-block px-10 py-1 rounded-md border border-red-100">
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
                    
                    <div className="relative bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
                        {/* Textura de Fundo do Cheque */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        
                        <div className="relative z-10 text-center md:text-left">
                            <p className="text-red-500 font-mono uppercase tracking-[0.2em] text-xs font-bold mb-3">
                                Investimento • Rodada Seed
                            </p>
                            <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
                                500<span className="text-4xl md:text-6xl text-gray-500">k</span>
                            </h3>
                            <p className="text-gray-400 text-sm mt-2">Aporte único para aceleração</p>
                        </div>

                        <div className="relative z-10 h-full flex items-center">
                            <div className="w-px h-24 bg-gray-800 hidden md:block mx-8" />
                            <div className="text-center md:text-left space-y-4">
                                <div className="flex items-center gap-3 text-white/90">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    <span>Caixa Estratégico</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    <span>Expansão Uni Auto</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    <span>Marketing de Escala</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 md:ml-8">
                            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                                <ArrowRight className="text-white w-8 h-8 -rotate-45 md:rotate-0" />
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