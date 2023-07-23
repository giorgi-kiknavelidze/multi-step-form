import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputDirective } from './text-input.directive';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<TextInputDirective> = {
  title: 'design-system/directives/text-input',
  component: TextInputDirective,
  tags: ['autodocs'],
  render: (args: TextInputDirective) => ({
    props: { variant: args.variant },
    template: `<input placeholder="Example Placeholder" appTextInput variant="${args.variant}"/>`,
  }),
};

export default meta;
type Story = StoryObj<TextInputDirective>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};
