import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const consequencias = [
  'Constrangimento com o cliente',
  'Retrabalho',
  'Desperdício de material',
  'Perda de credibilidade no serviço',
];

export const Slide16_MarcasConsequencias: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute top-[-8vmin] left-[-6vmin] w-[42vmin] h-[42vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] right-[-4vmin] w-[30vmin] h-[30vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Marcas — Consequências e Conclusão
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Marcas comprometem tudo
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
          <div className="space-y-[2vmin]">
            <TextReveal delay={0.3}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Muitas vezes a peça até está protegida, mas com{' '}
                <span className="font-semibold text-gray-900">marcas visuais que comprometem totalmente o resultado</span>.
              </p>
            </TextReveal>

            <TextReveal delay={0.45}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Há clientes que não entendem o processo técnico — eles enxergam apenas o acabamento final e{' '}
                <span className="font-semibold text-gray-900">querem perfeição</span>.
              </p>
            </TextReveal>
          </div>

          <div>
            <TextReveal delay={0.35}>
              <p className="text-gray-600 font-semibold mb-[1.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                Isso evita:
              </p>
            </TextReveal>
            <div className="space-y-[1vmin]">
              {consequencias.map((item, i) => (
                <TextReveal key={item} delay={0.5 + i * 0.1}>
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

        <TextReveal delay={0.95}>
          <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin] mt-[2.5vmin]">
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.8vmin, 21px)' }}>
              No fim, não se trata apenas de aplicar. Se trata de{' '}
              <span className="font-semibold text-gray-900">
                entregar uma peça protegida, limpa e com acabamento de alto nível
              </span>.
            </p>
          </div>
        </TextReveal>
      </div>
    </SlideWrapper>
  );
};
