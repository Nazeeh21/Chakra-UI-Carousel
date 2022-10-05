import {
  Box,
  Button,
  ButtonProps,
  ComponentWithAs,
  IconProps,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import React, { useContext } from "react";
import { Context, ContextType } from "../Provider";

interface CustomButtonProps extends ButtonProps {
  customIcon?: ComponentWithAs<"svg", IconProps> | React.Element;
}

export const LeftButton = ({
  customIcon,
  ...props
}: CustomButtonProps ) => {
  const context = useContext(Context);

  const { setTrackIsActive, activeItem, positions, setActiveItem } =
    context as ContextType;

  const handleFocus = () => setTrackIsActive(true);

  const handleDecrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - positions.length) &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setActiveItem((prev: number) => prev - 1);
  };
  return (
    <>
      <Button
        {...props}
        onClick={handleDecrementClick}
        onFocus={handleFocus}
        zIndex={2}
        minW={0}
      >
        {customIcon ? <Box>{customIcon}</Box> : <ChevronLeftIcon boxSize={9} />}
      </Button>
    </>
  );
};
