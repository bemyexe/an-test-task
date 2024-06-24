import { ReactNode } from 'react';
import classNames from 'classnames';

import './style.scss';

interface IPageProps {
  children?: ReactNode;
  className?: string;
}

export const Page = ({ children, className }: IPageProps) => {
  return <div className={classNames('page', className)}>{children}</div>;
};
