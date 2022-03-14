import { Flex } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Context } from "../Provider";

interface ItemPropsType {
  children: React.ReactNode;
  index: number;
  gap: number;
}

const Item: React.FC<ItemPropsType> = ({ index, gap, children }) => {
  const context = useContext(Context);

  const [didUserTab, setDidUserTab] = useState(false);

  const handleFocus = () => context?.setTrackIsActive(true);

  const handleBlur = () => {
    didUserTab &&
      index + 1 === context?.positions.length &&
      context?.setTrackIsActive(false);
    setDidUserTab(false);
  };

  const handleKeyUp: React.KeyboardEventHandler<HTMLDivElement> | undefined = (
    event
  ) => {
    if (!context) return;

    const { activeItem, positions, constraint } = context;
    return (
      event.key === "Tab" &&
      !(activeItem === positions?.length - constraint) &&
      context?.setActiveItem(index)
    );
  };

  const handleKeyDown:
    | React.KeyboardEventHandler<HTMLDivElement>
    | undefined = (event) => event.key === "Tab" && setDidUserTab(true);

  return (
    <Flex
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      w={`${context?.itemWidth}px`}
      _notLast={{
        mr: `${gap}px`,
      }}
      py="4px"
    >
      {children}
    </Flex>
  );
};

export default Item;
