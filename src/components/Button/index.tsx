import React from 'react';
import { ColorOptions } from '../../shared/ColorOptions';
import classNames from 'classnames';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  priority: ColorOptions;
}

export const Button = ({ children, type = 'button', priority = 'primary', className, ...props }: IButtonProps) => {
  const buttonClass = classNames({
    btn: true,
    [`btn-${priority}`]: priority,
    [className as string]: className,
  });
  return (
    <button type={type} {...props} className={buttonClass}>
      {children}
    </button>
  );
};
