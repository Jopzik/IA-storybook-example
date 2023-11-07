import {Button} from '../components/core/Button';
import {HELP_CIRCLE_ICON} from "../icons/help-circle";
import {_icons} from "../icons/_icons";


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
      options: ['primary', 'rounded', 'outline', 'ghost'],
      name: 'Type'
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right', 'none'],
      name: 'Icon position'
    },
    icon: {
      control: 'select',
      options: Object.keys(_icons),
      name: 'Icon',
    },
    disabled: {
      control: 'boolean',
      name: 'Disabled',
    },
    size: {
      control: 'radio',
      options: ['base', 'small']
    },
  },
};

export const Primary = {
  args: {
    label: 'This is a button',
    type: 'primary',
    iconPosition: 'left',
    disabled: false,
    icon: HELP_CIRCLE_ICON,
    size: 'base',
  },
};
