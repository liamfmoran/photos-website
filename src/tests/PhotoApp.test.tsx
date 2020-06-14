import React from 'react';
import { render } from '@testing-library/react';
import PhotoApp from '../components/PhotoApp';

test('renders learn react link', () => {
  const { getByText } = render(<PhotoApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
