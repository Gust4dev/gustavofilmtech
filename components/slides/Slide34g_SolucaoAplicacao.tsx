import React from 'react';
import { Droplets } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const IMG_BORRIFADORES = '/images/borrifadores.webp';

export const Slide34g_SolucaoAplicacao: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[42vmin] h-[42vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[26vmin] h-[26vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[92vmin]">
        <TextReveal delay={0.1}>
          <span className="text-brand-red font-bold uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}>
            Ferramentas — Solução de Aplicação
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2 className="font-display font-black text-gray-900 mt-[1.5vmin]" style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}>
            A solução que dá<br />tempo para trabalhar
          </h2>
        </TextReveal>

        <div className="mt-[2.5vmin] grid grid-cols-1 md:grid-cols-2 gap-[2.5vmin]">
          {/* Coluna esquerda: foto dos borrifadores + equipamento */}
          <div className="space-y-[1.8vmin]">
            {/* Foto dos 2 borrifadores */}
            <TextReveal delay={0.25}>
              <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: 'clamp(100px, 22vmin, 240px)' }}>
                <img src={IMG_BORRIFADORES} alt="Borrifador azul 1L para aplicação e preto 500ml para secagem" className="w-full h-full object-cover object-center" />
              </div>
            </TextReveal>

            <TextReveal delay={0.35}>
              <div className="flex items-center gap-[2vmin] p-[1.8vmin] bg-white border border-gray-100 rounded-xl shadow-sm">
                <div className="flex-shrink-0 rounded-xl bg-brand-red/10 flex items-center justify-center" style={{ width: '5vmin', height: '5vmin', minWidth: 34, minHeight: 34 }}>
                  <Droplets className="text-brand-red" style={{ width: '2.6vmin', height: '2.6vmin', minWidth: 16 }} />
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-[0.2vmin]" style={{ fontSize: 'clamp(9px, 1.2vmin, 13px)' }}>Equipamento</p>
                  <p className="font-bold text-gray-900" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                    Borrifador de <span className="text-brand-red">1 litro</span>
                  </p>
                </div>
              </div>
            </TextReveal>

            {/* Receita */}
            <TextReveal delay={0.5}>
              <div className="p-[2vmin] rounded-2xl" style={{ background: 'rgba(220,38,38,0.04)', border: '1px solid rgba(220,38,38,0.2)' }}>
                <p className="font-black text-brand-red uppercase tracking-widest mb-[1.2vmin]" style={{ fontSize: 'clamp(9px, 1.3vmin, 15px)' }}>Composição</p>
                <div className="space-y-[0.8vmin]">
                  <div className="flex items-center justify-between gap-[2vmin]">
                    <span className="text-gray-700" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>Água</span>
                    <span className="font-black text-gray-900 px-[1.5vmin] py-[0.4vmin] bg-white rounded-lg border border-gray-100" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>1 litro</span>
                  </div>
                  <div className="border-t border-dashed" style={{ borderColor: 'rgba(220,38,38,0.2)' }} />
                  <div className="flex items-center justify-between gap-[2vmin]">
                    <span className="text-gray-700" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>V-Floc</span>
                    <span className="font-black text-brand-red px-[1.5vmin] py-[0.4vmin] bg-white rounded-lg border" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)', borderColor: 'rgba(220,38,38,0.25)' }}>5 a 10 gotas</span>
                  </div>
                </div>
              </div>
            </TextReveal>
          </div>

          {/* Coluna direita: função + resultado */}
          <div className="space-y-[2vmin]">
            <TextReveal delay={0.4}>
              <div className="p-[2vmin] bg-white border border-gray-100 rounded-xl shadow-sm">
                <p className="font-bold text-gray-900 mb-[0.8vmin]" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>Para que serve?</p>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                  Utilizada para <span className="font-semibold text-gray-800">posicionamento do material e deslizamento</span> durante a aplicação. Permite trabalhar o PPF com mais tempo e precisão, evitando travamentos.
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.6}>
              <div className="border-l-[0.4vmin] border-brand-red pl-[2vmin]">
                <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                  Esta é a solução de <span className="font-semibold text-gray-900">posicionamento</span> — ela não ativa a aderência. Para isso existe a solução de secagem (próximo slide).
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.8}>
              <div className="p-[1.8vmin] rounded-xl" style={{ background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.2)' }}>
                <p className="font-bold text-brand-red" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>Resultado:</p>
                <p className="text-gray-700 mt-[0.4vmin]" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                  Aplicação mais controlada e melhor posicionamento do PPF.
                </p>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
