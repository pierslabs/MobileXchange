import { describe, it, expect } from 'vitest';
import useProductDetail from './useProductDetail';

describe('useProductDetail hook', () => {
  it('should return correct data', () => {
    const product = {
      brand: 'Test Brand',
      model: 'Test Model',
      price: '100',
      cpu: 'Test CPU',
      ram: 'Test RAM',
      os: 'Test OS',
      displayResolution: 'Test Resolution',
      battery: 'Test Battery',
      primaryCamera: 'Test Camera',
      dimentions: 'Test Dimentions',
      weight: 'Test Weight',
    };

    const { randomReviews, transformProduct, price } = useProductDetail({
      product,
    });

    expect(typeof randomReviews).toBe('number');
    expect(typeof price).toBe('number');

    expect(Object.keys(transformProduct).length).toBe(11);
    expect(transformProduct.Brand).toBe('Test Brand');
    expect(transformProduct.Model).toBe('Test Model');
    expect(transformProduct.Price).toBe(100);
    expect(transformProduct.CPU).toBe('Test CPU');
    expect(transformProduct.RAM).toBe('Test RAM');
    expect(transformProduct['O.S.']).toBe('Test OS');
    expect(transformProduct['Display resolution']).toBe('Test Resolution');
    expect(transformProduct.Battery).toBe('Test Battery');
    expect(transformProduct['Primary camera']).toBe('Test Camera');
    expect(transformProduct.Dimentions).toBe('Test Dimentions');
    expect(transformProduct.Weight).toBe('Test Weight');
  });
});
