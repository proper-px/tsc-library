import React from 'react';

export interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = ({ children, ...props }: ISelectProps) => {
  return <select {...props}>{children}</select>;
};
