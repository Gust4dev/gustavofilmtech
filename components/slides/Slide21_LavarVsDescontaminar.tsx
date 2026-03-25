import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const locaisOcultos = ['Borrachas', 'Frisos', 'Emblemas', 'Cantos ocultos', 'Áreas de acabamento'];

export const Slide21_LavarVsDescontaminar: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare>
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[42vmin] h-[42vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Limpeza — Lavar vs. Descontaminar + Desmontagem
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            A diferença que muda tudo
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
          <div className="space-y-[2vmin]">
            <TextReveal delay={0.3}>
              <div className="p-[2vmin] bg-white border border-gray-100 rounded-xl shadow-sm">
                <p className="font-bold text-gray-900 mb-[1vmin]" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                  Lavar
                </p>
                <p className="text-gray-600" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                  Remove a sujeira superficial.
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.45}>
              <div className="p-[2vmin] bg-white border border-brand-red/20 rounded-xl shadow-sm">
                <p className="font-bold text-gray-900 mb-[1vmin]" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                  Descontaminar
                </p>
                <p className="text-gray-600" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                  Prepara a superfície de forma técnica para receber o material com{' '}
                  <span className="font-semibold text-gray-800">máxima aderência, segurança e acabamento</span>.
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.6}>
              <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin]">
                <p className="text-gray-700" style={{ fontSize: 'clamp(13px, 1.8vmin, 21px)' }}>
                  O cliente permite a desmontagem? Se não, ele entende e aceita o risco no acabamento final?{' '}
                  <span className="font-semibold text-gray-900">Esse alinhamento precisa ser feito antes de qualquer serviço.</span>
                </p>
              </div>
            </TextReveal>
          </div>

          <div>
            <TextReveal delay={0.35}>
              <p className="text-gray-600 font-semibold mb-[1.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                Sujeira acumulada em:
              </p>
            </TextReveal>
            <div className="space-y-[1vmin]">
              {locaisOcultos.map((item, i) => (
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
