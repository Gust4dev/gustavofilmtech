import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const etapas = ['Lavagem', 'Descontaminação', 'Separação correta dos materiais utilizados'];

export const Slide18_FundamentosInicio: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare>
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[40vmin] h-[40vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[26vmin] h-[26vmin] rounded-full bg-gray-300/40 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Fundamentos — Antes de Começar
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            A aplicação começa antes do material
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] space-y-[2vmin]">
          <TextReveal delay={0.35}>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
              A aplicação não começa quando o material toca no carro. Ela começa muito antes, na forma como o
              profissional{' '}
              <span className="font-semibold text-gray-900">observa, prepara e entende cada etapa do processo</span>.
            </p>
          </TextReveal>

          <TextReveal delay={0.5}>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
              O primeiro passo é observar o veículo: analisar a pintura, identificar imperfeições, entender a
              necessidade de desmontagem e visualizar os pontos críticos.
            </p>
          </TextReveal>

          <TextReveal delay={0.65}>
            <div>
              <p className="text-gray-600 font-semibold mb-[1.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                Depois, vêm etapas indispensáveis:
              </p>
              <div className="space-y-[1vmin]">
                {etapas.map((item, i) => (
                  <div key={item} className="flex items-center gap-[1.5vmin]">
                    <ChevronRight className="text-brand-red flex-shrink-0" style={{ width: '2.5vmin', height: '2.5vmin' }} />
                    <span className="text-gray-800 font-medium" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TextReveal>

          <TextReveal delay={0.85}>
            <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin]">
              <p className="text-gray-700 font-semibold" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Tudo isso faz parte da aplicação.
              </p>
            </div>
          </TextReveal>
        </div>
      </div>
    </SlideWrapper>
  );
};
