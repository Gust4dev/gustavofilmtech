import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { SmoothImage } from '../SmoothImage';
import { motion, AnimatePresence, LayoutGroup, useSpring, useTransform } from 'framer-motion';
import { Users, Target, TrendingUp, Zap, Award, Layers } from 'lucide-react';

// --- DADOS DO TIME ---
const TEAM_DATA = [
  {
    id: 'gustavo',
    name: 'Gustavo',
    role: 'Atração & Autoridade',
    image: '/images/gustavo.jpeg',
    color: 'red',
    // Ajustei o scale para não ficar excessivo com o novo tamanho base
    imageSettings: { scale: 1.3, x: 0, y: -5 }, 
    nodes: [
      { title: 'Marketing & Branding', items: ['Tráfego e Atração', 'Posicionamento Premium'], icon: Zap },
      { title: 'Filmtech Operação', items: ['Serviço de Alto Padrão', 'PPF / Customização'], icon: Layers },
      { title: 'Filmtech Educação', isCounter: true, numericValue: 1200, prefix: '+', suffix: ' Alunos', items: ['Metodologia Proprietária'], icon: Award }
    ]
  },
  {
    id: 'rodrigo',
    name: 'Rodrigo',
    role: 'Motor de Vendas',
    image: '/images/Rodrigo.jpeg',
    color: 'blue',
    imageSettings: { scale: 1, x: 0, y: 0 },
    nodes: [
      { title: 'Estrutura Uni Auto', kpi: 'R$ 5.5 MM/mês', items: ['Base de 22.000 Clientes'], icon: TrendingUp },
      { title: 'Máquina de Vendas', specialVisual: 'crowd', numericValue: 350, items: ['Equipe de 350 Vendedores'], icon: Users },
      { title: 'Governança', items: ['Previsibilidade de Caixa', 'Investimento Estratégico'], icon: Target }
    ]
  },
  {
    id: 'wallisson',
    name: 'Wallisson',
    role: 'A Gestão',
    image: '/images/Wallisson.jpg',
    color: 'emerald',
    imageSettings: { scale: 1, x: 0, y: 0 },
    nodes: [
      { title: 'Gestão de Pessoas (RH)', items: ['Cultura Alta Performance', 'Plano de Carreira'], icon: Users },
      { title: 'Operacional', items: ['Processos e Indicadores', 'Treinamento de Equipes'], icon: Layers },
      { title: 'Expansão', isCounter: true, numericValue: 500, prefix: 'Meta $', suffix: 'k/mês', items: ['Sustentação de Crescimento'], icon: TrendingUp }
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
            <div className="absolute inset-0 pointer-events-none">
                 <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-gray-100 rounded-full blur-[120px] opacity-60" />
                 <div className="absolute bottom-0 left-0 w-[60vh] h-[60vh] bg-brand-red/5 rounded-full blur-[100px]" />
            </div>

            {/* CONTAINER PRINCIPAL */}
            {/* Removi o stopPropagation daqui. Clicar no fundo = Próximo Slide (comportamento padrão) */}
            <div className="absolute inset-0 w-full h-full flex flex-col px-4 pt-8 md:pt-12 pb-4 overflow-y-auto custom-scrollbar z-10">
                
                <LayoutGroup>
                    
                    {/* Header - Aumentei os textos */}
                    <motion.div 
                        layout 
                        className={`text-center max-w-5xl mx-auto shrink-0 transition-all duration-500 ${isAnyOpen ? 'mb-6 scale-95 origin-top' : 'mb-12 scale-100'}`}
                    >
                        <motion.h2 layout className="text-4xl md:text-6xl font-black text-gray-900 mb-3 uppercase tracking-tight">
                            A Trinca de <span className="text-brand-red">Escala</span>
                        </motion.h2>
                        <motion.p layout className="text-gray-400 text-sm md:text-base font-bold tracking-[0.3em] uppercase">
                            {isAnyOpen ? "Estrutura Detalhada" : "Clique nos líderes para expandir"}
                        </motion.p>
                    </motion.div>

                    {/* Grid Flexível - Aumentei max-w para ocupar mais tela */}
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
            className={`
                flex flex-col items-center relative w-full md:w-1/3 transition-all
                ${isOpen ? 'justify-start' : 'justify-center'} 
            `}
        >
            {/* Avatar / Botão */}
            <motion.div 
                layout 
                onClick={(e) => { e.stopPropagation(); onToggle(); }} // AQUI MANTÉM O BLOQUEIO
                className="cursor-pointer group flex flex-col items-center z-20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Circulo da Imagem - AUMENTEI DRASTICAMENTE OS TAMANHOS */}
                <motion.div 
                    layout
                    transition={{ type: "spring", stiffness: 250, damping: 25 }}
                    className={`
                        relative rounded-full border-[4px] ${colors.border} p-1.5 shadow-xl bg-white overflow-hidden
                        ${isOpen ? 'w-40 h-40' : 'w-64 h-64 md:w-72 md:h-72'} 
                        ${isOpen ? 'shadow-2xl ring-4 ring-offset-4 ' + colors.line : ''}
                    `}
                >
                     <SmoothImage 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-full h-full object-cover rounded-full"
                        style={{
                            transform: `scale(${leader.imageSettings?.scale || 1}) translate(${leader.imageSettings?.x || 0}px, ${leader.imageSettings?.y || 0}px)`
                        }}
                    />
                </motion.div>

                {/* Nome/Cargo - Fonte maior */}
                <motion.div 
                    layout
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
                        onClick={(e) => e.stopPropagation()} // AQUI MANTÉM O BLOQUEIO TAMBÉM (clicar no vazio entre cards não muda slide)
                    >
                        {/* Linha Vertical - Mais grossa */}
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`absolute top-0 bottom-6 w-1 left-1/2 -translate-x-1/2 -z-10 ${colors.line}`}
                        />

                        {/* Aumentei o max-w para os cards ficarem largos e legíveis */}
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
            // Padding maior, fonte maior
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all relative z-10 w-full"
            onClick={(e) => e.stopPropagation()} // Garante que clicar no card não mude o slide
        >
            <div className="flex items-center gap-4 mb-3">
                <div className={`p-2.5 rounded-xl ${colors.bgSoft}`}>
                    {/* Ícone maior */}
                    <node.icon size={24} className={colors.text} />
                </div>
                {/* Título maior */}
                <h4 className="font-bold text-gray-900 text-lg leading-tight">
                    {node.title}
                </h4>
            </div>

            {node.specialVisual === 'crowd' ? (
                <div className="mt-2 py-3 px-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500">
                    <div className="flex flex-col">
                        <span className="text-4xl font-black text-blue-600 leading-none mb-1">
                            <AnimatedCounter value={node.numericValue} />
                        </span>
                        <span className="text-xs font-bold text-blue-500 uppercase tracking-wide">Vendedores Ativos</span>
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
                            {/* Texto dos itens normal maior */}
                            <span className="text-sm md:text-base text-gray-600 font-medium leading-tight">{item}</span>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};