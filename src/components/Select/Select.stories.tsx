import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '.';
import { Option } from '../Option';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Form Elements/Select',
  component: Select,
  subcomponents: { Option },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [{ value }, updateArgs] = useArgs();
  return (
    <Select {...args} onChange={(e) => updateArgs({ value: e.target.value })} value={value}>
      <Option value="1">Option 1</Option>
      <Option value="2">Option 2</Option>
    </Select>
  );
};

export const Default = Template.bind({});

Default.args = {
  value: '2',
  name: 'default',
  id: 'default',
};
