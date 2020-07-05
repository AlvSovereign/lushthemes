import * as React from 'react';

interface RightArrowProps {
  height?: number;
  viewBox?: string;
  width?: number;
  [key: string]: any;
}

const RightArrow = ({
  fill = '#000',
  height = 18,
  viewBox = '0 0 18 18',
  width = 18,
  ...rest
}: RightArrowProps) => {
  return (
    <svg height={height} fill='none' viewBox={viewBox} width={width} {...rest}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18 8.966L9.05 0 6.33 2.704l4.41 4.384H0v3.824h10.74l-4.41 4.384L9.05 18 18 8.966z'
        fill={fill}
      />
    </svg>
  );
};

const MemoRightArrow = React.memo(RightArrow);
export default MemoRightArrow;
