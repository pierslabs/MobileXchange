import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para tener expectativas personalizadas
import Search from './Search';

import { describe, expect, test, vi } from 'vitest';

describe('Search Component', () => {
  test('renders input element with proper props', () => {
    const setSearchText = vi.fn();
    const searchText = 'Test Search';

    const sut = render(
      <Search setSearchText={setSearchText} searchText={searchText} />
    );

    sut.debug();

    const inputElement = sut.getByPlaceholderText('Buscar productos...');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(searchText);
  });
});
