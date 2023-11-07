import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/core/button.css';
import Icon from "./Icon";
import {PLUS_CIRCLE_ICON} from "../../icons/plus-circle";

/**
 * Primary UI component for user interaction
 */
export const Button = ({type, showIcon, size, label, ...props}) => {
  return (
    <button
      type="button"
      className={['button', type].join(' ')}
      {...props}
    >
      {showIcon === 'left' && <Icon size="1rem"
        svg={PLUS_CIRCLE_ICON}/>}
      {label}
      {showIcon === 'right' && <Icon size="1rem"
        svg={PLUS_CIRCLE_ICON}/>}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  showIcon: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  showIcon: 'left',
  label: 'Button',
};
