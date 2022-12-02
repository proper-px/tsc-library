import classNames from 'classnames';
import React from 'react';
import { IIsLight } from '../../shared/IsLight';
import { ITestId } from '../../shared/TestId';

export interface ITextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'>,
    IIsLight,
    ITestId {}

export const Textarea = ({ children, className, testID, isLight = false, ...props }: ITextareaProps) => {
  const textareaClass = classNames({
    'form-control': true,
    ['form-control--light']: isLight,
    className: className!,
  });
  return (
    <textarea {...props} className={textareaClass} data-testid={testID}>
      {children}
    </textarea>
  );
};
