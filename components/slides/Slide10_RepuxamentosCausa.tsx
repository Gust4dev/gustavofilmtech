import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const regioes = ['Retrovisores', 'Sensores', 'Pontas de capô', 'Para-lamas'];

export const Slide10_RepuxamentosCausa: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare>
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[42vmin] h-[42vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[26vmin] h-[26vmin] rounded-full bg-gray-300/40 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Repuxamentos — Causa e Regiões
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Onde surgem e por quê
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
          <div className="space-y-[2vmin]">
            <TextReveal delay={0.3}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Os repuxamentos são, na maioria das vezes, resultado de{' '}
                <span className="font-semibold text-gray-900">tensão mal direcionada</span> durante a aplicação.
              </p>
            </TextReveal>

            <TextReveal delay={0.45}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Esse problema surge quando o aplicador estica o material{' '}
                <span className="font-semibold text-gray-900">sem um objetivo claro</span>, apenas tentando "fazer
                encaixar", sem entender o comportamento da peça.
              </p>
            </TextReveal>

            <TextReveal delay={0.6}>
              <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin]">
                <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                  Um erro comum é trabalhar com excesso de material e depois tentar compensar esticando. O PPF ou
                  vinil <span className="font-semibold text-gray-900">não deve ser forçado dessa forma</span>.
                </p>
              </div>
            </TextReveal>
          </div>

          <div>
            <TextReveal delay={0.35}>
              <p className="text-gray-600 font-semibold mb-[1.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                Áreas críticas mais afetadas:
              </p>
            </TextReveal>
            <div className="space-y-[1vmin]">
              {regioes.map((item, i) => (
                <TextReveal key={item} delay={0.45 + i * 0.1}>
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
        </div>
      </div>
    </SlideWrapper>
  );
};
