import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { Scissors, Droplets, Thermometer, Layers } from 'lucide-react';

export const Slide_Acabamento_Tools: React.FC = () => {
  const tools = [
    { icon: <Scissors />, title: "Lâminas Precisas", desc: "Aço cirúrgico para cortes sem contato com a pintura." },
    { icon: <Droplets />, title: "Soluções de Cura", desc: "Ativadores de adesão que garantem bordas definitivas." },
    { icon: <Thermometer />, title: "Controle Térmico", desc: "Sopradores digitais com precisão de 1°C." },
    { icon: <Layers />, title: "Espátulas Custom", desc: "Durezas variadas para cada contorno do veículo." }
  ];

  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="container mx-auto px-[5vmin] h-full flex flex-col justify-center">
        <TextReveal delay={0.1}>
          <h2 className="text-gray-900 font-black text-5xl md:text-7xl uppercase leading-tight mb-16">
            Arsenal de <br/><span className="text-brand-red italic">Alta Performance</span>
          </h2>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {tools.map((tool, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-gray-50 p-8 rounded-[30px] border border-gray-100 flex flex-col items-center text-center group hover:border-brand-red transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <h4 className="text-xl font-black uppercase mb-4 text-gray-900 tracking-tight">{tool.title}</h4>
              <p className="text-gray-500 leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide_Acabamento_Tools;
