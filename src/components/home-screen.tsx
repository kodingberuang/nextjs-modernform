"use client";

import { motion } from "motion/react";
import {
  Search,
  Menu,
  Home,
  MessageSquare,
  Sparkles,
  Settings,
  Plus,
  Bot,
  Cpu,
  SquareTerminal,
  Zap,
} from "lucide-react";

// Mock data for AI conversations
const RECENT_CONVERSATIONS = [
  {
    title: "Code Optimization",
    count: 24,
    icon: SquareTerminal,
    color: "text-amber-600",
  },
  {
    title: "Copywriting Assistant",
    count: 12,
    icon: Sparkles,
    color: "text-purple-600",
  },
  {
    title: "Data Analysis",
    count: 8,
    icon: Cpu,
    color: "text-blue-600",
  },
  {
    title: "General Chat",
    count: 45,
    icon: MessageSquare,
    color: "text-[#d97757]",
  },
];

const NAV_ITEMS = [
  { icon: Home, active: true },
  { icon: MessageSquare, active: false },
  { icon: Sparkles, active: false },
  { icon: Settings, active: false },
];

export default function HomeScreen() {
  return (
    <motion.div
      className="flex flex-col min-h-screen w-full bg-[#f9f7f2] relative font-sans text-[#1d1d1d]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 bg-[#f9f7f2] z-20 sticky top-0 border-b border-[#e5e1da]">
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 bg-white border border-[#e5e1da] text-[#1d1d1d] rounded-2xl flex items-center justify-center hover:bg-[#fafafa] transition-colors shadow-sm">
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-serif font-medium text-[#1d1d1d] tracking-tight">
            Me Bot
          </h1>
        </div>
        <button className="w-12 h-12 bg-white border border-[#e5e1da] rounded-full flex items-center justify-center hover:shadow-md transition-shadow p-0.5">
          <img
            src="https://i.pravatar.cc/100?img=3"
            alt="Avatar"
            className="w-full h-full rounded-full grayscale-[0.2]"
          />
        </button>
      </header>

      <main className="flex-1 px-6 pt-8 pb-32 max-w-md mx-auto w-full">
        {/* Chat input style search bar */}
        <div className="relative mb-12 group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Zap className="h-5 w-5 text-[#a1a1a1] group-focus-within:text-[#d97757] transition-colors" />
          </div>
          <input
            type="text"
            placeholder="How can I help you today?"
            className="w-full pl-14 pr-16 py-5 rounded-2xl border border-[#e5e1da] bg-white placeholder:text-[#a1a1a1] focus:ring-2 focus:ring-[#d97757]/20 focus:border-[#d97757] focus:outline-none transition-all text-base font-medium shadow-sm"
          />
          <button className="absolute inset-y-2.5 right-2.5 px-4 bg-[#1d1d1d] text-white rounded-xl flex items-center justify-center hover:bg-[#333333] transition-colors">
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Section title */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xs font-bold text-[#5c5c5c] uppercase tracking-[0.15em]">
            Recent Conversations
          </h2>
          <button className="text-xs font-bold text-[#d97757] hover:underline underline-offset-4 transition-all">
            View All
          </button>
        </div>

        {/* Conversation cards */}
        <div className="grid grid-cols-2 gap-6">
          {RECENT_CONVERSATIONS.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * idx,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e1da] flex flex-col gap-4 min-h-[180px] relative overflow-hidden cursor-pointer group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center relative z-10 bg-[#f9f7f2] border border-[#e5e1da] group-hover:border-[#d97757]/30 transition-colors`}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="font-serif font-medium text-[#1d1d1d] text-lg">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a1a1a1] font-bold uppercase tracking-wider mt-1">
                  {item.count} Messages
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Bottom Nav bar - Fixed */}
      <nav className="fixed bottom-8 inset-x-0 mx-auto max-w-[calc(100%-4rem)] h-20 border border-[#e5e1da] bg-white/95 flex justify-around items-center px-4 max-w-sm w-full z-30 shadow-lg rounded-3xl backdrop-blur-sm">
        {NAV_ITEMS.map((item, idx) => (
          <button
            key={idx}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all relative ${
              item.active
                ? "text-[#d97757]"
                : "text-[#a1a1a1] hover:text-[#5c5c5c]"
            }`}
          >
            <item.icon
              className={`w-6 h-6 transition-transform ${
                item.active ? "scale-110" : "scale-100"
              }`}
              strokeWidth={item.active ? 2 : 1.5}
            />
            {item.active && (
              <motion.div
                layoutId="nav-indicator"
                className="w-1 h-1 bg-[#d97757] rounded-full absolute bottom-2"
              />
            )}
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
