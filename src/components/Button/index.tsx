import React from 'react';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, type = 'button', ...props }: IButtonProps) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};
