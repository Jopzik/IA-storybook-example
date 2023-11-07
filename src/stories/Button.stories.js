import {Button} from '../components/core/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'outline', 'ghost'],
      name: 'Type'
    },
    showIcon: {
      control: 'select',
      options: ['left', 'right', 'none'],
      name: 'Show icon'
    }
  },
};

export const Primary = {
  args: {
    label: 'Button',
    type: 'primary',
    showIcon: 'left'
  },
};
