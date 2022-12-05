import React from 'react';
import { ITestId } from '../../shared/TestId';

export interface ICardProps extends ITestId  {
  prop: string;
}

export const Card = ({ prop, testID }: ICardProps) => {
  return <div data-testid={testID}>{prop}</div>;
};