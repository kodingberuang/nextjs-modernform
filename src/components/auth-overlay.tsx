"use client";

import { motion, AnimatePresence } from "motion/react";
import { Mail, Lock, User, ArrowRight, X, Eye, EyeOff } from "lucide-react";
import { useAuthForm } from "@/hooks/use-auth-form";

interface Props {
  onComplete: () => void;
}

export default function AuthOverlay({ onComplete }: Props) {
  const { isLogin, showPassword, handleSubmit, toggleMode, togglePassword } =
    useAuthForm(onComplete);

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 z-50 bg-[#f9f7f2] font-sans flex flex-col overflow-y-auto"
    >
      <button
        onClick={onComplete}
        className="absolute top-10 right-10 w-12 h-12 flex items-center justify-center bg-white border border-[#e5e1da] text-[#5c5c5c] hover:text-[#1d1d1d] rounded-2xl transition-all z-10 shadow-sm"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex-1 flex flex-col justify-center px-6 py-16 max-w-md mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl font-serif font-medium text-[#1d1d1d] tracking-tight mb-5 leading-tight">
            {isLogin ? "Welcome Back" : "Start a Conversation"}
          </h2>
          <p className="text-lg font-medium text-[#5c5c5c] leading-relaxed">
            {isLogin
              ? "Sign in to continue your minimalist experience."
              : "Create an account to start a new journey with us."}
          </p>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.form
            key={isLogin ? "login" : "register"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {!isLogin && (
              <div className="relative group">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full px-6 py-5 bg-white border border-[#e5e1da] rounded-2xl text-[#1d1d1d] placeholder:text-[#a1a1a1] focus:outline-none focus:ring-2 focus:ring-[#d97757]/20 focus:border-[#d97757] transition-all font-medium text-[15px] shadow-sm"
                />
              </div>
            )}

            <div className="relative group">
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-6 py-5 bg-white border border-[#e5e1da] rounded-2xl text-[#1d1d1d] placeholder:text-[#a1a1a1] focus:outline-none focus:ring-2 focus:ring-[#d97757]/20 focus:border-[#d97757] transition-all font-medium text-[15px] shadow-sm"
              />
            </div>

            <div className="relative group">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                className="w-full px-6 pr-14 py-5 bg-white border border-[#e5e1da] rounded-2xl text-[#1d1d1d] placeholder:text-[#a1a1a1] focus:outline-none focus:ring-2 focus:ring-[#d97757]/20 focus:border-[#d97757] transition-all font-medium text-[15px] shadow-sm"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute inset-y-0 right-5 flex items-center text-[#a1a1a1] hover:text-[#d97757] transition-colors"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {isLogin && (
              <div className="text-right -mt-2">
                <button
                  type="button"
                  className="text-sm font-medium text-[#5c5c5c] hover:text-[#d97757] transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#d97757] hover:bg-[#c66a4d] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.99] shadow-sm mt-4 text-[15px] tracking-wide"
            >
              {isLogin ? "Sign In" : "Sign Up"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.form>
        </AnimatePresence>

        <div className="mt-14">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#e5e1da]"></div>
            </div>
            <div className="relative flex justify-center text-[11px]">
              <span className="px-6 bg-[#f9f7f2] text-[#a1a1a1] font-bold tracking-[0.1em] uppercase">
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex justify-center items-center py-5 px-5 bg-white border border-[#e5e1da] rounded-2xl hover:bg-[#fafafa] transition-all text-[#1d1d1d] font-bold text-sm shadow-sm"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex justify-center items-center py-5 px-5 bg-white border border-[#e5e1da] rounded-2xl hover:bg-[#fafafa] transition-all text-[#1d1d1d] font-bold text-sm shadow-sm"
            >
              <svg className="w-5 h-5 mr-3 -mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.05 2.59.88 3.28.88.65 0 2.11-.96 3.73-.83 1.25.07 2.39.54 3.21 1.4-2.58 1.48-2.14 4.98.54 6.07-.63 1.61-1.39 3.2-2.76 5.45zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.4-2.01 4.54-3.74 4.25z" />
              </svg>
              Apple
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-[#5c5c5c] font-medium tracking-wide">
            {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
            <button
              onClick={toggleMode}
              className="text-[#d97757] font-bold hover:underline underline-offset-4 decoration-2 transition-all ml-1"
            >
              {isLogin ? "Daftar sekarang" : "Masuk"}
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
