import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '.';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Form Elements/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [{ value }, updateArgs] = useArgs();
  return (
    <Select
      {...args}
      onChange={(e) => updateArgs({ value: e.target.value })}
      value={value}
      options={[
        { stateName: 'Missouri', stateAbv: 'MO' },
        { stateName: 'Kansas', stateAbv: 'KS' },
      ]}
      labelKey="stateName"
      valueKey="stateAbv"
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  value: 'MO',
  name: 'default',
  id: 'default',
};
