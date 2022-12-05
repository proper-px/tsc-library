import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { PageTitle } from '.';

const defaultProps = {
  title: 'Hello',
  testID: 'testingID',
};

it('renders with a title', () => {
  const { queryByText } = render(<PageTitle {...defaultProps} />);
  expect(queryByText('Hello')).toBeTruthy();
});

it('renders with a title and subTitle', () => {
  const { queryByText } = render(<PageTitle title="Hello" subTitle="This is a test" />);
  expect(queryByText('Hello')).toBeTruthy();
  expect(queryByText('This is a test')).toBeTruthy();
});
