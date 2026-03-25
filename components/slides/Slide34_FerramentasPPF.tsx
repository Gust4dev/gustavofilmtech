import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const ferramentas = [
  {
    nome: 'Espátula de borracha',
    uso: 'Controle de aplicação e acabamento',
  },
  {
    nome: 'Estilete 30°',
    uso: 'Cortes precisos e seguros',
  },
  {
    nome: 'Dois borrifadores',
    uso: 'Controle da lubrificação e ativação do adesivo',
  },
];

export const Slide34_FerramentasPPF: React.FC = () => {
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
            Ferramentas para PPF
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            O básico bem feito começa aqui
          </h2>
        </TextReveal>

        <div className="mt-[4vmin] space-y-[2.5vmin] max-w-[70vmin]">
          {ferramentas.map((item, i) => (
            <TextReveal key={item.nome} delay={0.35 + i * 0.2}>
              <div className="flex items-start gap-[2.5vmin] p-[2.5vmin] bg-white border border-gray-100 rounded-xl shadow-sm hover:border-brand-red/30 hover:shadow-md transition-all duration-300 group">
                <div
                  className="font-display font-black text-brand-red flex-shrink-0"
                  style={{ fontSize: 'clamp(18px, 3.5vmin, 44px)', lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <p className="font-bold text-gray-900" style={{ fontSize: 'clamp(14px, 2vmin, 24px)' }}>
                    {item.nome}
                  </p>
                  <p className="text-gray-600 mt-[0.5vmin]" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                    {item.uso}
                  </p>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>

        <TextReveal delay={1.0}>
          <p className="text-gray-500 italic mt-[2.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 19px)' }}>
            Simples… mas extremamente eficiente quando bem utilizado.
          </p>
        </TextReveal>
      </div>
    </SlideWrapper>
  );
};
