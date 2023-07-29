import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Header from './Header';

vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    useContext: () => ({
      cartProducts: 0,
    }),
  };
});

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    Link: () => <div data-testId='link'>MobileXchange</div>,
  };
});

describe('<Header>', () => {
  it('should be render', () => {
    const sut = render(<Header />);
    const link = sut.getByTestId('link');
    expect(link).toBeDefined();
    expect(link.textContent).toBe('MobileXchange');
  });
});
