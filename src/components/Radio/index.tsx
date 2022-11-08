import React from 'react';
import { IInputProps } from '../Input';

export interface IRadioProps extends Omit<IInputProps, 'type'> {}

export const Radio = ({ ...props }: IRadioProps) => {
  return <input type="radio" {...props} />;
};
