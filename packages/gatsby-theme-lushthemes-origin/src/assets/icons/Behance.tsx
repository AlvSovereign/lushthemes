import * as React from 'react';
import { IconProps } from '.';

const Behance = ({
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
        d='M17.25 11.625h-5.891a2.626 2.626 0 004.153 1.303.75.75 0 11.936 1.171A4.125 4.125 0 1118 10.875a.75.75 0 01-.75.751zM13.875 8.25c-1.19 0-2.194.79-2.516 1.875h5.032a2.626 2.626 0 00-2.516-1.875zM5.246 9H1.5v4.5h3.753A2.248 2.248 0 007.5 11.25C7.5 10.01 6.49 9 5.246 9zM9 11.25A3.748 3.748 0 015.253 15H1.122A1.123 1.123 0 010 13.875v-9.75C0 3.508.504 3 1.125 3H4.5a2.998 2.998 0 012.354 4.86A3.753 3.753 0 019 11.25zM1.5 4.5v3h2.999C5.327 7.5 6 6.827 6 6c0-.83-.67-1.5-1.501-1.5H1.5zm9.75.75a.75.75 0 01.752-.75h3.746a.75.75 0 110 1.5h-3.746a.75.75 0 01-.752-.75z'
        fill={fill}
      />
    </svg>
  );
};

const MemoBehance = React.memo(Behance);
export default MemoBehance;
