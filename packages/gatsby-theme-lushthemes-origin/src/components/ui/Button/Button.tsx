import React, { ReactNode } from 'react';
import cx from 'classnames';

import { Typography } from '..';
import styles from './Button.module.css';

type IconPlacement = 'left' | 'right';
type SvgIcon = ReactNode;
type Icon = {
  asset: SvgIcon;
  placement?: IconPlacement;
};

export interface ButtonProps {
  /**
   * Use to add custom css that will override default styling
   */
  className?: string;
  /**
   * Use to add an icon and its placement in the button
   */
  icon?: Icon;
  /**
   * Use to handle click events
   */
  onClick: () => void;
  /**
   * The label that will be displayed in the button
   */
  label?: string;
  /**
   * The variant of button you want to use
   */
  variant: 'plain' | 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  icon = null,
  onClick,
  label,
  variant,
}) => {
  const handleKeyPress = ({
    keyCode,
  }: React.KeyboardEvent<HTMLButtonElement>) => {
    if (keyCode === 13) {
      onClick;
    }
  };
  return (
    <button
      className={cx(
        styles.button,
        variant === 'plain' && styles.buttonPlain,
        variant === 'primary' && styles.buttonPrimary,
        variant === 'secondary' && styles.buttonSecondary,
        icon && icon.placement === 'left' && styles.buttonReverse,
        className
      )}
      onClick={onClick}
      onKeyPress={handleKeyPress}>
      {label && (
        <Typography
          className={cx(styles.label, className)}
          color={variant === 'primary' ? 'black' : 'white'}
          element='span'
          variant='small'
          weight='bold'>
          {label.toUpperCase()}
        </Typography>
      )}
      {icon && (
        <div
          className={cx(
            styles.iconContainer,
            icon.placement === 'left' ? styles.iconLeft : styles.iconRight
          )}>
          {icon.asset}
        </div>
      )}
    </button>
  );
};
