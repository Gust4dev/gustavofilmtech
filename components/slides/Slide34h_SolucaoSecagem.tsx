import React from 'react';
import { Zap, AlertTriangle } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const IMG_BORRIFADORES = '/images/borrifadores.webp';

const usos = [
  { area: 'Bordas', desc: 'Envoltas e vincos onde a cola precisa aderir com força' },
  { area: 'Cantos', desc: 'Fixação definitiva após o posicionamento final' },
  { area: 'Acabamento', desc: 'Selagem das extremidades para evitar descolamento' },
];

export const Slide34h_SolucaoSecagem: React.FC = () => {
  return (
    <SlideWrapper className="text-white" showLogo>
      {/* Fundo escuro — visual de "finalização e fixação" */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vmin] h-[60vmin] rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[40vmin] h-[40vmin] rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[95vmin]">
        <TextReveal delay={0.1}>
          <span className="text-brand-red font-bold uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}>
            Ferramentas — Solução de Secagem (Tack)
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2 className="font-display font-black text-white mt-[1vmin]" style={{ fontSize: 'clamp(22px, 4.2vmin, 52px)' }}>
            Ativar a aderência.<br />Fechar o trabalho.
          </h2>
        </TextReveal>

        <div className="mt-[2.5vmin] grid grid-cols-1 md:grid-cols-2 gap-[2.5vmin]">
          {/* Esquerda: receita + foto em destaque */}
          <TextReveal delay={0.3}>
            <div className="rounded-2xl overflow-hidden border border-white/10 flex flex-col" style={{ background: 'rgba(255,255,255,0.04)' }}>
              {/* Header receita */}
              <div className="px-[2.5vmin] py-[2vmin]" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-[1.2vmin] mb-[1.5vmin]">
                  <Zap style={{ width: '2.4vmin', height: '2.4vmin', minWidth: 14, color: '#ef4444' }} />
                  <p className="font-black uppercase tracking-widest text-brand-red" style={{ fontSize: 'clamp(9px, 1.3vmin, 14px)' }}>Composição — Tack / 500 ml</p>
                </div>
                {/* Barra visual de proporção */}
                <div className="flex rounded-lg overflow-hidden mb-[1.2vmin]" style={{ height: 'clamp(20px, 3vmin, 36px)' }}>
                  <div className="flex items-center justify-center font-black text-white" style={{ width: '80%', background: '#1e293b', fontSize: 'clamp(10px, 1.4vmin, 16px)' }}>
                    Água — 400 ml
                  </div>
                  <div className="flex items-center justify-center font-black text-white" style={{ width: '20%', background: '#ef4444', fontSize: 'clamp(10px, 1.4vmin, 16px)' }}>
                    20%
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50" style={{ fontSize: 'clamp(11px, 1.4vmin, 16px)' }}>Álcool isopropílico</span>
                  <span className="font-black text-brand-red" style={{ fontSize: 'clamp(13px, 1.8vmin, 22px)' }}>100 ml</span>
                </div>
              </div>

              {/* Foto */}
              <div className="flex-1 overflow-hidden" style={{ minHeight: 'clamp(70px, 12vmin, 140px)' }}>
                <img src={IMG_BORRIFADORES} alt="Borrifador preto 500ml para solução tack" className="w-full h-full object-cover object-center opacity-80" />
              </div>

              <div className="px-[2vmin] py-[1.2vmin]" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-white/50 text-center" style={{ fontSize: 'clamp(10px, 1.3vmin, 14px)' }}>
                  Borrifador preto — <span className="text-white font-semibold">500 ml</span>
                </p>
              </div>
            </div>
          </TextReveal>

          {/* Direita: onde usar + alerta */}
          <div className="flex flex-col gap-[1.8vmin]">
            <TextReveal delay={0.4}>
              <p className="text-white/70 leading-relaxed" style={{ fontSize: 'clamp(12px, 1.65vmin, 20px)' }}>
                Usada para <span className="text-white font-semibold">ativar a cola do PPF</span> em pontos estratégicos — é ela que garante a fixação definitiva do material.
              </p>
            </TextReveal>

            <div className="space-y-[1.2vmin]">
              {usos.map((u, i) => (
                <TextReveal key={u.area} delay={0.5 + i * 0.12}>
                  <div className="flex items-start gap-[1.5vmin] p-[1.5vmin] rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="flex-shrink-0 rounded-lg flex items-center justify-center bg-brand-red" style={{ width: '4vmin', height: '4vmin', minWidth: 26, minHeight: 26 }}>
                      <span className="font-black text-white" style={{ fontSize: 'clamp(9px, 1.2vmin, 14px)' }}>0{i + 1}</span>
                    </div>
                    <div>
                      <p className="font-bold text-white" style={{ fontSize: 'clamp(12px, 1.6vmin, 20px)' }}>{u.area}</p>
                      <p className="text-white/50" style={{ fontSize: 'clamp(11px, 1.4vmin, 17px)' }}>{u.desc}</p>
                    </div>
                  </div>
                </TextReveal>
              ))}
            </div>

            <TextReveal delay={0.9}>
              <div className="flex items-start gap-[1.2vmin] p-[1.5vmin] rounded-xl" style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)' }}>
                <AlertTriangle style={{ width: '2.2vmin', height: '2.2vmin', minWidth: 14, color: '#fbbf24', flexShrink: 0, marginTop: '0.2vmin' }} />
                <p className="text-white/70" style={{ fontSize: 'clamp(11px, 1.4vmin, 17px)' }}>
                  Ajuste as proporções conforme o PPF, o clima e o seu método de instalação.
                </p>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
