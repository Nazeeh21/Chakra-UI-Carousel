# Chakra UI Carousel

<!-- This is a carousel library built using Chakra UI and customizable using Chakra props. -->

This is a Carousel library built using Chakra UI. You can pass all the chakra props to the Carousel buttons as well as you can place it wherver you want inside the `<Provider>` wrapper.

You can view the demo live [here](https://carousel-example.vercel.app/)

## Installation

```shell
$ yarn add @chakra-ui/react @emotion/react @emotion/styled @chakra-ui/icons framer-motion chakra-ui-carousel

# or

$ npm i @chakra-ui/react @emotion/react @emotion/styled @chakra-ui/icons framer-motion chakra-ui-carousel
```

## Prerequisites

After installing above libraries, you need to set up the ChakraProvider at the root of your application. This can be either in your `index.jsx`, `index.tsx` or `App.jsx` depending on the framework you use.

```jsx
import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  );
}
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
        <Carousel gap={50}>// Carousel content</Carousel>
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

### Note: If you find any issues, please open an issue on [here](https://github.com/Nazeeh21/Chakra-UI-Carousel/). Or if you want to propose a feature, feel free to open a PR.
