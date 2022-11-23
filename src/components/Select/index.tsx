import classNames from 'classnames';
import React from 'react';

export interface IOption<T> {
  [name: string]: T;
}

export interface ISelectProps<T> extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children' | 'style'> {
  options: Array<T>;
  labelKey: keyof T;
  valueKey: keyof T;
}

export const Select = <T extends unknown>({ options, labelKey, valueKey, className, ...props }: ISelectProps<T>) => {
  const selectClass = classNames({
    'form-select': true,
    className: className!,
  });
  return (
    <select className={selectClass} {...props}>
      {options.map((value) => {
        return (
          <option value={String(value[valueKey])} key={`${String(value[valueKey])}${String(value[labelKey])}`}>
            {String(value[labelKey])}
          </option>
        );
      })}
    </select>
  );
};
