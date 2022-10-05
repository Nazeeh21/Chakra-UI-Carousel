import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { Story } from "@storybook/react";
import React from "react";
import { Carousel } from ".";
import { LeftButton } from "../LeftButton";
import { Provider } from "../Provider";
import { RightButton } from "../RightButton";

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
    <Flex
      key={index}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      justifyContent="space-between"
      flexDirection="column"
      overflow="hidden"
      color="gray.300"
      bg="base.d100"
      rounded={5}
      flex={1}
      p={5}
      id={`carousel-item-${index}`}
    >
      <Heading color="blue">Title {index}</Heading>
      <Flex justify="space-between">
        <Text color="green">Body {index}</Text>
        <Text color="gray">user {index}</Text>
      </Flex>
    </Flex>
  );
};

export const Primary: Story = () => (
  <Provider>
    <Carousel gap={50}>
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
      justifyContent="space-between"
      gap="48"
      alignItems="center"
    >
      <LeftButton bgColor='red.500' textColor={'whatsapp.500'} />
      <RightButton bgColor='blue.500' />
    </HStack>
  </Provider>
);


export const CustomButtons: Story = () => (
  <Provider>
    <Carousel gap={50}>
      <DemoComp index={1} />
      <DemoComp index={2} />
      <DemoComp index={3} />
    </Carousel>
    <HStack
      display="flex"
      marginTop="10"
      justifyContent="space-between"
      gap="48"
      alignItems="center"
    >
      <LeftButton bgColor='red.500' customIcon={<ArrowLeftIcon />} textColor={'whatsapp.500'} />
      <RightButton bgColor='blue.500' customIcon={<ArrowRightIcon />}  />
    </HStack>
    </Provider>
)