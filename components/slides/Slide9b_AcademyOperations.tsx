import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Shield, Users, MonitorPlay, GraduationCap, DollarSign, Crown, Check } from 'lucide-react';

const IMG_SETTINGS = {
    gustavo: { scale: 1.3, x: 0, y: 3 },
    rodrigo: { scale: 1.1, x: 0, y: 0 },
    wallisson: { scale: 1.1, x: 0, y: 0 }
};

export const Slide9b_AcademyOperations: React.FC = () => {
  return (
    <SlideWrapper className="bg-white overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
           style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />
      
      {/* 1. LOGO FILMTECH EDUCATION (Mais destacada) */}
      <div className="absolute top-8 right-8 w-[250px] md:w-[400px] opacity-40 pointer-events-none">
         <img src="/images/logobranca.png" alt="FilmTech Education" />
      </div>

      <div className="w-full h-full flex flex-col justify-center px-4 md:px-8 relative z-10 py-4">
        
        {/* === HEADER === */}
        <div className="text-center mb-8">
            <TextReveal>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight leading-none mb-2">
                    A Operação na <span className="text-emerald-600">Prática</span>
                </h2>
                <p className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">
                    Fluxo de Trabalho & Fontes de Receita
                </p>
            </TextReveal>
        </div>

        {/* === PARTE 1: QUEM FAZ (WORKFLOW) === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 relative max-w-6xl mx-auto w-full items-stretch mb-8">
            {/* Setas (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full pointer-events-none hidden md:block z-0 -translate-y-1/2 mt-2">
                <ArrowRight className="absolute left-[31%] text-gray-400 w-8 h-8" />
                <ArrowRight className="absolute right-[31%] text-gray-400 w-8 h-8" />
            </div>

            {/* 1. GUSTAVO */}
            <OperationCard 
                title="Gustavo"
                role="Atração & Autoridade"
                image="/images/gustavo.png"
                imgSettings={IMG_SETTINGS.gustavo}
                color="amber"
                icon={Zap}
                delay={0.1}
                items={["Gera desejo e oferta", "Entrega as aulas", "Mantém o Hype"]}
            />

            {/* 2. UNI AUTO */}
            <OperationCard 
                title="Uni Auto"
                role="Máquina de Vendas"
                image="/images/Rodrigo.jpeg" 
                imgSettings={IMG_SETTINGS.rodrigo}
                color="emerald"
                icon={Users}
                delay={0.2}
                isCenter
                items={["350 Vendedores", "Follow-up diário", "Gestão de Leads"]}
            />

            {/* 3. GESTÃO */}
            <OperationCard 
                title="Gestão"
                role="Rodrigo & Wallisson"
                image="/images/Wallisson.jpg"
                imgSettings={IMG_SETTINGS.wallisson}
                color="slate"
                icon={Shield}
                delay={0.3}
                items={["Controle de Caixa", "Metas e KPIs", "Escala do Time"]}
            />
        </div>

        {/* === PARTE 2: O QUE VENDE (PRODUTOS) === */}
        <div className="max-w-6xl mx-auto w-full">
            <TextReveal delay={0.4}>
                <div className="flex items-center gap-3 mb-4 pl-1">
                    <div className="p-1.5 bg-emerald-100 rounded-lg">
                        <DollarSign className="w-4 h-4 text-emerald-700" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                        Mix de Produtos (Receita)
                    </h3>
                </div>
            </TextReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* PRODUTO 1: PRESENCIAL */}
                <ProductCard 
                    title="Presencial (Imersão)"
                    revenue="R$ 240k/mês"
                    icon={Users}
                    color="text-gray-900"
                    bg="bg-gray-50"
                    delay={0.5}
                    features={[
                        "Ticket Médio: R$ 10.000",
                        "Turmas de 10-12 alunos",
                        "2 Turmas mensais (Demanda Real)"
                    ]}
                />

                {/* PRODUTO 2: ONLINE (HERO) */}
                <ProductCard 
                    title="Digital (Online)"
                    revenue="R$ 600k/mês"
                    icon={MonitorPlay}
                    color="text-emerald-700"
                    bg="bg-emerald-50"
                    border="border-emerald-200"
                    delay={0.6}
                    highlight
                    features={[
                        "Ticket: R$ 997,00",
                        "Escala Ilimitada",
                        "Meta: 300 a 600 vendas/mês"
                    ]}
                />

                {/* PRODUTO 3: MENTORIA (O QUE FALTAVA) */}
                <ProductCard 
                    title="Mentorias & Upsell"
                    revenue="R$ 120k/mês"
                    icon={Crown}
                    color="text-amber-700"
                    bg="bg-amber-50"
                    border="border-amber-100"
                    delay={0.7}
                    features={[
                        "Mentoria Individual",
                        "Mentoria 6 Meses",
                        "Aplicador de Elite",
                        "Upgrade de Curso"
                    ]}
                />

            </div>
        </div>

      </div>
    </SlideWrapper>
  );
};

// --- COMPONENTES VISUAIS ---

const OperationCard = ({ title, role, image, imgSettings, color, items, isCenter, icon: Icon, delay }: any) => {
    const colors: any = {
        amber: { border: 'border-amber-200', text: 'text-amber-700', ring: 'ring-amber-100' },
        emerald: { border: 'border-emerald-200', text: 'text-emerald-700', ring: 'ring-emerald-100' },
        slate: { border: 'border-slate-200', text: 'text-slate-700', ring: 'ring-slate-200' },
    };
    const theme = colors[color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className={`bg-white border ${theme.border} rounded-xl p-5 flex flex-col gap-5 ${isCenter ? 'shadow-xl ring-2 ' + theme.ring : 'shadow-sm'}`}
        >
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 relative shrink-0">
                    <img 
                        src={image} 
                        className="w-full h-full object-cover" 
                        style={{ transform: `scale(${imgSettings.scale}) translate(${imgSettings.x}px, ${imgSettings.y}px)` }}
                    />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-lg leading-tight">{title}</h4>
                    <p className={`text-[11px] font-bold uppercase tracking-wider ${theme.text}`}>{role}</p>
                </div>
                <div className="ml-auto text-gray-300"><Icon size={22} /></div>
            </div>
            <ul className="space-y-2">
                {items.map((it: string, i: number) => (
                    <li key={i} className="flex items-start gap-12 text-[13px] text-gray-600 font-medium leading-snug">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-gray-400`} />
                        {it}
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

const ProductCard = ({ title, revenue, icon: Icon, color, bg, border = 'border-transparent', delay, features, highlight }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`rounded-xl p-6 border ${border} ${bg} flex flex-col h-full relative overflow-hidden ${highlight ? 'shadow-md' : ''}`}
    >
        {highlight && <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">FOCO</div>}
        
        <div className="flex items-center gap-4 mb-5">
            <div className={`p-2.5 rounded-lg bg-white/60 ${color}`}>
                <Icon size={22} />
            </div>
            <div>
                <h4 className={`font-bold text-base ${color}`}>{title}</h4>
                <p className="text-sm font-black text-gray-900">{revenue}</p>
            </div>
        </div>
        
        <ul className="space-y-3 mt-auto">
            {features.map((feat: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-[13px] text-gray-600 font-medium">
                    <Check size={14} className={highlight ? "text-emerald-600" : "text-gray-400"} />
                    {feat}
                </li>
            ))}
        </ul>
    </motion.div>
);