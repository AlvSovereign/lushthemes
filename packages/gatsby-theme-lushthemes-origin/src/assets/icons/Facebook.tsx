import * as React from 'react';
import { IconProps } from '.';

const Facebook = ({
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
        d='M14.254 15a.746.746 0 00.746-.746V3.746A.746.746 0 0014.254 3H3.746A.746.746 0 003 3.746v10.508c0 .412.334.746.746.746H9v-4.5h-.75a.75.75 0 010-1.5H9c0-1.423.16-2.32.828-3.066.66-.739 1.43-1.059 2.172-1.059a.75.75 0 010 1.5c-.328 0-.689.15-1.053.558-.333.372-.447 1.01-.447 2.067H12a.75.75 0 010 1.5h-1.5V15h3.754zM1.5 14.254V3.746A2.246 2.246 0 013.746 1.5h10.508A2.246 2.246 0 0116.5 3.746v10.508a2.246 2.246 0 01-2.246 2.246H3.746A2.246 2.246 0 011.5 14.254z'
        fill={fill}
      />
    </svg>
  );
};

const MemoFacebook = React.memo(Facebook);
export default MemoFacebook;
