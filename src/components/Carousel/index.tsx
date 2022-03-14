import { useMediaQuery, useTheme } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Item from "../Item";
import { Context, ContextType } from "../Provider";
import Track from "../Track";

export interface CarouselPropTypes {
  children: React.ReactNode[];
  gap: number;
}

const Carousel: React.FC<CarouselPropTypes> = ({ children, gap }) => {
  const context = useContext(Context);

  const {
    setItemWidth,
    sliderWidth,
    setMultiplier,
    setConstraint,
    itemWidth,
    setPositions,
  } = context as ContextType;

  const { breakpoints } = useTheme();

  useEffect(() => {
    const newPositions = children?.map(
      (_, index) => -Math.abs((itemWidth + gap) * index)
    );

    setPositions(newPositions);
  }, [children, gap, itemWidth, setPositions]);

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
  }, [
    isBetweenBaseAndMd,
    isBetweenMdAndXl,
    isGreaterThanXL,
    sliderWidth,
    gap,
    setItemWidth,
    setMultiplier,
    setConstraint,
  ]);

  return (
    <Track>
      {children.map((child, index) => (
        <Item gap={gap} key={index} index={index}>
          {child}
        </Item>
      ))}
    </Track>
  );
};

export default Carousel;
