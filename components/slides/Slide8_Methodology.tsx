import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { 
  Database, Users, ShoppingBag, 
  Megaphone, HeartHandshake, BarChart2, 
  TrendingUp, Layers, Rocket 
} from 'lucide-react';

// Os 8 Pilares do Filmtech Growth (Adaptados do Octogrowth)
const METHODOLOGY_NODES = [
  { id: 1, title: 'Fundamentos', icon: Layers, color: 'text-gray-600', bg: 'bg-gray-100' },
  { id: 2, title: 'Gente & Gestão', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
  { id: 3, title: 'Produto & Oferta', icon: ShoppingBag, color: 'text-purple-600', bg: 'bg-purple-100' },
  { id: 4, title: 'Vendas & Canais', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
  { id: 5, title: 'Mkt & Branding', icon: Megaphone, color: 'text-red-600', bg: 'bg-red-100' },
  { id: 6, title: 'Customer Success', icon: HeartHandshake, color: 'text-orange-600', bg: 'bg-orange-100' },
  { id: 7, title: 'Tech & Dados', icon: Database, color: 'text-cyan-500', bg: 'bg-cyan-100' }, // Changed to cyan-500 for better visibility if needed, or stick to provided
  { id: 8, title: 'Growth & Escala', icon: Rocket, color: 'text-indigo-600', bg: 'bg-indigo-100' },
];

export const Slide8_Methodology: React.FC = () => {
  // Cálculo de posição circular
  const getPosition = (index: number, total: number, radius: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Começa do topo
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <SlideWrapper className="bg-white overflow-hidden flex flex-col items-center justify-center">
      {/* Título */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 md:top-12 text-center z-20 w-full px-4"
      >
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-2">
          O Ecossistema <span className="text-brand-red">Filmtech Growth</span>
        </h2>
        <p className="text-gray-500 text-sm font-bold tracking-[0.2em] uppercase">
          Metodologia de 8 Pontas para Dominância de Mercado
        </p>
      </motion.div>

      {/* Container Radial Responsivo */}
      <div className="relative w-full max-w-4xl aspect-square md:aspect-video flex items-center justify-center mt-10 md:mt-0 scale-90 md:scale-100">
        
        {/* Círculos de Conexão (Background) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
             <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-gray-900 dashed-border animate-spin-slow" />
             <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full border border-brand-red/50" />
        </div>

        {/* NÚCLEO CENTRAL */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-900 shadow-2xl border-4 border-gray-100"
        >
          <BarChart2 size={40} className="text-brand-red mb-2" />
          <span className="text-white font-black text-center leading-none text-sm md:text-lg">
            FILMTECH<br/>GROWTH
          </span>
        </motion.div>

        {/* NÓS SATÉLITES */}
        {METHODOLOGY_NODES.map((node, i) => {
          // Ajuste de raio para mobile vs desktop
          // Note: using a fixed radius might be tricky without window check in SSR, 
          // but we'll assume client-side rendering or handle hydration.
          // For now, using a safe default.
          const radius = 240; 
          
          // Enhanced responsiveness in the real usage might require media queries or hooks,
          // but sticking to the provided code logic roughly.
          
          const pos = getPosition(i, METHODOLOGY_NODES.length, radius);

          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1, x: pos.x, y: pos.y }}
              transition={{ delay: 0.2 + (i * 0.1), type: "spring", stiffness: 100 }}
              style={{ willChange: 'transform' }} // Optimization
              className="absolute z-10 flex flex-col items-center w-24 md:w-32"
              // We need to ensure the positioning works with the dynamic radius relative to the center container.
              // The x/y are offsets from the center.
            >
              {/* Ícone Bolha */}
              <div className={`
                w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg mb-2 transform rotate-45 border-2 border-white
                ${node.bg}
              `}>
                <node.icon size={24} className={`transform -rotate-45 ${node.color}`} />
              </div>
              
              {/* Texto */}
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-100">
                <span className="text-[10px] md:text-xs font-bold text-gray-800 uppercase whitespace-nowrap">
                  {node.title}
                </span>
              </div>
              
              {/* Linha Conectora (SVG Draw) */}
              <svg className="absolute top-1/2 left-1/2 -z-10 w-0 h-0 overflow-visible pointer-events-none">
                <motion.line
                  x1={0} y1={0}
                  x2={-pos.x * 0.8} y2={-pos.y * 0.8} // Conecta em direção ao centro
                  stroke={node.color === 'text-cyan-500' ? '#06b6d4' : node.color.replace('text-', '').replace('-600', '')} // Simple heuristic for now, better to map colors properly
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-30 stroke-current"
                  style={{ stroke: 'currentColor', color: 'gray' }} // Fallback
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                />
              </svg>
            </motion.div>
          );
        })}
      </div>
    </SlideWrapper>
  );
};
