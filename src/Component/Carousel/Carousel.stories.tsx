import React from "react";
import Carousel from "./Carousel";
import { Story } from "@storybook/react";
import { Box, Text } from "@chakra-ui/react";

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
    <Box borderWidth={2} borderColor='black' w={'10rem'}>
      <Text>Component {index}</Text>
    </Box>
  );
};

export const Primary: Story = () => (
  <Carousel gap={3}>
    <DemoComp index={1} />
    <DemoComp index={2} />
    <DemoComp index={3} />
    <DemoComp index={4} />
  </Carousel>
);
