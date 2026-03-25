import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

const beneficios = ['Mais precisão', 'Mais velocidade', 'Mais segurança na aplicação', 'Menos risco de erro'];

export const Slide33_FerramentasMentalidade: React.FC = () => {
  return (
    <SlideWrapper className="bg-white text-black" showFlare>
      <div className="absolute top-[-8vmin] right-[-8vmin] w-[42vmin] h-[42vmin] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-4vmin] left-[-4vmin] w-[26vmin] h-[26vmin] rounded-full bg-gray-300/40 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-[5vmin] h-full flex flex-col justify-center max-w-[90vmin]">
        <TextReveal delay={0.1}>
          <span
            className="text-brand-red font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(10px, 1.5vmin, 16px)' }}
          >
            Ferramentas — Mentalidade
          </span>
        </TextReveal>

        <TextReveal delay={0.2}>
          <h2
            className="font-display font-black text-gray-900 mt-[1.5vmin]"
            style={{ fontSize: 'clamp(22px, 4.5vmin, 56px)' }}
          >
            Os materiais dizem quem você é
          </h2>
        </TextReveal>

        <div className="mt-[3vmin] grid grid-cols-1 md:grid-cols-2 gap-[3vmin]">
          <div className="space-y-[2vmin]">
            <TextReveal delay={0.3}>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                Não existe profissional de alto nível usando ferramenta ruim. Pode até parecer economia no começo…
                mas no longo prazo,{' '}
                <span className="font-semibold text-gray-900">isso define seu limite</span>.
              </p>
            </TextReveal>

            <TextReveal delay={0.45}>
              <div className="space-y-[0.8vmin]">
                {[
                  'Ferramenta ruim → acabamento ruim',
                  'Acabamento ruim → retrabalho',
                  'Retrabalho → tira seu lucro',
                ].map((item, i) => (
                  <div key={item} className="flex items-center gap-[1.5vmin]">
                    <div className="w-[0.5vmin] h-[0.5vmin] rounded-full bg-brand-red flex-shrink-0" />
                    <span className="text-gray-700" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </TextReveal>

            <TextReveal delay={0.6}>
              <p className="text-brand-red font-bold" style={{ fontSize: 'clamp(13px, 1.9vmin, 22px)' }}>
                No final, o barato sai caro.
              </p>
            </TextReveal>
          </div>

          <div>
            <TextReveal delay={0.45}>
              <p className="text-gray-600 font-semibold mb-[1.5vmin]" style={{ fontSize: 'clamp(12px, 1.6vmin, 18px)' }}>
                Ferramenta boa te dá:
              </p>
            </TextReveal>
            <div className="space-y-[1vmin]">
              {beneficios.map((item, i) => (
                <TextReveal key={item} delay={0.55 + i * 0.1}>
                  <div className="flex items-center gap-[2vmin] p-[1.5vmin] bg-white border border-gray-100 rounded-lg group hover:border-brand-red/30 transition-all duration-300">
                    <CheckCircle2
                      className="text-brand-red flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ width: '2.8vmin', height: '2.8vmin' }}
                    />
                    <span className="text-gray-800 font-medium" style={{ fontSize: 'clamp(12px, 1.7vmin, 20px)' }}>
                      {item}
                    </span>
                  </div>
                </TextReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
