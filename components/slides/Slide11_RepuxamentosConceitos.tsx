import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const conceitos = [
  {
    nome: 'Efeito Cotovelo',
    descricao: 'Ponto onde a tensão precisa mudar de direção de forma controlada.',
  },
  {
    nome: 'Efeito Camisa',
    descricao: 'Distribuição correta do material, vestindo a peça com equilíbrio.',
  },
];

export const Slide11_RepuxamentosConceitos: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute bottom-[-8vmin] right-[-6vmin] w-[44vmin] h-[44vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[-4vmin] left-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Repuxamentos — Conceitos Fundamentais
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Técnicas que fazem a diferença
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] space-y-[2.5vmin]">
          {conceitos.map((item, i) => (
            <TextReveal key={item.nome} delay={0.35 + i * 0.2}>
              <div className="flex gap-[2vmin] p-[2.5vmin] bg-white shadow-sm border border-gray-100 rounded-xl hover:border-brand-red/40 hover:shadow-md transition-all duration-300">
                <div className="w-[0.5vmin] bg-brand-red rounded-full flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 mb-[0.8vmin]" style={{ fontSize: 'clamp(14px, 2vmin, 24px)' }}>
                    {item.nome}
                  </p>
                  <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.8vmin, 21px)' }}>
                    {item.descricao}
                  </p>
                </div>
              </div>
            </TextReveal>
          ))}

          <TextReveal delay={0.75}>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.8vmin, 21px)' }}>
              Essas técnicas não são básicas — são{' '}
              <span className="font-semibold text-gray-900">refinadas com prática e experiência</span> ao longo dos
              anos, como desenvolvemos dentro da FILMTECH.
            </p>
          </TextReveal>

          <TextReveal delay={0.9}>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.8vmin, 21px)' }}>
              Para alcançar um envelopamento perfeito, não basta saber aplicar. É necessário{' '}
              <span className="font-semibold text-gray-900">dominar técnica, processo e controle de tensão</span>.
            </p>
          </TextReveal>
        </div>
      </div>
    </SlideWrapper>
  );
};
