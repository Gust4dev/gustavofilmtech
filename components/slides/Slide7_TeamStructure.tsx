import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion, AnimatePresence, LayoutGroup, useSpring, useTransform } from 'framer-motion';
// Adicionei Compass, Briefcase, LineChart para os novos papeis
import { Users, Target, TrendingUp, Zap, Award, Layers, Compass, Briefcase, LineChart } from 'lucide-react';

// --- DADOS DA ESTRUTURA (ABSTRACT ROLES) ---
const TEAM_DATA = [
  {
    id: 'strategy',
    name: 'Estratégia',
    role: 'Líder de Estratégia',
    mainIcon: Compass, 
    color: 'red',
    nodes: [
      { title: 'Visão de Mercado', items: ['Análise de Tendências', 'Posicionamento de Marca'], icon: Zap },
      { title: 'Inovação', items: ['Novos Modelos de Negócio', 'Diferenciação Competitiva'], icon: Layers },
      { title: 'Educação Corporativa', isCounter: false, items: ['Metodologia Proprietária', 'Formação de Líderes'], icon: Award }
    ]
  },
  {
    id: 'commercial',
    name: 'Comercial',
    role: 'Estratégia de Vendas',
    mainIcon: LineChart,
    color: 'blue',
    nodes: [
      { title: 'Tração de Receita', kpi: 'Escala Agressiva', items: ['Expansão de Market Share'], icon: TrendingUp },
      { title: 'Força de Vendas', specialVisual: 'crowd', numericValue: 100, prefix: '+', suffix: '%', items: ['Performance e Conversão'], icon: Users }, 
      { title: 'Governança', items: ['Previsibilidade de Caixa', 'Metas Auditáveis'], icon: Target }
    ]
  },
  {
    id: 'investment',
    name: 'Investimento',
    role: 'Captador de Recursos',
    mainIcon: Briefcase,
    color: 'emerald',
    nodes: [
      { title: 'Relação com Investidores', items: ['Transparência', 'Reportes Estratégicos'], icon: Users },
      { title: 'Eficiência Operacional', items: ['Otimização de Custos', 'Processos Escaláveis'], icon: Layers },
      { title: 'Funding', isCounter: true, numericValue: 5, prefix: 'Múltiplos de', suffix: 'x', items: ['Retorno sobre Capital'], icon: TrendingUp }
    ]
  }
];

// --- COMPONENTE DE CONTADOR ---
const AnimatedCounter = ({ value, prefix = '', suffix = '' }: { value: number, prefix?: string, suffix?: string }) => {
    const spring = useSpring(0, { bounce: 0, duration: 2000 });
    const rounded = useTransform(spring, (latest) => Math.floor(latest));

    useEffect(() => { spring.set(value); }, [value, spring]);

    return (
        <span className="flex items-baseline">
            {prefix && <span className="mr-1">{prefix}</span>}
            <motion.span>{rounded}</motion.span>
            {suffix && <span className="ml-1">{suffix}</span>}
        </span>
    );
};

// --- VARIANTS ---
const treeVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, y: -10, scale: 0.95 }
};

export const Slide7_TeamStructure: React.FC = () => {
    const [activeIds, setActiveIds] = useState<string[]>([]);
    
    const isAnyOpen = activeIds.length > 0;

    const toggleId = (id: string) => {
        setActiveIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    return (
        <SlideWrapper className="bg-white overflow-hidden">
            {/* Background fixo */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(circle at 100% 0%, rgba(243, 244, 246, 0.8) 0%, transparent 50%),
                        radial-gradient(circle at 0% 100%, rgba(220, 38, 38, 0.03) 0%, transparent 50%)
                    `
                }}
            />

            {/* CONTAINER PRINCIPAL */}
            <div className="absolute inset-0 w-full h-full flex flex-col px-[2vmin] pt-[4vmin] md:pt-[6vmin] pb-[2vmin] overflow-y-auto custom-scrollbar z-10">
                
                <LayoutGroup>
                    
                    {/* Header */}
                    <motion.div 
                        layout 
                        className={`text-center max-w-[80vmin] mx-auto shrink-0 transition-all duration-500 ${isAnyOpen ? 'mb-[2vmin] scale-95 origin-top' : 'mb-[6vmin] scale-100'}`}
                    >
                        <motion.h2 layout className="font-black text-gray-900 mb-[1vmin] uppercase tracking-tight"
                                   style={{ fontSize: 'clamp(24px, 5vmin, 80px)' }}>
                            O Núcleo da <span className="text-brand-red">Expansão</span>
                        </motion.h2>
                        <motion.p layout className="text-gray-400 font-bold tracking-[0.3em] uppercase"
                                  style={{ fontSize: 'clamp(10px, 1.2vmin, 20px)' }}>
                            {isAnyOpen ? "Pilares Estratégicos" : "Clique nos ícones para detalhar"}
                        </motion.p>
                    </motion.div>

                    {/* Grid Flexível */}
                    <div className="flex-1 flex flex-col md:flex-row items-stretch justify-center gap-[3vmin] md:gap-[4vmin] w-full max-w-[95vmin] mx-auto min-h-0">
                        {TEAM_DATA.map((leader) => (
                            <Column 
                                key={leader.id} 
                                leader={leader} 
                                isOpen={activeIds.includes(leader.id)}
                                isAnyOpen={isAnyOpen}
                                onToggle={() => toggleId(leader.id)}
                            />
                        ))}
                    </div>

                </LayoutGroup>
            </div>
        </SlideWrapper>
    );
};

// --- COLUNA INDIVIDUAL ---
const Column = ({ leader, isOpen, isAnyOpen, onToggle }: any) => {
    const isRed = leader.color === 'red';
    const isBlue = leader.color === 'blue';
    
    const colors = {
        border: isRed ? 'border-brand-red' : isBlue ? 'border-blue-600' : 'border-emerald-600',
        text: isRed ? 'text-brand-red' : isBlue ? 'text-blue-600' : 'text-emerald-600',
        bgSoft: isRed ? 'bg-red-50' : isBlue ? 'bg-blue-50' : 'bg-emerald-50',
        line: isRed ? 'bg-brand-red/20' : isBlue ? 'bg-blue-600/20' : 'bg-emerald-600/20'
    };

    return (
        <motion.div 
            layout 
            style={{ willChange: 'transform' }}
            className={`
                flex flex-col items-center relative w-full md:w-1/3 transition-all
                ${isOpen ? 'justify-start' : 'justify-center'} 
            `}
        >
            {/* Avatar / Botão */}
            <motion.div 
                layout 
                style={{ willChange: 'transform' }}
                onClick={(e) => { e.stopPropagation(); onToggle(); }}
                className="cursor-pointer group flex flex-col items-center z-20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Circulo do Ícone */}
                <motion.div 
                    layout
                    style={{ 
                      willChange: 'transform',
                      width: isOpen ? '15vmin' : '22vmin', // Fluid size
                      height: isOpen ? '15vmin' : '22vmin',
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 25 }}
                    className={`
                        relative rounded-full border-[0.4vmin] ${colors.border} p-[1vmin] shadow-xl bg-white overflow-hidden flex items-center justify-center
                        ${isOpen ? 'ring-[0.4vmin] ring-offset-[0.4vmin] ' + colors.line : ''}
                    `}
                >
                    <leader.mainIcon 
                        strokeWidth={1}
                        className={`w-1/2 h-1/2 ${colors.text}`}
                    />
                </motion.div>

                {/* Nome/Cargo */}
                <motion.div 
                    layout
                    style={{ willChange: 'transform' }}
                    className={`-mt-[2vmin] bg-white shadow-lg border border-gray-100 px-[3vmin] py-[1.5vmin] rounded-full flex flex-col items-center z-30`}
                >
                    <span className="font-black text-gray-900 leading-none block"
                          style={{ fontSize: 'clamp(14px, 1.8vmin, 32px)' }}>
                      {leader.name}
                    </span>
                    <span className={`font-bold uppercase tracking-wider mt-[0.5vmin] ${colors.text}`}
                          style={{ fontSize: 'clamp(8px, 1vmin, 16px)' }}>
                      {leader.role}
                    </span>
                </motion.div>
            </motion.div>

            {/* Conteúdo Expansível */}
            <AnimatePresence mode="popLayout">
                {isOpen && (
                    <motion.div
                        className="flex flex-col items-center w-full relative mt-[3vmin]"
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        variants={treeVariants}
                        onClick={(e) => e.stopPropagation()} 
                    >
                        {/* Linha Vertical */}
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`absolute top-0 bottom-[3vmin] w-1 left-1/2 -translate-x-1/2 -z-10 ${colors.line}`}
                        />

                        <div className="flex flex-col gap-[2vmin] w-full max-w-[40vmin]">
                            {leader.nodes.map((node: any, i: number) => (
                                <CardNode key={i} node={node} colors={colors} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const CardNode = ({ node, colors }: any) => {
    return (
        <motion.div 
            variants={cardVariants}
            className="bg-white border border-gray-100 rounded-2xl p-[2vmin] shadow-sm hover:shadow-xl transition-all relative z-10 w-full"
            onClick={(e) => e.stopPropagation()} 
        >
            <div className="flex items-center gap-[2vmin] mb-[1vmin]">
                <div className={`p-[1vmin] rounded-xl ${colors.bgSoft}`}>
                    <node.icon className={colors.text} style={{ width: '2.5vmin', height: '2.5vmin' }} />
                </div>
                <h4 className="font-bold text-gray-900 leading-tight"
                    style={{ fontSize: 'clamp(14px, 1.8vmin, 28px)' }}>
                    {node.title}
                </h4>
            </div>

            {node.specialVisual === 'crowd' ? (
                <div className="mt-[1vmin] py-[1.5vmin] px-[2vmin] bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-[0.5vmin] border-blue-500">
                    <div className="flex flex-col">
                        <span className="font-black text-blue-600 leading-none mb-1"
                              style={{ fontSize: 'clamp(24px, 4vmin, 48px)' }}>
                            <AnimatedCounter value={node.numericValue} prefix={node.prefix} suffix={node.suffix} />
                        </span>
                        <span className="font-bold text-blue-500 uppercase tracking-wide"
                              style={{ fontSize: 'clamp(8px, 1vmin, 14px)' }}>
                          Crescimento Projetado
                        </span>
                    </div>
                </div>
            ) : node.isCounter ? (
                <div className="mt-[1vmin] pl-[1vmin]">
                    <div className={`font-black ${colors.text} mb-2`}
                         style={{ fontSize: 'clamp(20px, 3vmin, 40px)' }}>
                        <AnimatedCounter value={node.numericValue} prefix={node.prefix} suffix={node.suffix} />
                    </div>
                    {node.items.map((item: string, idx: number) => (
                         <div key={idx} className="flex items-center gap-3 mb-1">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.bgSoft.replace('bg-', 'bg-opacity-100 bg-')}`} />
                            <span className="text-gray-600 font-medium leading-tight"
                                  style={{ fontSize: 'clamp(10px, 1.2vmin, 20px)' }}>
                              {item}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="pl-[1vmin] space-y-[1vmin] mt-[1vmin]">
                    {node.kpi && <div className={`font-black ${colors.text} mb-1`} style={{ fontSize: 'clamp(16px, 2vmin, 32px)' }}>{node.kpi}</div>}
                    {node.items.map((item: string, idx: number) => (
                         <div key={idx} className="flex items-center gap-[1vmin]">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.bgSoft.replace('bg-', 'bg-opacity-100 bg-')}`} />
                            <span className="text-gray-600 font-medium leading-tight"
                                  style={{ fontSize: 'clamp(10px, 1.2vmin, 20px)' }}>
                              {item}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};