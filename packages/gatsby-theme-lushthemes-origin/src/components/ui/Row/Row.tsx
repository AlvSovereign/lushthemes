import React, { Fragment, ReactNode } from 'react';
import Img, { FluidObject } from 'gatsby-image';
import cx from 'classnames';

import { capitalise } from '../../../utils/capitalize';
import styles from './Row.module.css';

type Alignment = 'center' | 'end' | 'inherit' | 'start';
type FlexDirection = 'column' | 'row';
type Justify = 'around' | 'between' | 'center' | 'evenly' | 'inherit' | 'start';
type Wrap = 'nowrap' | 'wrap';

interface RowProps {
  align?: Alignment;
  backgroundImage?: FluidObject | FluidObject[];
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  display?: string;
  direction?: FlexDirection;
  element: any; // the string of a HTML element
  justify?: Justify;
  withContainer?: boolean;
  wrap?: Wrap | Wrap[];
  [key: string]: any;
}

export const Row = ({
  align,
  animated,
  backgroundImage,
  children,
  className,
  containerClassName,
  direction,
  display,
  element,
  justify,
  withContainer,
  wrap,
  ...rest
}: RowProps) => {
  const Element = element;

  return (
    <Element
      className={cx(
        styles.root,
        align && styles[`align${capitalise(align)}`],
        display && styles[`display${capitalise(display)}`],
        direction && styles[`direction${capitalise(direction)}`],
        wrap && styles[wrap],
        justify && styles[`justify${capitalise(justify)}`],
        className
      )}
      {...rest}>
      {backgroundImage && (
        <div className={styles.backgroundImageContainer}>
          <Img className={styles.backgroundImage} fluid={backgroundImage} />
        </div>
      )}
      {withContainer ? (
        <div
          className={cx(
            styles.container,
            {
              [styles[`align${capitalise(align)}`]]: align && align,
              [styles[`direction${capitalise(direction)}`]]: display && display,
              [styles[`justify${capitalise(justify)}`]]: justify && justify,
            },
            containerClassName
          )}>
          {children}
        </div>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Element>
  );
};
