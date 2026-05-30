import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Suspense,
  useTransition,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { IntroScreen } from "./components/IntroScreen";
import { DigitalLock } from "./components/DigitalLock";
import { AdminPrint } from "./components/AdminPrint";
import { CONFIG } from "./constants/config";
import { Printer } from "lucide-react";
import { PrintProvider } from "./components/PrintContext";

import { SLIDES_LIST, SLIDES_COUNT, preloadAround } from "./constants/slides";

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPrintView, setIsPrintView] = useState(false);
  const [isPending, startTransition] = useTransition();
  const touchStartY = useRef(0);
  const pendingSlide = useRef<number | null>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true' || params.get('mode') === 'print') {
      setIsAdmin(true);
    }
    preloadAround(0, 8);
  }, []);

  const handleStart = useCallback(() => {
    if (showIntro) setShowIntro(false);
  }, [showIntro]);

  useEffect(() => {
    if (!showIntro) preloadAround(currentSlide);
  }, [currentSlide, showIntro]);

  // Commit the accumulated target — wrapped in startTransition so React keeps
  // the current slide visible while the lazy chunk loads (no white flash).
  const flushPending = useCallback(() => {
    if (pendingSlide.current === null) return;
    const target = pendingSlide.current;
    pendingSlide.current = null;
    preloadAround(target, 6);
    startTransition(() => {
      setCurrentSlide(target);
    });
  }, [startTransition]);

  // Accumulate direction input during rapid scroll — debounce 150ms then jump once
  const changeSlide = useCallback(
    (direction: "next" | "prev") => {
      if (showIntro) { handleStart(); return; }

      setCurrentSlide((prev) => {
        const base = pendingSlide.current ?? prev;
        const next = direction === "next"
          ? Math.min(base + 1, SLIDES_COUNT - 1)
          : Math.max(base - 1, 0);
        pendingSlide.current = next;
        return prev;
      });

      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(flushPending, 150);
    },
    [showIntro, handleStart, flushPending],
  );

  const goToSlide = useCallback(
    (index: number) => {
      if (showIntro) return;
      preloadAround(index, 6);
      startTransition(() => setCurrentSlide(index));
    },
    [showIntro, startTransition],
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (showIntro) { handleStart(); return; }
      if (e.key === "ArrowDown" || e.key === "ArrowRight") changeSlide("next");
      if (e.key === "ArrowUp"   || e.key === "ArrowLeft")  changeSlide("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [changeSlide, showIntro, handleStart]);

  // Wheel navigation
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 30) return;
      if (showIntro) { handleStart(); return; }
      changeSlide(e.deltaY > 0 ? "next" : "prev");
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [changeSlide, showIntro, handleStart]);

  // Touch navigation
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        if (showIntro) { handleStart(); return; }
        changeSlide(diff > 0 ? "next" : "prev");
      } else if (showIntro) {
        handleStart();
      }
    };
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [changeSlide, showIntro, handleStart]);

  // Click-to-advance
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (showIntro) return;
      const isInteractive = (e.target as HTMLElement).closest(
        'button, a, input, textarea, select, [role="button"], [data-no-auto-nav]',
      );
      if (!isInteractive) changeSlide("next");
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [changeSlide, showIntro]);

  const renderSlide = () => {
    const data = SLIDES_LIST[currentSlide];
    if (!data) return null;
    const ActiveSlide = data.component;
    const sectionNumber = SLIDES_LIST
      .slice(0, currentSlide + 1)
      .filter(s => s.isSection).length;
    return (
      <ActiveSlide
        isActive={true}
        direction={1}
        sectionNumber={data.isSection ? sectionNumber : undefined}
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
                  onNavigate={goToSlide}
                />

                <div className="fixed bottom-0 left-0 w-full h-1 bg-white/10 z-50">
                  <div
                    className="h-full bg-brand-red transition-all duration-700 ease-out"
                    style={{ width: `${((currentSlide + 1) / SLIDES_COUNT) * 100}%` }}
                  />
                </div>

                {/* Slide container: keeps old slide visible while new one loads via startTransition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={SLIDES_LIST[currentSlide]?.id || 'loading'}
                    initial={{ opacity: isPending ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Suspense fallback={null}>
                      {renderSlide()}
                    </Suspense>
                  </motion.div>
                </AnimatePresence>
              </>
            )}

            {isAdmin && (
              <div className="fixed bottom-8 left-8 z-[100] no-print">
                <button
                  onClick={() => {
                    setIsPrintView(v => !v);
                    window.scrollTo(0, 0);
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
