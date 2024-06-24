import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { Loader } from '../loader';

import './style.scss';

type ButtonSise = 's' | 'l';

type StyleType = 'purple' | 'transparent';

interface IButtonProps {
  onClick: () => void;
  loading?: boolean;
  children: ReactNode;
  type?: 'button' | 'submit';
  title: string;
  className?: string;
  size?: ButtonSise;
  styleType?: StyleType;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  loading,
  children,
  type = 'button',
  title,
  className,
  size = 's',
  styleType = 'purple',
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      title={title}
      className={classNames('button', size, styleType, className)}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};
