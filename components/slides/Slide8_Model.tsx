import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { User, TrendingUp, Users, Zap } from 'lucide-react';

// Dados dos Sócios para limpar o JSX
const PARTNERS = [
  {
    id: 'gustavo',
    name: 'Gustavo',
    role: 'Atração & Produto',
    icon: User,
    color: 'from-red-600 to-red-800',
    position: 'top-0 left-1/2 -translate-x-1/2', // Topo
    delay: 0.2
  },
  {
    id: 'rodrigo',
    name: 'Rodrigo',
    role: 'Estrutura & Vendas',
    icon: TrendingUp,
    color: 'from-blue-600 to-blue-800', // Azul para Business/Money
    position: 'bottom-0 left-0', // Esquerda Baixo
    delay: 0.4
  },
  {
    id: 'wallisson',
    name: 'Wallisson',
    role: 'Gestão & Cultura',
    icon: Users,
    color: 'from-emerald-600 to-emerald-800', // Verde para Pessoas/Growth
    position: 'bottom-0 right-0', // Direita Baixo
    delay: 0.6
  }
];

export const Slide8_Model: React.FC = () => {
  return (
    <SlideWrapper className="bg-white overflow-hidden">
      <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
        
        {/* === TITULO === */}
        <div className="absolute top-12 left-0 w-full text-center z-20">
          <TextReveal>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-2 uppercase tracking-tighter">
              A Trinca de <span className="text-red-600">Escala</span>
            </h2>
            <p className="text-gray-500 text-lg font-light tracking-widest uppercase">
              O ecossistema perfeito para o milhão
            </p>
          </TextReveal>
        </div>

        {/* === O REATOR (CORE) === */}
        <div className="relative w-full max-w-4xl aspect-square md:aspect-video flex items-center justify-center">
          
          {/* Linhas de Conexão Animadas (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
             <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity="0" />
                  <stop offset="50%" stopColor="#DC2626" stopOpacity="1" />
                  <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
                </linearGradient>
             </defs>
             {/* Triângulo Conectando os Pontos (Ajustado visualmente para desktop) */}
             <motion.path 
                d="M512 150 L200 600 L824 600 Z" // Coordenadas aproximadas do triângulo
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, ease: "easeInOut" }}
             />
          </svg>

          {/* O Núcleo Central (Resultado) */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border-4 border-red-50"
          >
             {/* Pulsing Effect */}
             <div className="absolute inset-0 rounded-full bg-red-600/5 animate-ping duration-1000" />
             <div className="absolute -inset-4 rounded-full border border-red-100 animate-pulse" />
             
             <Zap className="w-12 h-12 text-red-600 mb-2" />
             <div className="text-center">
                <span className="block text-gray-400 text-[10px] uppercase tracking-widest mb-1">Potencial</span>
                <span className="block text-3xl md:text-5xl font-black text-gray-900 leading-none">
                  R$ 1<span className="text-red-600">Mi</span>
                </span>
                <span className="block text-gray-400 text-xs uppercase tracking-widest mt-1">/mês</span>
             </div>
          </motion.div>

          {/* === OS SÓCIOS (SATÉLITES) === */}
          <div className="absolute inset-0 w-full h-full">
            {/* Gustavo (Topo) */}
            <PartnerCard partner={PARTNERS[0]} className="top-[10%] left-1/2 -translate-x-1/2" />
            
            {/* Rodrigo (Esquerda Baixo) */}
            <PartnerCard partner={PARTNERS[1]} className="bottom-[15%] left-[5%] md:left-[15%]" />
            
            {/* Wallisson (Direita Baixo) */}
            <PartnerCard partner={PARTNERS[2]} className="bottom-[15%] right-[5%] md:right-[15%]" />
          </div>

        </div>

      </div>
    </SlideWrapper>
  );
};

// Componente do Card do Sócio (Reutilizável)
const PartnerCard = ({ partner, className }: { partner: any, className: string }) => {
  const Icon = partner.icon;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: partner.delay }}
      className={`absolute ${className} z-20`}
    >
      <div className="relative group cursor-pointer">
        {/* Glow de Fundo */}
        <div className={`absolute inset-0 bg-gradient-to-r ${partner.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
        
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-64 md:w-72 text-center">
           <div className={`w-14 h-14 mx-auto bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg transform group-hover:rotate-6 transition-transform`}>
              <Icon size={28} />
           </div>
           
           <h3 className="text-2xl font-bold text-gray-900 mb-1">{partner.name}</h3>
           <p className="text-xs uppercase tracking-widest font-medium text-gray-500 group-hover:text-red-600 transition-colors">
             {partner.role}
           </p>
           
           <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[10px] text-gray-400">Clique para ver detalhes</span>
           </div>
        </div>
      </div>
    </motion.div>
  );
};