import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Suspense,
  lazy,
  useTransition,
} from "react";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { IntroScreen } from "./components/IntroScreen";
import { LoadingSlide } from "./components/LoadingSlide";
import { DigitalLock } from "./components/DigitalLock";
import { CONFIG } from "./constants/config";

// Lazy Load Components
const Slide1_Cover = lazy(() =>
  import("./components/slides/Slide1_Cover").then((module) => ({
    default: module.Slide1_Cover,
  })),
);
const Slide2_Origin = lazy(() =>
  import("./components/slides/Slide2_Origin").then((module) => ({
    default: module.Slide2_Origin,
  })),
);
const Slide3_Struggle = lazy(() =>
  import("./components/slides/Slide3_Struggle").then((module) => ({
    default: module.Slide3_Struggle,
  })),
);
const Slide4_Turn = lazy(() =>
  import("./components/slides/Slide4_Turn").then((module) => ({
    default: module.Slide4_Turn,
  })),
);
const Slide5_Asset = lazy(() =>
  import("./components/slides/Slide5_Asset").then((module) => ({
    default: module.Slide5_Asset,
  })),
);
const Slide6_SectionEstrias = lazy(() =>
  import("./components/slides/Slide6_SectionEstrias").then((module) => ({
    default: module.Slide6_SectionEstrias,
  })),
);
const Slide7_EstriasCausa = lazy(() =>
  import("./components/slides/Slide7_EstriasCausa").then((module) => ({
    default: module.Slide7_EstriasCausa,
  })),
);
const Slide8_EstriasRegioesEvitar = lazy(() =>
  import("./components/slides/Slide8_EstriasRegioesEvitar").then((module) => ({
    default: module.Slide8_EstriasRegioesEvitar,
  })),
);
const Slide9_SectionRepuxamentos = lazy(() =>
  import("./components/slides/Slide9_SectionRepuxamentos").then((module) => ({
    default: module.Slide9_SectionRepuxamentos,
  })),
);
const Slide10_RepuxamentosCausa = lazy(() =>
  import("./components/slides/Slide10_RepuxamentosCausa").then((module) => ({
    default: module.Slide10_RepuxamentosCausa,
  })),
);
const Slide11_RepuxamentosConceitos = lazy(() =>
  import("./components/slides/Slide11_RepuxamentosConceitos").then((module) => ({
    default: module.Slide11_RepuxamentosConceitos,
  })),
);
const Slide12_RepuxamentosVerdade = lazy(() =>
  import("./components/slides/Slide12_RepuxamentosVerdade").then((module) => ({
    default: module.Slide12_RepuxamentosVerdade,
  })),
);
const Slide13_SectionMarcas = lazy(() =>
  import("./components/slides/Slide13_SectionMarcas").then((module) => ({
    default: module.Slide13_SectionMarcas,
  })),
);
const Slide14_MarcasOrigem = lazy(() =>
  import("./components/slides/Slide14_MarcasOrigem").then((module) => ({
    default: module.Slide14_MarcasOrigem,
  })),
);
const Slide15_MarcasPontos = lazy(() =>
  import("./components/slides/Slide15_MarcasPontos").then((module) => ({
    default: module.Slide15_MarcasPontos,
  })),
);
const Slide16_MarcasConsequencias = lazy(() =>
  import("./components/slides/Slide16_MarcasConsequencias").then((module) => ({
    default: module.Slide16_MarcasConsequencias,
  })),
);
const Slide17_SectionFundamentos = lazy(() =>
  import("./components/slides/Slide17_SectionFundamentos").then((module) => ({
    default: module.Slide17_SectionFundamentos,
  })),
);
const Slide18_FundamentosInicio = lazy(() =>
  import("./components/slides/Slide18_FundamentosInicio").then((module) => ({
    default: module.Slide18_FundamentosInicio,
  })),
);
const Slide19_FundamentosProcesso = lazy(() =>
  import("./components/slides/Slide19_FundamentosProcesso").then((module) => ({
    default: module.Slide19_FundamentosProcesso,
  })),
);
const Slide20_SectionLimpeza = lazy(() =>
  import("./components/slides/Slide20_SectionLimpeza").then((module) => ({
    default: module.Slide20_SectionLimpeza,
  })),
);
const Slide21_LavarVsDescontaminar = lazy(() =>
  import("./components/slides/Slide21_LavarVsDescontaminar").then((module) => ({
    default: module.Slide21_LavarVsDescontaminar,
  })),
);
const Slide22_TiposContaminacao = lazy(() =>
  import("./components/slides/Slide22_TiposContaminacao").then((module) => ({
    default: module.Slide22_TiposContaminacao,
  })),
);
const Slide23_ProcessoDescontaminacao = lazy(() =>
  import("./components/slides/Slide23_ProcessoDescontaminacao").then((module) => ({
    default: module.Slide23_ProcessoDescontaminacao,
  })),
);
const Slide24_PontoProfissional = lazy(() =>
  import("./components/slides/Slide24_PontoProfissional").then((module) => ({
    default: module.Slide24_PontoProfissional,
  })),
);
const Slide25_SectionMaterial = lazy(() =>
  import("./components/slides/Slide25_SectionMaterial").then((module) => ({
    default: module.Slide25_SectionMaterial,
  })),
);
const Slide26_MaterialFuncao = lazy(() =>
  import("./components/slides/Slide26_MaterialFuncao").then((module) => ({
    default: module.Slide26_MaterialFuncao,
  })),
);
const Slide27_MaterialEscolha = lazy(() =>
  import("./components/slides/Slide27_MaterialEscolha").then((module) => ({
    default: module.Slide27_MaterialEscolha,
  })),
);
const Slide28_SectionPrecificacao = lazy(() =>
  import("./components/slides/Slide28_SectionPrecificacao").then((module) => ({
    default: module.Slide28_SectionPrecificacao,
  })),
);
const Slide29_PrecificacaoErro = lazy(() =>
  import("./components/slides/Slide29_PrecificacaoErro").then((module) => ({
    default: module.Slide29_PrecificacaoErro,
  })),
);
const Slide30_TempoCusto = lazy(() =>
  import("./components/slides/Slide30_TempoCusto").then((module) => ({
    default: module.Slide30_TempoCusto,
  })),
);
const Slide31_PrecificacaoConclusao = lazy(() =>
  import("./components/slides/Slide31_PrecificacaoConclusao").then((module) => ({
    default: module.Slide31_PrecificacaoConclusao,
  })),
);
const Slide32_SectionFerramentas = lazy(() =>
  import("./components/slides/Slide32_SectionFerramentas").then((module) => ({
    default: module.Slide32_SectionFerramentas,
  })),
);
const Slide33_FerramentasMentalidade = lazy(() =>
  import("./components/slides/Slide33_FerramentasMentalidade").then((module) => ({
    default: module.Slide33_FerramentasMentalidade,
  })),
);
const Slide34_FerramentasPPF = lazy(() =>
  import("./components/slides/Slide34_FerramentasPPF").then((module) => ({
    default: module.Slide34_FerramentasPPF,
  })),
);
const Slide35_FerramentasConclusao = lazy(() =>
  import("./components/slides/Slide35_FerramentasConclusao").then((module) => ({
    default: module.Slide35_FerramentasConclusao,
  })),
);

const SLIDES_COUNT = 35;

// Map for preloading
const CHECKPOINT_MODULES = [
  () => import("./components/slides/Slide1_Cover"),
  () => import("./components/slides/Slide2_Origin"),
  () => import("./components/slides/Slide3_Struggle"),
  () => import("./components/slides/Slide4_Turn"),
  () => import("./components/slides/Slide5_Asset"),
  () => import("./components/slides/Slide6_SectionEstrias"),
  () => import("./components/slides/Slide7_EstriasCausa"),
  () => import("./components/slides/Slide8_EstriasRegioesEvitar"),
  () => import("./components/slides/Slide9_SectionRepuxamentos"),
  () => import("./components/slides/Slide10_RepuxamentosCausa"),
  () => import("./components/slides/Slide11_RepuxamentosConceitos"),
  () => import("./components/slides/Slide12_RepuxamentosVerdade"),
  () => import("./components/slides/Slide13_SectionMarcas"),
  () => import("./components/slides/Slide14_MarcasOrigem"),
  () => import("./components/slides/Slide15_MarcasPontos"),
  () => import("./components/slides/Slide16_MarcasConsequencias"),
  () => import("./components/slides/Slide17_SectionFundamentos"),
  () => import("./components/slides/Slide18_FundamentosInicio"),
  () => import("./components/slides/Slide19_FundamentosProcesso"),
  () => import("./components/slides/Slide20_SectionLimpeza"),
  () => import("./components/slides/Slide21_LavarVsDescontaminar"),
  () => import("./components/slides/Slide22_TiposContaminacao"),
  () => import("./components/slides/Slide23_ProcessoDescontaminacao"),
  () => import("./components/slides/Slide24_PontoProfissional"),
  () => import("./components/slides/Slide25_SectionMaterial"),
  () => import("./components/slides/Slide26_MaterialFuncao"),
  () => import("./components/slides/Slide27_MaterialEscolha"),
  () => import("./components/slides/Slide28_SectionPrecificacao"),
  () => import("./components/slides/Slide29_PrecificacaoErro"),
  () => import("./components/slides/Slide30_TempoCusto"),
  () => import("./components/slides/Slide31_PrecificacaoConclusao"),
  () => import("./components/slides/Slide32_SectionFerramentas"),
  () => import("./components/slides/Slide33_FerramentasMentalidade"),
  () => import("./components/slides/Slide34_FerramentasPPF"),
  () => import("./components/slides/Slide35_FerramentasConclusao"),
];

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isPending, startTransition] = useTransition(); // Hook for seamless transitions
  const touchStartY = useRef(0);

  const handleStart = useCallback(() => {
    if (showIntro) {
      setShowIntro(false);
      // Preload first few slides immediately after intro
      CHECKPOINT_MODULES[0]();
      CHECKPOINT_MODULES[1]();
    }
  }, [showIntro]);

  // Smart Preload System
  useEffect(() => {
    if (!showIntro) {
      // Preload next slide
      const nextSlide = currentSlide + 1;
      if (nextSlide < SLIDES_COUNT && CHECKPOINT_MODULES[nextSlide]) {
        CHECKPOINT_MODULES[nextSlide]();
      }
      // Preload next+1 just in case
      const nextNextSlide = currentSlide + 2;
      if (nextNextSlide < SLIDES_COUNT && CHECKPOINT_MODULES[nextNextSlide]) {
        CHECKPOINT_MODULES[nextNextSlide]();
      }
    }
  }, [currentSlide, showIntro]);

  // Throttle slide changes to prevent rapid skipping
  const changeSlide = useCallback(
    (direction: "next" | "prev") => {
      if (showIntro) {
        handleStart();
        return;
      }

      if (isScrolling || isPending) return; // Wait for pending transition too

      setIsScrolling(true);

      // Use startTransition to keep old UI valid until new one is ready
      startTransition(() => {
        setCurrentSlide((prev) => {
          if (direction === "next") {
            return Math.min(prev + 1, SLIDES_COUNT - 1);
          } else {
            return Math.max(prev - 1, 0);
          }
        });
      });

      setTimeout(() => setIsScrolling(false), 1000); // 1s cool-down
    },
    [isScrolling, showIntro, handleStart, isPending],
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showIntro) {
        handleStart();
        return;
      }

      if (e.key === "ArrowDown" || e.key === "ArrowRight") changeSlide("next");
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") changeSlide("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeSlide, showIntro, handleStart]);

  // Wheel navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Small threshold to ignore tiny movements (like trackpad momentum)
      if (Math.abs(e.deltaY) < 30) return;

      if (showIntro) {
        handleStart();
        return;
      }

      if (e.deltaY > 0) {
        changeSlide("next");
      } else {
        changeSlide("prev");
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [changeSlide, showIntro, handleStart]);

  // Touch navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      // Note: We don't dismiss on touch start, only on swipe/scroll interpretation
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (Math.abs(diff) > 50) {
        // Threshold
        if (showIntro) {
          handleStart();
          return;
        }

        if (diff > 0) {
          changeSlide("next");
        } else {
          changeSlide("prev");
        }
      } else if (showIntro) {
        // If it was a tap (small diff) and intro is showing, allow dismissal
        handleStart();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [changeSlide, showIntro, handleStart]);

  // Click navigation (Tap to next, excluding interactive elements)
  const handleClick = useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      if (showIntro) return;

      // Check if target or parents are interactive
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'button, a, input, textarea, select, [role="button"], [data-no-auto-nav]',
      );

      if (isInteractive) return;

      changeSlide("next");
    },
    [changeSlide, showIntro],
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <Slide1_Cover key="slide1" />;
      case 1:
        return <Slide2_Origin key="slide2" />;
      case 2:
        return <Slide3_Struggle key="slide3" />;
      case 3:
        return <Slide4_Turn key="slide4" />;
      case 4:
        return <Slide5_Asset key="slide5" />;
      case 5:
        return <Slide6_SectionEstrias key="slide6" />;
      case 6:
        return <Slide7_EstriasCausa key="slide7" />;
      case 7:
        return <Slide8_EstriasRegioesEvitar key="slide8" />;
      case 8:
        return <Slide9_SectionRepuxamentos key="slide9" />;
      case 9:
        return <Slide10_RepuxamentosCausa key="slide10" />;
      case 10:
        return <Slide11_RepuxamentosConceitos key="slide11" />;
      case 11:
        return <Slide12_RepuxamentosVerdade key="slide12" />;
      case 12:
        return <Slide13_SectionMarcas key="slide13" />;
      case 13:
        return <Slide14_MarcasOrigem key="slide14" />;
      case 14:
        return <Slide15_MarcasPontos key="slide15" />;
      case 15:
        return <Slide16_MarcasConsequencias key="slide16" />;
      case 16:
        return <Slide17_SectionFundamentos key="slide17" />;
      case 17:
        return <Slide18_FundamentosInicio key="slide18" />;
      case 18:
        return <Slide19_FundamentosProcesso key="slide19" />;
      case 19:
        return <Slide20_SectionLimpeza key="slide20" />;
      case 20:
        return <Slide21_LavarVsDescontaminar key="slide21" />;
      case 21:
        return <Slide22_TiposContaminacao key="slide22" />;
      case 22:
        return <Slide23_ProcessoDescontaminacao key="slide23" />;
      case 23:
        return <Slide24_PontoProfissional key="slide24" />;
      case 24:
        return <Slide25_SectionMaterial key="slide25" />;
      case 25:
        return <Slide26_MaterialFuncao key="slide26" />;
      case 26:
        return <Slide27_MaterialEscolha key="slide27" />;
      case 27:
        return <Slide28_SectionPrecificacao key="slide28" />;
      case 28:
        return <Slide29_PrecificacaoErro key="slide29" />;
      case 29:
        return <Slide30_TempoCusto key="slide30" />;
      case 30:
        return <Slide31_PrecificacaoConclusao key="slide31" />;
      case 31:
        return <Slide32_SectionFerramentas key="slide32" />;
      case 32:
        return <Slide33_FerramentasMentalidade key="slide33" />;
      case 33:
        return <Slide34_FerramentasPPF key="slide34" />;
      case 34:
        return <Slide35_FerramentasConclusao key="slide35" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white font-sans selection:bg-brand-red selection:text-white">
      <AnimatePresence>
        {showIntro && <IntroScreen onStart={handleStart} />}
      </AnimatePresence>

      <AnimatePresence>{CONFIG.IS_LOCKED && <DigitalLock />}</AnimatePresence>

      {!showIntro && (
        <Navigation
          totalSlides={SLIDES_COUNT}
          currentSlide={currentSlide}
          onNavigate={(index) => {
            if (!isScrolling && !showIntro && !isPending) {
              startTransition(() => {
                setCurrentSlide(index);
              });
            }
          }}
        />
      )}

      {/* Main Slide Container */}
      <AnimatePresence>
        {!showIntro && (
          <Suspense fallback={<LoadingSlide />}>{renderSlide()}</Suspense>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      {!showIntro && (
        <div className="fixed bottom-0 left-0 w-full h-1 bg-white/10 z-50">
          <div
            className="h-full bg-brand-red transition-all duration-700 ease-out"
            style={{ width: `${((currentSlide + 1) / SLIDES_COUNT) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default App;
