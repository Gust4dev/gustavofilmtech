import React, { useState, useEffect } from 'react';
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
  { id: 7, title: 'Tech & Dados', icon: Database, color: 'text-cyan-600', bg: 'bg-cyan-100' },
  { id: 8, title: 'Growth & Escala', icon: Rocket, color: 'text-indigo-600', bg: 'bg-indigo-100' },
];

export const Slide8_Final: React.FC = () => {
  // Cálculo de posição circular
  // Reduzido raio para 28vmin para evitar cortes
  const getPosition = (index: number, total: number) => {
    // Retornamos posição em porcentagem relativa ao centro
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Começa do topo
    return {
      x: Math.cos(angle) * 28, // 28vmin de raio (era 32)
      y: Math.sin(angle) * 28,
    };
  };

  return (
    <SlideWrapper className="bg-white overflow-hidden flex flex-col items-center justify-center">
      {/* Container Principal que usa vmin para tudo */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        
        {/* Título - Ajustado para subir mais (top-2vmin) e dar espaço pro grid */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[2vmin] md:top-[4vmin] text-center z-20 w-full px-4"
        >
          <h2 className="font-black text-gray-900 uppercase tracking-tight mb-[1vmin]"
              style={{ fontSize: 'clamp(24px, 5vmin, 64px)' }}>
            O Ecossistema <span className="text-brand-red">Filmtech Growth</span>
          </h2>
          <p className="text-gray-500 font-bold tracking-[0.2em] uppercase"
             style={{ fontSize: 'clamp(10px, 1.5vmin, 18px)' }}>
            Metodologia de 8 Pontas para Dominância de Mercado
          </p>
        </motion.div>

        {/* Container do Diagrama - Centralizado e escalável */}
        <div className="relative flex items-center justify-center"
             style={{ 
               width: '75vmin', // Reduzido de 80vmin para 75vmin para segurança
               height: '75vmin',
               marginTop: '8vmin' // Mais espaço do topo
             }}>
          
          {/* Círculos de Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
               {/* Orbita Externa */}
               <div className="rounded-full border border-gray-900 dashed-border animate-spin-slow" 
                    style={{ width: '56vmin', height: '56vmin' }} />
               {/* Orbita Interna */}
               <div className="absolute rounded-full border border-brand-red/50" 
                    style={{ width: '38vmin', height: '38vmin' }} />
          </div>

          {/* NÚCLEO CENTRAL */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            className="relative z-10 flex flex-col items-center justify-center rounded-full bg-gray-900 shadow-2xl border-4 border-gray-100"
            style={{ width: '20vmin', height: '20vmin' }}
          >
            <BarChart2 className="text-brand-red mb-[1vmin]" style={{ width: '5vmin', height: '5vmin' }} />
            <span className="text-white font-black text-center leading-none"
                  style={{ fontSize: '1.8vmin' }}>
              FILMTECH<br/>GROWTH
            </span>
          </motion.div>

          {/* NÓS SATÉLITES */}
          {METHODOLOGY_NODES.map((node, i) => {
            const pos = getPosition(i, METHODOLOGY_NODES.length);
            
            return (
              <motion.div
                key={node.id}
                // IMPORTANT: Start from Center (0,0) relative to parent center
                initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }} // Start centered!
                animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: `calc(-50% + ${pos.x}vmin)`, // Offset from center
                    y: `calc(-50% + ${pos.y}vmin)` 
                }}
                transition={{ delay: 0.2 + (i * 0.1), type: "spring", stiffness: 100, damping: 15 }}
                className="absolute top-1/2 left-1/2 z-10 flex flex-col items-center justify-center origin-center"
                style={{ width: '15vmin' }}
              >
                {/* Ícone Bolha */}
                <div className={`
                  rounded-2xl flex items-center justify-center shadow-lg mb-[0.5vmin] transform rotate-45 border-2 border-white
                  ${node.bg}
                `}
                style={{ width: '7vmin', height: '7vmin' }}>
                  <node.icon className={`transform -rotate-45 ${node.color}`} style={{ width: '3.5vmin', height: '3.5vmin' }} />
                </div>
                
                {/* Texto */}
                <div className="bg-white/90 backdrop-blur-sm px-[1.5vmin] py-[0.5vmin] rounded-full shadow-sm border border-gray-100">
                  <span className="font-bold text-gray-800 uppercase whitespace-nowrap block"
                        style={{ fontSize: '1.1vmin' }}>
                    {node.title}
                  </span>
                </div>
                
                {/* Linha Conectora (SVG Draw) 
                    NOTA: A linha deve conectar do CENTRO NUCLEO até o CENTRO NÓ.
                    Como estamos animando o nó, desenhar a linha é complexo.
                    Simples solução: Linha animada que gira e expande do centro.
                */}
                <div className="absolute top-1/2 left-1/2 w-0 h-0 -z-10 flex items-center justify-start origin-left pointer-events-none"
                     style={{ 
                       transform: `rotate(${(i / METHODOLOGY_NODES.length) * 360 - 90}deg)`,
                       top: '50%',
                       left: '50%',
                     }}>
                     <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '28vmin' }}
                        transition={{ duration: 0.8, delay: 0.4 + (i * 0.1) }}
                        className="h-[2px] bg-gray-300 origin-left"
                        style={{ borderTopStyle: 'dashed', borderTopWidth: '2px' }}
                     />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
};