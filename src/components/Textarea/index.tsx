import React from 'react';

export interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = ({ children, ...props }: ITextareaProps) => {
  return <textarea {...props}>{children}</textarea>;
};
