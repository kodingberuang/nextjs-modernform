"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type FlowState = "splash" | "home";

interface FlowContextType {
  state: FlowState;
  showAuth: boolean;
  isAuthenticated: boolean;
  setShowAuth: (show: boolean) => void;
  setAuthenticated: (auth: boolean) => void;
  setState: (state: FlowState) => void;
}

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export function FlowProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<FlowState>("splash");
  const [showAuth, setShowAuth] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState("home");
      if (!isAuthenticated) {
        setShowAuth(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isAuthenticated]);

  const value = {
    state,
    showAuth,
    isAuthenticated,
    setShowAuth,
    setAuthenticated,
    setState,
  };

  return <FlowContext.Provider value={value}>{children}</FlowContext.Provider>;
}

export function useFlow() {
  const context = useContext(FlowContext);
  if (context === undefined) {
    throw new Error("useFlow must be used within a FlowProvider");
  }
  return context;
}
