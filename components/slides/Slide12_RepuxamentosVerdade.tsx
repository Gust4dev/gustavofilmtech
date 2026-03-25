import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

export const Slide12_RepuxamentosVerdade: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare showLogo>
      <div className="absolute top-[-6vmin] left-[-6vmin] w-[44vmin] h-[44vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />

      {/* Logo watermark */}
      <motion.img
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 0.04, x: 0 }}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.3 }}
        src="/images/logoname.webp"
        alt=""
        className="absolute right-0 h-[80%] object-contain pointer-events-none select-none"
      />

      <div className="relative z-10 container mx-auto px-[5vmin] text-center">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Repuxamentos — A Verdade
          </span>
        </TextReveal>

        <TextReveal delay={0.3}>
          <h2
            className="font-display font-black text-gray-900 mt-[3vmin] leading-tight"
            style={{ fontSize: 'clamp(22px, 5vmin, 62px)' }}
          >
            Se você não é detalhista,<br />
            se não respeita processo,<br />
            se faz{' '}
            <span className="text-brand-red">"de qualquer jeito"…</span>
          </h2>
        </TextReveal>

        <TextReveal delay={0.6}>
          <p
            className="font-display font-black text-gray-900 mt-[4vmin]"
            style={{ fontSize: 'clamp(24px, 5.5vmin, 70px)' }}
          >
            Esse mercado não é pra você.
          </p>
        </TextReveal>

        <TextReveal delay={0.8}>
          <div className="w-[10vmin] h-[0.5vmin] bg-brand-red mx-auto mt-[3vmin] rounded-full" />
          <p
            className="text-gray-400 mt-[2vmin]"
            style={{ fontSize: 'clamp(13px, 1.8vmin, 21px)' }}
          >
            Porque no alto nível, cada detalhe importa.
          </p>
        </TextReveal>
      </div>
    </SlideWrapper>
  );
};
