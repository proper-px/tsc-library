import React from 'react';
import { IInputProps } from '../Input';

export interface ICheckboxProps extends Omit<IInputProps, 'type'> {
  label: string;
}

export const Checkbox = ({ label, ...props }: ICheckboxProps) => {
  return (
    <div className="form-check">
      <input type="checkbox" {...props} className="form-check__input" />
      <label htmlFor={props.id} className="form-check__label">
        {label}
      </label>
    </div>
  );
};
