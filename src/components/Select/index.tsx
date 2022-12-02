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

/**
 * `!IMPORTANT!` `children` and `style` have been disabled
 *
 * **NOTE:** to add children, you must supply an Array of Objects to the `options` prop.
 * Then use the `labelKey` and `valueKey` to specify which Object properties you would like for the `value` and `label` of the `<option>`.
 *
 * **Example:**
 * ```TSX
 * const StatesData = [
 *  {
 *   stateAbv: 'MO',
 *   stateName: 'Missouri',
 *  }
 * ]
 *
 * <Select name="states" id="homeState" options={StatesData} labelKey="stateName" valueKey="stateAbv"/>
 *
 * <select name="states" id="homeState">
 *  <option value="MO">Missouri</option>
 * </select>
 * ```
 */

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
