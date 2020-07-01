/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';

type FlexDirection = 'column' | 'row';
type Alignment = 'center' | 'end' | 'inherit' | 'start';

interface RowProps {
  align?: Alignment | Alignment[];
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  direction: FlexDirection | FlexDirection[];
  element: any; // the string of a HTML element
  withContainer?: boolean;
}

const Row = ({
  align,
  children,
  className,
  containerClassName,
  direction,
  element,
  withContainer,
  ...rest
}: RowProps) => {
  const Element = element;

  return (
    <Element className={className} {...rest}>
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
