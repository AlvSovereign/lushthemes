/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, ReactNode } from 'react';

type Alignment = 'center' | 'end' | 'inherit' | 'start';
type FlexDirection = 'column' | 'row';
type Justify = 'around' | 'between' | 'center' | 'inherit' | 'start';

interface RowProps {
  align?: Alignment | Alignment[];
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  direction: FlexDirection | FlexDirection[];
  element: any; // the string of a HTML element
  justify?: Justify | Justify[];
  withContainer?: boolean;
}

const Row = ({
  align,
  children,
  className,
  containerClassName,
  direction,
  element,
  justify,
  withContainer,
  ...rest
}: RowProps) => {
  const Element = element;

  return (
    <Element
      className={className}
      sx={{ display: align || direction || justify ? 'flex' : 'inherit' }}
      {...rest}>
      {withContainer ? (
        <div
          sx={{
            alignItems: align,
            display: 'flex',
            flexDirection: direction,
            maxWidth: [566, 722, 1168],
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
