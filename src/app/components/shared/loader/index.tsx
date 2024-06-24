import classNames from 'classnames';

import './style.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return <div className={classNames('loader', className)} />;
};
