import Checkbox from "../components/Checkbox";

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      name: 'Disabled',
    }
  },
}

export const Default = {
  args: {
    label: 'This is a label',
    disabled: false,
  }
}

export const Switch = {
  args: {
    type: 'switch',
    disabled: false,
  },
  argTypes: {
    type: {
      table: {
        disable: true,
      }
    }
  }
}

export const Chip = {
  args: {
    type: 'chip',
    label: 'This is a label',
    disabled: false,
  },
  argTypes: {
    type: {
      table: {
        disable: true,
      }
    }
  }
}
