import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const IMG_CLAY = '/images/clay-bar.webp';

const etapas = [
  'Lavagem técnica inicial',
  'Inspeção minuciosa da pintura',
  'Remoção de piche e resíduos pesados',
  'Descontaminação ferrosa (Iron X)',
  'Uso de clay bar quando necessário',
  'Limpeza final para liberação total da superfície',
];

export const Slide23_ProcessoDescontaminacao: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute bottom-[-8vmin] right-[-6vmin] w-[44vmin] h-[44vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[-4vmin] left-[-4vmin] w-[30vmin] h-[30vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[92vmin]">
        <TextReveal delay={0.1}>
          <span className="text-brand-red font-bold uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}>
            Limpeza — Processo Correto de Descontaminação
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2 className="font-display font-black text-gray-900 mt-[1.5vmin]" style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}>
            O passo a passo ideal
          </h2>
        </TextReveal>

        <div className="mt-[2.5vmin] grid gap-[2.5vmin]" style={{ gridTemplateColumns: '1fr clamp(130px, 22vmin, 240px)' }}>
          {/* Coluna esquerda: etapas */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.2vmin]">
              {etapas.map((item, i) => (
                <TextReveal key={item} delay={0.3 + i * 0.08}>
                  <div className="flex items-center gap-[1.5vmin] p-[1.5vmin] bg-white border border-gray-100 rounded-lg shadow-sm hover:border-brand-red/30 hover:shadow-md transition-all duration-300 group">
                    <CheckCircle2 className="text-brand-red flex-shrink-0 group-hover:scale-110 transition-transform" style={{ width: '2.5vmin', height: '2.5vmin', minWidth: 14 }} />
                    <span className="text-gray-800" style={{ fontSize: 'clamp(11px, 1.6vmin, 19px)' }}>{item}</span>
                  </div>
                </TextReveal>
              ))}
            </div>

            <TextReveal delay={0.9}>
              <p className="text-gray-600 mt-[1.8vmin] italic" style={{ fontSize: 'clamp(11px, 1.5vmin, 18px)' }}>
                O objetivo é liberar os poros do verniz, deixando a pintura pronta para receber o PPF com máxima aderência.
              </p>
            </TextReveal>
          </div>

          {/* Coluna direita: foto do clay bar */}
          <TextReveal delay={0.25}>
            <div className="flex flex-col gap-[1.2vmin]">
              <div className="rounded-2xl overflow-hidden shadow-lg flex-1" style={{ minHeight: 'clamp(150px, 35vmin, 380px)' }}>
                <img src={IMG_CLAY} alt="CarPro 3 Clays Triple Pack — white, green e yellow" className="h-full w-full object-cover" />
              </div>
              <div className="p-[1.2vmin] bg-white border border-gray-100 rounded-xl shadow-sm text-center">
                <p className="font-bold text-gray-700" style={{ fontSize: 'clamp(10px, 1.35vmin, 15px)' }}>CarPro 3 Clays</p>
                <p className="text-gray-500" style={{ fontSize: 'clamp(9px, 1.2vmin, 13px)' }}>Ultra fine · Fine · Medium</p>
              </div>
            </div>
          </TextReveal>
        </div>
      </div>
    </SlideWrapper>
  );
};
