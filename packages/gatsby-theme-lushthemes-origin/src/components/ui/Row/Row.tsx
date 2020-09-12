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
  align?: Alignment | Alignment[];
  backgroundImage?: FluidObject | FluidObject[];
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  display?: string;
  direction: FlexDirection | FlexDirection[];
  element: any; // the string of a HTML element
  justify?: Justify | Justify[];
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
        {
          [styles[`align${capitalise(align)}`]]: align,
          [styles[`display${capitalise(display)}`]]: display,
          [styles[`direction${capitalise(direction)}`]]: direction,
          [styles[wrap]]: wrap,
          [styles[`justify${capitalise(justify)}`]]: justify,
        },
        className
      )}
      {...rest}>
      {backgroundImage && (
        <div className={styles.backgroundImage}>
          <Img fluid={backgroundImage} sx={{ height: '100%' }} />
        </div>
      )}
      {withContainer ? (
        <div
          className={cx(
            styles.container,
            {
              [styles[`align${capitalise(align)}`]]: align,
              [styles[`direction${capitalise(direction)}`]]: direction,
              [styles[`justify${capitalise(justify)}`]]: justify,
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
