import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CONFIG } from "../constants/config";

export const DigitalLock: React.FC = () => {
  useEffect(() => {
    // Prevent scrolling when the lock is active
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 w-full h-full bg-[#0a0a0a] z-[9999999] flex items-center justify-center p-6 text-white text-center font-sans selection:bg-brand-red selection:text-white"
    >
      <div className="max-w-[500px] w-full space-y-8">
        {/* Visual Indicator - Premium Accent */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="h-1 bg-brand-red mx-auto"
        />

        <div className="space-y-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl font-light tracking-widest uppercase"
          >
            {CONFIG.LOCK_TITLE}
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 leading-relaxed font-light text-sm md:text-base"
          >
            {CONFIG.LOCK_MESSAGE}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="pt-12"
        >
          <p className="text-[10px] md:text-xs text-gray-600 tracking-widest uppercase font-mono">
            ID de Erro: {CONFIG.LOCK_ERROR_ID}
          </p>
        </motion.div>
      </div>

      {/* Subtle Background Detail */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />
    </motion.div>
  );
};
