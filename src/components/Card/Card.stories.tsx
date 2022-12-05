import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';

export default {
  title: 'Core/Card',
  component: Card,
  args: {
    prop: 'Some value',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Example = Template.bind({});

Example.args = {
  prop: 'Example',
};
