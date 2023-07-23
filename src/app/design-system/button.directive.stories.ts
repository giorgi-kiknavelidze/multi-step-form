import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonDirective } from './button.directive';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ButtonDirective> = {
  title: 'design-system/directives/button',
  component: ButtonDirective,
  tags: ['autodocs'],
  render: (args: ButtonDirective) => ({
    props: {
      variant: args.variant,
    },
    template: `<button appButton variant=${args.variant}>Button</button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonDirective>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Submit: Story = {
  args: {
    variant: 'submit',
  },
};

export const Plain: Story = {
  args: {
    variant: 'plain',
  },
};
