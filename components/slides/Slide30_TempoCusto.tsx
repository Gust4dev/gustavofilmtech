import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const custos = [
  { label: 'Aluguel', valor: 'R$ 2.000' },
  { label: 'Água', valor: 'R$ 200' },
  { label: 'Energia', valor: 'R$ 400' },
  { label: 'Alimentação + transporte', valor: 'R$ 2.000' },
];

export const Slide30_TempoCusto: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare>
      <div className="absolute top-[-6vmin] right-[-6vmin] w-[42vmin] h-[42vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-gray-300/40 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Precificação — Tempo É Custo + Custo Fixo
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Quanto custa o seu dia?
          </h2>
        </TextReveal>
        <TextReveal delay={0.25}>
          <p className="text-gray-700 leading-relaxed mt-[2vmin] mb-[1vmin]" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
            Outro erro grave é ignorar o tempo. Pra alguns, R$10.000 é muito. Pra outros, não paga nem a operação. Uma empresa com estrutura, equipe e padrão elevado tem um custo que precisa ser respeitado. Se não, você trabalha… e no final só "troca figurinha".
          </p>
        </TextReveal>

        <div className="mt-[2vmin] grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
          <div>
            <TextReveal delay={0.3}>
              <p className="text-gray-600 font-semibold mb-[1.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                Exemplo de custo fixo mensal:
              </p>
            </TextReveal>
            <div className="space-y-[1vmin]">
              {custos.map((item, i) => (
                <TextReveal key={item.label} delay={0.4 + i * 0.1}>
                  <div className="flex justify-between items-center p-[1.5vmin] bg-white border border-gray-100 rounded-lg">
                    <span className="text-gray-700" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                      {item.label}
                    </span>
                    <span className="font-semibold text-gray-900" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                      {item.valor}
                    </span>
                  </div>
                </TextReveal>
              ))}
              <TextReveal delay={0.8}>
                <div className="flex justify-between items-center p-[1.5vmin] bg-brand-red rounded-lg shadow-md">
                  <span className="text-white font-bold" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                    Total
                  </span>
                  <span className="text-white font-black" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                    R$ 4.600/mês
                  </span>
                </div>
              </TextReveal>
            </div>
          </div>

          <div className="space-y-[2vmin]">
            <TextReveal delay={0.5}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Se você trabalha{' '}
                <span className="font-semibold text-gray-900">22 dias no mês</span>:
              </p>
            </TextReveal>

            <TextReveal delay={0.65}>
              <div className="p-[2vmin] bg-white border border-brand-red/20 rounded-xl shadow-sm text-center">
                <p className="text-gray-600 mb-[0.5vmin]" style={{ fontSize: 'clamp(11px, 1.5vmin, 17px)' }}>
                  R$ 4.600 ÷ 22 =
                </p>
                <p className="font-display font-black text-brand-red" style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}>
                  R$ 209/dia
                </p>
                <p className="text-gray-500 mt-[0.5vmin]" style={{ fontSize: 'clamp(11px, 1.5vmin, 17px)' }}>
                  só para existir
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.8}>
              <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin]">
                <p className="text-gray-700" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                  Isso sem lucro. Sem crescimento. Sem reinvestimento.
                </p>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
