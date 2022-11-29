import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Button } from '.';

const defaultProps = {
  onClick: jest.fn(),
  children: 'Button',
};

it('renders with correct children', async () => {
  const { queryByText } = render(<Button {...defaultProps} />);

  expect(queryByText('Button')).toBeTruthy();
});

it('calls the correct function on click', async () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button {...defaultProps} onClick={onClick} />);

  fireEvent.click(getByText(defaultProps.children));
  expect(onClick).toHaveBeenCalled();
});

it('is disabled', async () => {
  const { getByText } = render(<Button {...defaultProps} disabled />);

  expect(getByText(defaultProps.children)).toBeDisabled();
});
