import * as React from 'react';
import { IconProps } from '.';

const Instagram = ({
  fill = '#000',
  height = 18,
  viewBox = '0 0 18 18',
  width = 18,
  ...rest
}: IconProps) => {
  return (
    <svg height={height} fill='none' viewBox={viewBox} width={width} {...rest}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.246 1.5h7.508A3.746 3.746 0 0116.5 5.246v7.508a3.746 3.746 0 01-3.746 3.746H5.246A3.746 3.746 0 011.5 12.754V5.246A3.746 3.746 0 015.246 1.5zM3 12.754A2.246 2.246 0 005.246 15h7.508A2.246 2.246 0 0015 12.754V5.246A2.246 2.246 0 0012.754 3H5.246A2.246 2.246 0 003 5.246v7.508zM5.25 9a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm6 0a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm1.5-3a.75.75 0 110-1.5.75.75 0 010 1.5z'
        fill={fill}
      />
    </svg>
  );
};

const MemoInstagram = React.memo(Instagram);
export default MemoInstagram;
