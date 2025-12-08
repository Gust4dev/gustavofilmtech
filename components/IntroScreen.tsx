import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SmoothImage } from './SmoothImage';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      onClick={() => {
        // Attempt to enter full screen
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.log("Full screen denied:", err);
            });
        }
        onStart();
      }}
    >
      {/* Animated Background - Speed Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-b from-transparent via-brand-red to-transparent w-[1px] h-[40%]"
            style={{
              left: `${Math.random() * 100}%`,
              top: -100,
            }}
            animate={{
              top: ['120%', '-20%'],
            }}
            transition={{
              duration: Math.random() * 2 + 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Glowing Effect */}
          <div className="absolute inset-0 bg-brand-red/30 blur-3xl rounded-full animate-pulse" />
          
          <SmoothImage
            src="/images/logoF.png"
            alt="FilmTech Logo"
            className="w-32 md:w-48 h-auto relative z-10 drop-shadow-2xl"
          />
        </motion.div>


      </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-brand-red" />
          </motion.div>
        </motion.div>
    </motion.div>
  );
};
