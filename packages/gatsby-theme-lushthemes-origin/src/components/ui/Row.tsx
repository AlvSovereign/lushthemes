/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, ReactNode } from 'react';
import Img, { FluidObject } from 'gatsby-image';

type Alignment = 'center' | 'end' | 'inherit' | 'flex-start';
type FlexDirection = 'column' | 'row';
type Justify =
  | 'center'
  | 'inherit'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'start';
type Wrap = 'nowrap' | 'wrap';

interface RowProps {
  align?: Alignment | Alignment[];
  backgroundImage: FluidObject | FluidObject[];
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

const Row = ({
  align,
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
      className={className}
      sx={{
        alignItems: align,
        display: display || align || direction || justify ? 'flex' : 'inherit',
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justify,
        position: 'relative',
      }}
      {...rest}>
      {backgroundImage && (
        <div
          sx={{
            bottom: 0,
            height: '100%',
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            width: '100%',
            zIndex: 1,
          }}>
          <Img fluid={backgroundImage} sx={{ height: '100%' }} />
        </div>
      )}
      {withContainer ? (
        <div
          sx={{
            alignItems: align,
            display: 'flex',
            flexDirection: direction,
            justifyContent: justify,
            maxWidth: [584, 722, 1232],
            mx: 'auto',
            px: [2, 4, 5],
            width: '100%',
            zIndex: 9,
          }}>
          {children}
        </div>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Element>
  );
};

export default Row;
