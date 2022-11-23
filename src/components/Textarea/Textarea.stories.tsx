import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from '.';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Form Elements/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  const [{ value }, updateArgs] = useArgs();
  return <Textarea value={value} onChange={(e) => updateArgs({ value: e.target.value })}></Textarea>;
};

export const Default = Template.bind({});

Default.args = {
  value: '2',
  name: 'default',
  id: 'default',
};
