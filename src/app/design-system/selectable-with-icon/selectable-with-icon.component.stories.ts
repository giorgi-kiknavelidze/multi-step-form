import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SelectableWithIconComponent } from './selectable-with-icon.component';
import { DesignSystemModule } from 'src/app/design-system/design-system.module';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<SelectableWithIconComponent> = {
  title: 'design-system/components/selectable-with-icon',
  component: SelectableWithIconComponent,
  tags: ['autodocs'],
  render: (args: SelectableWithIconComponent) => ({
    props: { ...args },
  }),
  decorators: [
    moduleMetadata({
      imports: [DesignSystemModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<SelectableWithIconComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Enabled: Story = {
  args: {
    icon: 'assets/icon-advanced.svg',
    title: 'Example',
    price: '$1/hr',
    additionalText: 'extra text',
    value: true,
  },
};

export const Disabled: Story = {
  args: {
    icon: 'assets/icon-advanced.svg',
    title: 'Example',
    price: '$1/hr',
    additionalText: 'extra text',
    value: false,
  },
};
