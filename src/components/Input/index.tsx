import classNames from 'classnames';
import React from 'react';
import { IIsLight } from '../../shared/IsLight';

export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'>, IIsLight {}

export const Input = ({ isLight = false, className, ...props }: IInputProps) => {
  const inputClass = classNames({
    'form-control': true,
    [`form-control--light`]: isLight,
    [className as string]: className,
  });
  return <input {...props} className={inputClass} />;
};
