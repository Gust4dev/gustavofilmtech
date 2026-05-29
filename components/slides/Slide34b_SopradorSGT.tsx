import React from 'react';
import { Wind, CheckCircle2 } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const IMG = '/novas/WhatsApp%20Image%202026-05-28%20at%2019.59.33.jpeg';

const beneficios = [
  'Seca rapidamente as bordas do PPF',
  'Garante maior aderência do material',
  'Acelera o processo sem comprometer o acabamento',
  'Mais eficiência e segurança durante a aplicação',
];

export const Slide34b_SopradorSGT: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[42vmin] h-[42vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[26vmin] h-[26vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[92vmin]">
        <TextReveal delay={0.1}>
          <span className="text-brand-red font-bold uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}>
            Ferramentas — Soprador de Vento SGT
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2 className="font-display font-black text-gray-900 mt-[1.5vmin]" style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}>
            Bordas secas. Aderência garantida.
          </h2>
        </TextReveal>

        <div className="mt-[2.5vmin] grid gap-[2.5vmin]" style={{ gridTemplateColumns: '1fr clamp(140px, 26vmin, 300px)' }}>
          {/* Coluna esquerda: conteúdo */}
          <div className="space-y-[1.8vmin]">
            <TextReveal delay={0.3}>
              <div className="flex items-start gap-[2vmin] p-[2vmin] bg-white border border-gray-100 rounded-2xl shadow-sm">
                <div className="flex-shrink-0 rounded-xl bg-brand-red/10 flex items-center justify-center" style={{ width: '5vmin', height: '5vmin', minWidth: 36, minHeight: 36 }}>
                  <Wind className="text-brand-red" style={{ width: '2.8vmin', height: '2.8vmin', minWidth: 18 }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-[0.4vmin]" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>Soprador de Vento SGT</p>
                  <p className="text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(11px, 1.6vmin, 19px)' }}>
                    Equipamento desenvolvido para gerar fluxo de ar quente e potente, auxiliando na secagem rápida das bordas.
                  </p>
                </div>
              </div>
            </TextReveal>

            <TextReveal delay={0.4}>
              <p className="text-gray-600 font-semibold" style={{ fontSize: 'clamp(11px, 1.5vmin, 17px)' }}>O que ele entrega:</p>
            </TextReveal>

            <div className="space-y-[1vmin]">
              {beneficios.map((item, i) => (
                <TextReveal key={item} delay={0.5 + i * 0.08}>
                  <div className="flex items-center gap-[1.5vmin] p-[1.2vmin] bg-white border border-gray-100 rounded-lg group hover:border-brand-red/30 transition-all duration-300">
                    <CheckCircle2 className="text-brand-red flex-shrink-0 group-hover:scale-110 transition-transform" style={{ width: '2.4vmin', height: '2.4vmin', minWidth: 14 }} />
                    <span className="text-gray-800" style={{ fontSize: 'clamp(11px, 1.55vmin, 18px)' }}>{item}</span>
                  </div>
                </TextReveal>
              ))}
            </div>

            <TextReveal delay={0.85}>
              <div className="border-l-[0.4vmin] border-brand-red pl-[2vmin]">
                <p className="text-gray-700 italic" style={{ fontSize: 'clamp(11px, 1.6vmin, 18px)' }}>
                  Ideal para aplicações mais ágeis — acelera o processo <span className="font-semibold text-gray-900 not-italic">sem comprometer o acabamento</span>.
                </p>
              </div>
            </TextReveal>
          </div>

          {/* Coluna direita: imagem */}
          <TextReveal delay={0.25}>
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: 'clamp(200px, 48vmin, 520px)' }}>
              <img src={IMG} alt="Soprador de Vento SGT" className="h-full w-full object-cover" />
            </div>
          </TextReveal>
        </div>
      </div>
    </SlideWrapper>
  );
};
