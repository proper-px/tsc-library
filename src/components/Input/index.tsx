import React from 'react';
export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...props }: IInputProps) => {
  return <input {...props} />;
};
