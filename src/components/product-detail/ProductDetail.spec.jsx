import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import ProductDetail from './ProductDetail';
import useProductDetail from './useProductDetail';

describe('<ProductDetail>', () => {
  it('ProductDetail displays correct product details', () => {
    const product = {
      brand: 'Test Brand',
      model: 'Test Model',
      price: '1000',
      cpu: 'Test CPU',
      ram: 'Test RAM',
      os: 'Test OS',
      displayResolution: 'Test Resolution',
      battery: 'Test Battery',
      primaryCamera: 'Test Camera',
      dimentions: 'Test Dimentions',
      weight: 'Test Weight',
    };

    const { transformProduct } = useProductDetail({ product });

    const { getAllByRole } = render(<ProductDetail product={product} />);

    const heading = getAllByRole('heading');
    expect(heading).toBeDefined();

    expect(heading[0].textContent).toBe('Test Brand');
    expect(heading[1].textContent).toBe('Test Model');
    expect(heading[2].textContent).toBe('Test RAM');

    const ul = getAllByRole('list');
    expect(ul).toBeDefined();

    for (const key of Object.keys(transformProduct)) {
      expect(ul[0].textContent).toContain(transformProduct[key]);
    }
  });
});
