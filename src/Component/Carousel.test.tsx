import React from 'react';
import { render } from '@testing-library/react';
import Carousel from './Carousel';

describe('renders correctly', () => {
  it('Carousel renders correctly', () => {
    const { container } = render(<Carousel />);
    expect(container);
  });
});
