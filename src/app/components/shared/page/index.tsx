import { ReactNode } from 'react';
import classNames from 'classnames';

import './style.scss';

interface IPageProps {
  children?: ReactNode;
  className?: string;
  withHeader?: boolean;
}

export const Page = ({ children, className, withHeader }: IPageProps) => {
  return (
    <div
      className={classNames('page', className, { 'with-header': withHeader })}
    >
      {children}
    </div>
  );
};
