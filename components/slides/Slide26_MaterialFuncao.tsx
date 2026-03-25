import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

export const Slide26_MaterialFuncao: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare>
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[40vmin] h-[40vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[26vmin] h-[26vmin] rounded-full bg-gray-300/40 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Material — O Que Ele Faz (e o Que Não Faz)
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Material não faz milagre
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] space-y-[2.5vmin]">
          <TextReveal delay={0.35}>
            <div className="p-[2.5vmin] bg-white border border-gray-100 rounded-xl shadow-sm">
              <p className="font-bold text-brand-red mb-[1vmin]" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                O material é parte essencial do processo…
              </p>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.8vmin, 21px)' }}>
                Mas nenhum PPF ou película corrige{' '}
                <span className="font-semibold text-gray-900">erro de preparo ou falha de execução</span>.
              </p>
            </div>
          </TextReveal>

          <TextReveal delay={0.5}>
            <div className="space-y-[1.5vmin]">
              <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin]">
                <p className="text-gray-700" style={{ fontSize: 'clamp(13px, 1.8vmin, 21px)' }}>
                  Se a superfície não estiver bem limpa, ele não vai aderir corretamente.
                </p>
              </div>
              <div className="border-l-[0.4vmin] border-gray-300 pl-[2.5vmin]">
                <p className="text-gray-700" style={{ fontSize: 'clamp(13px, 1.8vmin, 21px)' }}>
                  Se for tracionado além do limite, pode desplacar ou repuxar.
                </p>
              </div>
              <div className="border-l-[0.4vmin] border-gray-300 pl-[2.5vmin]">
                <p className="text-gray-700" style={{ fontSize: 'clamp(13px, 1.8vmin, 21px)' }}>
                  Se a aplicação for mal feita, o resultado final sempre será comprometido.
                </p>
              </div>
            </div>
          </TextReveal>

          <TextReveal delay={0.7}>
            <div className="p-[2vmin] bg-gray-50 border border-gray-100 rounded-xl">
              <p className="text-gray-900 font-bold text-center" style={{ fontSize: 'clamp(14px, 2vmin, 25px)' }}>
                Material, preparo e mão de obra caminham juntos.
              </p>
              <p className="text-gray-500 text-center mt-[1vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 19px)' }}>
                Não existe excelência isolada.
              </p>
            </div>
          </TextReveal>
        </div>
      </div>
    </SlideWrapper>
  );
};
