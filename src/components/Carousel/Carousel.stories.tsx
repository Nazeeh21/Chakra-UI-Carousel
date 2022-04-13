import {
  Button,
  Flex,
  Heading,
  HStack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Story } from "@storybook/react";
import React from "react";
import Carousel from ".";
import LeftButton from "../LeftButton";
import { Provider } from "../Provider";
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
    >
      <VStack mb={6}>
        <Heading
          fontSize={{ base: "xl", md: "2xl" }}
          textAlign="left"
          w="full"
          mb={2}
        >
          Title {index}
        </Heading>
        <Text w="full">Body {index}</Text>
      </VStack>

      <Flex justifyContent="space-between">
        <HStack spacing={2}>
          <Tag size="sm" variant="outline" colorScheme="green">
            User: userId
          </Tag>
          <Tag size="sm" variant="outline" colorScheme="cyan">
            Post: {`${index}`} clicked
          </Tag>
        </HStack>
        <Button
          onClick={() => alert(`Post ${index} clicked`)}
          colorScheme="green"
          fontWeight="bold"
          color="gray.900"
          size="sm"
        >
          More
        </Button>
      </Flex>
    </Flex>
  );
};

export const Primary: Story = () => (
  <Provider>
    <Carousel gap={10}>
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
      <LeftButton />
      <RightButton />
    </HStack>
  </Provider>
);
