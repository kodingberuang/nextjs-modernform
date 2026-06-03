"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Props {
  onContinue: () => void;
}

export default function GetStartedOverlay({ onContinue }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-40 bg-[#f9f7f2]/60 flex flex-col justify-end p-8"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-[#e5e1da] relative mb-10 font-sans max-w-xl mx-auto w-full"
      >
        <h2 className="text-4xl font-serif font-medium text-[#1d1d1d] mb-5 tracking-tight leading-[1.2]">
          Refine <br />your workspace
        </h2>
        <p className="text-lg text-[#5c5c5c] font-medium leading-relaxed mb-12">
          Sign in to start aligning your projects with a touch of calm, productive minimalism.
        </p>

        <button
          onClick={onContinue}
          className="w-full bg-[#1d1d1d] hover:bg-[#333333] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.99] shadow-md text-[15px] tracking-wide"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}
