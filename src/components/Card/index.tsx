import React from 'react';
import { ITestId } from '../../shared/TestId';
export { CardImageTop } from './atoms/CardImageTop';
export { CardSubTitle } from './atoms/CardSubTitle';
export { CardTitle } from './atoms/CardTitle';
export { CardBody } from './molecules/CardBody';
export { CardFooter } from './molecules/CardFooter';
export { CardHeader } from './molecules/CardHeader';

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
