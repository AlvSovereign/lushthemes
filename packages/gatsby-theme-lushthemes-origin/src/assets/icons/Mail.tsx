import * as React from 'react';
import { IconProps } from '.';

const Mail = ({
  fill = '#000',
  height = 18,
  viewBox = '0 0 18 13', //edited
  width = 18,
  ...rest
}: IconProps) => {
  return (
    <svg height={height} fill='none' viewBox={viewBox} width={width} {...rest}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.748 1.074A.588.588 0 0018 .595a.496.496 0 00-.06-.218.14.14 0 00-.03-.077.376.376 0 00-.048-.083.726.726 0 00-.09-.1l-.108-.065a.545.545 0 00-.126-.047.518.518 0 00-.138 0H.6a.518.518 0 00-.138 0 .542.542 0 00-.15.082L.204.152a.724.724 0 00-.09.1.377.377 0 00-.048.083.14.14 0 00-.03.077A.495.495 0 000 .595c0 .19.095.369.252.479l.948.667 7.452 5.24a.608.608 0 00.696 0L16.8 1.74l.948-.667zM18 12.409V2.367l-7.956 5.577a1.823 1.823 0 01-2.124-.03L.504 2.722 0 2.367V12.41c0 .326.269.591.6.591h16.8c.331 0 .6-.264.6-.59z'
        fill={fill}
      />
    </svg>
  );
};

const MemoMail = React.memo(Mail);
export default MemoMail;
