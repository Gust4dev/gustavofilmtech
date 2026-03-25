import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { ClipboardCheck, Search, ShieldCheck, Truck } from 'lucide-react';

export const Slide_Revisao_Steps: React.FC = () => {
  const steps = [
    { icon: <Search />, title: "Inspeção de 360°", desc: "Verificação sob luzes de alta intensidade para identificar micro-bolhas ou tensões." },
    { icon: <ShieldCheck />, title: "Teste de Adesão", desc: "Protocolo de 24h para garantir a cura total das bordas e vincos." },
    { icon: <ClipboardCheck />, title: "Checklist de 50 Pontos", desc: "Cada centímetro do carro é auditado por um segundo especialista." },
    { icon: <Truck />, title: "Entrega Técnica", desc: "Explicação detalhada dos cuidados e plano de manutenção para o cliente." }
  ];

  return (
    <SlideWrapper className="bg-white">
      <div className="container mx-auto px-[5vmin] h-full flex flex-col justify-center">
        <TextReveal delay={0.1}>
          <h2 className="text-gray-900 font-black text-5xl md:text-7xl uppercase leading-tight mb-16 text-center">
            Protocolo de <br/><span className="text-brand-red">Segurança</span>
          </h2>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-gray-50 p-8 rounded-[30px] border border-gray-100 flex flex-col items-center text-center group hover:bg-brand-red transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h4 className="text-xl font-black uppercase mb-4 text-gray-900 group-hover:text-white transition-colors tracking-tight">{step.title}</h4>
              <p className="text-gray-500 group-hover:text-white/80 transition-colors leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide_Revisao_Steps;
