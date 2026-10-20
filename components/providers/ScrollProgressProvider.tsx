"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getScrollProgress } from "@/lib/scroll-progress";

type ScrollProgressContextValue = {
  progress: number;
};

const ScrollProgressContext = createContext<ScrollProgressContextValue>({
  progress: 0,
});

export function useScrollProgress() {
  return useContext(ScrollProgressContext).progress;
}

export function ScrollProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => setProgress(getScrollProgress());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ScrollProgressContext.Provider value={{ progress }}>
      {children}
    </ScrollProgressContext.Provider>
  );
}
