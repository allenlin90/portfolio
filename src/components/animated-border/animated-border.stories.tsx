import type { Meta, StoryObj } from '@storybook/react';

import AnimatedBorder from './animated-border';

const meta = {
  component: AnimatedBorder,
} satisfies Meta<typeof AnimatedBorder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    borderColor: ['#ff4545', '#00ff99', '#006aff', '#ff0095', '#ff4545'],
  },
};
