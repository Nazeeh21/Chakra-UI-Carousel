import { Box } from "@chakra-ui/react";
import React, { useContext, useLayoutEffect } from "react";
import { useBoundingclientrectRef } from "rooks";
import { Context, ContextType } from "../Provider";

interface SliderPropsType {
  children: React.ReactNode;
  gap: number;
}

const Slider: React.FC<SliderPropsType> = ({ children, gap }) => {
  const context = useContext(Context);

  const { initSliderWidth } = context as ContextType;
  

  const [myRef, boundingClientRect] = useBoundingclientrectRef();

  useLayoutEffect(
    () => initSliderWidth(Math.round(boundingClientRect?.width ?? 0)),
    [boundingClientRect?.width, initSliderWidth]
  );


  return (
    <>
      <Box
        ref={myRef}
        w={{ base: "100%", md: `calc(100% + ${gap}px)` }}
        ml={{ base: 0, md: `-${gap / 2}px` }}
        px={`${gap / 2}px`}
        position="relative"
        overflow="hidden"
        _before={{
          bgGradient: "linear(to-r, base.d400, transparent)",
          position: "absolute",
          w: `${gap / 2}px`,
          content: "''",
          zIndex: 1,
          h: "100%",
          left: 0,
          top: 0,
        }}
        _after={{
          bgGradient: "linear(to-l, base.d400, transparent)",
          position: "absolute",
          w: `${gap / 2}px`,
          content: "''",
          zIndex: 1,
          h: "100%",
          right: 0,
          top: 0,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Slider;
