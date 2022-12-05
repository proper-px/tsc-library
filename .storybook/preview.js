import '../lib/main.css';
import { Title, Stories, Primary, PRIMARY_STORY, ArgsTable } from '@storybook/addon-docs';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    exclude: 'testID',
  },
  docs: {
    page: () => (
      <>
        <Title />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
    ),
  },
};
