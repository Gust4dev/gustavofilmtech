import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { Shield, Target, Zap } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide_PW_Intro: React.FC<SlideProps> = ({ sectionNumber }) => {
  return (
    <SlideWrapper className="bg-white text-gray-900" showFlare>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-[5vmin] text-center h-full flex flex-col justify-center">
        <TextReveal delay={0.1}>
          <span className="text-brand-red font-bold uppercase tracking-[0.3em] mb-4 block">
            Seção {String(sectionNumber || 0).padStart(2, '0')}
          </span>
        </TextReveal>

        <TextReveal delay={0.25}>
          <h2 className="font-display font-black text-6xl md:text-9xl uppercase leading-none italic mb-8 text-gray-900">
            Private <br/><span className="text-brand-red not-italic">Wrap</span>
          </h2>
        </TextReveal>

        <TextReveal delay={0.45}>
          <p className="text-gray-500 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed italic">
            "O método que separa os aplicadores de adesivos dos verdadeiros especialistas em acabamento invisível."
          </p>
        </TextReveal>

        <div className="flex justify-center gap-12 mt-16">
          {[
            { icon: <Shield className="w-8 h-8"/>, label: "Proteção Extrema" },
            { icon: <Target className="w-8 h-8"/>, label: "Precisão Cirúrgica" },
            { icon: <Zap className="w-8 h-8"/>, label: "Performance Elite" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (i * 0.1) }}
              className="flex flex-col items-center gap-3"
            >
              <div className="p-4 rounded-2xl bg-brand-red/5 border border-brand-red/10 text-brand-red">
                {item.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide_PW_Intro;
