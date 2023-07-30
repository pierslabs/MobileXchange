import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import EmptyState from './EmtyState';

describe('<EmptyState>', () => {
  it('should render the component with message prop', () => {
    const message = 'No products found';
    const sut = render(<EmptyState message={message} />);

    const p = sut.getAllByTestId('empty-state-message');

    expect(p[0].textContent).toBe(message);
  });

  it('should render the component without message prop', () => {
    const sut = render(<EmptyState />);

    const p = sut.getAllByTestId('empty-state-message');

    expect(p[0].textContent).toBe('No Data');
  });
});
