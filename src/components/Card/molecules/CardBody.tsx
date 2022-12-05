import React from 'react';

interface ICardBodyProps {
  children: React.ReactNode;
}

export const CardBody = ({ children }: ICardBodyProps) => {
  return <div className="card__body">{children}</div>;
};
