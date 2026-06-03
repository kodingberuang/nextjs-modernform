"use client";

import { AnimatePresence } from "motion/react";
import SplashScreen from "@/components/splash-screen";
import HomeScreen from "@/components/home-screen";
import AuthOverlay from "@/components/auth-overlay";
import GetStartedOverlay from "@/components/get-started-overlay";
import { useFlow, FlowProvider } from "@/store/flow-context";

function AppContent() {
  const { state, showAuth, setShowAuth, setAuthenticated } = useFlow();

  const handleAuthComplete = () => {
    setShowAuth(false);
    setAuthenticated(true);
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 overscroll-none overflow-x-hidden flex justify-center selection:bg-blue-200">
      <div className="w-full max-w-md mx-auto shadow-2xl shadow-slate-200/50 min-h-screen relative overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          {state === "splash" ? (
            <SplashScreen key="splash" />
          ) : (
            <HomeScreen key="home" />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showAuth && (
            <GetStartedOverlay
              key="get-started"
              onContinue={() => setShowAuth(false)} // This is a bit different from original, let's refine
            />
          )}
        </AnimatePresence>

        {/* Adjusting the flow: Original App had setShowAuth(true) which showed AuthOverlay. 
            In my implementation of AppContent, I'll match the logic. */}
      </div>
    </div>
  );
}

// I noticed the original App.tsx had:
// {showSplash ? <SplashScreen /> : <HomeScreen />}
// and {showAuth && <AuthOverlay onComplete={...} />}
// But it also had a timer that set showAuth(true) if !isAuthenticated.

// Let's refine the page to match the exact flow but better organized.

function RefinedAppContent() {
  const { state, showAuth, setShowAuth, setAuthenticated, isAuthenticated } =
    useFlow();

  return (
    <div className="w-full min-h-screen bg-slate-50 flex justify-center selection:bg-blue-200">
      <div className="w-full max-w-md mx-auto shadow-2xl shadow-slate-200/50 min-h-screen relative overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          {state === "splash" ? (
            <SplashScreen key="splash" />
          ) : (
            <HomeScreen key="home" />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showAuth && !isAuthenticated && (
            <AuthOverlay
              key="auth"
              onComplete={() => {
                setShowAuth(false);
                setAuthenticated(true);
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <FlowProvider>
      <RefinedAppContent />
    </FlowProvider>
  );
}
