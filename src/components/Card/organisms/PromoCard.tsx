import React from 'react';
import { Card } from '..';
import { Button } from '../../Button';
import { CardImageTop } from '../atoms/CardImageTop';
import { CardSubTitle } from '../atoms/CardSubTitle';
import { CardTitle } from '../atoms/CardTitle';
import { CardBody } from '../molecules/CardBody';

interface IPromoCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  subTitle?: string;
  children?: React.ReactNode;
}

export const PromoCard = ({ src, alt, title, description, subTitle, children }: IPromoCardProps) => {
  return (
    <Card>
      <CardImageTop src={src} alt={alt} extended />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        {subTitle && <CardSubTitle>{subTitle}</CardSubTitle>}
        <p>{description}</p>
        {children}
      </CardBody>
    </Card>
  );
};
