import classNames from 'classnames';
import React from 'react';
import { IIsLight } from '../../shared/IsLight';
import { IInputProps } from '../Input';

export interface IRadioProps extends Omit<IInputProps, 'type' | 'style'>, IIsLight {
  label: string;
}

export const Radio = ({ className, isLight, label, ...props }: IRadioProps) => {
  const radioClass = classNames({
    'form-check': true,
    'form-check--light': isLight,
    className: className!,
  });
  return (
    <div className={radioClass}>
      <input type="radio" {...props} className="form-check__input" />
      <label htmlFor={props.id} className="form-check__label">
        {label}
      </label>
    </div>
  );
};
