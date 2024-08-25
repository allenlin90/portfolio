import type { Meta, StoryObj } from '@storybook/react';

import ImageSlider from './image-slider';

const meta = {
  component: ImageSlider,
} satisfies Meta<typeof ImageSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};