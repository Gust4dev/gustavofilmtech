import React, { useEffect, useState, useRef } from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { motion, animate } from 'framer-motion';
import { TrendingUp, DollarSign, Users, MonitorPlay } from 'lucide-react';

export const Slide10_FinancialPath: React.FC = () => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTrigger(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SlideWrapper className="bg-white overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center p-[4vmin] relative">
        
        {/* Background Grid Sutil */}
        <div className="absolute inset-0 z-0 opacity-60" 
             style={{ 
                backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)', 
                backgroundSize: '4vmin 4vmin' 
             }} 
        />

        {/* HEADER */}
        <div className="text-center mb-[6vmin] relative z-10">
            <TextReveal>
                <div className="inline-flex items-center gap-2 px-[2vmin] py-[1vmin] bg-gray-50 border border-gray-100 rounded-full mb-[2vmin]">
                    <div className="w-[1vmin] h-[1vmin] bg-red-600 rounded-full animate-pulse" />
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs" style={{ fontSize: '1.2vmin' }}>
                        Projeção Financeira
                    </span>
                </div>
            </TextReveal>
            <TextReveal delay={0.1}>
                <h2 className="font-black text-gray-900 leading-tight"
                    style={{ fontSize: 'clamp(32px, 8vmin, 100px)' }}>
                    A Matemática da <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                        Escala
                    </span>
                </h2>
            </TextReveal>
             <TextReveal delay={0.2}>
                <p className="text-gray-400 font-bold tracking-[0.2em] uppercase mt-[1vmin]"
                   style={{ fontSize: 'clamp(10px, 1.5vmin, 20px)' }}>
                    A Jornada Validada até R$ 1MM/mês
                </p>
            </TextReveal>
        </div>

        {/* === CHART CONTAINER === */}
        <div className="w-full max-w-[90vmin] h-[55vh] relative z-10 flex items-end justify-center gap-[4vmin] md:gap-[8vmin] pb-[4vmin]">
            
            {/* Eixo Y Decorativo */}
            <div className="absolute left-0 top-0 bottom-[4vmin] w-px bg-gradient-to-b from-transparent via-gray-200 to-gray-400 hidden md:block" />

            {/* FASE 1: VALIDAÇÃO */}
            <FinancialColumn 
                label="Fase 1"
                sub="Validação (R$ 100k)"
                finalValue={100}
                suffix="k"
                height="20%"
                color="bg-gray-300"
                icon={Users}
                delay={0.2}
                trigger={trigger}
            />

            {/* FASE 2: ESTRUTURAÇÃO */}
            <FinancialColumn 
                label="Fase 2"
                sub="Estruturação (R$ 300k)"
                finalValue={300}
                suffix="k"
                height="45%"
                color="bg-gray-800"
                icon={MonitorPlay}
                delay={0.4}
                trigger={trigger}
            />

            {/* FASE 3: ESCALA */}
            <FinancialColumn 
                label="Fase 3"
                sub="Escala (R$ 1MM+)"
                finalValue={1}
                suffix="MM"
                height="85%"
                color="bg-gradient-to-b from-red-500 to-red-700"
                icon={DollarSign}
                delay={0.6}
                trigger={trigger}
                isHero
            />

            {/* BOX DE VALE DA MORTE */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute top-1/4 right-0 md:-right-[5vmin] w-[25vmin] p-[1.5vmin] bg-white border border-gray-100 shadow-xl rounded-xl hidden md:block"
            >
                <div className="flex items-start gap-2">
                    <TrendingUp className="text-green-500 flex-shrink-0 mt-0.5" style={{ width: '2vmin', height: '2vmin' }} />
                    <p className="text-gray-600 font-medium leading-relaxed" style={{ fontSize: '1.2vmin' }}>
                        Nossa metodologia elimina o <b className="text-gray-900">"Vale da Morte"</b> entre a estruturação e a escala.
                    </p>
                </div>
            </motion.div>

        </div>

      </div>
    </SlideWrapper>
  );
};

// --- COMPONENTES AUXILIARES ---

// 1. Contador Rápido
const Counter = ({ from, to, duration, delay }: { from: number, to: number, duration: number, delay: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(from, to, {
            duration: duration, 
            delay: delay,
            ease: "circOut",
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
        <div className={`relative flex flex-col justify-end h-full group ${isHero ? 'w-[15vmin] md:w-[20vmin]' : 'w-[12vmin] md:w-[15vmin]'}`}>
            
            {/* Valor Flutuante */}
            <div className={`mb-[1.5vmin] text-center transition-all duration-500 ${trigger ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay * 1000 + 500}ms` }}>
                <div className={`flex items-center justify-center font-bold ${isHero ? 'text-red-600' : 'text-gray-700'}`}
                     style={{ fontSize: isHero ? 'clamp(24px, 4vmin, 60px)' : 'clamp(16px, 2.5vmin, 40px)' }}>
                    <span className="text-sm mr-1 opacity-50" style={{ fontSize: '0.5em' }}>R$</span>
                    <Counter from={0} to={finalValue} duration={1} delay={delay + 0.5} />
                    <span className="ml-0.5">{suffix}</span>
                </div>
            </div>

            {/* A Barra */}
            <motion.div 
                className={`w-full rounded-t-2xl relative overflow-hidden shadow-xl ${color}`}
                initial={{ height: 0 }}
                animate={{ height: trigger ? height : 0 }}
                transition={{ duration: 1.2, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Shimmer */}
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] animate-shimmer" />
                
                {/* Ícone */}
                <div className="absolute bottom-[2vmin] left-1/2 -translate-x-1/2 text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon style={{ width: isHero ? '4vmin' : '2.5vmin', height: isHero ? '4vmin' : '2.5vmin' }} />
                </div>

                {/* Gradiente Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Legenda */}
            <div className="mt-[2vmin] text-center">
                <p className={`font-bold uppercase tracking-wider ${isHero ? 'text-red-700' : 'text-gray-500'}`}
                   style={{ fontSize: 'clamp(10px, 1.2vmin, 16px)' }}>{label}</p>
                <p className="text-gray-400 mt-1 max-w-[90%] mx-auto leading-tight"
                   style={{ fontSize: 'clamp(8px, 1vmin, 12px)' }}>{sub}</p>
            </div>

            <style>{`
                @keyframes shimmer {
                    0% { transform: translateX(-150%) skewX(-15deg); }
                    100% { transform: translateX(150%) skewX(-15deg); }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite;
                }
            `}</style>
        </div>
    )
}
