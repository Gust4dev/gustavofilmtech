import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { Award, Star, Crown } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide_PW_Elite: React.FC<SlideProps> = () => {
  return (
    <SlideWrapper className="bg-white overflow-hidden" showFlare>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red via-brand-red/50 to-brand-red" />
      
      <div className="container mx-auto px-[5vmin] h-full flex flex-col justify-center items-center text-center">
        <TextReveal delay={0.1}>
          <div className="flex justify-center gap-4 mb-8">
            <Crown className="text-brand-red w-12 h-12" />
          </div>
          <h2 className="text-gray-900 font-black text-6xl md:text-8xl uppercase leading-none mb-6">
            O Clube <span className="text-brand-red">Elite</span>
          </h2>
          <p className="text-gray-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Mais que um serviço, uma chancela de qualidade reconhecida pelos maiores colecionadores do país.
          </p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-5xl">
          {[
            { icon: <Award />, title: "Certificação Gold", desc: "Selo de autenticidade em cada projeto finalizado." },
            { icon: <Star />, title: "Suporte VIP 24/7", desc: "Linha direta para urgências e cuidados pós-instalação." },
            { icon: <Crown />, title: "Experiência Incomparável", desc: "Cada detalhe pensado para superar a perfeição." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.15) }}
              className="p-10 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col items-center group hover:bg-brand-black transition-all duration-500"
            >
              <div className="p-4 rounded-2xl bg-brand-red/10 text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-white transition-colors uppercase italic">{item.title}</h4>
              <p className="text-gray-500 group-hover:text-gray-400 transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide_PW_Elite;
