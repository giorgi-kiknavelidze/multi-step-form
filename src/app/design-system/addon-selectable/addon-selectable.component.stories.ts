import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AddonSelectableComponent } from './addon-selectable.component';
import { DesignSystemModule } from '../design-system.module';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<AddonSelectableComponent> = {
  title: 'design-system/components/addon-selectable',
  component: AddonSelectableComponent,
  tags: ['autodocs'],
  render: (args: AddonSelectableComponent) => ({
    props: { ...args },
  }),
  decorators: [
    moduleMetadata({
      imports: [DesignSystemModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<AddonSelectableComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Example: Story = {
  args: {
    addonName: 'Example Addon',
    description: 'Example description',
    price: '$1/yr',
  },
};
