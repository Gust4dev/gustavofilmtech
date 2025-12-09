import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';

export const Slide9_SalesMachine: React.FC = () => {
  return (
    <SlideWrapper className="bg-gray-100 text-black overflow-hidden">
      <div className="w-full h-full flex flex-col md:grid md:grid-cols-2">
        
        {/* Left Column: Content */}
        <div className="h-full flex flex-col justify-center px-8 md:px-24 py-12 relative z-10">
            {/* Decorative Background Number */}
            <div className="absolute top-0 left-0 text-[15rem] leading-none font-bold text-black/5 select-none pointer-events-none -translate-x-1/4 -translate-y-1/4">
                350
            </div>

            <TextReveal>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-1 bg-brand-red"></div>
                    <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                        A Máquina de Vendas
                    </span>
                </div>
            </TextReveal>

            <TextReveal delay={0.1}>
                <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tighter mb-8 text-black">
                    350 <span className="text-brand-red">.</span>
                    <span className="block text-xl md:text-2xl font-light tracking-widest text-gray-500 mt-2 uppercase">
                        Vendedores Ativos
                    </span>
                </h2>
            </TextReveal>

            <TextReveal delay={0.2}>
                <p className="text-lg md:text-2xl font-light text-gray-600 leading-relaxed mb-12 max-w-lg">
                    Não é apenas um curso. É um <strong className="text-black font-bold">exército</strong> ofertando FilmTech todos os dias. 
                    Transformamos demanda reprimida em resultado diário.
                </p>
            </TextReveal>

            <div className="grid grid-cols-1 gap-8">
                <TextReveal delay={0.3}>
                    <div className="border-l-2 border-brand-red/20 pl-6">
                        <h5 className="text-xl font-bold text-black mb-2">Uni Auto + Educação</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Integração direta com a base de alunos. Cada aluno se torna um potencial franqueado e evangelista da marca.
                        </p>
                    </div>
                </TextReveal>
                
                <TextReveal delay={0.4}>
                     <div className="border-l-2 border-brand-red/20 pl-6">
                        <h5 className="text-xl font-bold text-black mb-2">Cultura de Alta Performance</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">
                             O comercial não para. Metas diárias, gestão intensiva e foco total na expansão do ecossistema.
                        </p>
                    </div>
                </TextReveal>
            </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-full w-full overflow-hidden hidden md:block">
            {/* Gradient removed as per user request */}
            
            {/* Image with Clip-Path Reveal */}
            <div className="w-full h-full animate-clip-reveal origin-left">
                <img 
                    src="/images/academy.jpeg" 
                    alt="FilmTech Academy Training" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Tracing Square Animation */}
            {/* Top Border */}
            <div className="absolute top-8 left-8 right-8 h-[1px] bg-brand-red scale-x-0 origin-left animate-trace-top z-20" />
            {/* Right Border */}
            <div className="absolute top-8 right-8 bottom-8 w-[1px] bg-brand-red scale-y-0 origin-top animate-trace-right z-20" />
            {/* Bottom Border */}
            <div className="absolute bottom-8 right-8 left-8 h-[1px] bg-brand-red scale-x-0 origin-right animate-trace-bottom z-20" />
            {/* Left Border */}
            <div className="absolute bottom-8 left-8 top-8 w-[1px] bg-brand-red scale-y-0 origin-bottom animate-trace-left z-20" />

            {/* Floating Badge (Static, no interaction) */}
            <div className="absolute bottom-16 right-16 z-20 bg-white/90 backdrop-blur-md p-6 border-2 border-brand-red shadow-2xl animate-fade-in-delayed">
                <div className="text-center">
                   <span className="block text-4xl font-bold text-black mb-1">+3k</span>
                   <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">Alunos Formados</span>
                </div>
            </div>
        </div>

      </div>
      
      {/* Custom Animations Styles */}
      <style>{`
        @keyframes clip-reveal {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        @keyframes trace-top {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes trace-right {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        @keyframes trace-bottom {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes trace-left {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        @keyframes fade-in {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-clip-reveal {
            animation: clip-reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
            animation-delay: 0.2s;
            clip-path: inset(0 100% 0 0); /* Start hidden */
        }
        
        .animate-trace-top {
          animation: trace-top 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 1.0s;
        }
        .animate-trace-right {
          animation: trace-right 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 1.8s;
        }
        .animate-trace-bottom {
          animation: trace-bottom 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 2.6s;
        }
        .animate-trace-left {
          animation: trace-left 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 3.4s;
        }
        
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-delayed {
            animation: fade-in 1s ease-out forwards;
            opacity: 0;
            animation-delay: 1.5s;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
      `}</style>
    </SlideWrapper>
  );
};
