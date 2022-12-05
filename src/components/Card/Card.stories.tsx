import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';
import { CardHeader } from './molecules/CardHeader';
import { CardBody } from './molecules/CardBody';
import { CardFooter } from './molecules/CardFooter';
import { CardTitle } from './atoms/CardTitle';
import { CardSubTitle } from './atoms/CardSubTitle';
import { CardImageTop } from './atoms/CardImageTop';
import { Button } from '../Button';
import { PromoCard } from './organisms/PromoCard';

export default {
  title: 'Core/Card',
  component: Card,
  args: {
    children: 'Some value',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{ width: '320px' }}>
    <Card {...args} />
  </div>
);

export const Example = Template.bind({});

Example.args = {
  children: (
    <>
      <CardBody>
        This is a basic card with nothing in it but a `{'<'}CardBody{'/>'}` and some text
      </CardBody>
    </>
  ),
};

export const Promo = () => {
  return (
    <div style={{ width: '320px' }}>
      <PromoCard
        src="https://via.placeholder.com/300x170"
        alt="my latest video"
        title="Check out my latest video"
        subTitle="12/05/2022"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, excepturi!"
      >
        <a href="/">Watch Now</a>
      </PromoCard>
    </div>
  );
};
