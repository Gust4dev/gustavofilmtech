import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const ferramentasEnv = [
  { nome: 'Espátula com feltro', uso: 'Evita riscos e garante acabamento limpo' },
  { nome: 'Soprador térmico', uso: 'Ativação do material e conformação nas curvas' },
  { nome: 'Estilete 30°', uso: 'Precisão nos cortes e acabamento final' },
];

const evolucao = ['Técnica', 'Mentalidade', 'Ferramentas'];

export const Slide35_FerramentasConclusao: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare>
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[44vmin] h-[44vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      {/* Logo watermark */}
      <motion.img
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 0.04, x: 0 }}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.3 }}
        src="/images/logoname.png"
        alt=""
        className="absolute right-0 h-[80%] object-contain pointer-events-none select-none"
      />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Ferramentas Envelopamento + Conclusão Final
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Quem quer crescer precisa evoluir em tudo
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
          <div>
            <TextReveal delay={0.3}>
              <p className="text-gray-600 font-semibold mb-[1.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                No envelopamento:
              </p>
            </TextReveal>
            <div className="space-y-[1.5vmin]">
              {ferramentasEnv.map((item, i) => (
                <TextReveal key={item.nome} delay={0.4 + i * 0.15}>
                  <div className="p-[1.8vmin] bg-white border border-gray-100 rounded-lg shadow-sm hover:border-brand-red/30 transition-all duration-300">
                    <p className="font-bold text-gray-900" style={{ fontSize: 'clamp(12px, 1.8vmin, 21px)' }}>
                      {item.nome}
                    </p>
                    <p className="text-gray-600 mt-[0.4vmin]" style={{ fontSize: 'clamp(11px, 1.5vmin, 17px)' }}>
                      {item.uso}
                    </p>
                  </div>
                </TextReveal>
              ))}
            </div>
          </div>

          <div className="space-y-[2vmin]">
            <TextReveal delay={0.5}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Você pode até começar simples…{' '}
                <span className="font-semibold text-gray-900">mas não pode permanecer simples</span>.
              </p>
            </TextReveal>

            <TextReveal delay={0.65}>
              <div className="p-[2vmin] bg-white border border-gray-100 rounded-xl shadow-sm">
                <p className="text-gray-600 font-semibold mb-[1.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                  Evoluir em:
                </p>
                <div className="flex gap-[1.5vmin] flex-wrap">
                  {evolucao.map((item) => (
                    <span
                      key={item}
                      className="px-[2vmin] py-[0.8vmin] bg-brand-red/10 text-brand-red font-semibold rounded-full"
                      style={{ fontSize: 'clamp(11px, 1.6vmin, 19px)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </TextReveal>

            <TextReveal delay={0.85}>
              <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin]">
                <p className="font-bold text-gray-900" style={{ fontSize: 'clamp(13px, 2vmin, 24px)' }}>
                  O nível do seu material acompanha o nível do seu resultado.
                </p>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
