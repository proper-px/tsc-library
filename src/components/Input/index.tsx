import classNames from 'classnames';
import React from 'react';
import { IIsLight } from '../../shared/IsLight';
import { ITestId } from '../../shared/TestId';

export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'>, IIsLight, ITestId {}

export const Input = ({ className, testID, isLight = false, ...props }: IInputProps) => {
  const inputClass = classNames({
    'form-control': true,
    [`form-control--light`]: isLight,
    className: className!,
  });

  return <input {...props} className={inputClass} data-testid={testID} />;
};
