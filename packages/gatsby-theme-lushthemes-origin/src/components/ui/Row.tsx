/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, ReactNode } from 'react';

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
      }}
      {...rest}>
      {withContainer ? (
        <div
          sx={{
            alignItems: align,
            display: 'flex',
            flexDirection: direction,
            maxWidth: [584, 722, 1232],
            mx: 'auto',
            px: [2, 4, 5],
            width: '100%',
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
