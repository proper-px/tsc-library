import React from 'react';
import { IInputProps } from '../Input';

export interface IRadioProps extends Omit<IInputProps, 'type'> {
  label: string;
}

export const Radio = ({ label, ...props }: IRadioProps) => {
  return (
    <>
      <input type="radio" {...props} />
      <label htmlFor={props.id}>{label}</label>
    </>
  );
};
