import { Icons } from './enum/icon-enum';

export interface IconProps {
  name: Icons;
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
}

export const Icon = ({
  name,
  width,
  height,
  className,
  onClick,
}: IconProps) => (
  <svg
    width={width || '19px'}
    height={height || '19px'}
    className={className}
    onClick={onClick}
  >
    <use xlinkHref={`/assets/icons.svg#${name}`} />
  </svg>
);
