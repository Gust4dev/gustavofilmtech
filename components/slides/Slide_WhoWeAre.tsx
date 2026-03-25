import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { Shield, Target, Trophy, Award } from 'lucide-react';
import { SlideProps } from '../../types';

const TIMELINE_EVENTS = [
  { 
    year: '2011', 
    title: 'O Início', 
    desc: 'Primeiros passos no mercado, fundamentando a paixão técnica.',
    icon: <Shield className="w-5 h-5" /> 
  },
  { 
    year: '2021', 
    title: 'Nascimento Filmtech', 
    desc: 'Estabelecimento da marca em Goiânia, focada em excelência.',
    icon: <Trophy className="w-5 h-5" /> 
  },
  { 
    year: '2022', 
    title: 'Elevação Luxury', 
    desc: 'Pivotagem total para o mercado de hiper-carros e proteção de luxo.',
    icon: <Award className="w-5 h-5" /> 
  },
  { 
    year: '2024', 
    title: 'Consolidação', 
    desc: 'Referência nacional em treinamento e aplicação premium.',
    icon: <Target className="w-5 h-5" /> 
  }
];

export const Slide_WhoWeAre: React.FC<SlideProps> = () => {
  return (
    <SlideWrapper className="bg-white text-gray-900 overflow-hidden" showFlare>
      
      {/* Background Decorativo Sutil - Textura de Grade */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-white/80 z-10" />
        {/* Você pode substituir isso por uma imagem de workshop bem clara se quiser, ou manter apenas a grade sutil */}
        <div className="w-full h-full object-cover grayscale scale-105"
             style={{ backgroundImage: 'radial-gradient(var(--color-brand-red-light) 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />
      </div>

      <div className="relative z-10 container mx-auto px-[5vmin] flex flex-col md:flex-row items-center h-full py-[10vmin] gap-12">
        
        {/* Lado Esquerdo: DNA da Marca (Claro) */}
        <div className="w-full md:w-2/5">
          <TextReveal delay={0.1}>
            <div className="inline-block px-3 py-1 bg-brand-red/5 border border-brand-red/20 rounded-full mb-6">
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px]">Identidade & DNA</span>
            </div>
            <h2 className="font-display font-black text-6xl md:text-8xl uppercase leading-[0.85] mb-8 text-gray-900">
              QUEM <br/>
              <span className="text-brand-red">SOMOS</span>
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.3}>
            <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed max-w-md">
              <p>
                A <span className="text-gray-900 font-bold">Filmtech Luxury</span> não é sobre serviços. É sobre o estabelecimento de um novo padrão de dignidade e valor para o profissional de estética.
              </p>
              <div className="h-[2px] w-12 bg-brand-red" />
              <p className="text-sm uppercase tracking-widest font-mono italic text-gray-400">
                "O detalhe não é detalhe. É o padrão."
              </p>
            </div>
          </TextReveal>
        </div>

        {/* Lado Direito: Timeline de Prestígio (Claro) */}
        <div className="w-full md:w-3/5 relative">
          {/* Linha da Timeline Animada */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="absolute left-0 top-0 w-[1px] bg-gradient-to-b from-brand-red via-brand-red/30 to-transparent md:block hidden"
          />

          <div className="grid grid-cols-1 gap-6 pl-0 md:pl-12">
            {TIMELINE_EVENTS.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                className="group relative bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-black/[0.05] hover:border-brand-red/10 p-6 rounded-2xl transition-all duration-300"
              >
                {/* Indicador de Ano */}
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-brand-red font-mono font-bold text-sm tracking-tighter">
                    {event.year}
                  </span>
                  <div className="h-[1px] flex-1 bg-black/[0.05] group-hover:bg-brand-red/20 transition-colors" />
                  <div className="text-brand-red opacity-50 group-hover:opacity-100 transition-opacity">
                    {event.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-gray-900 mb-1">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm leading-snug group-hover:text-gray-700 transition-colors">
                  {event.desc}
                </p>

                {/* Dot na linha (Desktop) */}
                <div className="absolute left-[-52px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-red hidden md:block group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(239,68,68,0.2)]" />
              </motion.div>
            ))}
          </div>

          {/* Conector de Saída para o próximo slide */}
          <div className="absolute bottom-[-15vh] left-0 md:block hidden">
            <motion.div 
              layoutId="origin-line-connector"
              className="w-[1px] h-[30vh] bg-brand-red origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide_WhoWeAre;