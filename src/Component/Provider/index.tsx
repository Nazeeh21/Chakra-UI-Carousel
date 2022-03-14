import { useMediaQuery, useTheme } from "@chakra-ui/react";
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Track from "../Track";

export interface ContextType {
  trackIsActive: boolean;
  setTrackIsActive: (value: boolean) => void;
  multiplier: number;
  sliderWidth: number;
  activeItem: number;
  setActiveItem: (value: number) => void;
  constraint: number;
  initSliderWidth: (width: number) => void;
  positions: number[];
  itemWidth: number;
}

export const Context = createContext<ContextType | undefined>(undefined);

interface ProviderProps {
  children: React.ReactNode[];
  gap: number;
}

export const Provider: React.FC<ProviderProps> = ({ children, gap }) => {
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

  const positions = useMemo(
    () => children?.map((_, index) => -Math.abs((itemWidth + gap) * index)),
    [children, itemWidth, gap]
  );

  const { breakpoints } = useTheme();

  const [isBetweenBaseAndMd] = useMediaQuery(
    `(min-width: ${breakpoints?.base}) and (max-width: ${breakpoints?.md})`
  );

  const [isBetweenMdAndXl] = useMediaQuery(
    `(min-width: ${breakpoints?.md}) and (max-width: ${breakpoints?.xl})`
  );

  const [isGreaterThanXL] = useMediaQuery(`(min-width: ${breakpoints?.xl})`);

  useEffect(() => {
    if (isBetweenBaseAndMd) {
      setItemWidth(sliderWidth - gap);
      setMultiplier(0.65);
      setConstraint(1);
    }
    if (isBetweenMdAndXl) {
      setItemWidth(sliderWidth / 2 - gap);
      setMultiplier(0.5);
      setConstraint(2);
    }
    if (isGreaterThanXL) {
      setItemWidth(sliderWidth / 3 - gap);
      setMultiplier(0.35);
      setConstraint(3);
    }
  }, [isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL, sliderWidth, gap]);

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
      positions,
      itemWidth,
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
      positions,
      itemWidth,
    ]
  );

  return (
    <Context.Provider value={value}>
      <Track>{children}</Track>
    </Context.Provider>
  );
};
