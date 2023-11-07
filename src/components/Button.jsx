import React from 'react';
import PropTypes from 'prop-types';
import '../styles/_button.scss';
import Icon from "./Icon";
import {_icons} from "../icons/_icons";

// El ícono se importa así solamente para mostrarse en Storybook.
// No es necesario manejar un objeto ya en un proyecto real, puedes importar directamente el ícono que se necesite.

export const Button = ({type, iconPosition, size, label, disabled, icon}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={['button', type, size].join(' ')}
    >
      {icon && iconPosition === 'left' && <Icon className="icon"
        svg={_icons[icon]}/>}
      {label}
      {icon && iconPosition === 'right' && <Icon className="icon"
        svg={_icons[icon]}/>}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  iconPosition: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  iconPosition: 'left',
  label: 'Button',
  size: 'base',
};
