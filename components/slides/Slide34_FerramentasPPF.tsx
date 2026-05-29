import React from 'react';
import { Wind, Scissors, Layers, Droplets, Zap, ChevronsRight } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const ferramentas = [
  { icon: <Wind style={{ width: '2.8vmin', height: '2.8vmin', minWidth: 16 }} />, nome: 'Soprador SGT', uso: 'Secagem de bordas e aderência' },
  { icon: <Scissors style={{ width: '2.8vmin', height: '2.8vmin', minWidth: 16 }} />, nome: 'Cortador de Liner', uso: 'Moldagem e corte do PPF' },
  { icon: <ChevronsRight style={{ width: '2.8vmin', height: '2.8vmin', minWidth: 16 }} />, nome: 'Estilete Olfa 30°', uso: 'Cortes precisos e controlados' },
  { icon: <Layers style={{ width: '2.8vmin', height: '2.8vmin', minWidth: 16 }} />, nome: 'Espátula com Feltro', uso: 'Acabamento sem marcas' },
  { icon: <Droplets style={{ width: '2.8vmin', height: '2.8vmin', minWidth: 16 }} />, nome: 'Solução de Aplicação', uso: 'Posicionamento e deslizamento' },
  { icon: <Zap style={{ width: '2.8vmin', height: '2.8vmin', minWidth: 16 }} />, nome: 'Solução de Secagem', uso: 'Ativação da aderência (Tack)' },
];

export const Slide34_FerramentasPPF: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute bottom-[-8vmin] right-[-6vmin] w-[44vmin] h-[44vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[-4vmin] left-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[92vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Ferramentas para PPF
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            O kit completo do instalador
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] grid grid-cols-2 md:grid-cols-3 gap-[1.5vmin]">
          {ferramentas.map((item, i) => (
            <TextReveal key={item.nome} delay={0.3 + i * 0.1}>
              <div className="flex items-start gap-[1.5vmin] p-[2vmin] bg-white border border-gray-100 rounded-xl shadow-sm hover:border-brand-red/30 hover:shadow-md transition-all duration-300 group">
                <div
                  className="flex-shrink-0 rounded-lg bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors"
                  style={{ width: '5vmin', height: '5vmin', minWidth: 32, minHeight: 32 }}
                >
                  <span className="text-brand-red">{item.icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 leading-tight" style={{ fontSize: 'clamp(11px, 1.7vmin, 20px)' }}>
                    {item.nome}
                  </p>
                  <p className="text-gray-500 mt-[0.3vmin] leading-tight" style={{ fontSize: 'clamp(10px, 1.4vmin, 16px)' }}>
                    {item.uso}
                  </p>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>

        <TextReveal delay={1.0}>
          <p className="text-gray-500 italic mt-[2vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 19px)' }}>
            Cada ferramenta tem um papel. Vamos conhecer cada uma em detalhe.
          </p>
        </TextReveal>
      </div>
    </SlideWrapper>
  );
};
