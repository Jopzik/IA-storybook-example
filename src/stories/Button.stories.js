import {Button} from '../components/Button';
import {_icons} from "../icons/_icons";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
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

export const Default = {
  args: {
    label: 'This is a button',
    type: 'primary',
    iconPosition: 'left',
    disabled: false,
    icon: 'help-circle',
    size: 'base',
  },
};
