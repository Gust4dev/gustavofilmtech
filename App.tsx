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
import { Slide7_CTA } from './components/slides/Slide7_CTA';

const SLIDES_COUNT = 7;

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

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <Slide1_Cover key="slide1" />;
      case 1: return <Slide2_Origin key="slide2" />;
      case 2: return <Slide3_Struggle key="slide3" />;
      case 3: return <Slide4_Turn key="slide4" />;
      case 4: return <Slide5_Asset key="slide5" />;
      case 5: return <Slide6_Gap key="slide6" />;
      case 6: return <Slide7_CTA key="slide7" />;
      default: return null;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black font-sans selection:bg-brand-red selection:text-white">
      
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
