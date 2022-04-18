# Chakra UI Carousel

<!-- This is a carousel library built using Chakra UI and customizable using Chakra props. -->

This is a Carousel library built using Chakra UI. Currently it is not much customizable by passing the Chakra props, but we are planning to add it in the furthur releases.

## Note: This lib is in **beta** and is not recommended to use in production. If you find any issues, please open an issue on [GitHub](https://github.com/Nazeeh21/Chakra-UI-Carousel/). Or if you want to propose a feature, please open a PR on [GitHub](https://github.com/Nazeeh21/Chakra-UI-Carousel/)

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

```tsx
import { LeftButton, RightButton } from "chakra-ui-carousel";

function Example() {
  return (
    <Box>
      <Provider>
        <Carousel>// Carousel content</Carousel>
        <LeftButton />
        <RightButton />
      </Provider>
    </Box>
  );
}
```
