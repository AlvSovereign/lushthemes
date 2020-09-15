import React, { ReactNode } from 'react';
import cx from 'classnames';

import styles from './Typography.module.css';
import { capitalise } from '../../../utils/capitalize';

export interface TypographyProps {
  /**
   * Use this to control the elements position
   */
  align?: 'center' | 'left' | 'right';
  /**
   * React children to render
   */
  children: ReactNode;
  /**
   * Use to add custom css that will override default styling
   */
  className?: string;
  /**
   * A convenience prop to quickly change the color
   */
  color?: 'black' | 'grey' | 'white';
  /**
   * The HTML element that is rendered to the DOM
   */
  element: any; // the string of a HTML element
  /**
   * The variant of text you need that will control the text styling
   */
  variant: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small';
  /**
   * A convenience prop to quickly change font weight
   */
  weight?: 'bold' | 'light' | 'normal';
  /**
   * Any other optional prop that needs to be passed down to the element
   */
  [key: string]: any;
}

export const Typography = ({
  align,
  children,
  className,
  color = 'black',
  element,
  variant,
  weight = 'normal',
  ...rest
}: TypographyProps) => {
  const Element = element;
  const isHeadingVariant = ['hero', 'h1', 'h2', 'h3', 'h4'].includes(variant);

  return (
    <Element
      className={cx(
        styles.root,
        isHeadingVariant ? styles.heading : styles.text,
        styles[variant],
        styles[color],
        styles[weight],
        align && styles[`align${capitalise(align)}`],
        element === 'a' && styles.a,
        className
      )}
      {...rest}>
      {children}
    </Element>
  );
};
