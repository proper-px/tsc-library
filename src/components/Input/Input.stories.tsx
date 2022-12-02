import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Title, Stories, Primary, PRIMARY_STORY, ArgsTable } from '@storybook/addon-docs';

import { Input } from '.';

export default {
  title: 'Form Elements/Input',
  component: Input,
  args: {
    value: '',
    isLight: false,
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [{ value }, updateArgs] = useArgs();
  return <Input {...args} onChange={(e) => updateArgs({ value: e.target.value })} value={value} />;
};

export const Text = Template.bind({});

Text.args = {
  name: 'text',
  id: 'text',
  type: 'text',
  placeholder: 'John Doe',
};

export const Number = Template.bind({});

Number.args = {
  name: 'number',
  id: 'number',
  type: 'number',
};

export const Password = Template.bind({});

Password.args = {
  name: 'password',
  id: 'password',
  type: 'password',
};

export const Date = Template.bind({});

Date.args = {
  name: 'Date',
  id: 'Date',
  type: 'date',
};
