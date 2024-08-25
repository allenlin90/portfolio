import type { Meta, StoryObj } from '@storybook/react';

import AnimatedBorder from './animated-border';

const meta = {
  component: AnimatedBorder,
} satisfies Meta<typeof AnimatedBorder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
