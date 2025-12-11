import React, { useState } from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
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
    
    // 1. Inicia animação de saída do texto
    setIsAnimating(true);

    const nextStep = (activeStep + 1) % TIMELINE_STEPS.length;
    
    // 2. Troca a Imagem IMEDIATAMENTE (pedido do usuário)
    setActiveStep(nextStep);

    // 3. Aguarda a animação rápida (300ms) para trocar o texto e trazê-lo de volta
    setTimeout(() => {
      setTextStep(nextStep);
      setIsAnimating(false);
    }, 300); 
  };

  const currentData = TIMELINE_STEPS[textStep]; // O texto renderiza baseado no estado com delay

  return (
    <SlideWrapper className="bg-white text-black overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full relative">
        
        {/* --- LADO ESQUERDO: Narrativa --- */}
        <div className="w-full md:w-5/12 h-full flex flex-col justify-center px-8 md:px-16 z-20 bg-white relative">
          
          {/* Header Fixo */}
          <div className="absolute top-12 left-8 md:left-16">
            <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-brand-red"></span>
              Nossa Jornada
            </h2>
          </div>

          {/* Conteúdo Dinâmico com Animação Controlada (Blur/Fade) */}
          <div 
             className={`transition-all duration-300 ease-in-out transform ${
               isAnimating 
                 ? 'opacity-0 blur-md translate-y-4' // Estado de Saída (Mais rápido e sutil)
                 : 'opacity-100 blur-0 translate-y-0' // Estado de Entrada/Visível
             }`}
          >
            <div className="mb-4">
              <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-black opacity-90 font-display">
                {currentData.year}
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight min-h-[1.2em]">
              {currentData.highlight}
            </h3>

            <div className="h-1 w-20 bg-brand-red mb-6 rounded-full"></div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-md min-h-[6em]">
              {currentData.text}
            </p>
          </div>

          {/* Controles / Navegação Inferior */}
          <div className="absolute bottom-12 left-8 md:left-16 right-8">
            <div className="flex items-center gap-4">
              {TIMELINE_STEPS.map((step, idx) => (
                <button
                  key={step.year}
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    if (idx === activeStep || isAnimating) return;
                    
                    setIsAnimating(true);
                    setActiveStep(idx); // Imagem instantânea
                    
                    setTimeout(() => {
                        setTextStep(idx); // Texto com delay
                        setIsAnimating(false);
                    }, 300);
                  }}
                  className={`group relative h-16 w-16 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                    activeStep === idx 
                      ? 'border-brand-red w-24 shadow-lg scale-105' 
                      : 'border-transparent opacity-50 hover:opacity-100 grayscale hover:grayscale-0'
                  }`}
                >
                  <img 
                    src={step.image} 
                    alt={step.year} 
                    className="w-full h-full object-cover"
                  />
                  {activeStep === idx && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                       <span className="text-xs font-bold text-white">{step.year}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- LADO DIREITO: Visual Hero --- */}
        <div 
          className="w-full md:w-7/12 h-full relative cursor-pointer group overflow-hidden bg-black"
          onClick={handleNext}
        >
          {/* Background Image com transição suave */}
          {TIMELINE_STEPS.map((step, idx) => (
            <div
              key={step.year}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                activeStep === idx 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : activeStep > idx 
                    ? 'opacity-0 -translate-x-full scale-110' // Imagens passadas vão para a esquerda
                    : 'opacity-0 translate-x-full scale-110'  // Imagens futuras vêm da direita
              }`}
            >
              <SmoothImage
                src={step.image}
                alt={`Filmtech ${step.year}`}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              {/* Overlay Gradiente para leitura se necessário */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-20 md:opacity-0" />
            </div>
          ))}

          {/* Prompt de Clique */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
             <div className="bg-transparent text-white drop-shadow-2xl">
                <ChevronRight className="w-16 h-16" />
             </div>
          </div>

          {/* Efeito de "Flash" na troca */}
          <div className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-300 ${isAnimating ? 'opacity-20' : 'opacity-0'}`} />
        </div>

      </div>
    </SlideWrapper>
  );
};