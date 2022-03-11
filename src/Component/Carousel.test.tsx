import React from 'react';
import Carousel from './Carousel';
import renderer from 'react-test-renderer';


describe('renders correctly', () => {
  it('Carousel renders correctly', () => {
    const container = renderer.create(<Carousel />).toJSON();
    expect(container).toMatchSnapshot();
  });
});
