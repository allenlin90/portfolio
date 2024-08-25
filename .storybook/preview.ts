import type { Preview } from '@storybook/react';
import '@/utils/i18n';
import '@/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [{ value: 'en', title: 'English' }],
      showName: true,
    },
  },
};

export default preview;
