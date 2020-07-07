import * as React from 'react';
import { IconProps } from '.';

const Menu = ({
  fill = '#000',
  height = 18,
  viewBox = '0 0 18 18', //edited
  width = 18,
  ...rest
}: IconProps) => {
  return (
    <svg height={height} fill='none' viewBox={viewBox} width={width} {...rest}>
      <path fill='#000' d='M0 5h18v8H0z' />
    </svg>
  );
};

const MemoMenu = React.memo(Menu);
export default MemoMenu;
