import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const contaminantes = [
  'Partículas ferrosas (aderidas ao verniz)',
  'Piche (asfalto)',
  'Respingos de tinta (principalmente em carros brancos)',
  'Contaminação industrial',
  'Resíduos invisíveis ao toque leve',
];

const carrosBrancos = [
  'Evidenciam mais manchas',
  'Acumulam mais contaminação visível',
  'Mostram qualquer falha de preparação',
];

export const Slide22_TiposContaminacao: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute top-[-6vmin] right-[-6vmin] w-[38vmin] h-[38vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[26vmin] h-[26vmin] rounded-full bg-gray-300/40 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Limpeza — Tipos de Contaminação
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Mais do que olho vê
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
          <div>
            <TextReveal delay={0.3}>
              <p className="text-gray-600 font-semibold mb-[1.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                Contaminantes que comprometem a aplicação:
              </p>
            </TextReveal>
            <div className="space-y-[1vmin]">
              {contaminantes.map((item, i) => (
                <TextReveal key={item} delay={0.4 + i * 0.1}>
                  <div className="flex items-start gap-[1.5vmin]">
                    <ChevronRight className="text-brand-red flex-shrink-0 mt-[0.3vmin]" style={{ width: '2.5vmin', height: '2.5vmin' }} />
                    <span className="text-gray-800" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                      {item}
                    </span>
                  </div>
                </TextReveal>
              ))}
            </div>
          </div>

          <div>
            <TextReveal delay={0.5}>
              <div className="p-[2vmin] bg-white border border-gray-100 rounded-xl shadow-sm mb-[2vmin]">
                <p className="font-bold text-gray-900 mb-[1vmin]" style={{ fontSize: 'clamp(13px, 1.8vmin, 22px)' }}>
                  Atenção redobrada: carros brancos
                </p>
                <div className="space-y-[0.8vmin]">
                  {carrosBrancos.map((item, i) => (
                    <div key={item} className="flex items-start gap-[1.5vmin]">
                      <ChevronRight className="text-brand-red flex-shrink-0 mt-[0.2vmin]" style={{ width: '2vmin', height: '2vmin' }} />
                      <span className="text-gray-700" style={{ fontSize: 'clamp(12px, 1.6vmin, 19px)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TextReveal>

            <TextReveal delay={0.75}>
              <p className="text-gray-600 italic" style={{ fontSize: 'clamp(12px, 1.6vmin, 19px)' }}>
                Muitos contaminantes não saem apenas com lavagem ou clay bar — exigem processos específicos.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
