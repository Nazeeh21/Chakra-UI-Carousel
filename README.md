# Chakra UI Carousel

<!-- This is a carousel library built using Chakra UI and customizable using Chakra props. -->

This is a Carousel library built using Chakra UI. Currently it is not much customizable by passing the Chakra props, but we are planning to add it in the furthur releases.

### Note: This lib is in Beta and is not recommended to use in production. If you find any issues, please open an issue on [here](https://github.com/Nazeeh21/Chakra-UI-Carousel/). Or if you want to propose a feature, feel free to open a PR.

## Installation

```shell
$ yarn add chakra-ui-carousel

# or

$ npm i chakra-ui-carousel
```

## Usage

To use the Carousel, please follow the steps below:

1. Wrap your carousel content with the `<Provider>` component.

```tsx
import { Provider } from "chakra-ui-carousel";

function Example() {
  return (
    <Box>
      <Provider>// Carousel content</Provider>
    </Box>
  );
}
```

2. Move your Carousel contents to the `Carousel` component imported from `chakra-ui-carousel` library. You need to pass the gap between the slides as a prop.

```tsx
import { Carousel } from "chakra-ui-carousel";

function Example() {
  return (
    <Box>
      <Provider>
        <Carousel>// Carousel content</Carousel>
      </Provider>
    </Box>
  );
}
```

3. Add `LeftButton` and `RightButton` components to your Carousel to control the current element on the Carousel. You can display these buttons anywhere around your carousel, just make sure that these buttons should be in the `Provider` Wrapper.
   You can also pass `gap` as a props to the `Carousel` component to control the gap between the individual elements.

```tsx
import { LeftButton, RightButton } from "chakra-ui-carousel";

function Example() {
  return (
    <Box>
      <Provider>
        <Carousel gap={50}>// Carousel content</Carousel>
        <LeftButton />
        <RightButton />
      </Provider>
    </Box>
  );
}
```

4. You can also pass all the props that are available in the `Button` component of Chakra UI to the `LeftButton` and `RightButton` component.

```tsx
import { LeftButton, RightButton } from "chakra-ui-carousel";

function Example() {
  return (
    <Box>
      <Provider>
        <Carousel gap={50}>// Carousel content</Carousel>
        <LeftButton bgColor="red.500" textColor="white" />
        <RightButton bgColor="blue.500" />
      </Provider>
    </Box>
  );
}
```

5. You can pass custom button components to the `LeftButton` and `RightButton` component.

```tsx
import { LeftButton, RightButton } from "chakra-ui-carousel";

function Example() {
  return (
    <Box>
      <Provider>
        <Carousel gap={50}>// Carousel content</Carousel>
        <LeftButton
          bgColor="red.500"
          customIcon={<ArrowLeftIcon />}
          textColor={"white.500"}
        />
        <RightButton bgColor="blue.500" customIcon={<ArrowRightIcon />} />
      </Provider>
    </Box>
  );
}
```
