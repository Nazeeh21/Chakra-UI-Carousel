import { Box, Text } from "@chakra-ui/react";
import { Story } from "@storybook/react";
import React from "react";
import Carousel from ".";

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
  <Carousel gap={3}>
    <Box>Carousel</Box> <Box>Carousel 2</Box>
  </Carousel>
);
