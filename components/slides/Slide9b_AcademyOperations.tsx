import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Shield, Users, Layers, TrendingUp } from 'lucide-react';

// --- CONFIGURAÇÃO DA IMAGEM DO GUSTAVO ---
const GUSTAVO_IMG_SCALE = 1.3; // Aumente para dar zoom (ex: 1.5)
const GUSTAVO_IMG_X = '0px';   // Ajuste horizontal (ex: '10px' ou '-10px')
const GUSTAVO_IMG_Y = '2px';   // Ajuste vertical (ex: '10px' para descer)

export const Slide9b_AcademyOperations: React.FC = () => {
  return (
    <SlideWrapper className="bg-white overflow-hidden">
      
      {/* Background Tech Sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
           style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <div className="w-full h-full flex flex-col justify-center px-4 md:px-12 relative z-10 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
            <TextReveal>
                <div className="inline-block px-4 py-1 bg-gray-100 rounded-full mb-4">
                    <span className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                        Workflow Integrado
                    </span>
                </div>
            </TextReveal>
            <TextReveal delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-none">
                    A Operação na <span className="text-emerald-600">Prática</span>
                </h2>
            </TextReveal>
        </div>

        {/* === O FLUXOGRAMA === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-11 relative max-w-7xl mx-auto w-full items-stretch">
            
            {/* Setas de Conexão (Desktop) */}
            <div className="absolute inset-0 pointer-events-none hidden md:block z-20">
                <ArrowRight className="absolute top-1/2 left-[31.5%] text-gray-300 w-8 h-8 -translate-y-1/2" />
                <ArrowRight className="absolute top-1/2 right-[31.5%] text-gray-300 w-8 h-8 -translate-y-1/2" />
            </div>

            {/* CARD 1: GUSTAVO (O CRIADOR) */}
            <OperationCard 
                title="Gustavo"
                role="Atração & Autoridade"
                image="/images/gustavo.png" // SUA FOTO AQUI
                imageStyle={{
                    transform: `scale(${GUSTAVO_IMG_SCALE}) translate(${GUSTAVO_IMG_X}, ${GUSTAVO_IMG_Y})`,
                    transformOrigin: 'center center'
                }}
                color="red"
                delay={0.2}
                icon={Zap}
                items={[
                    "Gera atração e desejo",
                    "Faz a oferta irresistível",
                    "Entrega o método (Aulas)",
                    "Mantém a autoridade alta"
                ]}
            />

            {/* CARD 2: UNI AUTO (A MÁQUINA) - Destaque */}
            <OperationCard 
                title="Uni Auto"
                role="Máquina de Vendas"
                image="/images/Rodrigo.jpeg" // FOTO DO RODRIGO AQUI (OU LOGO UNI AUTO SE TIVER)
                color="emerald"
                delay={0.4}
                isCenter
                icon={Users}
                items={[
                    "Atende os alunos (SDR)",
                    "Fecha as vendas (Closer)",
                    "Organiza as turmas",
                    "Controle financeiro diário"
                ]}
            />

            {/* CARD 3: GESTÃO (A BASE) */}
            <OperationCard 
                title="Rodrigo & Wallisson"
                role="Inteligência & Gestão"
                image="/images/Wallisson.jpg" // FOTO DO WALLISSON
                color="slate"
                delay={0.6}
                icon={Shield}
                items={[
                    "Gestão de caixa estratégico",
                    "Metas e indicadores (KPIs)",
                    "Treinamento do time",
                    "Disciplina operacional"
                ]}
            />

        </div>

        {/* === A EQUAÇÃO FINAL === */}
        <TextReveal delay={0.8} className="mt-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                    {/* Item 1: Autoridade */}
                    <div className="bg-white border border-gray-100 shadow-lg hover:shadow-xl rounded-2xl px-8 py-4 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                        <div className="p-2.5 bg-red-50 rounded-xl"><Zap className="w-5 h-5 text-red-600" /></div>
                        <span className="font-bold text-gray-900 text-lg">Autoridade</span>
                    </div>

                    <span className="text-gray-300 font-light text-3xl hidden md:block">+</span>

                    {/* Item 2: Comercial */}
                    <div className="bg-white border border-gray-100 shadow-lg hover:shadow-xl rounded-2xl px-8 py-4 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                        <div className="p-2.5 bg-emerald-50 rounded-xl"><TrendingUp className="w-5 h-5 text-emerald-600" /></div>
                        <span className="font-bold text-gray-900 text-lg">Comercial</span>
                    </div>

                    <span className="text-gray-300 font-light text-3xl hidden md:block">+</span>

                    {/* Item 3: Gestão */}
                    <div className="bg-white border border-gray-100 shadow-lg hover:shadow-xl rounded-2xl px-8 py-4 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                        <div className="p-2.5 bg-slate-50 rounded-xl"><Layers className="w-5 h-5 text-slate-600" /></div>
                        <span className="font-bold text-gray-900 text-lg">Gestão</span>
                    </div>
                </div>
            </div>
        </TextReveal>

      </div>
    </SlideWrapper>
  );
};

// --- CARD COM FOTO (CUSTOMIZADO) ---
const OperationCard = ({ title, role, image, imageStyle, color, delay, items, isCenter, icon: Icon }: any) => {
    
    // Configuração de Temas
    const themes: any = {
        red: { border: 'border-red-100', text: 'text-red-700', bg: 'bg-red-50', ring: 'ring-red-100' },
        emerald: { border: 'border-emerald-200', text: 'text-emerald-700', bg: 'bg-emerald-50', ring: 'ring-emerald-200' },
        slate: { border: 'border-slate-200', text: 'text-slate-700', bg: 'bg-slate-50', ring: 'ring-slate-200' },
    };
    const theme = themes[color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            className={`
                relative flex flex-col h-full bg-white 
                rounded-2xl border ${theme.border} p-6 
                ${isCenter ? `shadow-2xl scale-105 z-10 ring-4 ${theme.ring}` : 'shadow-lg hover:shadow-xl'}
                transition-all duration-300
            `}
        >
            {/* Header com Foto */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-50">
                <div className="relative">
                    <div className={`w-16 h-16 rounded-full overflow-hidden border-2 ${theme.border}`}>
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-cover" 
                            style={imageStyle}
                        />
                    </div>
                    {/* Badge Icon */}
                    <div className={`absolute -bottom-1 -right-1 p-1.5 rounded-full bg-white shadow-sm border border-gray-100`}>
                        <Icon className={`w-3 h-3 ${theme.text}`} />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{title}</h3>
                    <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${theme.text}`}>{role}</p>
                </div>
            </div>

            {/* Lista de Atribuições */}
            <ul className="space-y-4 flex-1">
                {items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 group">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-all group-hover:scale-150 ${theme.bg.replace('bg-', 'bg-')}`} style={{backgroundColor: 'currentColor'}} />
                        <span className="text-sm text-gray-600 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};