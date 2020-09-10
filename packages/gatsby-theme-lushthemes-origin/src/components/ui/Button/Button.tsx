import React, { ReactNode } from 'react';
import cx from 'classnames';

import { Typography } from '..';
import styles from './Button.module.css';

type IconPlacement = 'left' | 'right';
type SvgIcon = ReactNode;
type Icon = {
  asset: SvgIcon;
  placement: IconPlacement;
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
        className
      )}
      onClick={onClick}
      onKeyPress={handleKeyPress}>
      {label && (
        <Typography
          className={cx(
            styles.label,
            variant === 'plain' && styles.labelPlain,
            variant === 'primary' && styles.labelPrimary,
            variant === 'secondary' && styles.labelSecondary,
            icon && styles.labelWithIcon,
            className
          )}
          element='span'
          variant='span'>
          {label.toUpperCase()}
        </Typography>
      )}
      {icon && icon.asset}
    </button>
  );
};
