/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';

type FlexDirection = 'column' | 'row';

interface RowProps {
  children: ReactNode;
  containerClassName?: string;
  direction: FlexDirection | FlexDirection[];
  element: any; // the string of a HTML element
  withContainer?: boolean;
}

const Row = ({
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
            display: 'flex',
            flexDirection: direction,
            maxWidth: [550, 690, 1120],
            width: '100%',
            mx: 'auto',
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
