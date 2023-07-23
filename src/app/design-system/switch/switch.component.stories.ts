import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SwitchComponent } from './switch.component';
import { DesignSystemModule } from 'src/app/design-system/design-system.module';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<SwitchComponent> = {
  title: 'design-system/components/switch',
  component: SwitchComponent,
  tags: ['autodocs'],
  render: (args: SwitchComponent) => ({
    props: { ...args },
  }),
  decorators: [
    moduleMetadata({
      imports: [DesignSystemModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<SwitchComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Left: Story = {
  args: {
    value: false,
  },
};

export const Unchecked: Story = {
  args: {
    value: true,
  },
};
