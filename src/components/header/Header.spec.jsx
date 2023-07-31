import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    useContext: () => ({
      handleProductViewed: vi.fn(),
      cartProducts: 0,
    }),
  };
});

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    Link: () => <div data-testid='link'>MobileXchange</div>,
  };
});

describe('<Header>', () => {
  it('should be render', () => {
    const sut = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link = sut.getByTestId('link');
    expect(link).toBeDefined();
  });
});
