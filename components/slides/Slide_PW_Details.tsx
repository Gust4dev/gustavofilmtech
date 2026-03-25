import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { CheckCircle2 } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide_PW_Details: React.FC<SlideProps> = () => {
  const features = [
    { title: "Acabamento Sem Emendas", desc: "Técnicas de tucking e wrapping profundo para invisibilidade total." },
    { title: "Descontaminação Química", desc: "Preparação de superfície em nível molecular para adesão perfeita." },
    { title: "Cortes Digitais Customizados", desc: "Plotagem híbrida: o melhor da tecnologia com o toque artesanal." },
    { title: "Garantia Vitalícia de Aplicação", desc: "Segurança total contra descolamentos ou bolhas." }
  ];

  return (
    <SlideWrapper className="bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left: Image/Visual Container */}
        <div className="w-full md:w-1/2 relative bg-brand-black overflow-hidden h-[40vh] md:h-full">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            src="/images/pwreference.webp"
            alt="Private Wrap Detail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-transparent md:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent md:hidden block" />
          
          <div className="absolute bottom-[5vmin] left-[5vmin]">
             <TextReveal delay={0.5}>
               <h3 className="text-white font-black text-4xl md:text-6xl uppercase leading-none">
                 O Padrão <br/><span className="text-brand-red">Invisível</span>
               </h3>
             </TextReveal>
          </div>
        </div>

        {/* Right: Feature List */}
        <div className="w-full md:w-1/2 p-[5vmin] md:p-[8vmin] flex flex-col justify-center space-y-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="flex gap-6 group"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-red/5 border border-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">{f.title}</h4>
                <p className="text-gray-500 mt-1 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide_PW_Details;
