import React, { Children } from 'react';

interface ICardSubTitleProps {
  children: React.ReactNode;
}

export const CardSubTitle = ({ children }: ICardSubTitleProps) => {
  return <div className="card__subTitle">{children}</div>;
};
