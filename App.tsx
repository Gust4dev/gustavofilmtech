import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Suspense,
  lazy,
  useTransition,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { IntroScreen } from "./components/IntroScreen";
import { LoadingSlide } from "./components/LoadingSlide";
import { DigitalLock } from "./components/DigitalLock";
import { AdminPrint } from "./components/AdminPrint";
import { CONFIG } from "./constants/config";
import { Printer } from "lucide-react";
import { PrintProvider } from "./components/PrintContext";

import { SLIDES_LIST, SLIDES_COUNT } from "./constants/slides";

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPrintView, setIsPrintView] = useState(false);
  const touchStartY = useRef(0);

  // Check for admin mode on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true' || params.get('mode') === 'print') {
      setIsAdmin(true);
    }
  }, []);

  const handleStart = useCallback(() => {
    if (showIntro) {
      setShowIntro(false);
    }
  }, [showIntro]);

  // Smart Preload System
  useEffect(() => {
    if (!showIntro) {
      // Preload next 3 slides automatically (safer approach)
      [1, 2, 3].forEach(offset => {
        const index = currentSlide + offset;
        if (index < SLIDES_COUNT) {
          const slide = SLIDES_LIST[index];
          if (slide && slide.component) {
            // Just calling the lazy component's loader function
            try {
              (slide.component as any)._payload?._result?.();
            } catch (e) {
              // Ignore preload errors
            }
          }
        }
      });
    }
  }, [currentSlide, showIntro]);

  // Throttle slide changes
  const changeSlide = useCallback(
    (direction: "next" | "prev") => {
      if (showIntro) {
        handleStart();
        return;
      }

      if (isScrolling) return;

      setIsScrolling(true);

      setCurrentSlide((prev) => {
        if (direction === "next") {
          return Math.min(prev + 1, SLIDES_COUNT - 1);
        } else {
          return Math.max(prev - 1, 0);
        }
      });

      // Shorter timeout for snappier feel, but still prevents accidental double-scroll
      setTimeout(() => setIsScrolling(false), 800);
    },
    [isScrolling, showIntro, handleStart],
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
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (Math.abs(diff) > 50) {
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

  const handleClick = useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      if (showIntro) return;

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

  const renderSlideContent = () => {
    const currentSlideData = SLIDES_LIST[currentSlide];
    if (!currentSlideData) return null;

    const ActiveSlide = currentSlideData.component;
    
    const activeSectionNumber = SLIDES_LIST
      .slice(0, currentSlide + 1)
      .filter(s => s.isSection).length;

    return (
      <ActiveSlide 
        isActive={true} 
        direction={1}
        sectionNumber={currentSlideData.isSection ? activeSectionNumber : undefined}
      />
    );
  };

  return (
    <PrintProvider isPrinting={isPrintView}>
      <div className={isPrintView ? "print-root" : "relative w-screen h-screen overflow-hidden bg-white font-sans selection:bg-brand-red selection:text-white"}>
        <AnimatePresence>
          {showIntro && <IntroScreen onStart={handleStart} />}
        </AnimatePresence>

        <AnimatePresence>{CONFIG.IS_LOCKED && <DigitalLock />}</AnimatePresence>

        {!showIntro && (
          <>
            {isPrintView ? (
              <AdminPrint />
            ) : (
              <>
                <Navigation
                  totalSlides={SLIDES_COUNT}
                  currentSlide={currentSlide}
                  onNavigate={(index) => {
                    if (!isScrolling && !showIntro) {
                      setCurrentSlide(index);
                    }
                  }}
                />

                <div className="fixed bottom-0 left-0 w-full h-1 bg-white/10 z-50">
                  <div
                    className="h-full bg-brand-red transition-all duration-700 ease-out"
                    style={{ width: `${((currentSlide + 1) / SLIDES_COUNT) * 100}%` }}
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={SLIDES_LIST[currentSlide]?.id || 'loading'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Suspense fallback={<LoadingSlide />}>
                      {renderSlideContent()}
                    </Suspense>
                  </motion.div>
                </AnimatePresence>
              </>
            )}

            {isAdmin && (
              <div className="fixed bottom-8 left-8 z-[100] no-print">
                <button
                  onClick={() => {
                    if (isPrintView) {
                      setIsPrintView(false);
                      // Clear params to return to normal view if desired, or just toggle state
                    } else {
                      setIsPrintView(true);
                      window.scrollTo(0, 0);
                    }
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-brand-red text-white rounded-full font-bold shadow-2xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95"
                >
                  <Printer size={20} />
                  {isPrintView ? "Voltar ao Deck" : "PREVIEW PARA PDF"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </PrintProvider>
  );
};

export default App;
