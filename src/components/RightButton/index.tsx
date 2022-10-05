import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonProps,
  ComponentWithAs,
  IconProps,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Context, ContextType } from "../Provider";

interface CustomButtonProps extends ButtonProps {
  customIcon?: ComponentWithAs<"svg", IconProps> | React.Element;
}

export const RightButton = ({ customIcon, ...props }: CustomButtonProps) => {
  const context = useContext(Context);

  const { setTrackIsActive, activeItem, constraint, positions, setActiveItem } =
    context as ContextType;

  const handleFocus = () => setTrackIsActive(true);

  const handleIncrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - constraint) &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setActiveItem((prev: number) => prev + 1);
  };
  return (
    <>
      <Button
        {...props}
        onClick={handleIncrementClick}
        onFocus={handleFocus}
        zIndex={2}
        minW={0}
      >
        {customIcon ? (
          <Box>{customIcon}</Box>
        ) : (
          <ChevronRightIcon boxSize={9} />
        )}
      </Button>
    </>
  );
};
