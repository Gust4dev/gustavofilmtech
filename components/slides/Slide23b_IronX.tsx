import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const IMG_IRON_X = '/novas/WhatsApp%20Image%202026-05-28%20at%2019.59.35%20(2).jpeg';

const beneficiosPPF = [
  'Remove contaminações invisíveis presas no filme',
  'Evita manchas e oxidação por partículas metálicas',
  'Mantém a transparência e o brilho do PPF',
  'Prepara a superfície para manutenção ou reaplicações',
];

export const Slide23b_IronX: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[44vmin] h-[44vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[92vmin]">
        <TextReveal delay={0.1}>
          <span className="text-brand-red font-bold uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}>
            Limpeza — Iron X CarPro
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2 className="font-display font-black text-gray-900 mt-[1.5vmin]" style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}>
            O inimigo invisível do PPF
          </h2>
        </TextReveal>

        <div className="mt-[2.5vmin] grid grid-cols-1 md:grid-cols-2 gap-[2.5vmin]">
          {/* Coluna esquerda: foto + descrição + alerta */}
          <div className="space-y-[1.8vmin]">
            {/* Foto Iron X em uso */}
            <TextReveal delay={0.25}>
              <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: 'clamp(100px, 20vmin, 220px)' }}>
                <img src={IMG_IRON_X} alt="Iron X CarPro sendo aplicado próximo à roda do carro" className="w-full h-full object-cover object-center" />
              </div>
            </TextReveal>

            <TextReveal delay={0.35}>
              <div className="p-[1.8vmin] bg-white border border-gray-100 rounded-xl shadow-sm">
                <p className="font-bold text-gray-900 mb-[0.6vmin]" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>Iron X — CarPro</p>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(11px, 1.6vmin, 19px)' }}>
                  Descontaminante ferroso de alta performance. Remove partículas metálicas impregnadas:{' '}
                  <span className="font-semibold text-gray-800">pó de freio, fuligem e contaminações industriais.</span>
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.55}>
              <div className="flex items-start gap-[1.2vmin] p-[1.5vmin] rounded-xl border" style={{ background: 'rgba(220,38,38,0.04)', borderColor: 'rgba(220,38,38,0.25)' }}>
                <AlertTriangle className="text-brand-red flex-shrink-0 mt-[0.2vmin]" style={{ width: '2.4vmin', height: '2.4vmin', minWidth: 14 }} />
                <div>
                  <p className="font-bold text-brand-red mb-[0.2vmin]" style={{ fontSize: 'clamp(10px, 1.4vmin, 16px)' }}>Uso com cautela</p>
                  <p className="text-gray-700" style={{ fontSize: 'clamp(10px, 1.4vmin, 16px)' }}>Sempre seguido de enxágue adequado. Não deixar agir por tempo excessivo.</p>
                </div>
              </div>
            </TextReveal>
          </div>

          {/* Coluna direita: benefícios no PPF + resultado */}
          <div>
            <TextReveal delay={0.4}>
              <p className="text-gray-600 font-semibold mb-[1.2vmin]" style={{ fontSize: 'clamp(11px, 1.5vmin, 17px)' }}>
                No contexto do PPF:
              </p>
            </TextReveal>

            <div className="space-y-[1vmin]">
              {beneficiosPPF.map((item, i) => (
                <TextReveal key={item} delay={0.5 + i * 0.1}>
                  <div className="flex items-start gap-[1.5vmin] p-[1.2vmin] bg-white border border-gray-100 rounded-lg group hover:border-brand-red/30 transition-all duration-300">
                    <ShieldCheck className="text-brand-red flex-shrink-0 mt-[0.1vmin] group-hover:scale-110 transition-transform" style={{ width: '2.4vmin', height: '2.4vmin', minWidth: 13 }} />
                    <span className="text-gray-800" style={{ fontSize: 'clamp(11px, 1.55vmin, 18px)' }}>{item}</span>
                  </div>
                </TextReveal>
              ))}
            </div>

            <TextReveal delay={1.0}>
              <div className="mt-[1.5vmin] border-l-[0.4vmin] border-brand-red pl-[2vmin]">
                <p className="text-gray-700 italic" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                  Mesmo sendo uma proteção, o PPF ainda <span className="font-semibold text-gray-900 not-italic">sofre contaminação externa</span>. Sem essa limpeza, o material perde estética e desempenho.
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={1.1}>
              <p className="text-brand-red font-bold mt-[1.2vmin]" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                Resultado: superfície limpa, livre de contaminantes e com máximo desempenho do PPF.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
