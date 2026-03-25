import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

export const Slide_Acabamento_Details: React.FC = () => {
  return (
    <SlideWrapper className="bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -skew-x-[15deg] translate-x-1/4 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-[5vmin] grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
        <div className="space-y-8">
           <TextReveal delay={0.1}>
             <h4 className="text-brand-red font-bold uppercase tracking-widest">O Diferencial</h4>
             <h2 className="text-gray-900 font-black text-5xl md:text-7xl uppercase leading-none mt-4">
               A <span className="text-brand-red italic">Reflexão</span> <br/>Perfeita
             </h2>
           </TextReveal>
           
           <TextReveal delay={0.3}>
             <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
               Nossa técnica de finalização garante que o PPF não apenas proteja, mas melhore a profundidade da cor e o brilho do verniz original. Sem "casca de laranja", sem distorções.
             </p>
           </TextReveal>

           <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { label: "Claridade Óptica", val: "100%" },
                { label: "Resistência UV", val: "99.9%" },
                { label: "Auto-Cura", val: "Instantânea" },
                { label: "Brilho Extra", val: "+25%" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100"
                >
                  <span className="block text-brand-red font-black text-3xl">{stat.val}</span>
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                </motion.div>
              ))}
           </div>
        </div>

        <div className="relative aspect-video rounded-[30px] overflow-hidden shadow-2xl">
           <motion.img 
             initial={{ scale: 1.5 }}
             whileInView={{ scale: 1 }}
             transition={{ duration: 2 }}
             src="/images/imagem3.webp" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 border-[1.5vmin] border-white/20 pointer-events-none" />
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide_Acabamento_Details;
