import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Image from './Image';
import { describe, expect, it } from 'vitest';

const mockProps = {
  url: 'https://dummy-url.com/image.png',
  alt: 'Example Image',
};

describe('renders the Image component with provided props', () => {
  it('renders the Image component with provided props', () => {
    const { getByAltText } = render(<Image {...mockProps} />);
    const imgElement = getByAltText(mockProps.alt);

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', mockProps.url);
    expect(imgElement).toHaveClass('w-full h-auto');
  });
});
