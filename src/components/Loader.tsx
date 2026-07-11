"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base-950"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative h-14 w-14">
              <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent-blue border-r-accent-purple" />
              <span className="absolute inset-2 rounded-full bg-grad-primary opacity-70 blur-sm" />
            </div>
            <p className="font-mono text-xs tracking-[0.3em] text-white/50">
              LOADING PORTFOLIO
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
