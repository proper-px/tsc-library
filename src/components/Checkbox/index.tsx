import classNames from 'classnames';
import React from 'react';
import { IIsLight } from '../../shared/IsLight';
import { IInputProps } from '../Input';

export interface ICheckboxProps extends Omit<IInputProps, 'type' | 'style'>, IIsLight {
  label: string;
}

export const Checkbox = ({ label, isLight = false, className, ...props }: ICheckboxProps) => {
  const checkboxClass = classNames({
    'form-check': true,
    'form-check--light': isLight,
    className: className!,
  });
  return (
    <div className={checkboxClass}>
      <input type="checkbox" {...props} className="form-check__input" />
      <label htmlFor={props.id} className="form-check__label">
        {label}
      </label>
    </div>
  );
};
