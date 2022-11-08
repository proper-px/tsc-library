import React from 'react';
import { IInputProps } from '../Input';

export interface ICheckboxProps extends Omit<IInputProps, 'type'> {}

export const Checkbox = ({ ...props }: ICheckboxProps) => {
  return <input type="checkbox" {...props} />;
};
