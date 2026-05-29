import React from 'react';
import { ChevronRight, AlertTriangle } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const IMG = '/novas/WhatsApp%20Image%202026-05-28%20at%2019.59.35%20(1).jpeg';

const regioes = [
  'Entre coluna e paralama',
  'Entradas de portas',
  'Cantos e áreas de difícil acesso',
  'Detalhes sensíveis da peça',
];

export const Slide34f_LaminaCurta: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute bottom-[-8vmin] right-[-6vmin] w-[44vmin] h-[44vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[-4vmin] left-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[92vmin]">
        <TextReveal delay={0.1}>
          <span className="text-brand-red font-bold uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}>
            Ferramentas — Lâmina Curta / Ponta do Estilete
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2 className="font-display font-black text-gray-900 mt-[1.5vmin]" style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}>
            Quando menos lâmina<br />é mais precisão
          </h2>
        </TextReveal>

        <div className="mt-[2.5vmin] grid gap-[2.5vmin]" style={{ gridTemplateColumns: '1fr clamp(140px, 26vmin, 300px)' }}>
          {/* Coluna esquerda: conteúdo */}
          <div className="space-y-[1.8vmin]">
            <TextReveal delay={0.3}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                Indicada para <span className="font-semibold text-gray-900">cortes mais delicados e específicos</span>, onde não é possível trabalhar com a lâmina totalmente exposta.
              </p>
            </TextReveal>

            <TextReveal delay={0.38}>
              <p className="text-gray-600 font-semibold" style={{ fontSize: 'clamp(11px, 1.5vmin, 17px)' }}>Aplicar principalmente em:</p>
            </TextReveal>

            <div className="space-y-[0.8vmin]">
              {regioes.map((item, i) => (
                <TextReveal key={item} delay={0.45 + i * 0.08}>
                  <div className="flex items-center gap-[1.2vmin]">
                    <ChevronRight className="text-brand-red flex-shrink-0" style={{ width: '2.2vmin', height: '2.2vmin', minWidth: 13 }} />
                    <span className="text-gray-800 font-medium" style={{ fontSize: 'clamp(12px, 1.6vmin, 19px)' }}>{item}</span>
                  </div>
                </TextReveal>
              ))}
            </div>

            <TextReveal delay={0.8}>
              <div className="p-[1.5vmin] bg-white border border-gray-100 rounded-xl shadow-sm">
                <p className="font-bold text-gray-900 mb-[0.4vmin]" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>O que a ponta oferece</p>
                <p className="text-gray-600" style={{ fontSize: 'clamp(11px, 1.55vmin, 18px)' }}>
                  Reduz o risco de danos, proporcionando <span className="font-semibold text-gray-800">mais controle e precisão em locais críticos</span>.
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.95}>
              <div className="flex items-start gap-[1.2vmin] p-[1.5vmin] rounded-xl border" style={{ background: 'rgba(220,38,38,0.04)', borderColor: 'rgba(220,38,38,0.25)' }}>
                <AlertTriangle className="text-brand-red flex-shrink-0 mt-[0.2vmin]" style={{ width: '2.4vmin', height: '2.4vmin', minWidth: 14 }} />
                <p className="text-gray-700" style={{ fontSize: 'clamp(11px, 1.45vmin, 17px)' }}>
                  <span className="font-bold text-brand-red">Não usar</span> para cortes longos ou acabamentos finais — compromete o alinhamento e a qualidade do corte.
                </p>
              </div>
            </TextReveal>
          </div>

          {/* Coluna direita: foto real em contexto no carro */}
          <TextReveal delay={0.25}>
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: 'clamp(200px, 48vmin, 520px)' }}>
              <img src={IMG} alt="Lâmina curta sendo usada no teto do carro" className="h-full w-full object-cover object-center" />
            </div>
          </TextReveal>
        </div>
      </div>
    </SlideWrapper>
  );
};
