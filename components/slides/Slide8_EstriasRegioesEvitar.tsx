import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const regioes = ['Retrovisores', 'Colunas', 'Para-choques'];

export const Slide8_EstriasRegioesEvitar: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare>
      <div className="absolute top-[-6vmin] left-[-6vmin] w-[36vmin] h-[36vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-6vmin] right-[-6vmin] w-[30vmin] h-[30vmin] rounded-full bg-gray-200/60 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Estrias — Regiões Críticas + Como Evitar
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Onde acontece e como prevenir
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
          <div>
            <TextReveal delay={0.3}>
              <p className="text-gray-600 font-semibold mb-[1.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                Regiões mais afetadas:
              </p>
            </TextReveal>
            <div className="space-y-[1vmin]">
              {regioes.map((item, i) => (
                <TextReveal key={item} delay={0.4 + i * 0.1}>
                  <div className="flex items-center gap-[1.5vmin]">
                    <ChevronRight className="text-brand-red flex-shrink-0" style={{ width: '2.5vmin', height: '2.5vmin' }} />
                    <span className="text-gray-800 font-medium" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                      {item}
                    </span>
                  </div>
                </TextReveal>
              ))}
            </div>
          </div>

          <div className="space-y-[2vmin]">
            <TextReveal delay={0.55}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.8vmin, 21px)' }}>
                Para evitar estrias, é fundamental{' '}
                <span className="font-semibold text-gray-900">esticar a peça de forma igual e controlada</span>,
                distribuindo a tensão corretamente em toda a área de aplicação.
              </p>
            </TextReveal>

            <TextReveal delay={0.7}>
              <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin]">
                <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.8vmin, 21px)' }}>
                  Existem casos em que a estria é inevitável, principalmente em áreas de alta complexidade. Ainda
                  assim, há pontos onde ela pode ser{' '}
                  <span className="font-semibold text-gray-900">considerada aceitável</span>, desde que não
                  comprometa o acabamento final.
                </p>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
