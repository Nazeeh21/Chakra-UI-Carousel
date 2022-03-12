import { Flex } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Context, ContextType } from "../Provider";

interface ItemPropsType {
  children: React.ReactNode;
  index: number;
  gap: number;
}

const Item: React.FC<ItemPropsType> = ({ index, gap, children }) => {
  const context = useContext(Context);

  const [userDidTab, setUserDidTab] = useState(false);

  const handleFocus = () => context?.setTrackIsActive(true);

  const handleBlur = () => {
    userDidTab && index + 1 === context?.positions.length && context?.setTrackIsActive(false);
    setUserDidTab(false);
  };

  const handleKeyUp = (event: any) =>
  event.key === "Tab" &&
    !(context?.activeItem === context?.positions?.length? - context!.constraint) &&
    context?.setActiveItem(index);

  const handleKeyDown = (event: any) =>
    event.key === "Tab" && setUserDidTab(true);

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
