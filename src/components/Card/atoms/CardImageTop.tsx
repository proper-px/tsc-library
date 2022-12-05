import classNames from 'classnames';
import React from 'react';

interface ICardImageTopProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  extended?: boolean;
}

export const CardImageTop = ({ extended = false, ...props }: ICardImageTopProps) => {
  const cardImageTopClass = classNames({
    'card__image card__image--top': true,
    'card__image--extended': extended,
  });
  return (
    <div className={cardImageTopClass}>
      <img {...props} />
    </div>
  );
};
