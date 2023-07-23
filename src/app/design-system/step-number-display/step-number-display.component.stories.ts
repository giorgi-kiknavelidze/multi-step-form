import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { StepNumberDisplayComponent } from './step-number-display.component';
import { DesignSystemModule } from 'src/app/design-system/design-system.module';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<StepNumberDisplayComponent> = {
  title: 'design-system/components/step-number-display',
  component: StepNumberDisplayComponent,
  tags: ['autodocs'],
  render: (args: StepNumberDisplayComponent) => ({
    props: { ...args },
  }),
  decorators: [
    moduleMetadata({
      imports: [DesignSystemModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<StepNumberDisplayComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Active: Story = {
  args: {
    active: true,
    value: 1,
  },
};

export const Unchecked: Story = {
  args: {
    active: false,
    value: 1,
  },
};
