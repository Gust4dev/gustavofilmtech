import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

export const Slide7_EstriasCausa: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare>
      {/* Decorative accents */}
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[40vmin] h-[40vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[28vmin] h-[28vmin] rounded-full bg-gray-300/40 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Estrias — Causa e Mecanismo
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Por que a estria acontece?
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] space-y-[2vmin]">
          <TextReveal delay={0.35}>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
              A estria no PPF é causada, na maioria das vezes, por uma{' '}
              <span className="font-semibold text-gray-900">fixação precoce do material</span>. Ela acontece quando
              há um estiramento da cola, gerando marcas visuais no filme.
            </p>
          </TextReveal>

          <TextReveal delay={0.5}>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
              Esse problema é mais recorrente em situações de{' '}
              <span className="font-semibold text-gray-900">levantamento do material</span>, tentativas de remoção
              de sujeira ou reposicionamento do PPF ou do envelopamento após parte da peça já estar fixada.
            </p>
          </TextReveal>

          <TextReveal delay={0.65}>
            <div className="border-l-[0.4vmin] border-brand-red pl-[2.5vmin] mt-[1vmin]">
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                A estria ocorre por um{' '}
                <span className="font-semibold text-gray-900">desintegramento da cola</span>: uma área já aderida é
                puxada em direção a uma área ainda não fixada, causando essa deformação no adesivo.
              </p>
            </div>
          </TextReveal>
        </div>
      </div>
    </SlideWrapper>
  );
};
