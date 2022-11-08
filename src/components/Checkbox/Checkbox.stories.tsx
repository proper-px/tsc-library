import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '.';

export default {
  title: 'Form Elements/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: 'default',
  name: 'default',
  id: 'default',
  label: 'This is the default checkbox',
};
