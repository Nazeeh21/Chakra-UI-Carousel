import React from "react";
import Carousel from ".";
import { Story } from "@storybook/react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Provider } from "../Provider";
import LeftButton from "../LeftButton";
import RightButton from "../RightButton";

export default {
  title: "Carousel",
  component: Carousel,
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
};

export const DemoComp = ({ index }: { index: number }) => {
  return (
    <Box borderWidth={2} borderColor="black" w={"10rem"}>
      <Text>Component {index}</Text>
    </Box>
  );
};

export const Primary: Story = () => (
  <Provider>
    <Carousel gap={3}>
      <DemoComp index={1} />
      <DemoComp index={2} />
      <DemoComp index={3} />
      <DemoComp index={4} />
      <DemoComp index={5} />
      <DemoComp index={6} />
      <DemoComp index={7} />
      <DemoComp index={8} />
      <DemoComp index={9} />
      <DemoComp index={10} />
    </Carousel>
    <HStack
      display="flex"
      marginTop="10"
      justifyContent="center"
      gap="48"
      alignItems="center"
    >
      <LeftButton />
      <RightButton />
    </HStack>
  </Provider>
);
