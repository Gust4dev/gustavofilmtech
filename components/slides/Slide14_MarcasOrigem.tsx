import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const regioes = ['Retrovisores', 'Capôs com vincos', 'Áreas de alta curvatura ou tensão'];

export const Slide14_MarcasOrigem: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare>
      <div className="absolute top-[-8vmin] right-[-6vmin] w-[42vmin] h-[42vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[26vmin] h-[26vmin] rounded-full bg-gray-300/40 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Marcas — Origem e Regiões
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            De onde vêm as marcas
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
          <div className="space-y-[2vmin]">
            <TextReveal delay={0.3}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                As marcas na aplicação normalmente estão ligadas ao{' '}
                <span className="font-semibold text-gray-900">processo de lubrificação</span>, ao comportamento da
                cola e à forma como o material é conduzido durante a instalação.
              </p>
            </TextReveal>

            <TextReveal delay={0.45}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Existem materiais com cola mais agressiva — nesses casos é necessário realizar um processo correto
                para{' '}
                <span className="font-semibold text-gray-900">aliviar a ancoragem inicial da cola</span>, reduzindo
                o risco de marcas.
              </p>
            </TextReveal>
          </div>

          <div>
            <TextReveal delay={0.35}>
              <p className="text-gray-600 font-semibold mb-[1.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                Manchas mais comuns no PPF:
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
            <TextReveal delay={0.8}>
              <p className="text-gray-600 mt-[2vmin] italic" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                Por isso, cada detalhe precisa ser observado para que a aplicação fique o mais perfeita possível.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
