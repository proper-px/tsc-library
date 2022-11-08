import React from 'react';
import { IInputProps } from '../Input';

export interface ICheckboxProps extends Omit<IInputProps, 'type'> {
  label: string;
}

export const Checkbox = ({ label, ...props }: ICheckboxProps) => {
  return (
    <>
      <input type="checkbox" {...props} />
      <label htmlFor={props.id}>{label}</label>
    </>
  );
};
