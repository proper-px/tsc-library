import React from 'react';
import { ITestId } from '../../shared/TestId';

export interface ICardProps extends ITestId {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ children, className, testID }: ICardProps) => {
  return (
    <div data-testid={testID} className="card">
      {children}
    </div>
  );
};
