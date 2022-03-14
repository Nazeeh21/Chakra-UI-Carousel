import { Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import React, { useContext } from "react";
import { Context, ContextType } from "../Provider";

const LeftButton = () => {
  const context = useContext(Context)

  const { setTrackIsActive, activeItem, constraint, positions, setActiveItem } = context as ContextType;

  const handleFocus = () => setTrackIsActive(true);

  const handleDecrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - constraint) &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
      setActiveItem((prev: number) => {
        return (prev - 1)
      });
  };
  return (
    <>
      <Button
        onClick={handleDecrementClick}
        onFocus={handleFocus}
        zIndex={2}
        minW={0}
      >
        <ChevronLeftIcon boxSize={9} />
      </Button>
    </>
  );
};

export default LeftButton;
