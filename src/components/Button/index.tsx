import React from 'react';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, type = 'button', className, ...props }: IButtonProps) => {
  return (
    <button type={type} {...props} className={`btn ${className}`}>
      {children}
    </button>
  );
};
