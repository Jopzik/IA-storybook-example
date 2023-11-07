import Icon from "./Icon";
import '../styles/_action-button.scss';
import {_icons} from "../icons/_icons";

const ActionButton = ({icon, type}) => {
  return (
    <button className={['action-button', type].join(' ')}>
      <Icon size="1.5rem"
        svg={_icons[icon]}/>
    </button>
  );
};

export default ActionButton;
