import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, BrainCircuit, Rocket } from 'lucide-react';

export const Slide6_Gap: React.FC = () => {
  const GAPS = [
    {
      icon: ShieldCheck,
      title: "Gestão & Governança",
      desc: "Sair do 'apagar incêndio' para processos auditáveis e organizados.",
      color: "text-blue-500",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: "Inteligência Comercial",
      desc: "Transformar indicações aleatórias em uma máquina de vendas previsível.",
      color: "text-emerald-500",
      delay: 0.4
    },
    {
      icon: BrainCircuit, // Ícone de Cérebro/Tech
      title: "Metodologia de Growth", // Mudança chave aqui
      desc: "Trocar a intuição e o 'suor' por tecnologia e análise de dados.",
      color: "text-brand-red",
      delay: 0.6
    }
  ];

  return (
    <SlideWrapper className="bg-gray-50 flex flex-col justify-center relative overflow-hidden">
      
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 -skew-x-12 translate-x-20 z-0" />

      <div className="max-w-6xl mx-auto w-full px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Coluna da Esquerda: A Dor */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight mb-6">
              O Caminho até aqui foi na <span className="text-brand-red decoration-4 underline decoration-brand-red/30">Força do Braço</span>.
            </h2>
            
            <p className="text-xl text-gray-600 font-medium mb-6">
              Crescemos na intuição, no suor e na coragem.
              <br/>
              <strong className="text-gray-900">Mas escalar de verdade exige mais.</strong>
            </p>

            <div className="h-1 w-20 bg-brand-red rounded-full" />
          </motion.div>
        </div>

        {/* Coluna da Direita: Os 3 Pilares da Mudança */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {GAPS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: item.delay, type: 'spring', stiffness: 50 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-transparent hover:border-brand-red transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors ${item.color}`}>
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 font-medium leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideWrapper>
  );
};