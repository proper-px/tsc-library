import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from '.';

const defaultProps = {
  name: 'firstName',
  id: 'firstName',
  type: 'text',
  placeholder: 'firstName',
};

it('renders with a default value', () => {
  const { getByTestId } = render(<Input {...defaultProps} defaultValue="Default value test" testID="defaultValue" />);
  expect(getByTestId('defaultValue')).toHaveValue('Default value test');
});

it('should update with user input', async () => {
  const { getByTestId } = render(<Input {...defaultProps} testID="updateWithValue" />);
  const input = getByTestId('updateWithValue');
  expect(input).toHaveValue('');
  fireEvent.change(input, { target: { value: 'New Value' } });
  expect(input).toHaveValue('New Value');
});

it('should be disabled', async () => {
  const { getByTestId } = render(<Input {...defaultProps} testID="disabledInput" disabled />);
  const input = getByTestId('disabledInput');
  expect(input).toBeDisabled();
});
