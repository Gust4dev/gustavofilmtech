import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const pilares = ['Material', 'Limpeza', 'Mão de obra'];

export const Slide19_FundamentosProcesso: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare>
      <div className="absolute bottom-[-8vmin] right-[-6vmin] w-[44vmin] h-[44vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[-4vmin] left-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Fundamentos — Técnica, Tempo e Os Três Pilares
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Preparo gera velocidade e qualidade
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
          <div className="space-y-[2vmin]">
            <TextReveal delay={0.35}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Quando você observa com atenção, entende exatamente o que precisa ser feito. E quando entende o
                processo, consegue executar com{' '}
                <span className="font-semibold text-gray-900">mais segurança, mais velocidade e muito mais qualidade</span>.
              </p>
            </TextReveal>

            <TextReveal delay={0.5}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                <span className="font-semibold text-gray-900">Aplicação rápida e bem feita não é correria.</span>{' '}
                É consequência de preparo, técnica e visão.
              </p>
            </TextReveal>

            <TextReveal delay={0.65}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Antes de começar qualquer serviço, é necessário saber exatamente o que será feito, como será feito
                e quais recursos serão usados.
              </p>
            </TextReveal>
          </div>

          <div>
            <TextReveal delay={0.55}>
              <p className="text-gray-600 font-semibold mb-[2vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                Uma aplicação de alto nível se sustenta em três pilares:
              </p>
            </TextReveal>
            <div className="space-y-[1.5vmin]">
              {pilares.map((item, i) => (
                <TextReveal key={item} delay={0.65 + i * 0.15}>
                  <div className="flex items-center gap-[2vmin] p-[1.5vmin] bg-white border border-gray-100 rounded-lg shadow-sm">
                    <div
                      className="font-display font-black text-brand-red flex-shrink-0"
                      style={{ fontSize: 'clamp(14px, 2.5vmin, 32px)', minWidth: '3vmin' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className="font-semibold text-gray-900" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
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
