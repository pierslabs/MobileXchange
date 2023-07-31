import { describe, expect, it, vi } from 'vitest';
import ProductItem from './ProductItem';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    useContext: () => ({
      handleProductViewed: vi.fn(),
    }),
  };
});

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
