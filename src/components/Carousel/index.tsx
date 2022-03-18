import { Flex } from "@chakra-ui/react";
import React from "react";

export interface CarouselPropTypes {
  children: React.ReactNode[];
  gap: number;
}

const Carousel: React.FC<CarouselPropTypes> = ({ children, gap }) => {
  return <Flex gap={gap}>{children}</Flex>;
};

export default Carousel;
