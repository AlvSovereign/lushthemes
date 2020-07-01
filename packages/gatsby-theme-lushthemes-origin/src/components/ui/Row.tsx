/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';

type FlexDirection = 'column' | 'row';
type Alignment = 'center' | 'end' | 'inherit' | 'start';

interface RowProps {
  align?: Alignment | Alignment[];
  children: ReactNode;
  containerClassName?: string;
  direction: FlexDirection | FlexDirection[];
  element: any; // the string of a HTML element
  withContainer?: boolean;
}

const Row = ({
  align,
  children,
  containerClassName,
  direction,
  element,
  withContainer,
  ...rest
}: RowProps) => {
  const Element = element;

  return (
    <Element {...rest}>
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
        <>{children}</>
      )}
    </Element>
  );
};

export default Row;
