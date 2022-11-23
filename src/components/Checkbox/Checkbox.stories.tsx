import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Checkbox } from '.';

export default {
  title: 'Form Elements/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [{ value }, updateArgs] = useArgs();
  return (
    <Checkbox
      {...args}
      onChange={(e) => updateArgs({ value: value === 'checked' ? 'not checked' : 'checked' })}
      value={value}
      checked={value === 'checked'}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  value: 'checked',
  name: 'default',
  id: 'default',
  label: 'This is the default checkbox',
};

export const Checked = Template.bind({});

Checked.args = {
  value: 'checked',
  name: 'checked',
  id: 'checked',
  label: 'This is the checked checkbox',
  defaultChecked: true,
};
