import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.css';

import { getClassName } from "../../../Utility/CSSModuleHelpers";

const Button = props => {

  const getButtonClasses = () => {
    return `${getClassName(classes, "button")} ${getClassName(classes, `button--${props.size || "default"}`)} ${getClassName(classes, `${props.inverse && "button--inverse"}`)} ${getClassName(classes, `${props.danger && "button--danger"}`)}`
  }

  if (props.href) {
    return (
      <a
        className={getButtonClasses()}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={getButtonClasses()}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={getButtonClasses()}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
