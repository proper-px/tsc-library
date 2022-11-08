import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from '.';

export default {
  title: 'Form Elements/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: 'default',
  name: 'default',
  id: 'default',
  label: 'default radio button',
};
