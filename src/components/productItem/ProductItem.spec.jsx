import { describe, expect, it } from 'vitest';
import ProductItem from './ProductItem';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('ProductItem', () => {
  it('should render correctly', () => {
    const product = {
      brand: 'Apple',
      id: '1',
      imgUrl: 'https://via.placeholder.com/150',
      model: 'iPhone 12',
      price: '799',
    };
    const sut = render(
      <MemoryRouter>
        <ProductItem product={product} />
      </MemoryRouter>
    );

    expect(sut).toMatchSnapshot();
  });
});
