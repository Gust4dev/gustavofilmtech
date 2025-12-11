import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { IntroScreen } from './components/IntroScreen';
import { Slide1_Cover } from './components/slides/Slide1_Cover';
import { Slide2_Origin } from './components/slides/Slide2_Origin';
import { Slide3_Struggle } from './components/slides/Slide3_Struggle';
import { Slide4_Turn } from './components/slides/Slide4_Turn';
import { Slide5_Asset } from './components/slides/Slide5_Asset';
import { Slide6_Gap } from './components/slides/Slide6_Gap';
import { Slide7_TeamStructure } from './components/slides/Slide7_TeamStructure';
import { Slide9_AcademyIntro } from './components/slides/Slide9_AcademyIntro';
import { Slide9a_Students } from './components/slides/Slide9a_Students';
import { Slide9b_AcademyOperations } from './components/slides/Slide9b_AcademyOperations';
import { Slide10_Financials } from './components/slides/Slide10_Financials';
import { Slide11_Deal } from './components/slides/Slide11_Deal';
import { Slide12_Final } from './components/slides/Slide12_Final';

const SLIDES_COUNT = 13;

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const touchStartY = useRef(0);

  const handleStart = useCallback(() => {
    if (showIntro) {
      setShowIntro(false);
    }
  }, [showIntro]);

  // Throttle slide changes to prevent rapid skipping
  const changeSlide = useCallback((direction: 'next' | 'prev') => {
    if (showIntro) {
      handleStart();
      return;
    }
    
    if (isScrolling) return;

    setIsScrolling(true);
    setCurrentSlide(prev => {
      if (direction === 'next') {
        return Math.min(prev + 1, SLIDES_COUNT - 1);
      } else {
        return Math.max(prev - 1, 0);
      }
    });

    setTimeout(() => setIsScrolling(false), 1000); // 1s cool-down
  }, [isScrolling, showIntro, handleStart]);

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
      case 7: return <Slide9_AcademyIntro key="slide9a" />;
      case 8: return <Slide9a_Students key="slide9students" />;
      case 9: return <Slide9b_AcademyOperations key="slide9b" />;
      case 10: return <Slide10_Financials key="slide10" />;
      case 11: return <Slide11_Deal key="slide11" />;
      case 12: return <Slide12_Final key="slide12" />;
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
            if(!isScrolling && !showIntro) {
              setCurrentSlide(index);
            }
          }} 
        />
      )}

      {/* Main Slide Container */}
      <AnimatePresence mode="wait">
        {!showIntro && renderSlide()}
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
