import React, { Children } from 'react';

interface ICardTitle {
  children: React.ReactNode;
}

export const CardTitle = ({ children }: ICardTitle) => {
  return <div className="card__title">{children}</div>;
};
