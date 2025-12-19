import React, { useState } from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { SmoothImage } from '../SmoothImage';
import { ChevronRight } from 'lucide-react';

// Dados estruturados para contar a história passo a passo
const TIMELINE_STEPS = [
  { 
    year: '2021', 
    title: 'O Início', 
    image: '/images/2021.jpeg', 
    highlight: 'Nascemos em Goiânia',
    text: 'Já iniciamos acertados com o Marketing. A fundação foi sólida, focada em estabelecer uma presença visual impecável desde o dia zero.'
  },
  { 
    year: '2022', 
    title: 'Evolução', 
    image: '/images/2022.jpeg', 
    highlight: 'O Cliente de Luxo',
    text: 'Atingimos o potencial cliente de alto padrão. Nossas estratégias validaram que a qualidade técnica atrai o público que valoriza detalhes.'
  },
  { 
    year: '2024', 
    title: 'Domínio', 
    image: '/images/2024.jpeg', 
    highlight: 'Atração & Retenção',
    text: 'Consolidamos o mercado. Hoje não apenas atendemos, mas geramos desejo através de uma vitrine digital que reflete a excelência do serviço.'
  }
];

export const Slide4_Turn: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0); // Controla a Imagem (Instantâneo)
  const [textStep, setTextStep] = useState(0);     // Controla o Texto (Delay para animação)
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    
    if (isAnimating) return;
    
    setIsAnimating(true);
    const nextStep = (activeStep + 1) % TIMELINE_STEPS.length;
    setActiveStep(nextStep);

    setTimeout(() => {
      setTextStep(nextStep);
      setIsAnimating(false);
    }, 300); 
  };

  const currentData = TIMELINE_STEPS[textStep];

  return (
    <SlideWrapper className="bg-white text-black overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full relative">
        
        {/* --- LADO ESQUERDO: Narrativa --- */}
        <div className="w-full md:w-5/12 h-[60%] md:h-full flex flex-col justify-center px-[6vmin] relative z-20 bg-white order-2 md:order-1">
          
          {/* Header Fixo */}
          <div className="absolute top-[3vmin] md:top-12 left-[6vmin] md:left-16">
            <h2 className="font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2"
                style={{ fontSize: 'clamp(12px, 2vmin, 20px)' }}>
              <span className="w-8 h-[2px] bg-brand-red"></span>
              Nossa Jornada
            </h2>
          </div>

          {/* Conteúdo Dinâmico */}
          <div 
             className={`transition-all duration-300 ease-in-out transform flex flex-col justify-center ${
               isAnimating 
                 ? 'opacity-0 blur-md translate-y-4' 
                 : 'opacity-100 blur-0 translate-y-0' 
             }`}
          >
            <div className="mb-[1vmin]">
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-black opacity-90 font-display leading-none"
                    style={{ fontSize: 'clamp(64px, 15vmin, 200px)' }}>
                {currentData.year}
              </span>
            </div>
            
            <h3 className="font-bold text-black mb-[2vmin] leading-tight min-h-[1.2em]"
                style={{ fontSize: 'clamp(24px, 5vmin, 60px)' }}>
              {currentData.highlight}
            </h3>

            <div className="h-1 w-[10vmin] bg-brand-red mb-[3vmin] rounded-full"></div>

            <p className="text-gray-600 leading-relaxed font-medium max-w-[50vmin] min-h-[6em]"
               style={{ fontSize: 'clamp(14px, 2vmin, 24px)' }}>
              {currentData.text}
            </p>
          </div>

          {/* Controles / Navegação Inferior */}
          <div className="absolute bottom-[3vmin] left-[6vmin] md:left-16 right-8">
            <div className="flex items-center gap-[2vmin]">
              {TIMELINE_STEPS.map((step, idx) => (
                <button
                  key={step.year}
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    if (idx === activeStep || isAnimating) return;
                    setIsAnimating(true);
                    setActiveStep(idx); 
                    setTimeout(() => { setTextStep(idx); setIsAnimating(false); }, 300);
                  }}
                  className={`group relative rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                    activeStep === idx 
                      ? 'border-brand-red shadow-lg scale-105' 
                      : 'border-transparent opacity-50 hover:opacity-100 grayscale hover:grayscale-0'
                  }`}
                  style={{ 
                    width: activeStep === idx ? '12vmin' : '8vmin',
                    height: '8vmin'
                  }}
                >
                  <img 
                    src={step.image} 
                    alt={step.year} 
                    className="w-full h-full object-cover"
                  />
                  {activeStep === idx && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                       <span className="font-bold text-white leading-none" style={{ fontSize: '1.5vmin' }}>{step.year}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- LADO DIREITO: Visual Hero --- */}
        <div 
          className="w-full md:w-7/12 h-[40%] md:h-full relative cursor-pointer group overflow-hidden bg-black order-1 md:order-2"
          onClick={handleNext}
        >
          {TIMELINE_STEPS.map((step, idx) => (
            <div
              key={step.year}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                activeStep === idx 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : activeStep > idx 
                    ? 'opacity-0 -translate-x-full scale-110' 
                    : 'opacity-0 translate-x-full scale-110' 
              }`}
            >
              <SmoothImage
                src={step.image}
                alt={`Filmtech ${step.year}`}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-20 md:opacity-0" />
            </div>
          ))}

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
             <div className="bg-transparent text-white drop-shadow-2xl">
                <ChevronRight style={{ width: '8vmin', height: '8vmin' }} />
             </div>
          </div>

          <div className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-300 ${isAnimating ? 'opacity-20' : 'opacity-0'}`} />
        </div>

      </div>
    </SlideWrapper>
  );
};