import React, { useState, useEffect, useRef, useCallback, Suspense, lazy, useTransition } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { IntroScreen } from './components/IntroScreen';
import { LoadingSlide } from './components/LoadingSlide';

// Lazy Load Components
const Slide1_Cover = lazy(() => import('./components/slides/Slide1_Cover').then(module => ({ default: module.Slide1_Cover })));
const Slide2_Origin = lazy(() => import('./components/slides/Slide2_Origin').then(module => ({ default: module.Slide2_Origin })));
const Slide3_Struggle = lazy(() => import('./components/slides/Slide3_Struggle').then(module => ({ default: module.Slide3_Struggle })));
const Slide4_Turn = lazy(() => import('./components/slides/Slide4_Turn').then(module => ({ default: module.Slide4_Turn })));
const Slide5_Asset = lazy(() => import('./components/slides/Slide5_Asset').then(module => ({ default: module.Slide5_Asset })));
const Slide6_Gap = lazy(() => import('./components/slides/Slide6_Gap').then(module => ({ default: module.Slide6_Gap })));
const Slide7_TeamStructure = lazy(() => import('./components/slides/Slide7_TeamStructure').then(module => ({ default: module.Slide7_TeamStructure })));
const Slide8_Methodology = lazy(() => import('./components/slides/Slide8_Final').then(module => ({ default: module.Slide8_Final })));
const Slide9_TractionStrategy = lazy(() => import('./components/slides/Slide9_TractionStrategy').then(module => ({ default: module.Slide9_TractionStrategy })));
const Slide10_FinancialPath = lazy(() => import('./components/slides/Slide10_FinancialPath').then(module => ({ default: module.Slide10_FinancialPath })));
const Slide11_Deal = lazy(() => import('./components/slides/Slide11_Deal').then(module => ({ default: module.Slide11_Deal })));
const Slide12_Final = lazy(() => import('./components/slides/Slide12_Final').then(module => ({ default: module.Slide12_Final })));

const SLIDES_COUNT = 12;

// Map for preloading
const CHECKPOINT_MODULES = [
  () => import('./components/slides/Slide1_Cover'),
  () => import('./components/slides/Slide2_Origin'),
  () => import('./components/slides/Slide3_Struggle'),
  () => import('./components/slides/Slide4_Turn'),
  () => import('./components/slides/Slide5_Asset'),
  () => import('./components/slides/Slide6_Gap'),
  () => import('./components/slides/Slide7_TeamStructure'),
  () => import('./components/slides/Slide8_Final'),
  () => import('./components/slides/Slide9_TractionStrategy'),
  () => import('./components/slides/Slide10_FinancialPath'),
  () => import('./components/slides/Slide11_Deal'),
  () => import('./components/slides/Slide12_Final'),
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
  const changeSlide = useCallback((direction: 'next' | 'prev') => {
    if (showIntro) {
      handleStart();
      return;
    }
    
    if (isScrolling || isPending) return; // Wait for pending transition too

    setIsScrolling(true);
    
    // Use startTransition to keep old UI valid until new one is ready
    startTransition(() => {
      setCurrentSlide(prev => {
        if (direction === 'next') {
          return Math.min(prev + 1, SLIDES_COUNT - 1);
        } else {
          return Math.max(prev - 1, 0);
        }
      });
    });

    setTimeout(() => setIsScrolling(false), 1000); // 1s cool-down
  }, [isScrolling, showIntro, handleStart, isPending]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showIntro) {
        handleStart();
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') changeSlide('next');
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') changeSlide('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
        changeSlide('next');
      } else {
        changeSlide('prev');
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
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

      if (Math.abs(diff) > 50) { // Threshold
        if (showIntro) {
          handleStart();
          return;
        }

        if (diff > 0) {
          changeSlide('next');
        } else {
          changeSlide('prev');
        }
      } else if (showIntro) {
        // If it was a tap (small diff) and intro is showing, allow dismissal
         handleStart();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [changeSlide, showIntro, handleStart]);

  // Click navigation (Tap to next, excluding interactive elements)
  const handleClick = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (showIntro) return;

    // Check if target or parents are interactive
    const target = e.target as HTMLElement;
    const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], [data-no-auto-nav]');

    if (isInteractive) return;

    changeSlide('next');
  }, [changeSlide, showIntro]);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [handleClick]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <Slide1_Cover key="slide1" />;
      case 1: return <Slide2_Origin key="slide2" />;
      case 2: return <Slide3_Struggle key="slide3" />;
      case 3: return <Slide4_Turn key="slide4" />;
      case 4: return <Slide5_Asset key="slide5" />;
      case 5: return <Slide6_Gap key="slide6" />;
      case 6: return <Slide7_TeamStructure key="slide7" />;
      case 7: return <Slide8_Methodology key="slide8" />;
      case 8: return <Slide9_TractionStrategy key="slide9" />;
      case 9: return <Slide10_FinancialPath key="slide10" />;
      case 10: return <Slide11_Deal key="slide11" />;
      case 11: return <Slide12_Final key="slide12" />;
      default: return null;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white font-sans selection:bg-brand-red selection:text-white">
      
      <AnimatePresence>
        {showIntro && (
          <IntroScreen onStart={handleStart} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <Navigation 
          totalSlides={SLIDES_COUNT} 
          currentSlide={currentSlide} 
          onNavigate={(index) => {
            if(!isScrolling && !showIntro && !isPending) {
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
            <Suspense fallback={<LoadingSlide />}>
                {renderSlide()}
            </Suspense>
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
