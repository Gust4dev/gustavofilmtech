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
    mainIcon: Compass, // Ícone central substituindo a foto
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
      { title: 'Força de Vendas', specialVisual: 'crowd', numericValue: 100, prefix: '+', suffix: '%', items: ['Performance e Conversão'], icon: Users }, // Adaptei para % de crescimento ou similar genérico
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
    // Removi states de carregamento de imagem (não necessário para ícones SVG)
    
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
            <div className="absolute inset-0 w-full h-full flex flex-col px-4 pt-8 md:pt-12 pb-4 overflow-y-auto custom-scrollbar z-10">
                
                <LayoutGroup>
                    
                    {/* Header */}
                    <motion.div 
                        layout 
                        className={`text-center max-w-5xl mx-auto shrink-0 transition-all duration-500 ${isAnyOpen ? 'mb-6 scale-95 origin-top' : 'mb-12 scale-100'}`}
                    >
                        <motion.h2 layout className="text-4xl md:text-6xl font-black text-gray-900 mb-3 uppercase tracking-tight">
                            O Núcleo da <span className="text-brand-red">Expansão</span>
                        </motion.h2>
                        <motion.p layout className="text-gray-400 text-sm md:text-base font-bold tracking-[0.3em] uppercase">
                            {isAnyOpen ? "Pilares Estratégicos" : "Clique nos ícones para detalhar"}
                        </motion.p>
                    </motion.div>

                    {/* Grid Flexível */}
                    <div className="flex-1 flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-10 w-full max-w-[90%] mx-auto min-h-0">
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
                    style={{ willChange: 'transform' }}
                    transition={{ type: "spring", stiffness: 250, damping: 25 }}
                    className={`
                        relative rounded-full border-[4px] ${colors.border} p-1.5 shadow-xl bg-white overflow-hidden flex items-center justify-center
                        ${isOpen ? 'w-40 h-40' : 'w-64 h-64 md:w-72 md:h-72'} 
                        ${isOpen ? 'shadow-2xl ring-4 ring-offset-4 ' + colors.line : ''}
                    `}
                >
                    {/* Renderização do Ícone Central em vez de Imagem */}
                    <leader.mainIcon 
                        strokeWidth={1}
                        className={`w-1/2 h-1/2 ${colors.text}`}
                    />
                </motion.div>

                {/* Nome/Cargo */}
                <motion.div 
                    layout
                    style={{ willChange: 'transform' }}
                    className="-mt-6 bg-white shadow-lg border border-gray-100 px-6 py-3 rounded-full flex flex-col items-center z-30"
                >
                    <span className="text-xl md:text-2xl font-black text-gray-900 leading-none">{leader.name}</span>
                    <span className={`text-xs md:text-sm font-bold uppercase tracking-wider mt-1 ${colors.text}`}>{leader.role}</span>
                </motion.div>
            </motion.div>

            {/* Conteúdo Expansível */}
            <AnimatePresence mode="popLayout">
                {isOpen && (
                    <motion.div
                        className="flex flex-col items-center w-full relative mt-6"
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
                            className={`absolute top-0 bottom-6 w-1 left-1/2 -translate-x-1/2 -z-10 ${colors.line}`}
                        />

                        <div className="flex flex-col gap-4 w-full max-w-md">
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
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all relative z-10 w-full"
            onClick={(e) => e.stopPropagation()} 
        >
            <div className="flex items-center gap-4 mb-3">
                <div className={`p-2.5 rounded-xl ${colors.bgSoft}`}>
                    <node.icon size={24} className={colors.text} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg leading-tight">
                    {node.title}
                </h4>
            </div>

            {node.specialVisual === 'crowd' ? (
                <div className="mt-2 py-3 px-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500">
                    <div className="flex flex-col">
                        <span className="text-4xl font-black text-blue-600 leading-none mb-1">
                            <AnimatedCounter value={node.numericValue} prefix={node.prefix} suffix={node.suffix} />
                        </span>
                        <span className="text-xs font-bold text-blue-500 uppercase tracking-wide">Crescimento Projetado</span>
                    </div>
                </div>
            ) : node.isCounter ? (
                <div className="mt-2 pl-2">
                    <div className={`text-3xl font-black ${colors.text} mb-2`}>
                        <AnimatedCounter value={node.numericValue} prefix={node.prefix} suffix={node.suffix} />
                    </div>
                    {node.items.map((item: string, idx: number) => (
                         <div key={idx} className="flex items-center gap-3 mb-1">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.bgSoft.replace('bg-', 'bg-opacity-100 bg-')}`} />
                            <span className="text-sm md:text-base text-gray-600 font-medium leading-tight">{item}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="pl-2 space-y-2 mt-2">
                    {node.kpi && <div className={`text-2xl font-black ${colors.text} mb-1`}>{node.kpi}</div>}
                    {node.items.map((item: string, idx: number) => (
                         <div key={idx} className="flex items-center gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.bgSoft.replace('bg-', 'bg-opacity-100 bg-')}`} />
                            <span className="text-sm md:text-base text-gray-600 font-medium leading-tight">{item}</span>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};