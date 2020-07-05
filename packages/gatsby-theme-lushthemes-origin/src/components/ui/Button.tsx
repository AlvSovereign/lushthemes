/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';

import Typography from './Typography';

type IconPlacement = 'left' | 'right';
type SvgIcon = ReactNode;
type Icon = {
  asset: SvgIcon;
  placement: IconPlacement;
};

interface ButtonProps {
  icon?: Icon;
  onClick: () => void;
  value: string;
  variant: 'primary' | 'secondary';
}

const Button = ({ icon = null, onClick, value, variant }: ButtonProps) => {
  const handleKeyPress = ({
    keyCode,
  }: React.KeyboardEvent<HTMLButtonElement>) => {
    if (keyCode === 13) {
      onClick;
    }
  };
  return (
    <button
      onClick={onClick}
      onKeyPress={handleKeyPress}
      sx={{ height: 50, variant: `Button.${variant}` }}>
      <Typography
        element='span'
        sx={{
          color: variant === 'primary' ? 'black' : 'white',
          mr: icon ? 3 : 0,
        }}
        variant='span'>
        {value.toUpperCase()}
      </Typography>
      {icon.asset}
    </button>
  );
};

export default Button;
