import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const pontos = [
  {
    num: '01',
    titulo: 'Revestir a peça',
    descricao: 'Não basta apenas cobrir a superfície.',
  },
  {
    num: '02',
    titulo: 'Entender se as marcas importam',
    descricao: 'A peça pode até estar revestida, mas a qualidade do acabamento precisa ser analisada.',
  },
  {
    num: '03',
    titulo: 'Avaliar como a peça ficou no final',
    descricao: 'Ela ficou limpa? Ficou uniforme? Ou ficou com estrias, manchas e marcas visíveis?',
  },
];

export const Slide15_MarcasPontos: React.FC = () => {
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
            Marcas — Os 3 Pontos de Avaliação
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            O que avaliar em cada serviço
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] space-y-[2vmin]">
          {pontos.map((item, i) => (
            <TextReveal key={item.num} delay={0.35 + i * 0.18}>
              <div className="flex gap-[2.5vmin] items-start p-[2vmin] bg-white border border-gray-100 rounded-xl shadow-sm hover:border-brand-red/30 hover:shadow-md transition-all duration-300">
                <span
                  className="font-display font-black text-brand-red flex-shrink-0"
                  style={{ fontSize: 'clamp(18px, 3.5vmin, 44px)', lineHeight: 1 }}
                >
                  {item.num}
                </span>
                <div>
                  <p className="font-bold text-gray-900" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                    {item.titulo}
                  </p>
                  <p className="text-gray-600 mt-[0.5vmin]" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                    {item.descricao}
                  </p>
                </div>
              </div>
            </TextReveal>
          ))}

          <TextReveal delay={0.9}>
            <p className="text-gray-600 italic" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
              Esse é o ponto que separa o aplicador comum do profissional de verdade.
            </p>
          </TextReveal>
        </div>
      </div>
    </SlideWrapper>
  );
};
