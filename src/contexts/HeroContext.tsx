import { createContext, useContext, useState, ReactNode } from "react";

type HeroVariant = "default" | "demo2";

interface HeroContextType {
  heroVariant: HeroVariant;
  setHeroVariant: (variant: HeroVariant) => void;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export function HeroProvider({ children }: { children: ReactNode }) {
  const [heroVariant, setHeroVariant] = useState<HeroVariant>(
    (localStorage.getItem("heroVariant") as HeroVariant) || "default"
  );

  const updateHeroVariant = (variant: HeroVariant) => {
    setHeroVariant(variant);
    localStorage.setItem("heroVariant", variant);
  };

  return (
    <HeroContext.Provider value={{ heroVariant, setHeroVariant: updateHeroVariant }}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHero() {
  const context = useContext(HeroContext);
  if (context === undefined) {
    throw new Error("useHero must be used within a HeroProvider");
  }
  return context;
}
