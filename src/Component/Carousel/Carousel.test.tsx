import React from 'react';
import Carousel from './Carousel';
import renderer from 'react-test-renderer';
import { DemoComp } from './Carousel.stories'


describe('renders correctly', () => {
  it('Carousel renders correctly', () => {
    const container = renderer.create(<Carousel gap={3}>
      <DemoComp index={1} />
      <DemoComp index={2} />
      <DemoComp index={3} />
      <DemoComp index={4} />
    </Carousel>).toJSON();
    expect(container).toMatchSnapshot();
  });
});
