import React from 'react';
import { IconProps } from './types';

export const CloseIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="7.3"
        y="3.93"
        width="2.15"
        height="9.9"
        transform="translate(-3.82 8.52) rotate(-45)"
        fill={color}
      />
      <rect
        x="3.43"
        y="7.8"
        width="9.9"
        height="2.15"
        transform="translate(-3.82 8.52) rotate(-45)"
        fill={color}
      />
    </svg>
  );
};
