"use client";

import { motion } from "motion/react";
import { MessageCircleCode } from "lucide-react";

export default function SplashScreen() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen w-full bg-[#f9f7f2] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mb-10 relative flex items-center justify-center"
      >
        <div className="w-20 h-20 bg-[#d97757] rounded-2xl shadow-sm flex items-center justify-center relative z-10">
          <MessageCircleCode className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#1d1d1d] text-4xl font-serif font-medium tracking-tight mb-3"
      >
        Me Bot
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#5c5c5c] text-base font-sans font-medium tracking-widest uppercase"
      >
        Your AI Assistant
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-20 flex gap-3"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#d97757]"
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
