import ActionButton from "../components/ActionButton";
import {_icons} from "../icons/_icons";

export default {
  title: 'Components/Buttons/Action',
  component: ActionButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(_icons),
      name: 'Icon',
    },
  },
};

export const Default = {
  args: {
    icon: 'help-circle',
  },
};

export const Cancel = {
  args: {
    icon: 'cross',
    type: 'cancel',
  },
  argTypes: {
    icon: {
      table: {
        disable: true
      }
    },
    type: {
      table: {
        disable: true
      }
    }
  }
}

export const Back = {
  args: {
    icon: 'arrow-left',
    type: 'back',
  },
  argTypes: {
    icon: {
      table: {
        disable: true
      }
    },
    type: {
      table: {
        disable: true
      }
    }
  }
}
