import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Card } from '.';

const defaultProps = {
  prop: 'Hello',
  testID: 'testingID'
};

it('renders with inner text', () => {
  const { queryByText } = render(<Card {...defaultProps} />);
  expect(queryByText('Hello')).toBeTruthy();
});