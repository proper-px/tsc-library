import React from 'react';

interface ICardHeaderProps {
  children: React.ReactNode;
}

export const CardHeader = ({ children }: ICardHeaderProps) => {
  return <div className="card__header">{children}</div>;
};
