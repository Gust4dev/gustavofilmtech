import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

export const Slide31_PrecificacaoConclusao: React.FC = () => {
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
            Precificação — Aplicando na Prática + Conclusão
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            O preço certo é o que seu negócio precisa
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
          <div className="space-y-[2vmin]">
            <TextReveal delay={0.3}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Se um projeto leva 5 dias:
              </p>
            </TextReveal>

            <TextReveal delay={0.4}>
              <div className="p-[2vmin] bg-white border border-gray-100 rounded-xl shadow-sm">
                <p className="text-gray-600 mb-[1vmin]" style={{ fontSize: 'clamp(11px, 1.5vmin, 17px)' }}>
                  5 dias × R$ 209 =
                </p>
                <p className="font-display font-black text-brand-red" style={{ fontSize: 'clamp(18px, 3.5vmin, 44px)' }}>
                  R$ 1.045
                </p>
                <p className="text-gray-500 mt-[0.5vmin]" style={{ fontSize: 'clamp(11px, 1.4vmin, 16px)' }}>
                  custo mínimo operacional
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.55}>
              <p className="text-gray-600" style={{ fontSize: 'clamp(12px, 1.6vmin, 19px)' }}>
                Agora soma: material + margem de erro + garantia + lucro real.
              </p>
              <p className="text-gray-900 font-semibold mt-[0.5vmin]" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                E aí sim você chega no preço correto.
              </p>
            </TextReveal>
          </div>

          <div className="space-y-[2vmin]">
            <TextReveal delay={0.6}>
              <div className="p-[2vmin] bg-white border border-gray-100 rounded-xl shadow-sm">
                <p className="font-bold text-gray-900 mb-[1.5vmin]" style={{ fontSize: 'clamp(13px, 1.8vmin, 22px)' }}>
                  O conjunto ideal:
                </p>
                {['Saber vender', 'Saber posicionar', 'Saber precificar'].map((item, i) => (
                  <div key={item} className="flex items-center gap-[1.5vmin] mb-[1vmin]">
                    <span
                      className="font-display font-black text-brand-red"
                      style={{ fontSize: 'clamp(12px, 1.8vmin, 22px)', minWidth: '2vmin' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-gray-800" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </TextReveal>

            <TextReveal delay={0.8}>
              <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin]">
                <p className="text-gray-700" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                  Quem não sabe cobrar, trabalha muito… e cresce pouco.
                </p>
                <p className="font-semibold text-gray-900 mt-[0.8vmin]" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                  Quem entende precificação: tem tempo, tem margem e constrói lucro de verdade.
                </p>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
