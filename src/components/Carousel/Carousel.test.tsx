import React from "react";
import { Carousel } from ".";
import renderer from "react-test-renderer";
import { DemoComp } from "./Carousel.stories";
import { Provider } from "../Provider";
import { ChakraProvider } from "@chakra-ui/react";
import { LeftButton } from "../LeftButton";
import { RightButton } from "../RightButton";

describe("renders correctly", () => {
  it("Carousel renders correctly", () => {
    const container = renderer
      .create(
        <ChakraProvider>
          <Provider>
            <Carousel gap={3}>
              <DemoComp index={1} />
              <DemoComp index={2} />
              <DemoComp index={3} />
              <DemoComp index={4} />
            </Carousel>
          </Provider>
        </ChakraProvider>
      )
      .toJSON();
    expect(container).toMatchSnapshot();
  });
});

describe("active item changes successfully", () => {
  xit('active index increases by 1 when "next" button is clicked', () => {
    const container = renderer.create(
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
        <LeftButton />
        <RightButton />
      </Provider>
    ).toJSON();
    expect(container).toMatchSnapshot();
  });
});
