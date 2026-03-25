import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const custosocultos = [
  'Possíveis garantias futuras',
  'Retrabalhos por erro de instalação',
  'Tempo investido',
  'Risco do serviço',
  'Responsabilidade sobre o carro',
];

export const Slide29_PrecificacaoErro: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[42vmin] h-[42vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Precificação — O Erro da Maioria
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Preço não é material. É estratégia.
          </h2>
        </TextReveal>
        <TextReveal delay={0.25}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vmin] mt-[2vmin] mb-[1vmin]">
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
              Muitos acreditam que o valor de um serviço está ligado apenas ao material. E é exatamente aqui que a maioria trava e começa a patinar no mercado.
            </p>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
              Saber precificar é o que determina onde você vai chegar. É o que separa quem vive apertado de quem constrói um negócio sólido.
            </p>
          </div>
        </TextReveal>

        <div className="mt-[2vmin] grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
          <div className="space-y-[2vmin]">
            <TextReveal delay={0.3}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Existe um pensamento comum: "Se o envelopamento custa R$10.000 e o material custa R$5.000, tá ótimo."
              </p>
            </TextReveal>

            <TextReveal delay={0.45}>
              <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin]">
                <p className="text-gray-700 font-semibold" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                  Pode até parecer aceitável… mas essa conta está incompleta.
                </p>
              </div>
            </TextReveal>
          </div>

          <div>
            <TextReveal delay={0.35}>
              <p className="text-gray-600 font-semibold mb-[1.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                O que muitos não enxergam:
              </p>
            </TextReveal>
            <div className="space-y-[1vmin]">
              {custosocultos.map((item, i) => (
                <TextReveal key={item} delay={0.5 + i * 0.1}>
                  <div className="flex items-start gap-[1.5vmin]">
                    <ChevronRight className="text-brand-red flex-shrink-0 mt-[0.2vmin]" style={{ width: '2.5vmin', height: '2.5vmin' }} />
                    <span className="text-gray-800" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                      {item}
                    </span>
                  </div>
                </TextReveal>
              ))}
            </div>
          </div>
        </div>

        <TextReveal delay={1.05}>
          <p className="text-gray-600 italic mt-[2vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 19px)' }}>
            E é por isso que, muitas vezes, quando o carro é finalizado… o lucro já foi embora.
          </p>
        </TextReveal>
      </div>
    </SlideWrapper>
  );
};
