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
  priority: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  priority: 'secondary',
};

export const Light = Template.bind({});
Light.args = {
  children: 'Light Button',
  priority: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Dark Button',
  priority: 'dark',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};
