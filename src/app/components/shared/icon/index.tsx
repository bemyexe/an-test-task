import { ComponentProps } from 'react';

import { Icons } from './enum/icon-enum';

export interface IconProps extends ComponentProps<'svg'> {
  name: Icons;
}

export const Icon = ({
  name,
  width,
  height,
  className,
  onClick,
  ...props
}: IconProps) => (
  <svg
    width={width || '19px'}
    height={height || '19px'}
    className={className}
    onClick={onClick}
    {...props}
  >
    <use xlinkHref={`/assets/icons.svg#${name}`} />
  </svg>
);
