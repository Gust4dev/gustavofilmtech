import React from 'react';
import { Droplets, MoveRight, Timer } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const IMG_BORRIFADORES = '/images/borrifadores.webp';

const steps = [
  { step: '01', label: 'Borrifar', desc: 'Aplique sobre o painel antes de posicionar o PPF' },
  { step: '02', label: 'Deslizar', desc: 'Ajuste a posição livremente — o filme escorrega sem aderir' },
  { step: '03', label: 'Reborrifar', desc: 'Use sempre que precisar reposicionar durante o trabalho' },
];

export const Slide34g_SolucaoAplicacao: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showLogo>
      {/* Fundo azulado — diferencia da solução de secagem */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-6vmin] left-[-6vmin] w-[40vmin] h-[40vmin] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute top-[-4vmin] right-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-blue-50/80 blur-2xl" />
      </div>

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[95vmin]">
        <TextReveal delay={0.1}>
          <span className="font-bold uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)', color: '#3b82f6' }}>
            Ferramentas — Solução de Aplicação
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2 className="font-display font-black text-gray-900 mt-[1vmin]" style={{ fontSize: 'clamp(22px, 4.2vmin, 52px)' }}>
            A solução que dá<br />tempo para trabalhar
          </h2>
        </TextReveal>

        <div className="mt-[2.5vmin] grid grid-cols-1 md:grid-cols-3 gap-[2vmin]">
          {/* Coluna 1: foto + receita */}
          <div className="space-y-[1.6vmin]">
            <TextReveal delay={0.25}>
              <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: 'clamp(90px, 16vmin, 180px)' }}>
                <img src={IMG_BORRIFADORES} alt="Borrifador azul 1L" className="w-full h-full object-cover object-center" />
              </div>
            </TextReveal>

            <TextReveal delay={0.35}>
              <div className="rounded-2xl p-[1.8vmin]" style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)' }}>
                <div className="flex items-center gap-[1vmin] mb-[1.2vmin]">
                  <Droplets style={{ width: '2.2vmin', height: '2.2vmin', minWidth: 14, color: '#3b82f6' }} />
                  <p className="font-black uppercase tracking-widest" style={{ fontSize: 'clamp(9px, 1.2vmin, 13px)', color: '#3b82f6' }}>Receita — 1 litro</p>
                </div>
                <div className="space-y-[0.8vmin]">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>Água</span>
                    <span className="font-black text-gray-900 px-[1.2vmin] py-[0.3vmin] bg-white rounded-lg border border-gray-100" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>1 litro</span>
                  </div>
                  <div className="border-t border-dashed" style={{ borderColor: 'rgba(59,130,246,0.25)' }} />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>V-Floc</span>
                    <span className="font-black px-[1.2vmin] py-[0.3vmin] bg-white rounded-lg border" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)', color: '#3b82f6', borderColor: 'rgba(59,130,246,0.3)' }}>5–10 gotas</span>
                  </div>
                </div>
                <div className="mt-[1.2vmin] pt-[1vmin]" style={{ borderTop: '1px solid rgba(59,130,246,0.15)' }}>
                  <div className="flex items-center gap-[0.8vmin]">
                    <Timer style={{ width: '1.8vmin', height: '1.8vmin', minWidth: 12, color: '#3b82f6' }} />
                    <span className="text-gray-600" style={{ fontSize: 'clamp(10px, 1.3vmin, 15px)' }}>Borrifador azul 1 L</span>
                  </div>
                </div>
              </div>
            </TextReveal>
          </div>

          {/* Colunas 2–3: para que serve + passo a passo */}
          <div className="md:col-span-2 flex flex-col justify-between gap-[1.8vmin]">
            <TextReveal delay={0.4}>
              <div className="p-[2vmin] bg-white border border-gray-100 rounded-xl shadow-sm">
                <p className="font-bold text-gray-900 mb-[0.6vmin]" style={{ fontSize: 'clamp(13px, 1.8vmin, 22px)' }}>Para que serve?</p>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(12px, 1.6vmin, 19px)' }}>
                  Permite <span className="font-semibold text-gray-800">posicionar e deslizar o PPF</span> sobre a superfície sem ativar a cola — dando tempo para ajustar antes de fixar.
                </p>
              </div>
            </TextReveal>

            {/* Passo a passo */}
            <div className="space-y-[1.2vmin]">
              {steps.map((s, i) => (
                <TextReveal key={s.step} delay={0.5 + i * 0.12}>
                  <div className="flex items-start gap-[1.8vmin]">
                    <div className="flex-shrink-0 rounded-xl flex items-center justify-center font-black" style={{ width: '4.5vmin', height: '4.5vmin', minWidth: 30, minHeight: 30, background: 'rgba(59,130,246,0.1)', color: '#3b82f6', fontSize: 'clamp(10px, 1.3vmin, 15px)' }}>
                      {s.step}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900" style={{ fontSize: 'clamp(12px, 1.65vmin, 20px)' }}>{s.label}</p>
                      <p className="text-gray-500" style={{ fontSize: 'clamp(11px, 1.45vmin, 17px)' }}>{s.desc}</p>
                    </div>
                    {i < steps.length - 1 && (
                      <MoveRight className="flex-shrink-0 hidden md:block self-center ml-auto opacity-20" style={{ width: '2vmin', minWidth: 12 }} />
                    )}
                  </div>
                </TextReveal>
              ))}
            </div>

            <TextReveal delay={0.9}>
              <div className="p-[1.5vmin] rounded-xl" style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)' }}>
                <p className="font-bold" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)', color: '#3b82f6' }}>
                  Esta solução não ativa a aderência — isso é função da solução de secagem.
                </p>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
