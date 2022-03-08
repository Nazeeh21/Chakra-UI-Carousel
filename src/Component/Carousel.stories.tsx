import React from "react";
import Carousel from "./Carousel";
import { Story } from "@storybook/react";

export default {
  title: "Carousel",
  component: Carousel,
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
};

export const Primary: Story = () => <Carousel />;
export const Seconday: Story = () => <Carousel />;
