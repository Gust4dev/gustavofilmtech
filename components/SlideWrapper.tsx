import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
  showFlare?: boolean;
  showLogo?: boolean;
  logoSize?: string; // e.g., "8vmin"
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ 
  children, 
  className = "",
  showFlare = false,
  showLogo = false,
  logoSize = "15vmin" // Increased default size
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for premium feel
      className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden ${className}`}
    >
      {showLogo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-[4vmin] right-[4vmin] z-0 pointer-events-none select-none"
        >
          <img 
            src="/images/logobranca.webp" 
            alt="FilmTech Educação" 
            style={{ height: logoSize }}
            className="w-auto object-contain"
          />
        </motion.div>
      )}

      {showFlare && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          {/* Top Right Flare */}
          <div 
            className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-20"
            style={{ background: 'radial-gradient(circle, #DC2626 0%, transparent 70%)' }}
          />
          {/* Bottom Left Flare */}
          <div 
            className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-15"
            style={{ background: 'radial-gradient(circle, #DC2626 0%, transparent 70%)' }}
          />
          {/* Subtle Center Flare */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[150px] opacity-[0.03]"
            style={{ background: 'radial-gradient(circle, #DC2626 0%, transparent 70%)' }}
          />
        </div>
      )}

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
};

export const TextReveal: React.FC<{ children: ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + 0.3, ease: "easeOut" }}
      className={className}
      style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
    >
      {children}
    </motion.div>
  );
};
