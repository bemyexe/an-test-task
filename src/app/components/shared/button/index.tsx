import { ComponentProps, forwardRef } from 'react';
import classNames from 'classnames';

import { Loader } from '../loader';

import './style.scss';

type ButtonSise = 's' | 'l';

type StyleType = 'purple' | 'transparent';

interface ButtonProps extends ComponentProps<'button'> {
  loading?: boolean;
  type?: 'button' | 'submit';
  size?: ButtonSise;
  styleType?: StyleType;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      loading,
      children,
      type = 'button',
      title,
      className,
      size = 's',
      styleType = 'purple',
      ...props
    },
    ref
  ) => (
    <button
      onClick={onClick}
      type={type}
      title={title}
      className={classNames('button', size, styleType, className)}
      ref={ref}
      {...props}
    >
      {loading ? <Loader /> : children}
    </button>
  )
);
