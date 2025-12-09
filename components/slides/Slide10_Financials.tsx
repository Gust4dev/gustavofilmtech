import React, { useEffect, useState, useRef } from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { motion, animate } from 'framer-motion';
import { TrendingUp, DollarSign, Users, MonitorPlay } from 'lucide-react';

export const Slide10_Financials: React.FC = () => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTrigger(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SlideWrapper className="bg-white overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-12 relative">
        
        {/* Background Grid Sutil (O que você gostava) */}
        <div className="absolute inset-0 z-0 opacity-60" 
             style={{ 
                backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
             }} 
        />

        {/* HEADER */}
        <div className="text-center mb-12 relative z-10">
            <TextReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full mb-6">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                        Projeção 2026
                    </span>
                </div>
            </TextReveal>
            <TextReveal delay={0.1}>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                    O Caminho do <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                        Milhão Mensal
                    </span>
                </h2>
            </TextReveal>
        </div>

        {/* === CHART CONTAINER === */}
        <div className="w-full max-w-6xl h-[55vh] relative z-10 flex items-end justify-center gap-3 md:gap-8 pb-12">
            
            {/* Eixo Y Decorativo */}
            <div className="absolute left-0 top-0 bottom-12 w-px bg-gradient-to-b from-transparent via-gray-200 to-gray-400 hidden md:block" />

            {/* BARRA 1: PRESENCIAL */}
            <FinancialColumn 
                label="Presencial"
                sub="Turmas Mensais"
                finalValue={240}
                suffix="k"
                height="30%"
                color="bg-gray-800"
                icon={Users}
                delay={0.2}
                trigger={trigger}
            />

            {/* BARRA 2: ONLINE (HERO) */}
            <FinancialColumn 
                label="Digital (Uni Auto)"
                sub="Escala Ilimitada"
                finalValue={600}
                suffix="k"
                height="75%"
                color="bg-gradient-to-b from-red-500 to-red-700"
                icon={MonitorPlay}
                delay={0.4}
                trigger={trigger}
                isHero
            />

            {/* BARRA 3: UPSELL */}
            <FinancialColumn 
                label="Mentoria/Upsell"
                sub="LTV & Recorrência"
                finalValue={120}
                suffix="k"
                height="15%"
                color="bg-gray-400"
                icon={DollarSign}
                delay={0.6}
                trigger={trigger}
            />

            {/* === TOTAL RESULT === */}
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={trigger ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 1.2, type: "spring", bounce: 0.4 }} // Delay menor para aparecer junto
                className="absolute top-0 right-0 md:right-12 bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-red-50 flex flex-col items-center justify-center z-20"
            >
                <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                    Meta 2026
                </div>
                
                <span className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Potencial Total</span>
                
                <div className="flex items-baseline gap-1 text-5xl md:text-6xl font-black text-gray-900 leading-none">
                    <span className="text-2xl text-gray-400 align-top mt-2">R$</span>
                    <Counter from={0} to={960} duration={1.3} delay={1.3} />
                    <span className="text-red-600">k</span>
                </div>
                
                <div className="w-full h-1 bg-gray-100 mt-4 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-emerald-500"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    />
                </div>
                <span className="text-xs text-emerald-600 font-bold mt-2 w-full text-right block">+400% ROI</span>
            </motion.div>

        </div>

      </div>
    </SlideWrapper>
  );
};

// --- COMPONENTES AUXILIARES ---

// 1. Contador Rápido (Ajustado)
const Counter = ({ from, to, duration, delay }: { from: number, to: number, duration: number, delay: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(from, to, {
            duration: duration, // Duração controlada (ex: 1.2s)
            delay: delay,
            ease: "circOut", // Começa rápido e freia no final
            onUpdate(value) {
                node.textContent = Math.round(value).toString();
            }
        });

        return () => controls.stop();
    }, [from, to, duration, delay]);

    return <span ref={nodeRef} />;
};

// 2. Coluna Financeira Clean
const FinancialColumn = ({ label, sub, finalValue, suffix, height, color, icon: Icon, delay, trigger, isHero }: any) => {
    return (
        <div className={`relative flex flex-col justify-end h-full group ${isHero ? 'w-32 md:w-48' : 'w-24 md:w-36'}`}>
            
            {/* Valor Flutuante (Aparece rápido) */}
            <div className={`mb-4 text-center transition-all duration-500 ${trigger ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay * 1000 + 500}ms` }}>
                <div className={`flex items-center justify-center font-bold ${isHero ? 'text-3xl text-red-600' : 'text-xl text-gray-700'}`}>
                    <span className="text-sm mr-1 opacity-50">R$</span>
                    {/* Contador rápido individual */}
                    <Counter from={0} to={finalValue} duration={1} delay={delay + 0.5} />
                    <span className="ml-0.5">{suffix}</span>
                </div>
            </div>

            {/* A Barra (Shimmer Sutil) */}
            <motion.div 
                className={`w-full rounded-t-2xl relative overflow-hidden shadow-xl ${color}`}
                initial={{ height: 0 }}
                animate={{ height: trigger ? height : 0 }}
                transition={{ duration: 1.2, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Shimmer com Opacidade 10% (via-white/10) */}
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] animate-shimmer" />
                
                {/* Ícone */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon size={isHero ? 32 : 24} />
                </div>

                {/* Gradiente Overlay Suave */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Legenda */}
            <div className="mt-6 text-center">
                <p className={`font-bold uppercase tracking-wider ${isHero ? 'text-sm text-red-700' : 'text-xs text-gray-500'}`}>{label}</p>
                <p className="text-[10px] text-gray-400 mt-1">{sub}</p>
            </div>

            <style>{`
                @keyframes shimmer {
                    0% { transform: translateX(-150%) skewX(-15deg); }
                    100% { transform: translateX(150%) skewX(-15deg); }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite; /* Mais lento e elegante */
                }
            `}</style>
        </div>
    )
}