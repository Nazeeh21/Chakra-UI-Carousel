import React from "react";
import { Provider } from "./Provider";

interface CarouselPropTypes {
  children: React.ReactNode[];
  gap: number;
}

const Carousel: React.FC<CarouselPropTypes> = ({ children, gap }) => {
  return <Provider gap={gap}>{children}</Provider>;
};

export default Carousel;
