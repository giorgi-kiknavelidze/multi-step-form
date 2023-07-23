import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { DesignSystemModule } from '../design-system.module';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CheckboxComponent> = {
  title: 'design-system/components/checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  render: (args: CheckboxComponent) => ({
    props: { ...args },
  }),
  decorators: [
    moduleMetadata({
      imports: [DesignSystemModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Checked: Story = {
  args: {
    value: true,
  },
};

export const Unchecked: Story = {
  args: {
    value: false,
  },
};
