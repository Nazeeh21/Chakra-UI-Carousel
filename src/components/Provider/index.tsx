import React, { createContext, useCallback, useMemo, useState } from "react";

export interface ContextType {
  trackIsActive: boolean;
  setTrackIsActive: (value: boolean) => void;
  multiplier: number;
  sliderWidth: number;
  activeItem: number;
  setActiveItem: (value: number) => void;
  constraint: number;
  initSliderWidth: (width: number) => void;
  itemWidth: number;
  setMultiplier: (value: number) => void;
  setConstraint: (value: number) => void;
  setItemWidth: (value: number) => void;
}

export const Context = createContext<ContextType | undefined>(undefined);

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [trackIsActive, setTrackIsActive] = useState(false);
  const [multiplier, setMultiplier] = useState(0.35);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [constraint, setConstraint] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const initSliderWidth = useCallback(
    (width: number) => setSliderWidth(width),
    []
  );

  const value = useMemo(
    () => ({
      trackIsActive,
      setTrackIsActive,
      multiplier,
      sliderWidth,
      activeItem,
      setActiveItem,
      constraint,
      initSliderWidth,
      itemWidth,
      setMultiplier,
      setItemWidth,
      setConstraint,
    }),
    [
      trackIsActive,
      setTrackIsActive,
      multiplier,
      sliderWidth,
      activeItem,
      setActiveItem,
      constraint,
      initSliderWidth,
      itemWidth,
      setMultiplier,
      setItemWidth,
      setConstraint,
    ]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
