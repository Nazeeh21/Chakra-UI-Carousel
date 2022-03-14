import React from "react";
import Item from "../Item";
import { Provider } from "../Provider";

export interface CarouselPropTypes {
  children: React.ReactNode[];
  gap: number;
}

const Carousel: React.FC<CarouselPropTypes> = ({ children, gap }) => {
  return (
    <Provider gap={gap}>
      {children.map((child, index) => (
        <Item gap={gap} key={index} index={index}>
          {child}
        </Item>
      ))}
    </Provider>
  );
};

export default Carousel;
