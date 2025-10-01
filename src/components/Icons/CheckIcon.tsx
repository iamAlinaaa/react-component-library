import React from 'react';
import { IconProps } from './types';

export const CheckIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon
        points="9.993 19.421 3.286 12.58 4.714 11.179 10.007 16.579 19.293 7.293 20.707 8.707 9.993 19.421"
        fill={color}
      />
    </svg>
  );
};
