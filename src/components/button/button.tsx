import React, { ButtonHTMLAttributes } from 'react';
import './button.scss';
import classNames from 'classnames';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  label?: string;
  size?: 'small' | 'large' | 'normal';
  type?: 'primary' | 'default';
  status?: 'warn' | 'error' | 'loading';
  htmlType?: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>['type']>;
}

export const Button = ({
  label = 'button',
  size = 'normal',
  type = 'default',
  status,
  // className,
  htmlType = 'button',
  ...rest
}: ButtonProps) => (
  <button
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    className={classNames(
      'btn',
      `btn-${size}`,
      { [`btn-${type}`]: type === 'primary' },
      { [`btn-${status}`]: status }
      // className
    )}
    // eslint-disable-next-line react/button-has-type
    type={htmlType}
  >
    {label}
  </button>
);
