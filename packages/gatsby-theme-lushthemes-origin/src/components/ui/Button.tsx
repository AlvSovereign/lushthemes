/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';

import Typography from './Typography';

type IconPlacement = 'center' | 'left' | 'right';
type SvgIcon = ReactNode;
type Icon = {
  asset: SvgIcon;
  placement: IconPlacement;
};

interface ButtonProps {
  className?: string;
  icon?: Icon;
  onClick: () => void;
  textColor?: 'black' | 'white';
  value?: string;
  variant: 'plain' | 'primary' | 'secondary';
}

const Button = ({
  className,
  textColor,
  icon = null,
  onClick,
  value,
  variant,
}: ButtonProps) => {
  const handleKeyPress = ({
    keyCode,
  }: React.KeyboardEvent<HTMLButtonElement>) => {
    if (keyCode === 13) {
      onClick;
    }
  };
  return (
    <button
      className={className}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      sx={{ height: 50, variant: `Button.${variant}` }}>
      {value && (
        <Typography
          element='span'
          sx={{
            color: textColor || variant === 'primary' ? 'black' : 'white',
            mr: icon ? 3 : 0,
          }}
          variant='span'>
          {value.toUpperCase()}
        </Typography>
      )}
      {icon && icon.asset}
    </button>
  );
};

export default Button;
