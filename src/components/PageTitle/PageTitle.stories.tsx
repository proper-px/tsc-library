import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageTitle } from '.';

export default {
  title: 'Core/PageTitle',
  component: PageTitle,
  args: {
    title: 'Some value',
  },
  // Remove the layout if you want it to be `padded`
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => <PageTitle {...args} />;

export const Example = Template.bind({});

Example.args = {
  title: 'Welcome to Proper PX - Library',
  subTitle: 'This is a helpful sub-title',
  isLight: true,
};
