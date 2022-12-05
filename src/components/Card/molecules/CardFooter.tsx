import React from 'react';

interface ICardFooterProps {
  children: React.ReactNode;
}

export const CardFooter = ({ children }: ICardFooterProps) => {
  return <div className="card__footer">{children}</div>;
};
