import React from "react";
import Carousel from ".";
import renderer from "react-test-renderer";
import { DemoComp } from "./Carousel.stories";
import { Provider } from "../Provider";
import { ChakraProvider } from "@chakra-ui/react";

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
