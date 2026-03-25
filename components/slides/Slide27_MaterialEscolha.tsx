import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

export const Slide27_MaterialEscolha: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare>
      <div className="absolute bottom-[-8vmin] right-[-6vmin] w-[44vmin] h-[44vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[-4vmin] left-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-gray-200/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Material — Escolha Certa e Precificação
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Quem define o padrão é você
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] space-y-[2vmin]">
          <TextReveal delay={0.35}>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
              O ponto fundamental é saber escolher o material certo para o carro,{' '}
              <span className="font-semibold text-gray-900">e não baseado na condição do cliente</span>.
            </p>
          </TextReveal>

          <TextReveal delay={0.5}>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
              Quando essa decisão é baseada apenas em preço, o problema vem depois:{' '}
              <span className="font-semibold text-gray-900">retrabalho, insatisfação e prejuízo</span>.
            </p>
          </TextReveal>

          <TextReveal delay={0.65}>
            <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin]">
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Precificação não faz parte da aplicação… faz parte da{' '}
                <span className="font-semibold text-gray-900">venda</span>. Muitos profissionais vendem barato,
                escolhem materiais inferiores — e depois pagam o preço com problemas no serviço.
              </p>
            </div>
          </TextReveal>

          <TextReveal delay={0.8}>
            <div className="p-[2vmin] bg-white border border-gray-100 rounded-xl shadow-sm">
              <p className="font-bold text-gray-900 text-center" style={{ fontSize: 'clamp(14px, 2vmin, 25px)' }}>
                O conjunto ideal:
              </p>
              <div className="flex justify-center gap-[3vmin] mt-[1.5vmin] flex-wrap">
                {['Saber vender', 'Saber posicionar', 'Saber precificar'].map((item) => (
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
        </div>
      </div>
    </SlideWrapper>
  );
};
