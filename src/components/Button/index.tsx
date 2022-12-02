import React from 'react';
import { ColorOptions } from '../../shared/ColorOptions';
import classNames from 'classnames';

/**
 * Extends the base React ButtonHTMLAttributes
 *
 */
export interface IButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  priority?: ColorOptions;
}

/**
 * `!IMPORTANT!` Inline style is disabled
 *
 * Default props:
 * - type: `button`
 * - priority: `primary`
 *
 * Example Usage:
 * ```TSX
 * <Button onClick={incrementCount}>Increment Count</Button>
 * ```
 */

export const Button = ({ children, type = 'button', priority = 'primary', className, ...props }: IButtonProps) => {
  const buttonClass = classNames({
    btn: true,
    [`btn-${priority}`]: priority,
    className: className!,
  });
  return (
    <button type={type} {...props} className={buttonClass}>
      {children}
    </button>
  );
};
