import React from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const passos = [
  { num: '01', titulo: 'Aplique o produto', desc: 'Aplique o removedor de cola na área com resíduo de adesivo.' },
  { num: '02', titulo: 'Cubra com saco de lixo', desc: 'Cubra a área com um saco de lixo para evitar a secagem — o produto possui solvente e evapora rápido.' },
  { num: '03', titulo: 'Aguarde ~10 minutos', desc: 'O tempo de espera ajuda na penetração do produto na cola, facilitando a remoção.' },
  { num: '04', titulo: 'Remova com espátula', desc: 'Raspe o resíduo com espátula/raspadeira após o tempo de ação.' },
];

export const Slide24b_RemocaoCola: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[44vmin] h-[44vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[92vmin]">
        <TextReveal delay={0.1}>
          <span className="text-brand-red font-bold uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}>
            Limpeza — Remoção de Cola
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2 className="font-display font-black text-gray-900 mt-[1.5vmin]" style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}>
            A técnica que salva<br />o acabamento
          </h2>
        </TextReveal>

        <div className="mt-[2.5vmin] grid grid-cols-1 md:grid-cols-2 gap-[2.5vmin]">
          {/* Coluna esquerda: passo a passo */}
          <div className="space-y-[1.2vmin]">
            {passos.map((passo, i) => (
              <TextReveal key={passo.num} delay={0.3 + i * 0.12}>
                <div className="flex items-start gap-[2vmin] p-[1.5vmin] bg-white border border-gray-100 rounded-xl shadow-sm hover:border-brand-red/20 transition-all duration-300 group">
                  <div
                    className="font-display font-black text-brand-red flex-shrink-0 leading-none"
                    style={{ fontSize: 'clamp(16px, 3vmin, 36px)', minWidth: 28 }}
                  >
                    {passo.num}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>{passo.titulo}</p>
                    <p className="text-gray-600 mt-[0.3vmin] leading-relaxed" style={{ fontSize: 'clamp(11px, 1.5vmin, 17px)' }}>{passo.desc}</p>
                  </div>
                </div>
              </TextReveal>
            ))}
          </div>

          {/* Coluna direita: destaque tempo + cuidado + resultado */}
          <div className="space-y-[2vmin]">
            <TextReveal delay={0.45}>
              <div className="p-[2vmin] rounded-2xl border" style={{ background: 'rgba(220,38,38,0.04)', borderColor: 'rgba(220,38,38,0.15)' }}>
                <div className="flex items-center gap-[1.5vmin] mb-[1vmin]">
                  <Clock className="text-brand-red flex-shrink-0" style={{ width: '2.8vmin', height: '2.8vmin', minWidth: 18 }} />
                  <p className="font-bold text-gray-900" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>Por que usar o saco de lixo?</p>
                </div>
                <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                  O produto possui solvente e <span className="font-semibold text-gray-900">seca rapidamente</span>. O saco cria uma barreira que mantém o produto ativo e melhora a penetração na cola.
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.65}>
              <div className="flex items-start gap-[1.5vmin] p-[1.8vmin] rounded-xl border" style={{ background: 'rgba(220,38,38,0.05)', borderColor: 'rgba(220,38,38,0.3)' }}>
                <AlertTriangle className="text-brand-red flex-shrink-0 mt-[0.2vmin]" style={{ width: '2.8vmin', height: '2.8vmin', minWidth: 16 }} />
                <div>
                  <p className="font-bold text-brand-red mb-[0.4vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 19px)' }}>Cuidados</p>
                  <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(11px, 1.5vmin, 17px)' }}>
                    Evite aplicar o produto em <span className="font-semibold text-gray-900">peças de alumínio ou plásticos pintados</span>, pois pode causar manchas no veículo.
                  </p>
                </div>
              </div>
            </TextReveal>

            <TextReveal delay={0.85}>
              <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin]">
                <p className="font-bold text-gray-900" style={{ fontSize: 'clamp(13px, 2vmin, 24px)' }}>
                  Resíduo de cola removido.<br />Superfície pronta para o próximo passo.
                </p>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
