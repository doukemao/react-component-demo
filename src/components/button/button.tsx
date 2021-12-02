import React, { ButtonHTMLAttributes } from 'react';
import './button.scss';
import classNames from 'classnames';
import LoadingIcon from './loading.svgr';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  label?: string;
  size?: 'small' | 'large' | 'normal';
  type?: 'primary' | 'default';
  loading?: boolean;
  htmlType?: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>['type']>;
};

export const Button = ({
  label = 'button',
  size = 'normal',
  type = 'default',
  loading = false,
  // className,
  htmlType = 'button',
  disabled,
  onClick,
  ...rest
}: ButtonProps) => (
  <button
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    className={classNames(
      'btn',
      `btn-${size}`,
      { [`btn-${type}`]: type === 'primary' },
      { [`btn-loading`]: loading },
      { 'btn-disabled': disabled }
      // className
    )}
    // eslint-disable-next-line react/button-has-type
    type={htmlType}
    // loading disable onClick
    onClick={loading ? undefined : onClick}
  >
    {loading && <LoadingIcon className={classNames('icon', 'icon-loading')} />}
    <span>{label}</span>
  </button>
);
