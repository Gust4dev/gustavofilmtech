import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { SlideProps } from '../../types';

export const Slide_Revisao_Intro: React.FC<SlideProps> = ({ sectionNumber }) => {
  return (
    <SlideWrapper className="bg-white" showFlare showLogo={false}>
      <motion.img
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.3 }}
        src="/images/logobranca.webp"
        alt=""
        className="absolute right-[-10vmin] h-[85%] object-contain pointer-events-none select-none opacity-10"
      />
      <div className="relative z-10 container mx-auto px-[5vmin] text-center h-full flex flex-col justify-center items-center">
        <TextReveal delay={0.1}>
          <div className="w-1 h-20 bg-brand-red mx-auto mb-8" />
          <span className="text-brand-red font-bold uppercase tracking-[0.4em] mb-4 block">
            Seção {String(sectionNumber || 0).padStart(2, '0')}
          </span>
        </TextReveal>

        <TextReveal delay={0.3}>
          <h2 className="font-display font-black text-6xl md:text-9xl uppercase leading-none mb-12 text-gray-900">
            A Última <br/><span className="text-brand-red italic">Barreira</span>
          </h2>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-12">
          {[
            { title: "Detalhismo", desc: "Nenhum milímetro passa despercebido." },
            { title: "Garantia", desc: "Proteção real contra o tempo." },
            { title: "Excelência", desc: "O padrão Filmtech em cada entrega." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-brand-red transition-colors"
            >
              <h4 className="text-brand-red font-bold uppercase mb-2 group-hover:scale-110 transition-transform">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide_Revisao_Intro;
