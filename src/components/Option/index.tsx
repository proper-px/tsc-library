import React from 'react';

export interface IOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export const Option = ({ children, ...props }: IOptionProps) => {
  return <option {...props}>{children}</option>;
};
