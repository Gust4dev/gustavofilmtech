import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const IMG_CERTO = '/novas/WhatsApp%20Image%202026-05-28%20at%2019.59.34%20(1).jpeg';
const IMG_ERRADO = '/novas/WhatsApp%20Image%202026-05-28%20at%2019.59.34%20(2).jpeg';

const certoItems = [
  '5 dedos para máxima firmeza e controle',
  '4º dedo no vinco da peça como guia',
  'Estilete em posição de apoio na peça',
  'Movimento direcionado e estável',
];

const erradoItems = [
  'Estilete em pé exige mais força',
  'Perde função de guia e referência',
  'Compromete alinhamento e precisão',
  'Maior risco de falha e dano à superfície',
];

export const Slide34e_EstileteTecnica: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[42vmin] h-[42vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[26vmin] h-[26vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[95vmin]">
        <TextReveal delay={0.1}>
          <span className="text-brand-red font-bold uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}>
            Ferramentas — Estilete Olfa 30°
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2 className="font-display font-black text-gray-900 mt-[1.5vmin]" style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}>
            A pegada que define o corte
          </h2>
        </TextReveal>

        <div className="mt-[2.5vmin] grid grid-cols-1 md:grid-cols-2 gap-[2.5vmin]">
          {/* CERTO */}
          <TextReveal delay={0.3}>
            <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Foto */}
              <div className="overflow-hidden flex-shrink-0" style={{ height: 'clamp(100px, 18vmin, 210px)' }}>
                <img src={IMG_CERTO} alt="Pegada correta do estilete — 5 dedos" className="w-full h-full object-cover object-top" />
              </div>
              {/* Header verde */}
              <div className="px-[2vmin] py-[1.2vmin] flex items-center gap-[1.2vmin]" style={{ background: 'rgba(22, 163, 74, 0.08)', borderBottom: '1px solid rgba(22,163,74,0.2)' }}>
                <CheckCircle2 style={{ width: '2.6vmin', height: '2.6vmin', minWidth: 14, color: '#16a34a', flexShrink: 0 }} />
                <p className="font-black uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 1.4vmin, 16px)', color: '#16a34a' }}>
                  Forma correta
                </p>
              </div>
              {/* Lista */}
              <div className="p-[2vmin] bg-white flex-1 space-y-[0.8vmin]">
                {certoItems.map((item) => (
                  <div key={item} className="flex items-start gap-[1.2vmin]">
                    <div className="flex-shrink-0 rounded-full mt-[0.6vmin]" style={{ width: '0.8vmin', height: '0.8vmin', minWidth: 5, minHeight: 5, background: '#16a34a' }} />
                    <span className="text-gray-800" style={{ fontSize: 'clamp(11px, 1.55vmin, 18px)' }}>{item}</span>
                  </div>
                ))}
                <div className="mt-[1.2vmin] pt-[1.2vmin]" style={{ borderTop: '1px solid rgba(22,163,74,0.2)' }}>
                  <p className="font-bold" style={{ fontSize: 'clamp(10px, 1.4vmin, 16px)', color: '#16a34a' }}>
                    Resultado: cortes limpos, seguros e com padrão profissional.
                  </p>
                </div>
              </div>
            </div>
          </TextReveal>

          {/* ERRADO */}
          <TextReveal delay={0.5}>
            <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Foto */}
              <div className="overflow-hidden flex-shrink-0" style={{ height: 'clamp(100px, 18vmin, 210px)' }}>
                <img src={IMG_ERRADO} alt="Estilete em pé — posição incorreta" className="w-full h-full object-cover object-center" />
              </div>
              {/* Header vermelho */}
              <div className="px-[2vmin] py-[1.2vmin] flex items-center gap-[1.2vmin]" style={{ background: 'rgba(220,38,38,0.06)', borderBottom: '1px solid rgba(220,38,38,0.2)' }}>
                <XCircle className="text-brand-red" style={{ width: '2.6vmin', height: '2.6vmin', minWidth: 14, flexShrink: 0 }} />
                <p className="font-black uppercase tracking-widest text-brand-red" style={{ fontSize: 'clamp(10px, 1.4vmin, 16px)' }}>
                  Não recomendado — Estilete em pé
                </p>
              </div>
              {/* Lista */}
              <div className="p-[2vmin] bg-white flex-1 space-y-[0.8vmin]">
                {erradoItems.map((item) => (
                  <div key={item} className="flex items-start gap-[1.2vmin]">
                    <div className="flex-shrink-0 rounded-full mt-[0.6vmin] bg-brand-red" style={{ width: '0.8vmin', height: '0.8vmin', minWidth: 5, minHeight: 5 }} />
                    <span className="text-gray-700" style={{ fontSize: 'clamp(11px, 1.55vmin, 18px)' }}>{item}</span>
                  </div>
                ))}
                <div className="mt-[1.2vmin] pt-[1.2vmin]" style={{ borderTop: '1px solid rgba(220,38,38,0.2)' }}>
                  <p className="font-bold text-brand-red" style={{ fontSize: 'clamp(10px, 1.4vmin, 16px)' }}>
                    Resultado: cortes irregulares e risco de danos à superfície.
                  </p>
                </div>
              </div>
            </div>
          </TextReveal>
        </div>

        <TextReveal delay={0.9}>
          <p className="text-gray-500 italic mt-[1.5vmin]" style={{ fontSize: 'clamp(10px, 1.4vmin, 16px)' }}>
            Obs: Adapte a pegada ao seu padrão fisiológico — sempre priorizando segurança, controle e precisão durante o corte.
          </p>
        </TextReveal>
      </div>
    </SlideWrapper>
  );
};
