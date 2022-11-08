import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    children: 'Some value',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
};
