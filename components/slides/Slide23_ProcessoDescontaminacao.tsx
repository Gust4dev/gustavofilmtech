import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const etapas = [
  'Lavagem técnica inicial',
  'Inspeção minuciosa da pintura',
  'Remoção de piche e resíduos pesados',
  'Descontaminação ferrosa',
  'Uso de clay bar quando necessário',
  'Limpeza final para liberação total da superfície',
];

export const Slide23_ProcessoDescontaminacao: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute bottom-[-8vmin] right-[-6vmin] w-[44vmin] h-[44vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[-4vmin] left-[-4vmin] w-[30vmin] h-[30vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Limpeza — Processo Correto de Descontaminação
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            O passo a passo ideal
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] grid grid-cols-1 md:grid-cols-2 gap-[1.5vmin]">
          {etapas.map((item, i) => (
            <TextReveal key={item} delay={0.3 + i * 0.1}>
              <div className="flex items-center gap-[2vmin] p-[1.8vmin] bg-white border border-gray-100 rounded-lg shadow-sm hover:border-brand-red/30 hover:shadow-md transition-all duration-300 group">
                <CheckCircle2
                  className="text-brand-red flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ width: '2.8vmin', height: '2.8vmin' }}
                />
                <span className="text-gray-800" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                  {item}
                </span>
              </div>
            </TextReveal>
          ))}
        </div>

        <TextReveal delay={1.0}>
          <p className="text-gray-600 mt-[2vmin] italic" style={{ fontSize: 'clamp(12px, 1.6vmin, 19px)' }}>
            O objetivo é liberar os poros do verniz, deixando a pintura pronta para receber o PPF ou envelopamento
            com máxima aderência.
          </p>
        </TextReveal>
      </div>
    </SlideWrapper>
  );
};
